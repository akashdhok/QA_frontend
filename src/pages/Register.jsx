import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = "http://192.168.29.89:7867/api/user/register";
      let res = await axios.post(api, data);
      console.log(res);
      alert("Registration Successful");
    } catch (error) {
      alert("Registration Failed");
      console.log(error);
    }
  };

  // 🔹 GOOGLE REGISTER ONLY
  const handleGoogleRegister = async (res) => {
    try {
      const googleToken = res.credential;

      await axios.post(
        "http://192.168.29.89:7867/api/user/google-register",
        { token: googleToken }
      );

      alert("Registered successfully with Google 🎉");
    } catch (err) {
      alert(err?.response?.data?.message || "Google registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <p>Join us and start your journey</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              required
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
        <div style={{ margin: "20px 0", textAlign: "center" }}>OR</div>

       
        <GoogleLogin
          onSuccess={handleGoogleRegister}
          onError={() => alert("Google Registration Failed")}
          text="signup_with"
        />

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
