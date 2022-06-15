import React, { useState } from "react";
import axios from "axios";
import './style.css';
import { Link } from "react-router-dom";

export default function Login() {
  const API_URL = "https://api.shilpimultiplex.com/api/Auth/";

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  function Login(event) {
    let item = {phoneNumber, password};
    //console.log(item);
    event.preventDefault();

    axios.post(API_URL + "Authenticate", item).then((result) => {
      console.log(result);
    });
  }

  return (
    <div className="body1">
      <section id="sec">
      <form>
        <h5>Sign In</h5>
        <div>
          <label>Phone Number</label>
          <div>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <Link to="/"><button type="submit" onClick={Login}>
          Sign in
        </button></Link>
      </form>
      </section>
    </div>
  );
}
