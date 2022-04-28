import React from 'react'
import { useState } from 'react';
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import logo from "../images/ologo.png"

const Navbar = () => {
    const[isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
  return (
    <div className={isScrolled ? "hNavbar scrolled" : "hNavbar"}>
        <div className='hContainer'>
            <div className='left'>
                <img src={logo} />
                <span>Latest</span>
                <span>Trending</span>
                <span>abc</span>
                <span>abc</span>
                <span>abc</span>
            </div>
            <div className='right'>
                <Search className='icon' />
                <span>abc</span>
                <Notifications className='icon' />
                <img src='https://www.pngitem.com/pimgs/m/514-5149286_profile-logo-hd-png-download.png' alt='' />
                <div className='profile'>
                    <ArrowDropDown className='icon' />
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar