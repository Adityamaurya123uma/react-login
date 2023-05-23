import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> Email </label>{" "}
        <input
          id="email"
          name="email"
          type="email"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <label htmlFor="password"> Password </label>{" "}
        <input
          id="password"
          name="password"
          type="password"
          placeholder="**********"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />{" "}
        <button type="submit"> Login </button>{" "}
      </form>{" "}
      <button onClick={() => props.onFormSwitch("register")}>
        Don 't have an account? Register here!
      </button>
    </>
  );
};

export default Login;
