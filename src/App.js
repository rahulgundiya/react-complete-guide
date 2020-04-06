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
switchNameHandler=()=>{
  console.log("Was clicked");

  this.setState({
    persons: [{
      name:"Maxmilan" , age:40 } ,
      {name:"Manoj" , age:25} ,
      {name:"Staphanie"  , age:35}
      
    ]
   
  })

}

  render()
  {
  return (
    <div className="App">

      <h1>hi ,I'm react app</h1>
     <p>This is really Work..!!!</p>
     <button onClick ={this.switchNameHandler}>Switch-Name</button>
    
     <div>
     <Person name= { this.state.persons[0].name } age= {this.state.persons[0].age }  / >
       </div>
       <div>
     <Person name= { this.state.persons[1].name } age= {this.state.persons[1].age } >My Hobbies:Racing </Person>
     </div>
     <div>
     <Person name= { this.state.persons[2].name } age= {this.state.persons[2].age }  />

    </div>
    </div>
    
  
  );
  }
  }

 

export default App;
