import React from "react";
import { Link,NavLink } from "react-router-dom";
import './header.css';
class Header extends React.Component{
    render(){
        return(
            <div>
 
                    <header className="header"> 
                    <a href="./index.html">
                        <img id="logo" src={require("./image/logo.png")} alt="" />
                    </a>
                    <div style={{width: '90%'}}>
                        <form id="form" className="form">
                        <input type="search" placeholder="Search..." required className="search" />
                        <input type="button" defaultValue="Search" className="button" />
                        </form>
                    </div>
                    <div className="navbar">
                        <ul className="nav-menu">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link to="SECTION2" className="nav-link">SECTION2</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="SECTION3" className="nav-link">SECTION3</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="SECTION4" className="nav-link">SECTION4</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="SECTION5" className="nav-link">SECTION5</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="BLOG" className="nav-link">BLOG</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="SECTION6"><button id="btn-nav" className="nav-link">SECTION6</button></Link>
                        </li>
                        </ul>
                        <div className="hamburger">
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                        </div>
                    </div>
                    </header>
                    <header id="hidden" className="header">
                    <div style={{width: '90%'}}>
                        <form id="form">
                        <input type="search" placeholder="Search..." required className="search" />
                        <input type="button" defaultValue="Search" className="button" />
                        </form>
                    </div>
                    </header>

            </div>
        )
    }
}

export default Header