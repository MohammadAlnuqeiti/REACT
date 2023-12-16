import React from "react";

class About extends React.Component{

    render(){
        return(

            <>

                <section>
                    <section className="main2" id="about me">
                    <img src={require("./icon/Programming-amico.png")} alt="programing" className="main2-img" />
                    <div id="section2">
                        <h2>About me</h2>
                        <p>
                        Civil engineer seeking a position as a full stack web developer skilled with logical thinking , database management skills and mathematical problem solving has work experience in civil engineering field . Sound knowledge in HTML,CSS,Javascript,PHP,Database,Laravel,Drupal and Redux.Witty with basic computer skills looking to achieve all mentioned qualities in the position i take.
                        </p>  
                    </div>
                    </section><br/>
                </section>
                
            </>

        )
    }

}

export default About