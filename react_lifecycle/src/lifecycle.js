import React from "react";


class LifeCycle extends React.Component{
    constructor(props){
        // console.log('Constructor')
        super(props)
        this.state={
            counter:0
        }
        this.incremant = ()=> this.setState({counter: this.state.counter+1})
        this.decremant = ()=> this.setState({counter: this.state.counter-1})
    }
    componentDidMount(){
        console.log('Component did mount')
        console.log('-------------------')
    }

    
    render(){
        // console.log('Render')
        return <div>
            <button onClick={this.incremant}>Incremant</button>
            <button onClick={this.decremant}>Decremant</button>
            <div>
                Counter : {this.state.counter}
            </div>
        </div>
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Component did Update');
        console.log('--------------------');
    }


}

export default LifeCycle