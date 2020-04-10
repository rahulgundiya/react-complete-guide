
//import React from 'react';
import React , {Component} from 'react';
import Radium from 'radium';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
//import person from './Person/Person';
//import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';


class App extends Component {
state = {
  persons:[ {
   id:"vasb1" , name:"Max" , age:28 } ,
    { id:"fasd1" , name:"Menu" , age:30} ,
    {id:"tyhg2" ,name:"Staphanie"  , age:35}
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
nameChangedHandler=(event , id) =>{
const personIndex = this.state.persons.findIndex(p=>{
  return p.id  === id;
}) 

const person = {
  ...this.state.persons[personIndex]
  
}

person.name = event.target.value;
const persons = [...this.state.persons] ;

persons[personIndex]=person;



  this.setState({
    persons: persons })
}

deletePersonHandler(personIndex) 
{
//const persons =this.state.persons;
const persons = [...this.state.persons];
persons.splice(personIndex ,1);
this.setState({persons:persons});

}
togglePersonsHandler=()=>{
  const doesShow=this.state.showPersons;
  this.setState({showPersons:!doesShow})

}
  render()
  {

    const style ={
      backgroundColor : 'green' ,
      color:'white' ,
    font : 'inherit' ,
  border : ' 1px solid blue' ,
  padding :'8px' ,
  cursor :'pointer' ,
  ':hover':{
    backgroundColor :'lightgreen' ,
    color:'black'
  }
    }
let persons =null ;
if(this.state.showPersons)
{
 persons=( 

<div>
  {this.state.persons.map((person ,index)=>{
    return <Person name={person.name} age={person.age}
     click ={()=> this.deletePersonHandler(index)}
     key ={person.id}
     changed = {(event)=>this.nameChangedHandler(event ,person.id)}
    / >
  
  
  }
  )}
     
 

    </div> 

 )
 style.backgroundColor= 'red';
 style[':hover']= {
   backgroundColor:'salmon' ,
   color :'black'
 }
}

// let classes = ['red' , 'bold'].join(' ');
const classes = [];
 if(this.state.persons.length <=2)
{
  classes.push('red');   //classes will br red
}

if(this.state.persons.length <= 1)
{

  classes.push('bold') //classes will be both red and bold
}
  return (

    <div className="App">

      <h1>hi ,I'm react app</h1>
     <p className ={classes.join(' ')} >This is really Work..!!!</p>
     <button style ={style} onClick ={this.togglePersonsHandler}>Switch-Name</button>
       {persons}  
   
    
    </div>
    
  
  );
  }
  }

 

export default Radium(App);
