import axios from "axios";
import React, { useState } from "react";
import "./home.css";
import Swal from "sweetalert2";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/data", obj)
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
      <div className="form-main">
        <div className="form-logo"></div>
        <div className="signup-text-main">
          <form onSubmit={handlesubmit} className="form-main">
            <div className="input-main">
            <h1>Create Your DJI Account</h1>
            <label>Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <label>E-mail</label>
            <br />
            <input
              type="E-mail"
              placeholder="Enter Your E-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
