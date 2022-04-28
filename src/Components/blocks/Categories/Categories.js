import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "./Categories.css"
import { faS } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Categories = () => {
  return (
    <div className="main-wrapper">
        <Navbar />
        <div className="container-main">
            <div className="container">
                <div className="one">
                    <figure className="back">
                        <h3 className="ch3">Sports</h3>
                        <Link to={'/subcategories'}><i className="fas fa-sign-in-alt"></i></Link>
                    </figure>
                    <img src="https://t4.ftcdn.net/jpg/03/02/12/83/360_F_302128359_q6aCwgAvdYZBPF4XSwxXddLPE0h3Kor1.jpg" alt="" />
                </div>
                <div className="two">
                    <figure className="back">
                        <h3 className="ch3">Politics</h3>
                        <i className="fa fa-sign-in-alt"></i>
                    </figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Hx3uxRanl5wQOueU7KwDr0iMK68B4lZb1w&usqp=CAU" alt="" />
                </div>
                <div className="three">
                    <figure className="back">
                        <h3 className="ch3">Entertainment</h3>
                        <i className="fas fa-sign-in-alt"></i>
                    </figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfb6WpcW-LHIvxv3r1liZ8k9aAHCBN2tI3Hg&usqp=CAU" alt="" />
                </div>
                <div className="four">
                    <figure className="back">
                        <h3 className="ch3">Life</h3>
                        <i className="fas fa-sign-in-alt"></i>
                    </figure>
                    <img src="https://th.bing.com/th/id/OIP.Pem_PwHdY5Bl4fg7HqfqOwAAAA?pid=ImgDet&rs=1" alt="" />
                </div>
                <div className="five">
                    <figure className="back">
                        <h3 className="ch3">Science</h3>
                        <i className="fas fa-sign-in-alt"></i>
                    </figure>
                    <img src="https://media.istockphoto.com/vectors/chemical-logo-for-science-or-research-vector-id1056303534?k=20&m=1056303534&s=170667a&w=0&h=nPKe6IgQyI9Mhj2ErVIgeSdXUm_Mb1tcTyhW03qHV9A=" alt="" />
                </div>
                <div className="six">
                    <figure className="back">
                        <h3 className="ch3">Weather</h3>
                        <i className="fas fa-sign-in-alt"></i>
                    </figure>
                    <img src="https://th.bing.com/th/id/OIP.vXZ3Y9AMv9xp7d6LhQV6GAHaHa?pid=ImgDet&rs=1" alt="" />
                </div>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
    
  )
}

export default Categories