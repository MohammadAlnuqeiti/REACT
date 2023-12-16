import './App.css';
import React from 'react';
import Data from './component/data';
import UseEffect from './component/useEffect';

function App() {

  const [test,useTest]=React.useState('hello');
  const [moh,useMoh]=React.useState(true);
  console.log(test);

  function ChangeState(){
    useTest((para)=> (para==='hello' ? 'hi, mohammad' : 'hello') );
    // useTest((para)=> { return para==='hello' ? 'hi, mohammad' : 'hello'});
  }
  function ChangeStatetwo(){
    useMoh((para)=> !para );
  }

  // Forms 
const [FirstName,setFirstName]=React.useState();
const [LastName,setLastName]=React.useState();
const [Email,setEmail]=React.useState();
  // end forms
  return (
    <div className="App">

      <h1 style={{color: moh ? "" : "red"}}>hello react</h1>
      {test}
      <br/>
      <button onClick={ChangeState}>change state</button>
      <br/>
      {moh ? 'true':'false'}
      <br/>
      <button onClick={ChangeStatetwo}>change state</button>
      <hr></hr>
      <h1>forms</h1>
      <form>
        <label htmlFor='1'>first name</label>
        <input id='1' type={"text"} placeholder="First Name" value={FirstName} onChange={(e)=>setFirstName(e.target.value)}/>
        {FirstName}
        <br/>
        <label htmlFor='2'>last name</label>
        <input id='2' type={"text"} placeholder="Last Name" value={LastName} onChange={(e)=>setLastName(e.target.value)}/>
        {LastName}
        <br/>
        <label htmlFor='3'>email</label>
        <input id='3' type={"email"} placeholder="Email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
        {Email}
        <br/>
        <button type='submit'>submit</button>
      </form>
        <br/>
        <br/>
        <br/>
        <hr></hr>

        <Data/>

        <hr></hr>
        <UseEffect name={test}/>
        
 
    </div>
  );
}

export default App;
