import React ,{Component } from 'react';
//import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import ReactAux from '../../../hoc/ReactAux'
import classes from './Person.module.css';

class  Person  extends Component  {
render()
{ 
 console.log('[Person.js] rendering....');
  return ( 
     <ReactAux>
      <p key ="i1" onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p key = "i2" >  {this.props.children}</p>
      <input type="text" key ="i3" 
       onChange={this.props.changed}
        value={this.props.name} />
        
    </ReactAux>
  )
};
}
export default withClass(Person , classes.Person);
