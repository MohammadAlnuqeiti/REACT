import React,{Component} from "react";

class Person extends Component{
    // constructor(props) {
        //     super(props);
        //   }
        render(){
        const style={
            color:'red',
        }
        return(
            <div>
                <h2 style={{...style, fontSize : '25px'}}>hello, react! my name is {this.props.name}</h2>
            </div>
        )
    }

}

export default Person