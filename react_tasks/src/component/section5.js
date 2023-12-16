import React from "react";

import Picture5 from "./image/coach.jpg";

class Section5 extends React.Component{
    render(){
        return(
                    <div>
                <section id="coaches">
                <h2>Our distinguished staff</h2>
                <div className="container coach-slider">
                    <div id="coachcard">
                    <img src={Picture5} alt="" />
                    <div className="body">
                        <h4>Mohammad Alnuqeiti</h4>
                        <p>Bachelor of Civil Engineering</p>
                    </div>
                    </div>
                    <div id="coachcard">
                    <img src={require('./image/coach.jpg')} alt="" />
                    <div className="body">
                        <h4>Mohammad Alnuqeiti</h4>
                        <p>Bachelor of Civil Engineering</p>
                    </div>
                    </div>
                    <div id="coachcard">
                    <img src={require('./image/coach.jpg')} alt="" />
                    <div className="body">
                        <h4>Mohammad Alnuqeiti</h4>
                        <p>Bachelor of Civil Engineering</p>
                    </div>
                    </div>
                    <div id="coachcard">
                    <img src={require('./image/coach.jpg')} alt="" />
                    <div className="body">
                        <h4>Mohammad Alnuqeiti</h4>
                        <p>Bachelor of Civil Engineering</p>
                    </div>
                    </div>
                    <div id="coachcard">
                    <img src={require('./image/coach.jpg')} alt="" />
                    <div className="body">
                        <h4>Mohammad Alnuqeiti</h4>
                        <p>Bachelor of Civil Engineering</p>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}


export default Section5