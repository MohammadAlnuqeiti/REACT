// import './App.css';

import React , {Component} from "react";

class App extends Component {
state={
  name:" ",
  select:" "
}
  handleChang=(e)=>{
    console.log(e.target.value);
    this.setState({

      name:e.target.value

    })

  }
  handleChangSelect=(e)=>{
    console.log(e.target.value);
    this.setState({

      select:e.target.value

    })

  }
  handleSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state.name);
    console.log(this.state.select);
  }

  render(){
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        <h3>form</h3>
        <input type="text" onChange={this.handleChang}></input>
<br></br>
        <select onChange={this.handleChangSelect}>
          <option value="value 1">value 1</option>
          <option value="value 2">value 2</option>
          <option value="value 3">value 3</option>
        </select>
<br></br>
        <button>submit</button>
      </form>
<br></br>
      {this.state.name}
<br></br>
      {this.state.select}
    </div>
  );
}}

export default App;
