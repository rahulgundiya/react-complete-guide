import React from 'react';
import './Person.css';
//Using prop
const person = (props )=>
{
return(
    <div className = "Person">
        <p>Hi am {props.name} and i am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} />
    </div>
)
    
}

//  return <p1> Hi I'm and I'm {Math.floor(Math.random() *30)} year old..!!</p1>

  //show dynamic data using javascript through random method 
  //its custom method of javascript





export default person;