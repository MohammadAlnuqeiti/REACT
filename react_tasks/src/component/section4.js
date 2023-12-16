import React from "react";
import { Link, Outlet } from "react-router-dom";


class Section4 extends React.Component{
    render(){
        return(
            <div>
                    <section id="sectionfour">
                    <h1> Master key skills with<br />......... specializations</h1>
                    <p>"Develop a specific career skill through a series of related<br /> courses and hands-on projects. Put theory into practice<br /> and earn a Specialization Certificate to add to your CV."</p>
                    <Link to="/SECTION4/create" className="btn">create courses</Link>
                    <Link to="/SECTION4/edit" className="btn">edit courses</Link>
                    </section>
                    <section>
                        <Outlet/>
                    </section>
            </div>
        )
    }
}


export default Section4