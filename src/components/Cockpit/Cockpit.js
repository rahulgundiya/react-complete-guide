import React from 'react';
import style from './Cockpit.css';



const cockpit = (props) => {
   
    

    let { showPersons } = props
    const assignedClasses= [{ } ];
    //let btnClass = '';
    if (props.showPersons) {
        // btnClass = Red;
    }
       
   
    if (props.persons.length <= 2) {
       
       
         assignedClasses.push(style.red);

         console.log('here', assignedClasses) // classes = ['red']
    }
    if (props.persons.length <= 1) {
        
         assignedClasses.push(style.bold); // classes = ['red', 'bold']
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