

import { useState } from "react";
import axios from "axios";

function Login(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [accept,setAccept]=useState(false) //submitالهدف من هذا المتغير انه يطبق الشروط عند كبسة ال 
    const [emailError,setEmailError]=useState("")
    // const [flag,setFlag]=useState(false)

    async function Submit(e){
        let flag = true;
        e.preventDefault(); // من عملية ارسال البيانت للتحقق من البيانات
        setAccept(true)
        if( password.length < 8){
            flag = false
        }else{  flag = true }
        try{
            if(flag){
                // ارسال البيانات
    
                let  res = await axios.post("http://127.0.0.1:8000/api/login",{
                    email:email,
                    password:password,
                })
                if(res.status === 200){
                    window.localStorage.setItem('email',email)
                    window.location.pathname = "/home";
                }
            }
        }catch(error){

            setEmailError(error.response.status);


        }

    }
    return(
    <div className="father">
       <form action="" style={{border: '1px solid #ccc'}} onSubmit={Submit}>
        <div className="container">
          <h1>Login</h1>
          <hr />
         

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" id="email" placeholder="Enter Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          { accept && email === "" &&<p className="error">Email is Required</p>}
          { accept && emailError === 422 &&<p className="error">Email is already been taken</p>}

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" id="psw" placeholder="Enter Password" name="psw" value={password} onChange={(e)=>setPassword(e.target.value)} />
          {password.length < 8 && accept && <p className="error">password must be more than 8 char</p>}

        

          <div className="clearfix">
            <button type="submit" className="signupbtn">login</button>
          </div>
        </div>
      </form>
    </div>
    )
}

export default Login
