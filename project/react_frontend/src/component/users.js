import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';


export default function Users() {
    const [data,setData]=React.useState([])

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/user/show")
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[]);
  return (
    <div className="container mt-5">
        <Table striped className="m-auto" style={{textAlign:"center"}}>
            <thead>
                <tr bg="primary">
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>

                 {data.map((ele,index)=>{
 return(
                <tr key={index}>
                    <td>{++index}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                </tr>
                )})} 
            
            </tbody>
        </Table>
      </div>
  )
}
