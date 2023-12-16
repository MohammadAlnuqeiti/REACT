import React from "react";

class Header extends React.Component{

    render(){
        return(

            <>

                <header>
                <img src={require("./icon/logo1.png")} alt="" className="logo" />
                <nav className="nav1 no-dropdown">
                    <a href="#about me">ABOUT ME</a>
                    <a href="#education">EDUCATION</a>
                    <a href="#experience">EXPERIANCE</a>
                    <a href="#project">MY PROJECT</a>
                    <a href="#contact_me">CONTACT ME</a>
                </nav>
                <nav className="nav1 dropdown">
                    <button className="dropbtn"><i className="fa-solid fa-list" /></button>
                    <div className="drop-content">
                    <a href="#about me">ABOUT ME</a>
                    <a href="#education">EDUCATION</a>
                    <a href="#experience">EXPERIANCE</a>
                    <a href="#project">MY PROJECT</a>
                    <a href="#contact_me">CONTACT ME</a>
                    </div>
                </nav> 
                </header>

            </>

        )
    }

}

export default Header