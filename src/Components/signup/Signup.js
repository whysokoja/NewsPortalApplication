import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import "./Signup.scss";
import logo from "../images/ologo.png"
import axios from "axios";

window.addEventListener('load', () => {
    const email = localStorage.getItem('E-mail');
})

const Signup = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  //const [image, setImage] = useState("")
  useEffect(()=>{
    setEmail(localStorage.getItem('E-mail'));
  },[])
  let navigate = useNavigate();
  let params = useParams()
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem('E-mail')
    navigate("/categories", {replace: true})
    const res = await axios.post("http://localhost:5000/register",{
      fname: fname,
      lname: lname,
      email: email,
      pass: pass,
      phoneNumber: phoneNumber,
      //imageLink: imageLink
  })
}
  return (
    <div className="subody">
      <div className="sunavbar">
        <li className="sulogo">
          <img
            src={logo}
            alt=""
          />
        </li>
        <li className="subutton"><Link to={'/login'}>Sign In</Link></li>
      </div>
      <div className='sulogin'>
        <div className='sulogin-container'>
            <form>
                <h1>Welcome back!<br/>Joining NPA is easy.</h1>
                <br/>
                <h3>Enter your password and you'll be reading in no time.</h3>
                <div>
                    <ul>
                        <li>
                            <div>Email</div>
                            <div>{email}</div>
                        </li>
                        <br/>
                        <li>
                            <div>First Name</div>
                            <div><input type={"text"} placeholder="Enter your first name" value={fname} onChange={(e)=> setFname(e.target.value)} required></input></div>
                        </li>
                        <br/>
                        <li>
                            <div>Last Name</div>
                            <div><input type={"text"} placeholder="Enter your last name" value={lname} onChange={(e)=> setLname(e.target.value)} required></input></div>
                        </li>
                        <br/>
                        <li>
                            <div>Phone Number</div>
                            <div><input type={"text"} placeholder="XXXX-XXXX-XXX" pattern="[0-9]{11}" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} required></input></div>
                        </li>
                        <br/>
                        <li><input type="password" placeholder='Password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" value={pass} onChange={(e)=> setPass(e.target.value)} required/></li>
                    </ul>
                    <br/>
                </div>
                <button onClick={onSubmit} className='loginButton'>Next</button>
            </form>
        </div>
    </div>
    <Footer />
    </div>
  );
};

export default Signup;
