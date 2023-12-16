import React from "react";
import { education } from "./data";

class Education extends React.Component{

    render(){
        return(

            <>

            <section className="main3" id="education">
                <h2>Education</h2>
                <div className="container3">

                    {education.map((ele,index)=>(
                        
                <div className="education-card" key={index}>
                    <div className="img-card" >
                    <img src={ele.image} alt="coding" />
                    </div>
                    <div className="info-card">
                    <h3>{ele.title}</h3>
                    <p>{ele.description}</p>
                    <p>{ele.address}</p>
                    <p>{ele.date}</p>
                    </div>
                </div>
                    ))}
            
                </div>
            </section>
                
            </>

        )
    }

}

export default Education