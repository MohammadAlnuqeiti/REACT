import React from "react";
import Picture2 from "./image/civil engineering.jpg";
import Picture3 from "./image/Mechanical Engineering.jpg";
import Picture4 from "./image/electrical engineering..jpg";

class Section3 extends React.Component{
    render(){
        return(
            <div>
 <section className="category">
          <h2 className="title"><span style={{color: '#FF0000'}}>Explore </span> top courses</h2>
          <div className="category-body">
            <div className="category-card">
              <a href="./shop.html"><img src={Picture2} alt="" /></a>
              <div className="intro">
                <h2>Civil Engineering</h2>
                <p>The Complete Basic Electricity &amp; Electronics Course</p>
              </div>
            </div>
            <div className="category-card">
              <img src={Picture3} alt="" />
              <div className="intro">
                <h2>Mechanical Engineering</h2>
                <p>The Complete Basic Electricity &amp; Electronics Course</p>
              </div>
            </div>
            <div className="category-card">
              <img src={Picture4} alt="" />
              <div className="intro">
                <h2>Electrical Engineering</h2>
                <p>The Complete Basic Electricity &amp; Electronics Course</p>
              </div>
            </div>
          </div>
        </section>
            </div>
        )
    }
}


export default Section3