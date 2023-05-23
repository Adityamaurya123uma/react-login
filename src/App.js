import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [currentPage, setcurrentPage] = useState("login");

  const toggleForm = (formname) => {
    setcurrentPage(formname);
  };

  return (
    <>
      <div>
        {
          currentPage === "login" ? 
          <Login onFormSwitch={toggleForm}/> : 
          <Register onFormSwitch={toggleForm}/>
        }
      </div>
    </>
  );
}

export default App;
