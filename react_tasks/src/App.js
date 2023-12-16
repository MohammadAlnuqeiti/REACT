import './App.css';
import React from 'react';
import { BrowserRouter,Route,Routes,Switch } from 'react-router-dom';
import Header from "./component/header";
import Main from "./component/main";
import Section2 from './component/section2';
import Section3 from './component/section3';
import Section4 from './component/section4';
import Section5 from './component/section5';
import Section6 from './component/section6';
import BLOG from "./component/BLOG";
import Error from "./component/error";
import Footer from "./component/footer";
import Create from './component/create';
import Edit from './component/edit';
class App extends React.Component{
  render(){

    return (
       <>
        <Header/>
       
          <Routes className="App">
     
              <Route exct path='/' element={<Main/>}/>
              <Route exct path='Section2' element={<Section2/>}/> 
              <Route exct path='Section3' element={<Section3/>}/>
              <Route exct path='/Section4' element={<Section4/>}>
              <Route  path='create' element={<Create />} />
              <Route  path='edit' element={<Edit />} />
                </Route>

              <Route exct path='Section5' element={<Section5/>}/>
              <Route exct path='BLOG' element={<BLOG/>}/>
              <Route exct path='Section6' element={<Section6/>}/>
              <Route exct path='/:error' element={<Error/>}/>
      
          </Routes>

        <Footer/>
     
      </>
    );
  }
}


export default App;
