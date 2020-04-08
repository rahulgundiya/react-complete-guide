import React from 'react';


const userInput=(props)=>{

    const inputstyle ={
         border:'2px solid red',
         width:'16%' ,
         height: '30px' ,

         textAlign : 'center'
    }
    return <input type="text" 
    style= {inputstyle}
    onChange = {props.changed} value ={props.currentName} />;

}

export default userInput;