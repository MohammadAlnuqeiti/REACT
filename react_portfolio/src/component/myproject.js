import React from "react";
import { project } from "./data";


class MyProject extends React.Component{

    render(){
        return(

            <>

            <section className="main5" id="project">
                <h2>My Project</h2>
                <div className="container">

                {project.map((ele,index)=>(

                <div className="project-card" key={index}>
                    <div className="img-card">
                    <img src={ele.image} alt="coding" className="aqaba-doctor" />
                    </div>
                    <div className="info-card">
                    <h3>{ele.title}</h3>
                    <p>{ele.description}</p>
                    <a href={ele.href}  className="link-project" target="_blank">show project</a>
                    </div>
                </div>
                ))}
                {/* <div className="project-card">
                    <div className="img-card">
                    <img src="./icon/portfolio.png" alt="coding" />
                    </div>
                    <div className="info-card">
                    <h3>Mohammad Alnuqeiti Portfolio</h3>
                    <p>Create a portfolio contain is a compilation of<br /> skills, qualifications, education,<br /> training and experiences for mine.</p>
                    <a href="file:///C:/Users/OCA'S/second_project/index.html"  className="link-project">show project</a>
                    </div>
                </div> */}
                {/* <div className="project-card">
                    <div className="img-card">
                    <img src="./icon/Hand coding-pana.png" alt="coding" />
                    </div>
                    <div className="info-card">
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet.<br />Lorem ipsum dolor sit amet.</p>
                    <a href="./#" className="link-project">show project</a>
                    </div>
                </div> */}
                </div>
            </section>
                
            </>

        )
    }

}

export default MyProject