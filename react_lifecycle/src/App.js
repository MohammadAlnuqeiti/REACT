import React from 'react';
import './App.css';
import Home from './home';
import LifeCycle from './lifecycle';

class App extends React.Component{
  

  
  render(){
      // console.log('Render')
      return (
      <div>
        <Home/>

        {/* <LifeCycle/> */}
       
      </div>
      )
  }


}

export default App;
