import React, { useEffect } from "react";
import ShowData from "./showdata";


function Data(){
const [data,setData]=React.useState([])
useEffect(()=>{
    fetch("	https://api.imgflip.com/get_memes")
    .then((res)=>res.json())
    // .then((data)=>console.log(data.data.memes))
    .then((data)=> setData(data.data.memes))
},[])


console.log(data) 
    return(
        <div>
            <ShowData data={data}/>
        </div>
    )

}

export default Data