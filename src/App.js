
//import React from 'react';
import React , {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
//import person from './Person/Person';
//import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';


class App extends Component {
state = {
  persons:[ {
    name:"Max" , age:28 } ,
    {name:"Menu" , age:30} ,
    {name:"Staphanie"  , age:35}
  ] ,

otherState:'some other value' ,
showPersons:false
}
switchNameHandler=(newName)=>{
  console.log("Was clicked");

  this.setState({
    persons: [{
      name:newName , age:40 } ,
      {name:"Manoj" , age:25} ,
      {name:"Staphanie"  , age:35}
      
    ]
   
  })

}
nameChangedHandler=(event) =>{
 
  this.setState({
    persons: [{
      name:"Maxmillan" , age:40 } ,
      {name:event.target.value , age:25} ,
      {name:"Staphanie"  , age:35}
      
    ]
   
  })
}
togglePersonsHandler=()=>{
  const doesShow=this.state.showPersons;
  this.setState({showPersons:!doesShow})

}
  render()
  {

    const style ={
      backgroundColor : 'white' ,
    font : 'inherit' ,
  border : ' 1px solid blue' ,
  padding :'8px' ,
  cursor :'pointer'
    }
let persons =null ;
if(this.state.showPersons)
{
 persons=( 

<div>
  {this.state.persons.map(person=>{
    return <Person name={person.name} age={person.age}  / >
  
  
  }
  )}
     
 

    </div> 

 )
}

  return (
    <div className="App">

      <h1>hi ,I'm react app</h1>
     <p>This is really Work..!!!</p>
     <button style ={style} onClick ={this.togglePersonsHandler}>Switch-Name</button>
       {persons}  
   
    
    </div>
    
  
  );
  }
  }

 

export default App;