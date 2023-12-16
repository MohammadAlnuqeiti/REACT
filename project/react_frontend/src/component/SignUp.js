import { useState } from "react";
import axios from "axios";


function SignUp(){

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [repassword,setRepassword]=useState("")
    const [accept,setAccept]=useState(false) //submitالهدف من هذا المتغير انه يطبق الشروط عند كبسة ال 
    const [emailError,setEmailError]=useState("")
    // const [flag,setFlag]=useState(false)

    async function Submit(e){
        let flag = true;
        e.preventDefault(); // من عملية ارسال البيانت للتحقق من البيانات
        setAccept(true)
        if(name === ""  || password.length < 8 || repassword !== password){
            flag = false
        }else{  flag = true }
        try{
            if(flag){
                // ارسال البيانات
    
                let  res = await axios.post("http://127.0.0.1:8000/api/register",{
                    name:name,
                    email:email,
                    password:password,
                    password_confirmation:repassword,
                });
                console.log(res);
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
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="name"><b>Name</b></label>
          <input type="text" id="name" placeholder="Enter Name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
          {name === "" && accept && <p className="error">Username is Required</p>}

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" id="email" placeholder="Enter Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          { accept && email === "" &&<p className="error">Email is Required</p>}
          { accept && emailError === 422 &&<p className="error">Email is already been taken</p>}

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" id="psw" placeholder="Enter Password" name="psw" value={password} onChange={(e)=>setPassword(e.target.value)} />
          {password.length < 8 && accept && <p className="error">password must be more than 8 char</p>}

          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" id="psw-repeat" placeholder="Repeat Password" name="psw-repeat" value={repassword} onChange={(e)=>setRepassword(e.target.value)} />
          {repassword !== password && accept && <p className="error">reoeat password not match</p>}

          <div className="clearfix">
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
    )
}

export default SignUp