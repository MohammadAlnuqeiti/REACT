import React from "react";

class LandPage extends React.Component{

    render(){
        return(

            <>
                     <section className="main">
        <div id="section">
          <h1>Mohammad Ali Alnuqeiti</h1>
          <h2>Full Stack Developer</h2>
          <p className="quets"><em>“Every problem is a gift—without problems we would not grow.”<span>Anthony Robbins</span></em></p>
          <a href="./icon/CV Mohammad Alnuqeiti.pdf" className="btn-main" target="_blank">Download Cv</a>
          <div className="ico-main">
            <a href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-solid fa-envelope" /></a>
            <a href="#phone"><i className="fa-solid fa-square-phone" /></a>
            <a href="https://www.linkedin.com/in/mohammad-alnuqeiti-1954b1251/"><i className="fa-brands fa-linkedin" /></a>
            <a href="https://github.com/MohammadAlnuqeiti"><i className="fa-brands fa-square-github" /></a>
          </div>
        </div>
        <div>
          <img src={require("./icon/1e2f0a56-1402-4b7e-85bf-acaa3465c0b4.jpg")} alt="my_picture" id="img-main1" />
        </div>
      </section>
            </>

        )
    }

}

export default LandPage