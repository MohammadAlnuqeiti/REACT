import React from "react";
import {FaFacebook,FaLinkedin,FaEnvelope,FaPhone,FaTwitter} from 'react-icons/fa';
// import {BsFacebook} from 'react-icons/FaBeer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';



class Footer extends React.Component{
    render(){
        return(

      <div>
        {/* Scroll to top */}
        <span className="up"> <i className="fa-solid fa-up-long" /></span>
        {/* Scroll to top */}
        <footer className="footer">
          <div className="cont_footer">
            <div className="row_footer">
              <div className="col_footer">
                <h4> Company </h4>
                <ul>
                  <li><a href="./index.html"> Home</a></li>
                  <li><a href="./about.html"> About Us</a></li>
                  <li><a href="./contact.html"> Contact Us</a></li>
                </ul>
              </div>
              <div className="col_footer">
                <h4> Quick Links </h4>
                <ul>
                  <li><a href="./login.html"> Login</a></li>
                  <li><a href="./registerPage.html"> Register</a></li>
                  <li><a href="./shop.html"> Shop Now </a></li>
                </ul>
              </div>
              <div className="col_footer">
                <h4> Courses </h4>
                <div className="time_footer">
                  <ul>
                    <li><a href="./shop.html"> All Courses</a></li>
                    <li><a href="./#"> Civil Engineering </a></li>
                    <li><a href="./#"> Electrical Engineering </a></li>
                  </ul>
                </div>
              </div>
              <div className="col_footer">
                <h4> Follow Us </h4>
                <div className="socail_footer">  
                {/* <FontAwesomeIcon icon={solid('user-secret')} />
                <FontAwesomeIcon icon={regular('coffee')} />
                <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
                <FontAwesomeIcon icon={brands('twitter')} /> */}
                <a href="./#"><FaFacebook className="icon"/></a>
                <a href="./#"><FaPhone className="icon"/></a>
                <a href="./#"><FaEnvelope className="icon"/></a>
                <a href="./#"><FaLinkedin className="icon"/></a>
                <a href="./#"><FaTwitter className="icon"/></a>
                {/* <a href="#"><BsFacebook className="icon"/></a> */}
                  {/* <a href="#"><i className="fa-brands fa-facebook" /> </a>
                  <a href="#"><i className="fa-solid fa-square-phone" /></a>
                  <a href="#"><i className="fa-solid fa-envelope"> </i></a>
                  <a href="#"><i className="fa-brands fa-linkedin"> </i></a> */}
                </div>
                <div className="qouat_footer">
                  <p> <span>Nuqeiti For Training . </span> Develop a specific career skill through a series of related
                    courses and hands-on projects. Put theory into practice
                    and earn a Specialization Certificate to add to your CV.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-botoom">
          <p> Copyright © 2023 <span>Nuqeiti For Training </span> . designed by <span> Mohammad Al-nuqeiti </span> </p>
        </div>

            </div>
        )
    }
}
export default Footer