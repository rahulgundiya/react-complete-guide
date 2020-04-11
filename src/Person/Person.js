import React from 'react';
import styled from 'styled-components';
//import {Div} from '../../global/layout';
// import Radium from 'radium';
// import './Person.css';
//Using prop

const StyledDiv =  styled.div`
   

width:60% ;
margin : 16px auto ;
border : 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width:500px){

    width :450px;

} `
;
const person = (props )=>
{
  // const style = {
  //   '@media (min-width:500px)':{
  //     width:'450px'
  //   }
 //}
 const rnd = Math.random();
if(rnd>0.7)
{
  throw new Error('Somthing went wrong')
}
return(

  // <div className = "Person" style={style}>
 <StyledDiv>
    
        <p onClick ={props.click}> {props.name} and i am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed}  value={ props.name}/>
        </StyledDiv>
)
    
}

//  return <p1> Hi I'm and I'm {Math.floor(Math.random() *30)} year old..!!</p1>

  //show dynamic data using javascript through random method 
  //its custom method of javascript





export default person ;
