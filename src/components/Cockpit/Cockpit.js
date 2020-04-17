import React ,  { useEffect , useRef , useContext } from 'react';
import AuthContext from  '../../context/auth-context';
import classes from './Cockpit.module.css';

const Cockpit = ( props ) => {
const toggleBtnRef = useRef(null);
const authContext = useContext(AuthContext);
console.log(authContext.authenticated);



// toggleBtnRef.current.click();
  useEffect (()=>{
        console.log('[Cockpit.js] useEffect');
  //Http request
//   const timer = setTimeout(() =>{
// alert('Data Saved From Colud..!')
//   } , 1000);
toggleBtnRef.current.click();

  return ()=>{
     // clearTimeout(timer);
      console.log('[cockpit.js] cleanup work in useEffect');
  }
 
}  ,[]);



useEffect (() =>{
    console.log('[Cockpit.js]in 2nd useEffect');
    return ()=>{
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
   
});
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red );
       // classes = ['red']
       console.log('here data' , assignedClasses);
    }
    if ( props.personsLength <= 1 ) {

      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button 
                className={btnClass}
                ref={toggleBtnRef}
                onClick={props.clicked}>Toggle Persons</button>
            
                {<button onClick={authContext.login}>
                  Login</button>}
              
        </div>
    );
};

export default React.memo(Cockpit);