import React ,{Component } from 'react';
//import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import ReactAux from '../../../hoc/ReactAux'
import classes from './Person.module.css';
import PropTypes from 'prop-types';

class  Person  extends Component  {
  constructor(props)
  {
    super(props)
this.inputElementRef = React.createRef();
    
  }
  componentDidMount(){
    //document.querySelector('input').focus();
//Another-Way to Select the  input
//this.inputElement.focus();
//Third another-way
this.inputElementRef.current.focus();


  }
render()
{ 
 console.log('[Person.js] rendering....');
  return ( 
     <ReactAux>
       {this.props.isAuth ? <p>Authenticated</p> :<p>Please Login </p>} 
      <p key ="i1" onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p key = "i2" >  {this.props.children}</p>
      <input type="text" key ="i3" 
     // ref = { (inputEl)=>{this.inputElement=inputEl}}
     ref = {this.inputElementRef}
       onChange={this.props.changed}
        value={this.props.name} />
        
    </ReactAux>
  )
};
}
Person.propTypes={
  click:PropTypes.func ,
  name:PropTypes.string ,
  age:PropTypes.number

}

export default withClass(Person , classes.Person);
