import React from 'react';

const Validation=(props)=>{
let ValidationMessage = 'Text TOO long!!'

if(props.inputLength <=5 )
{
    ValidationMessage ="Too Short text!!";
}
return (
    <div>
       <p>{ValidationMessage}</p>
          </div>
)



}





export default Validation;