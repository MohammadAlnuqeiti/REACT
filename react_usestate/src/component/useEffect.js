import React, { useEffect, useState } from "react";


function UseEffect(props){

    const [name , setName] = useState('Ahmed');

    useEffect(() => {
        
        // Inside this callback function we perform our side effects.
        // راح تتنفذ مع كل تحديث للصفحة

        console.log('componentDidMount');
      }    );


    useEffect(() => {

        // Inside this callback function we perform our side effects.
        // compnent راح تتنفذ  فقط في بداية تحميل ال   
        console.log('only one execute');
      }  ,  []  );

      useEffect(() => {

        // Inside this callback function we perform our side effects.

        console.log('change dependwncies');

        //dependwncies تتنفذ فقط في حال تم تغيير ال 
      }, [props.name , name ]);


    return(
        <div>
            {props.name}
        </div>
    )

}

export default UseEffect