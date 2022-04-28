/* eslint-disable no-restricted-globals */
import React from 'react'
import "./login.scss";
import logo from "../images/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    let navigate = useNavigate();
    const onSubmit = async(e) =>{
        e.preventDefault()
        const res = await axios.post('http://localhost:5000/login' ,{
            email: email,
            pass : pass
        })
        console.log("res",res && res.data && res.data)
        if(res && res.data && res.data.users && res.data.users == 1){
            localStorage.setItem("fname",res.data.fname)
            navigate("/a2", {replace:true})
        }
    }

  return (
    <div className='logp'>
        <div className='logtop'>
            <div className='logp-wrapper'>
                <img src={logo} className='logo' alt="" />
            </div>
        </div>
        <div className='logp-container'>
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
                <button className='loginButton' onClick={onSubmit}>Sign In</button>
                <span>
                    New To News Portal Application? <b><Link to={"/landpage"}>Sign up now</Link></b>
                </span>
            </form>
        </div>
    </div>
  )
}

