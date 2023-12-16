import './App.css';

import React,{ Component } from "react";
import Person from './component/person';

class App extends Component{

  constructor(){
    super();
    this.state={
      parent: 'App is the parent component',
      name:'mohammad',
      age:24
    }
  }
  handleChange=()=>{
    this.setState({
      parent:'hello react',
      name:'ahmed'
    })
  }
  render(){
    return(
      <div className="App">
        <Person name={this.state.name} />
        {this.state.parent}
        <br/>

        <button onClick={this.handleChange}>Change state</button>

      </div>
    )
    
  }
}

export default App;
