import '../App.css';

import React, { Component } from "react";


class Person extends Component{

    render(){

        const data=this.props.data
        const persons=data.map((ele)=>{
            return ele.age > 15 ? 
            (
                <tr key={ele.id}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                </tr>
            ): null
        })
        return(
            <div>
<table>
    <thead>
    <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
    </tr>

    </thead>
    <tbody>

    {persons}
    </tbody>
</table>
            </div>
        )
    }

}

export default Person