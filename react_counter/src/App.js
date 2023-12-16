import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Counter from './counter';
class App extends React.Component {


  render(){

    return (
      <div className="App">
      <button onClick={this.props.onReset} className="btn btn-secondary btn-sm">recet</button>

  
     {this.props.counters.map((ele)=>(
     <Counter key={ele.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={ele} value={ele.value} id={ele.id} selected={true} />
     ))}
   
      </div>
    );
  }
}

export default App;
