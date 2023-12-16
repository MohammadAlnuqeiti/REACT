import React, { Component } from 'react'

export class Home extends Component {


    // Second Thing Running
    constructor(){
        super();
        console.log("Constructor")
        this.state = {
            count : 0
        }
        console.log(this.state ,"this.state ");

    }



    // First Thing Running
    // state = {
    //     xx : console.log('Check'),
    //     mm : "Test"
    // }


    // Fourth Thing Running
    componentDidMount(){
        console.log("ComponentDidMount")
    }


    // Seventh Thing Running
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("CcomponentDidUpdate")
        console.log(prevState)
    }



    // Fifth Thing Running

    shouldComponentUpdate(nextProps , nextState){
        return ( (nextState.count === this.state.count) ?  false : true )
        // return true
    }

    
    // Third/Sixth Thing Running
  render() {

      console.log("Render")

      const increment = () => {this.setState({ count : this.state.count + 1 })}
      const decrement = () => {this.setState({ count : this.state.count - 1 })}
      const reset = () => {this.setState({ count : 0 })}

    return (
      <div>

        <h1>{this.state.count}</h1>

        <button onClick={increment}>Add</button><br />
        <button onClick={decrement}>Sub</button><br />
        <button onClick={reset}>Reset</button>

        {/* <button onClick={ () => {this.setState({count : this.state.count + 1})}}>+</button><br /> */}
        {/* <button onClick={ () => {this.setState({count : this.state.count - 1})}}>-</button><br /> */}

      </div>
    )
  }
}

export default Home