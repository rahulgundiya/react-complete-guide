//import React from 'react';
import React , {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props =>{

  const [personState , setPersonState]= useState({
  persons:[ {
    name:"Max" , age:28 } ,
    {name:"Menu" , age:30} ,
    {name:"Staphanie"  , age:35}
  ] ,

otherState:'some other value'
})
console.log(personState);

const switchNameHandler=()=>{
  console.log("Was clicked");

  setPersonState({
    persons: [{
      name:"Maxmilan" , age:40 } ,
      {name:"Manoj" , age:25} ,
      {name:"Staphanie"  , age:35}
      
    ]
   
  })

}
  
  return (
    <div className="App">

      <h1>hi ,I'm react app</h1>
     <p>This is really Work..!!!</p>
     <button onClick ={switchNameHandler}>Switch-Name</button>
    
     <div>
     <Person name= { personState.persons[0].name } age= {personState.persons[0].age }  / >
       </div>
       <div>
     <Person name= { personState.persons[1].name } age= {personState.persons[1].age } >My Hobbies:Racing </Person>
     </div>
     <div>
     <Person name= { personState.persons[2].name } age= {personState.persons[2].age }  />

    </div>
    </div>
    
  
  );
  }
  

 

export default App;
