import './footer.css';

import axios from "axios";
import React from "react";


class BLOG extends React.Component{
state={
    users:[ ]
}
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data => {
            console.log(data.data)
            this.setState({
                users:data.data,
            })
        })
    }

    render(){
        const style={
            border:'2px solid black',
            padding:'5px'
        }
        const Data=this.state.users;
        const usersData= Data.map(ele => {
            return(
                <tr key={ele.id}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.phone}</td>
                    <td>{ele.website}</td>
                </tr>
            )

        })
        return(
            <div id='body'>
              <h1>BLOG</h1>
              <table style={style}>
                <thead>
                    <tr >
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>WEBSITE</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData}
                </tbody>
              </table>
            </div>
        )
    }
}

export default BLOG