import React, { useState } from "react";
import Footer from "../footer/Footer";
import "./Landpage.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png"

const Landpage = () => {
  const [email, setEmail] = useState("");
  function HandleSubmit(e) {
    const email = document.getElementById("email").value;
    if(!email) {
        e.preventDefault()
        alert('Please enter e-mail!')
        return
    }
    localStorage.setItem("E-mail", email);
    return;
  }
  return (
    <div className="lpbody">
      <div className="lpnavbar">
        <li className="lplogo">
          <img
            src={logo}
            alt=""
          />
        </li>
        <li className="lpbutton"><Link to={'/login'}>Sign In</Link></li>
      </div>
      <div className="lpmain">
        <div className="lparea">
          <h1>
            Read your favorite News <br />
            from your favorite Channels.
          </h1>
          <br />
          <h3>Read anywhere, anytime.</h3>
          <br />
          <br />
          <h4>Ready to read? Enter your email to create your account.</h4>
          <form action="Signup.js" method="GET" className="lpsearch">
            <input
              type="email"
              id="email"
              name="email"
              className="lpbox"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <Link to={`/signup/${email}`} className="lptry" onClick={HandleSubmit}>
              <button type="submit" className="lptry">
                Get Started <i className="fas fa-chevron-right"></i>
              </button>
            </Link>
          </form>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Landpage;
