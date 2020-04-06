//import React from 'react';
import React , {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons:[ {
    name:"Max" , age:28 } ,
    {name:"Menu" , age:30} ,
    {name:"Staphanie"  , age:35}
  ] ,

otherState:'some other value'
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

  render()
  {

    const style ={
      backgroundColor : 'white' ,
    font : 'inherit' ,
  border : ' 1px solid blue' ,
  padding :'8px' ,
  cursor :'pointer'
    }
  return (
    <div className="App">

      <h1>hi ,I'm react app</h1>
     <p>This is really Work..!!!</p>
     <button style ={style} onClick ={ ()=> this.switchNameHandler('Maxmillan')}>Switch-Name</button>
    
     <div>
     <Person name= { this.state.persons[0].name } age= {this.state.persons[0].age }  / >
       </div>
       <div>
     <Person name= { this.state.persons[1].name } age= {this.state.persons[1].age } click ={this.switchNameHandler.bind(this , "Max!")} changed ={this.nameChangedHandler} >My Hobbies:Racing </Person>
     </div>
     <div>
     <Person name= { this.state.persons[2].name } age= {this.state.persons[2].age }  />

    </div>
    </div>
    
  
  );
  }
  }

 

export default App;
