import './App.css';
import React from "react";
import Header from './component/header';
import LandPage from './component/landpage';
import About from './component/about';
import Education from './component/education';
import Experience from './component/experience';
import MyProject from './component/myproject';
import Footer from './component/footer';

class App extends React.Component{
  render(){
    return(

    <>
    <Header/>
    <LandPage/>
    <About/>
    <Education/>
    <Experience/>
    <MyProject/>
    <Footer/>
    </>

    )
  }
}

export default App;
