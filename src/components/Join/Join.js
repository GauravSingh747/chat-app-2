import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/phtoto.png";
import { Link } from "react-router-dom";

let user;
const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};

const Join = () => {
  const [name, setName] = useState("");

  return (
    <div className="joinPage">
      <div className="JoinContainer">
        <img src={logo} type="logo-img"></img>
        <h1>Online Chat App</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Email Address or Name"
          type="text"
          id="joinInput"
        />
        <Link
          onClick={(event) => (!name ? event.preventDefault() : null)}
          to="/chat"
        >
          <button onClick={sendUser} className="joinbtn">
            Log-in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
