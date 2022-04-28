import React from "react";
import Navbar from "../../navbar/Navbar"
import Footer from "../../footer/Footer"
import "./Subcategories.css"
import { faS } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Subcategories = () => {
  return (
    <div className="scmain-wrapper">
        <Navbar />
        <div className="sccontainer-main">
            <div className="sccontainer">
                <div className="one">
                    <figure className="back">
                        <h3 className="sch3">Soccer/Football</h3>
                        <Link to={'/channel'}><i className="fas fa-sign-in-alt" /></Link>
                    </figure>
                    <img src="https://img.freepik.com/free-vector/football-soccer-logo-design-template_142989-485.jpg?size=338&ext=jpg" alt="" />
                </div>
                <div className="two">
                    <figure className="back">
                        <h3 className="sch3">Basketball</h3>
                        <i className="fas fa-sign-in-alt"></i>
                    </figure>
                    <img src="https://wallpaperaccess.com/full/4473750.jpg" alt="" />
                </div>
                <div className="three">
                    <figure className="back">
                        <h3 className="sch3">Cricket</h3>
                        <i className="fas fa-sign-in-alt"></i>
                    </figure>
                    <img src="https://st2.depositphotos.com/1001941/6336/v/950/depositphotos_63363477-stock-illustration-cricket-sports-concept-with-bats.jpg" alt="" />
                </div>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
    
  )
}

export default Subcategories