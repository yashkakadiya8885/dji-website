import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducer } from "../Redux/Reducer";
import axios from "axios";
import { userLogin } from "../Redux/Action";
import Swal from "sweetalert2";
import './home.css';

const Login = ({setToggellogin,togellogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const val = useSelector((store) => reducer);
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api-0aa9.onrender.com/data?email=${email}`)
    .then((res) => {
      console.log(res.data);
      dispatch(userLogin(res.data[0]));
      if (res.data.length > 0) {
        if (res.data[0].email && res.data[0].password == password) {
          Swal.fire("You are Login Successfully!");
        }else{
          Swal.fire("Password wrong")
        } 
      }else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "You are not registered! please Signup",
        });
      }
    })
    .catch((err)=>{
        console.log(err);
    })
  };
  return <div className="log-main">
    <form className="login-main" onSubmit={handlesubmit}>
        <div className="l-title">E-mail</div>
        <input type="email" placeholder="E-maic ID" onChange={(e)=>setEmail(e.target.value)} /><br/>
        <div className="l-title">Password</div>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><br/>
        <input type="submit" value="Login" />
        <p>You have not Account?
              <span onClick={()=>setToggellogin(!togellogin)}>Signup</span>
            </p>
    </form>
  </div>;
};

export default Login;
