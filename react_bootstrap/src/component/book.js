import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


    function Books(props) {
        
    const [data,setData]=useState();

        useEffect(()=>{
            const data = props.data;
            const dataBook = data.map((ele)=>{
                return ( 
                <>
                    <Card style={{ width: '18rem', display:'inline-block' , margin: '20px'  }} key={Math.random()}>
                        <Card.Img variant="top" src={ele.bookImage} style={{width:'18rem',height:'22rem'}}/>
                        <Card.Body>
                        <Card.Title>{ele.bookTitle}</Card.Title>
                        <Card.Text>
                        {ele.description}
                        </Card.Text>
                        <Button variant="primary">{ele.author}</Button>
                        </Card.Body>
                    </Card>
                </>
            
                )
            })

            setData(dataBook)
        },[])
        
        // console.log(data)

       

        // console.log(dataBook)
        return(
            <div>
                {props.data.map((ele)=>(
                <Card style={{ width: '18rem', display:'inline-block' , margin: '20px' }} key={Math.random()} >
                    <Card.Img variant="top" src={ele.bookImage} style={{width:'18rem',height:'22rem'}} />
                    <Card.Body>
                    <Card.Title>{ele.bookTitle}</Card.Title>
                    <Card.Text>
                    {ele.description}
                    </Card.Text>
                    <Button variant="primary">{ele.author}</Button>
                    </Card.Body>
                </Card>
                ))}
                <div>

                {data}
                </div>
            </div>
        )
    }


export default Books