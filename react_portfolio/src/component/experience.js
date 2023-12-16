import React from "react";
import {FaBriefcase} from 'react-icons/fa';

import { experience } from "./data";

class Experience extends React.Component{

    render(){
        return(

            <>

            <section className="main4" id="experience">
                <h2>Experience</h2>
                <div className="container4">
                {experience.map((ele,index)=>(

                <div className="experiance-card" key={index}>
                    <div className="img-card">
                    <i className="fa-solid fa-briefcase" />

                    {/* <FaBriefcase className="icon"/> */}
                    </div>
                    <div className="info-card">
                    <h3>{ele.title}</h3>
                    <p>{ele.description}</p>
                    </div>
                </div>
                ))}
                {/* <div className="experiance-card">
                    <div className="img-card">
                    <i className="fa-solid fa-briefcase" />
                    </div>
                    <div className="info-card">
                    <h3>Contracting Engineer</h3>
                    <p>worked as an execution engineer on <br />a commercial complex <br /> construction project.</p>
                    </div>
                </div>
                <div className="experiance-card">
                    <div className="img-card">
                    <i className="fa-solid fa-briefcase" />
                    </div>
                    <div className="info-card">
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum sit dolor sit loram amet.<br />Lorem ipsum dolor sit loram amet. <br /> Lorem ipsum.</p>
                    </div>
                </div> */}
                </div>
            </section>
                
            </>

        )
    }

}

export default Experience