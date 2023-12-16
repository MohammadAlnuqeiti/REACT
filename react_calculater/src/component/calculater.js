import React from 'react'

function Calculater() {


  return (
    <div style={{width:"200px"}}>
        <div style={{width:"100%",backgroundColor:"gray",height:"50px",textAlign:"center",display:"flex",alignItems:"center"}}>

        </div>

        <table style={{width:"100%"}}>
            <thead>
                <tr>
                    <th>

                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <button>7</button>
                    </td>
                    <td>
                        <button>8</button>
                    </td>
                    <td>
                        <button>9</button>
                    </td>
                    <td>
                        <button>/</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button>4</button>
                    </td>
                    <td>
                        <button>5</button>
                    </td>
                    <td>
                        <button>6</button>
                    </td>
                    <td>
                        <button>*</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button>1</button>
                    </td>
                    <td>
                        <button>2</button>
                    </td>
                    <td>
                        <button>3</button>
                    </td>
                    <td>
                        <button>+</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button>0</button>
                    </td>
                    <td>
                        <button>-</button>
                    </td>
                    <td colSpan={2}>
                        <button style={{width:"100%"}}>=</button>
                    </td>
                </tr>
            </tbody>
        </table>


    </div>
  )
}

export default Calculater