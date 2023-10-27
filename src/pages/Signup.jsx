import axios from "axios";
import React, { useState } from "react";
import "./home.css";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

const Signup = ({setToggellogin,togellogin}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch =useDispatch()
  const handlesubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post("https://api-0aa9.onrender.com/data", obj)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "You are Signup Successfully!!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signup-main">
        <div className="signup-text-main" onSubmit={handlesubmit}>
          <form onSubmit={handlesubmit} className="form-main">
            <div className="input-main">
            <h1 className="title">Create Your DJI Account</h1>
            <div className="input-heading">Name</div>
            <br />
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <div className="input-heading">E-mail</div>
            <br />
            <input
              type="E-mail"
              placeholder="Enter Your E-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <div className="input-heading">Password</div>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <input type="submit" value="Signup" className="s-btn" />
            </div>
            <p className="toggel">You have Already Account?
              <span onClick={()=>setToggellogin(!togellogin)}>Login</span>
            </p>
          </form>
        </div>
      </div>
  );
};

export default Signup;
