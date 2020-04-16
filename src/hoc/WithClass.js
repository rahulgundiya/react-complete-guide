import React from 'react'

// const withClass =props=> (
// <div className={props.classes} >{props.children}</div>
// );

const withClass = (WrapedComponent , className )=>{
    return props=>(
       <div className ={className}>
           <WrapedComponent  {...props}/>
       </div>
    )
}

export default withClass ;