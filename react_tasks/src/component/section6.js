import React from "react";


class Section6 extends React.Component{
    render(){
        return(
            <div>
                <section id="feature">
                <div className="container">
                    <div id="featurecard">
                    <img src={require("./image/certificates.png")} alt="" />
                    <div className="body">
                        <h4>Certified certificates</h4>
                        <p>To enhance your chances of launching or developing your career.<br /></p>
                    </div>
                    </div>
                    <div id="featurecard">
                    <img src={require("./image/Highquality.png")} alt="" />
                    <div className="body">
                        <h4>High quality content</h4>
                        <p>Acquire the skills required in the labor market with a selection of the best experts and trainers.</p>
                    </div>
                    </div>
                    <div id="featurecard">
                    <img src={require("./image/Flexiblelearning.png")} alt="" />
                    <div className="body">
                        <h4>Flexible learning</h4>
                        <p>Learn wherever you are and at any time, via your personal computer or mobile phone.</p>
                    </div>
                    </div>
                    <div id="featurecard">
                    <img src={require("./image/Efficienttrainers.png")} alt="" />
                    <div className="body">
                        <h4>Efficient trainers</h4>
                        <p>Learn with the most qualified trainers to hone your professional and practical skills.</p>
                    </div>
                    </div>
                    <div id="featurecard">
                    <img src={require("./image/Professionalreadiness.png")} alt="" />
                    <div className="body">
                        <h4>Professional readiness</h4>
                        <p>Stand out in the job market with your skills and passion for learning and development.</p>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}


export default Section6