import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="name"
          placeholder="youremail@gmail.com"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="**********"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here!
      </button>
    </>
  );
};

export default Register;
