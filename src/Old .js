//import React from 'react';
// import React , {useState} from 'react';
// //import logo from './logo.svg';
// import './App.css';
// import Person from './Person/Person';

// const App = props =>{

//   const [personState , setPersonState]= useState({
//   persons:[ {
//     name:"Max" , age:28 } ,
//     {name:"Menu" , age:30} ,
//     {name:"Staphanie"  , age:35}
//   ] ,

// otherState:'some other value'
// })
// console.log(personState);

// const switchNameHandler=()=>{
//   console.log("Was clicked");

//   setPersonState({
//     persons: [{
//       name:"Maxmilan" , age:40 } ,
//       {name:"Manoj" , age:25} ,
//       {name:"Staphanie"  , age:48}
      
//     ]
   
//   })

// }
  
//   return (
//     <div className="App">

//       <h1>hi ,I'm react app</h1>
//      <p>This is really Work..!!!</p>
//      <button onClick ={switchNameHandler}>Switch-Name</button>
    
//      <div>
//      <Person name= { personState.persons[0].name } age= {personState.persons[0].age }  / >
//        </div>
//        <div>
//      <Person name= { personState.persons[1].name } age= {personState.persons[1].age } >My Hobbies:Racing </Person>
//      </div>
//      <div>
//      <Person name= { personState.persons[2].name } age= {personState.persons[2].age }  />

//     </div>
//     </div>
    
  
//   );
//   }
  

 

// export default App;







//import React from 'react';
// import React , {Component} from 'react';
// //import logo from './logo.svg';
// import './App.css';
// import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';


// class App extends Component {
// state = {
//   persons:[ {
//     name:"Max" , age:28 } ,
//     {name:"Menu" , age:30} ,
//     {name:"Staphanie"  , age:35}
//   ] ,

// otherState:'some other value'
// }
// switchNameHandler=(newName)=>{
//   console.log("Was clicked");

//   this.setState({
//     persons: [{
//       name:newName , age:40 } ,
//       {name:"Manoj" , age:25} ,
//       {name:"Staphanie"  , age:35}
      
//     ]
   
//   })

// }
// nameChangedHandler=(event) =>{
 
//   this.setState({
//     persons: [{
//       name:"Maxmillan" , age:40 } ,
//       {name:event.target.value , age:25} ,
//       {name:"Staphanie"  , age:35}
      
//     ]
   
//   })
// }

//   render()
//   {

//     const style ={
//       backgroundColor : 'white' ,
//     font : 'inherit' ,
//   border : ' 1px solid blue' ,
//   padding :'8px' ,
//   cursor :'pointer'
//     }
//   return (
//     <div className="App">

//       <h1>hi ,I'm react app</h1>
//      <p>This is really Work..!!!</p>
//      <button style ={style} onClick ={ ()=> this.switchNameHandler('Maxmillan')}>Switch-Name</button>
    
//      <div>
//      <Person name= { this.state.persons[0].name } age= {this.state.persons[0].age }  / >
//        </div>
//        <div>
//      <Person name= { this.state.persons[1].name } age= {this.state.persons[1].age } click ={this.switchNameHandler.bind(this , "Max!")} changed ={this.nameChangedHandler} >My Hobbies:Racing </Person>
//      </div>
//      <div>
//      <Person name= { this.state.persons[2].name } age= {this.state.persons[2].age }  />

//     </div>
//     </div>
    
  
//   );
//   }
//   }

 

// export default App;





// //import React from 'react';
// import React , {Component} from 'react';
// //import logo from './logo.svg';
// import './App.css';
// import Person from './Person/Person';
// //import person from './Person/Person';
// //import UserInput from './UserInput/UserInput';
// //import UserOutput from './UserOutput/UserOutput';


// class App extends Component {
// state = {
//   persons:[ {
//    id:"vasb1" , name:"Max" , age:28 } ,
//     { id:"fasd1" , name:"Menu" , age:30} ,
//     {id:"tyhg2" ,name:"Staphanie"  , age:35}
//   ] ,

// otherState:'some other value' ,
// showPersons:false
// }
// switchNameHandler=(newName)=>{
//   console.log("Was clicked");

//   this.setState({
//     persons: [{
//       name:newName , age:40 } ,
//       {name:"Manoj" , age:25} ,
//       {name:"Staphanie"  , age:35}
      
//     ]
   
//   })

// }
// nameChangedHandler=(event , id) =>{
// const personIndex = this.state.persons.findIndex(p=>{
//   return p.id  === id;
// }) 

// const person = {
//   ...this.state.persons[personIndex]
  
// }

// person.name = event.target.value;
// const persons = [...this.state.persons] ;

// persons[personIndex]=person;



//   this.setState({
//     persons: persons })
// }

// deletePersonHandler(personIndex) 
// {
// //const persons =this.state.persons;
// const persons = [...this.state.persons];
// persons.splice(personIndex ,1);
// this.setState({persons:persons});

// }
// togglePersonsHandler=()=>{
//   const doesShow=this.state.showPersons;
//   this.setState({showPersons:!doesShow})

// }
//   render()
//   {

//     const style ={
//       backgroundColor : 'white' ,
//     font : 'inherit' ,
//   border : ' 1px solid blue' ,
//   padding :'8px' ,
//   cursor :'pointer'
//     }
// let persons =null ;
// if(this.state.showPersons)
// {
//  persons=( 

// <div>
//   {this.state.persons.map((person ,index)=>{
//     return <Person name={person.name} age={person.age}
//      click ={()=> this.deletePersonHandler(index)}
//      key ={person.id}
//      changed = {(event)=>this.nameChangedHandler(event ,person.id)}
//     / >
  
  
//   }
//   )}
     
 

//     </div> 

//  )
// }

//   return (

//     <div className="App">

//       <h1>hi ,I'm react app</h1>
//      <p>This is really Work..!!!</p>
//      <button style ={style} onClick ={this.togglePersonsHandler}>Switch-Name</button>
//        {persons}  
   
    
//     </div>
    
  
//   );
//   }
//   }

 

// export default App;














