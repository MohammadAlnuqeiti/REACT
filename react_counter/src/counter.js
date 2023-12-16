import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class Counter extends React.Component{

    // state = {
    //     value:this.props.counter.value
    // };

    // handleIncrement = (productId) => {
    //     this.setState({
    //         value:this.state.value+1
    //     })
    // }

    render(){

        return(
            <div>

            <span className={this.getbadgeClasses()}>{this.formatCount()}</span>

            <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            {/* <button onClick={()=> this.handleIncrement()} className="btn btn-secondary btn-sm">Increment</button> */}
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">delete</button>
            
            </div>

        )
    }
    getbadgeClasses(){
        let classes = "btn sm m-1 btn-";
        classes += this.props.counter.value===0 ? "warning" : "primary";
        return classes
    }
    formatCount(){
        const {value} = this.props.counter;
        return value ===0 ? <p>Zero</p> : value;
    }
}

export default Counter