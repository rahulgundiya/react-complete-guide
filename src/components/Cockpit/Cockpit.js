import React from 'react';
import classes from './Cockpit.css';



const cockpit = (props) => {
   
    

    let { showPersons } = props
    const assignedClasses= [{ } ];
    //let btnClass = '';
    if (props.showPersons) {
        // btnClass = Red;
    }
       
   
    if (props.persons.length <= 2) {
       // alert("hi")
       // console.log("p[erson",props.persons)
       // style = {styleRed}
    //    let styleRed ={
    //     color: 'red'
    //   }
       
         assignedClasses.push(classes.red);

         console.log('here', assignedClasses) // classes = ['red']
    }
    if (props.persons.length <= 1) {
        //style = {styleBold}
        // let styleBold = {
        //     fontWeight: 'bold'
        //   }
         assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className='Cockpit'>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className=
                {showPersons ? "Red" : ""}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;