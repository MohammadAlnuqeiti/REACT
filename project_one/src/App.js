// import logo from './logo.svg';
// import './App.css';

// import {x,y} from './test';
// import func from './test';

import React,{ Component } from 'react';
import Header from './headertest';
import Child from './Child';
import Person from './component/person';



class App extends Component {

  state = {
    person:[
      {id:1,name:'mohammad',age:30},
      {id:2,name:'mohammad',age:19},
      {id:3,name:'mohammad',age:14},
      {id:4,name:'mohammad',age:20},
      {id:5,name:'ahmed',age:17},
    ],
    name:"mohammad",
    age:24,
  }

  
  Test = () =>  console.log ('arrow function');
  handleClick = () => console.log(this.state.name);
  handleMouse = () => console.log('mouse');
  changeState = () => {
    this.setState({
      name:'ahmed,'
    })
  };

  render(){
    return (
      <div className="App">
          hello react
          <Header />
          {this.Test()}
          {this.state.name}
          <div>
            <button onClick={this.handleClick}>Click</button>
            <button onMouseLeave={this.handleMouse}>Mouse</button>
            <button onClick={this.changeState}>Change state</button>

            <Child name={this.state.name}/>
            <Person data={this.state.person}/>
          </div>
          {/* hello react is {x+y} */}
          {/* <p>{func()}</p> */}
      </div>
    );
  }
}


export default App;
