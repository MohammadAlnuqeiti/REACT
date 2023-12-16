import React from "react";
import Navbars from "./navbar";
import App from "./App";
class Parent extends React.Component{
    state = {
        counters : [
          {id:1 , value : 4},
          {id:2 , value : 0},
          {id:3, value : 0},
          {id:4 , value : 0},
        ]
      }
      handleDelete = (countrtId) => {
        const counters = this.state.counters.filter(f => f.id !==countrtId);
        this.setState({
          counters
        })
      }
      //value تعديل قيمة ال 
      handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index]={...counter};
      counters[index].value++;
      this.setState({
        counters
      })
      
      }
      
      handleRect = () => {
        const counters = this.state.counters.map((c)=> {
          c.value=0;
          return c;
        })
        this.setState({
          counters
        })
      }
    render(){
        return(
<>
<Navbars totalCounters={this.state.counters.filter( f =>  f.value > 0 ).length}/>
<main className="container">
<App
counters={this.state.counters}
onReset={this.handleRect}
onIncrement={this.handleIncrement}
onDelete={this.handleDelete}
/>
</main>
</>
        )
    }
}

export default Parent