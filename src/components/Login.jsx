// LoginForm.js
import React, { useState } from 'react';
import './Login.css'
const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "abc@mail.com" && password === "password123") {
      onLogin(true);
    } else {
      alert("Invalid email or password");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='login-div'>
      <h1 className='h-1'>Login Form</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3 div-block">
        <label id='div-input'>Email Address</label>
        <input name="email" onChange={handleChange} value={email} type="email"  className="input-m form-control" required />
      </div>
      <div className="mb-3 div-block">
        <label id='div-input'>Password</label>
        <input name="password" onChange={handleChange} type="password" value={password} className="input-m  form-control" required />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Login;
