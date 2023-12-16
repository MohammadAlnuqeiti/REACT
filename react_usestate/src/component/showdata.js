import React from "react"


function ShowData(props){

let x =props.data; 

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>url</th>
                    </tr>
                </thead>
                <tbody>
                    {x.map((ele , index)=>(

                    <tr key={index}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.url}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default ShowData