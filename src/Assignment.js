// //import React from 'react';
// import React , {Component} from 'react';
// //import logo from './logo.svg';
// import './App.css';
// // import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';


// class App extends Component {
//  state=
// {
//   username:'SuperMax'
// }
 
//  usernameChangedHandler=(event) => {
// this.setState({username:event.target.value})

//  }

//   render()
//   {

   
//   return (
//     <div className="App">

// <ol>
//           <li>Create TWO new components: UserInput and UserOutput</li>
//           <li>UserInput should hold an input element, UserOutput two paragraphs</li>
//           <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
//           <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
//           <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
//           <li>Add a method to manipulate the state (=> an event-handler method)</li>
//           <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
//           <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
//           <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
//           <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
//         </ol>
//      <UserInput changed = {this.usernameChangedHandler}
//      currentName ={this.state.username}  />
//      <UserOutput userName={this.state.username} />
//      <UserOutput userName={this.state.username}  />
//      <UserOutput  userName="Max" />
//     </div>
    
  
//   );
//   }
//   }

 

// export default App;


// //Second Assignment



// //import React from 'react';
// import React , {Component} from 'react';
// //import logo from './logo.svg';
// import './App.css';
// // import Person from './Person/Person';
// //import person from './Person/Person';
// //import UserInput from './UserInput/UserInput';
// //import UserOutput from './UserOutput/UserOutput';
// import Validation from "./Validation/Validation";
// import Char from './Char/Char'
// class App extends Component {
// state ={
// userInput: '' 

// }

// inputChangedHandler=(event)=>
// {
// this.setState({userInput:event.target.value})
// }

// deleteCharHandler=(index)=>{
//  const text  = this.state.userInput.split('');
//  text.splice( index ,1);
//  const updatedText = text.join('');
//  this.setState({userInput:updatedText});
// }
//   render()
//   {

//     const charList =
//       this.state.userInput.split('').map((ch ,index)=>{
//         return <Char  character={ch}  key ={index}
//         clicked ={()=> this.deleteCharHandler(index)}
//         />
//       })
    




//   return (

//     <div className="App">

// <ol>
//           <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
//           <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
//           <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
//           <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
//           <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
//           <li>When you click a CharComponent, it should be removed from the entered text.</li>
//         </ol>
//         <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
//         <hr />
//         <input type="text" onChange={this.inputChangedHandler} value ={this.state.userInput}  />
//   <p>{this.state.userInput}</p>

//   <Validation  inputLength = {this.state.userInput.length}  />
//   {charList}
//     </div>
    
  
//   );
//   }
//   }

 

// export default App;





{
    "name": "react-complete-guide",
    "version": "0.1.0",
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
      "@babel/code-frame": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.8.3.tgz",
        "integrity": "sha512-a9gxpmdXtZEInkCSHUJDLHZVBgb1QS0jhss4cPP93EW7s+uC5bikET2twEF3KV+7rDblJcmNvTR7VJejqd2C2g==",
        "requires": {
          "@babel/highlight": "^7.8.3"
        }
      },
      "@babel/compat-data": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.9.0.tgz",
        "integrity": "sha512-zeFQrr+284Ekvd9e7KAX954LkapWiOmQtsfHirhxqfdlX6MEC32iRE+pqUGlYIBchdevaCwvzxWGSy/YBNI85g==",
        "requires": {
          "browserslist": "^4.9.1",
          "invariant": "^2.2.4",
          "semver": "^5.5.0"
        },
        "dependencies": {
          "semver": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
          }
        }
      },
      "@babel/core": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.9.0.tgz",
        "integrity": "sha512-kWc7L0fw1xwvI0zi8OKVBuxRVefwGOrKSQMvrQ3dW+bIIavBY3/NpXmpjMy7bQnLgwgzWQZ8TlM57YHpHNHz4w==",
        "requires": {
          "@babel/code-frame": "^7.8.3",
          "@babel/generator": "^7.9.0",
          "@babel/helper-module-transforms": "^7.9.0",
          "@babel/helpers": "^7.9.0",
          "@babel/parser": "^7.9.0",
          "@babel/template": "^7.8.6",
          "@babel/traverse": "^7.9.0",
          "@babel/types": "^7.9.0",
          "convert-source-map": "^1.7.0",
          "debug": "^4.1.0",
          "gensync": "^1.0.0-beta.1",
          "json5": "^2.1.2",
          "lodash": "^4.17.13",
          "resolve": "^1.3.2",
          "semver": "^5.4.1",
          "source-map": "^0.5.0"
        },
        "dependencies": {
          "semver": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
          },
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
          }
        }
      },
      "@babel/generator": {
        "version": "7.9.5",
        "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.9.5.tgz",
        "integrity": "sha512-GbNIxVB3ZJe3tLeDm1HSn2AhuD/mVcyLDpgtLXa5tplmWrJdF/elxB56XNqCuD6szyNkDi6wuoKXln3QeBmCHQ==",
        "requires": {
          "@babel/types": "^7.9.5",
          "jsesc": "^2.5.1",
          "lodash": "^4.17.13",
          "source-map": "^0.5.0"
        },
        "dependencies": {
          "jsesc": {
            "version": "2.5.2",
            "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
            "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA=="
          },
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
          }
        }
      },
      "@babel/helper-annotate-as-pure": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.8.3.tgz",
        "integrity": "sha512-6o+mJrZBxOoEX77Ezv9zwW7WV8DdluouRKNY/IR5u/YTMuKHgugHOzYWlYvYLpLA9nPsQCAAASpCIbjI9Mv+Uw==",
        "requires": {
          "@babel/types": "^7.8.3"
        }
      },
      "@babel/helper-builder-binary-assignment-operator-visitor": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.8.3.tgz",
        "integrity": "sha512-5eFOm2SyFPK4Rh3XMMRDjN7lBH0orh3ss0g3rTYZnBQ+r6YPj7lgDyCvPphynHvUrobJmeMignBr6Acw9mAPlw==",
        "requires": {
          "@babel/helper-explode-assignable-expression": "^7.8.3",
          "@babel/types": "^7.8.3"
        }
      },
      "@babel/helper-builder-react-jsx": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/helper-builder-react-jsx/-/helper-builder-react-jsx-7.9.0.tgz",
        "integrity": "sha512-weiIo4gaoGgnhff54GQ3P5wsUQmnSwpkvU0r6ZHq6TzoSzKy4JxHEgnxNytaKbov2a9z/CVNyzliuCOUPEX3Jw==",
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.8.3",
          "@babel/types": "^7.9.0"
        }
      },
      "@babel/helper-builder-react-jsx-experimental": {
        "version": "7.9.5",
        "resolved": "https://registry.npmjs.org/@babel/helper-builder-react-jsx-experimental/-/helper-builder-react-jsx-experimental-7.9.5.tgz",
        "integrity": "sha512-HAagjAC93tk748jcXpZ7oYRZH485RCq/+yEv9SIWezHRPv9moZArTnkUNciUNzvwHUABmiWKlcxJvMcu59UwTg==",
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.8.3",
          "@babel/helper-module-imports": "^7.8.3",
          "@babel/types": "^7.9.5"
        }
      },
      "@babel/helper-compilation-targets": {
        "version": "7.8.7",
        "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.8.7.tgz",
        "integrity": "sha512-4mWm8DCK2LugIS+p1yArqvG1Pf162upsIsjE7cNBjez+NjliQpVhj20obE520nao0o14DaTnFJv+Fw5a0JpoUw==",
        "requires": {
          "@babel/compat-data": "^7.8.6",
          "browserslist": "^4.9.1",
          "invariant": "^2.2.4",
          "levenary": "^1.1.1",
          "semver": "^5.5.0"
        },
        "dependencies": {
          "semver": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
          }
        }
      },
      "@babel/helper-create-class-features-plugin": {
        "version": "7.9.5",
        "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.9.5.tgz",
        "integrity": "sha512-IipaxGaQmW4TfWoXdqjY0TzoXQ1HRS0kPpEgvjosb3u7Uedcq297xFqDQiCcQtRRwzIMif+N1MLVI8C5a4/PAA==",
        "requires": {
          "@babel/helper-function-name": "^7.9.5",
          "@babel/helper-member-expression-to-functions": "^7.8.3",
          "@babel/helper-optimise-call-expression": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/helper-replace-supers": "^7.8.6",
          "@babel/helper-split-export-declaration": "^7.8.3"
        }
      },
      "@babel/helper-create-regexp-features-plugin": {
        "version": "7.8.8",
        "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.8.8.tgz",
        "integrity": "sha512-LYVPdwkrQEiX9+1R29Ld/wTrmQu1SSKYnuOk3g0CkcZMA1p0gsNxJFj/3gBdaJ7Cg0Fnek5z0DsMULePP7Lrqg==",
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.8.3",
          "@babel/helper-regex": "^7.8.3",
          "regexpu-core": "^4.7.0"
        }
      },
      "@babel/helper-define-map": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-define-map/-/helper-define-map-7.8.3.tgz",
        "integrity": "sha512-PoeBYtxoZGtct3md6xZOCWPcKuMuk3IHhgxsRRNtnNShebf4C8YonTSblsK4tvDbm+eJAw2HAPOfCr+Q/YRG/g==",
        "requires": {
          "@babel/helper-function-name": "^7.8.3",
          "@babel/types": "^7.8.3",
          "lodash": "^4.17.13"
        }
      },
      "@babel/helper-explode-assignable-expression": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.8.3.tgz",
        "integrity": "sha512-N+8eW86/Kj147bO9G2uclsg5pwfs/fqqY5rwgIL7eTBklgXjcOJ3btzS5iM6AitJcftnY7pm2lGsrJVYLGjzIw==",
        "requires": {
          "@babel/traverse": "^7.8.3",
          "@babel/types": "^7.8.3"
        }
      },
      "@babel/helper-function-name": {
        "version": "7.9.5",
        "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.9.5.tgz",
        "integrity": "sha512-JVcQZeXM59Cd1qanDUxv9fgJpt3NeKUaqBqUEvfmQ+BCOKq2xUgaWZW2hr0dkbyJgezYuplEoh5knmrnS68efw==",
        "requires": {
          "@babel/helper-get-function-arity": "^7.8.3",
          "@babel/template": "^7.8.3",
          "@babel/types": "^7.9.5"
        }
      },
      "@babel/helper-get-function-arity": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.8.3.tgz",
        "integrity": "sha512-FVDR+Gd9iLjUMY1fzE2SR0IuaJToR4RkCDARVfsBBPSP53GEqSFjD8gNyxg246VUyc/ALRxFaAK8rVG7UT7xRA==",
        "requires": {
          "@babel/types": "^7.8.3"
        }
      },
      "@babel/helper-hoist-variables": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.8.3.tgz",
        "integrity": "sha512-ky1JLOjcDUtSc+xkt0xhYff7Z6ILTAHKmZLHPxAhOP0Nd77O+3nCsd6uSVYur6nJnCI029CrNbYlc0LoPfAPQg==",
        "requires": {
          "@babel/types": "^7.8.3"
        }
      },
      "@babel/helper-member-expression-to-functions": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.8.3.tgz",
        "integrity": "sha512-fO4Egq88utkQFjbPrSHGmGLFqmrshs11d46WI+WZDESt7Wu7wN2G2Iu+NMMZJFDOVRHAMIkB5SNh30NtwCA7RA==",
        "requires": {
          "@babel/types": "^7.8.3"
        }
      },
      "@babel/helper-module-imports": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.8.3.tgz",
        "integrity": "sha512-R0Bx3jippsbAEtzkpZ/6FIiuzOURPcMjHp+Z6xPe6DtApDJx+w7UYyOLanZqO8+wKR9G10s/FmHXvxaMd9s6Kg==",
        "requires": {
          "@babel/types": "^7.8.3"
        }
      },
      "@babel/helper-module-transforms": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.9.0.tgz",
        "integrity": "sha512-0FvKyu0gpPfIQ8EkxlrAydOWROdHpBmiCiRwLkUiBGhCUPRRbVD2/tm3sFr/c/GWFrQ/ffutGUAnx7V0FzT2wA==",
        "requires": {
          "@babel/helper-module-imports": "^7.8.3",
          "@babel/helper-replace-supers": "^7.8.6",
          "@babel/helper-simple-access": "^7.8.3",
          "@babel/helper-split-export-declaration": "^7.8.3",
          "@babel/template": "^7.8.6",
          "@babel/types": "^7.9.0",
          "lodash": "^4.17.13"
        }
      },
      "@babel/helper-optimise-call-expression": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.8.3.tgz",
        "integrity": "sha512-Kag20n86cbO2AvHca6EJsvqAd82gc6VMGule4HwebwMlwkpXuVqrNRj6CkCV2sKxgi9MyAUnZVnZ6lJ1/vKhHQ==",
        "requires": {
          "@babel/types": "^7.8.3"
        }
      },
      "@babel/helper-plugin-utils": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.8.3.tgz",
        "integrity": "sha512-j+fq49Xds2smCUNYmEHF9kGNkhbet6yVIBp4e6oeQpH1RUs/Ir06xUKzDjDkGcaaokPiTNs2JBWHjaE4csUkZQ=="
      },
      "@babel/helper-regex": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-regex/-/helper-regex-7.8.3.tgz",
        "integrity": "sha512-BWt0QtYv/cg/NecOAZMdcn/waj/5P26DR4mVLXfFtDokSR6fyuG0Pj+e2FqtSME+MqED1khnSMulkmGl8qWiUQ==",
        "requires": {
          "lodash": "^4.17.13"
        }
      },
      "@babel/helper-remap-async-to-generator": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.8.3.tgz",
        "integrity": "sha512-kgwDmw4fCg7AVgS4DukQR/roGp+jP+XluJE5hsRZwxCYGg+Rv9wSGErDWhlI90FODdYfd4xG4AQRiMDjjN0GzA==",
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.8.3",
          "@babel/helper-wrap-function": "^7.8.3",
          "@babel/template": "^7.8.3",
          "@babel/traverse": "^7.8.3",
          "@babel/types": "^7.8.3"
        }
      },
      "@babel/helper-replace-supers": {
        "version": "7.8.6",
        "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.8.6.tgz",
        "integrity": "sha512-PeMArdA4Sv/Wf4zXwBKPqVj7n9UF/xg6slNRtZW84FM7JpE1CbG8B612FyM4cxrf4fMAMGO0kR7voy1ForHHFA==",
        "requires": {
          "@babel/helper-member-expression-to-functions": "^7.8.3",
          "@babel/helper-optimise-call-expression": "^7.8.3",
          "@babel/traverse": "^7.8.6",
          "@babel/types": "^7.8.6"
        }
      },
      "@babel/helper-simple-access": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.8.3.tgz",
        "integrity": "sha512-VNGUDjx5cCWg4vvCTR8qQ7YJYZ+HBjxOgXEl7ounz+4Sn7+LMD3CFrCTEU6/qXKbA2nKg21CwhhBzO0RpRbdCw==",
        "requires": {
          "@babel/template": "^7.8.3",
          "@babel/types": "^7.8.3"
        }
      },
      "@babel/helper-split-export-declaration": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.8.3.tgz",
        "integrity": "sha512-3x3yOeyBhW851hroze7ElzdkeRXQYQbFIb7gLK1WQYsw2GWDay5gAJNw1sWJ0VFP6z5J1whqeXH/WCdCjZv6dA==",
        "requires": {
          "@babel/types": "^7.8.3"
        }
      },
      "@babel/helper-validator-identifier": {
        "version": "7.9.5",
        "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.9.5.tgz",
        "integrity": "sha512-/8arLKUFq882w4tWGj9JYzRpAlZgiWUJ+dtteNTDqrRBz9Iguck9Rn3ykuBDoUwh2TO4tSAJlrxDUOXWklJe4g=="
      },
      "@babel/helper-wrap-function": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.8.3.tgz",
        "integrity": "sha512-LACJrbUET9cQDzb6kG7EeD7+7doC3JNvUgTEQOx2qaO1fKlzE/Bf05qs9w1oXQMmXlPO65lC3Tq9S6gZpTErEQ==",
        "requires": {
          "@babel/helper-function-name": "^7.8.3",
          "@babel/template": "^7.8.3",
          "@babel/traverse": "^7.8.3",
          "@babel/types": "^7.8.3"
        }
      },
      "@babel/helpers": {
        "version": "7.9.2",
        "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.9.2.tgz",
        "integrity": "sha512-JwLvzlXVPjO8eU9c/wF9/zOIN7X6h8DYf7mG4CiFRZRvZNKEF5dQ3H3V+ASkHoIB3mWhatgl5ONhyqHRI6MppA==",
        "requires": {
          "@babel/template": "^7.8.3",
          "@babel/traverse": "^7.9.0",
          "@babel/types": "^7.9.0"
        }
      },
      "@babel/highlight": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.9.0.tgz",
        "integrity": "sha512-lJZPilxX7Op3Nv/2cvFdnlepPXDxi29wxteT57Q965oc5R9v86ztx0jfxVrTcBk8C2kcPkkDa2Z4T3ZsPPVWsQ==",
        "requires": {
          "@babel/helper-validator-identifier": "^7.9.0",
          "chalk": "^2.0.0",
          "js-tokens": "^4.0.0"
        },
        "dependencies": {
          "chalk": {
            "version": "2.4.2",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
            "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
            "requires": {
              "ansi-styles": "^3.2.1",
              "escape-string-regexp": "^1.0.5",
              "supports-color": "^5.3.0"
            }
          }
        }
      },
      "@babel/parser": {
        "version": "7.9.4",
        "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.9.4.tgz",
        "integrity": "sha512-bC49otXX6N0/VYhgOMh4gnP26E9xnDZK3TmbNpxYzzz9BQLBosQwfyOe9/cXUU3txYhTzLCbcqd5c8y/OmCjHA=="
      },
      "@babel/plugin-proposal-async-generator-functions": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.8.3.tgz",
        "integrity": "sha512-NZ9zLv848JsV3hs8ryEh7Uaz/0KsmPLqv0+PdkDJL1cJy0K4kOCFa8zc1E3mp+RHPQcpdfb/6GovEsW4VDrOMw==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/helper-remap-async-to-generator": "^7.8.3",
          "@babel/plugin-syntax-async-generators": "^7.8.0"
        }
      },
      "@babel/plugin-proposal-class-properties": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.8.3.tgz",
        "integrity": "sha512-EqFhbo7IosdgPgZggHaNObkmO1kNUe3slaKu54d5OWvy+p9QIKOzK1GAEpAIsZtWVtPXUHSMcT4smvDrCfY4AA==",
        "requires": {
          "@babel/helper-create-class-features-plugin": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-proposal-decorators": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-decorators/-/plugin-proposal-decorators-7.8.3.tgz",
        "integrity": "sha512-e3RvdvS4qPJVTe288DlXjwKflpfy1hr0j5dz5WpIYYeP7vQZg2WfAEIp8k5/Lwis/m5REXEteIz6rrcDtXXG7w==",
        "requires": {
          "@babel/helper-create-class-features-plugin": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-decorators": "^7.8.3"
        }
      },
      "@babel/plugin-proposal-dynamic-import": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.8.3.tgz",
        "integrity": "sha512-NyaBbyLFXFLT9FP+zk0kYlUlA8XtCUbehs67F0nnEg7KICgMc2mNkIeu9TYhKzyXMkrapZFwAhXLdnt4IYHy1w==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-dynamic-import": "^7.8.0"
        }
      },
      "@babel/plugin-proposal-json-strings": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.8.3.tgz",
        "integrity": "sha512-KGhQNZ3TVCQG/MjRbAUwuH+14y9q0tpxs1nWWs3pbSleRdDro9SAMMDyye8HhY1gqZ7/NqIc8SKhya0wRDgP1Q==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-json-strings": "^7.8.0"
        }
      },
      "@babel/plugin-proposal-nullish-coalescing-operator": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.8.3.tgz",
        "integrity": "sha512-TS9MlfzXpXKt6YYomudb/KU7nQI6/xnapG6in1uZxoxDghuSMZsPb6D2fyUwNYSAp4l1iR7QtFOjkqcRYcUsfw==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0"
        }
      },
      "@babel/plugin-proposal-numeric-separator": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.8.3.tgz",
        "integrity": "sha512-jWioO1s6R/R+wEHizfaScNsAx+xKgwTLNXSh7tTC4Usj3ItsPEhYkEpU4h+lpnBwq7NBVOJXfO6cRFYcX69JUQ==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-numeric-separator": "^7.8.3"
        }
      },
      "@babel/plugin-proposal-object-rest-spread": {
        "version": "7.9.5",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.9.5.tgz",
        "integrity": "sha512-VP2oXvAf7KCYTthbUHwBlewbl1Iq059f6seJGsxMizaCdgHIeczOr7FBqELhSqfkIl04Fi8okzWzl63UKbQmmg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
          "@babel/plugin-transform-parameters": "^7.9.5"
        }
      },
      "@babel/plugin-proposal-optional-catch-binding": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.8.3.tgz",
        "integrity": "sha512-0gkX7J7E+AtAw9fcwlVQj8peP61qhdg/89D5swOkjYbkboA2CVckn3kiyum1DE0wskGb7KJJxBdyEBApDLLVdw==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-optional-catch-binding": "^7.8.0"
        }
      },
      "@babel/plugin-proposal-optional-chaining": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.9.0.tgz",
        "integrity": "sha512-NDn5tu3tcv4W30jNhmc2hyD5c56G6cXx4TesJubhxrJeCvuuMpttxr0OnNCqbZGhFjLrg+NIhxxC+BK5F6yS3w==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-optional-chaining": "^7.8.0"
        }
      },
      "@babel/plugin-proposal-unicode-property-regex": {
        "version": "7.8.8",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.8.8.tgz",
        "integrity": "sha512-EVhjVsMpbhLw9ZfHWSx2iy13Q8Z/eg8e8ccVWt23sWQK5l1UdkoLJPN5w69UA4uITGBnEZD2JOe4QOHycYKv8A==",
        "requires": {
          "@babel/helper-create-regexp-features-plugin": "^7.8.8",
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-syntax-async-generators": {
        "version": "7.8.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
        "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-decorators": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-decorators/-/plugin-syntax-decorators-7.8.3.tgz",
        "integrity": "sha512-8Hg4dNNT9/LcA1zQlfwuKR8BUc/if7Q7NkTam9sGTcJphLwpf2g4S42uhspQrIrR+dpzE0dtTqBVFoHl8GtnnQ==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-syntax-dynamic-import": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
        "integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-flow": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-flow/-/plugin-syntax-flow-7.8.3.tgz",
        "integrity": "sha512-innAx3bUbA0KSYj2E2MNFSn9hiCeowOFLxlsuhXzw8hMQnzkDomUr9QCD7E9VF60NmnG1sNTuuv6Qf4f8INYsg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-syntax-json-strings": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
        "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-jsx": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.8.3.tgz",
        "integrity": "sha512-WxdW9xyLgBdefoo0Ynn3MRSkhe5tFVxxKNVdnZSh318WrG2e2jH+E9wd/++JsqcLJZPfz87njQJ8j2Upjm0M0A==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-syntax-nullish-coalescing-operator": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
        "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-numeric-separator": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.8.3.tgz",
        "integrity": "sha512-H7dCMAdN83PcCmqmkHB5dtp+Xa9a6LKSvA2hiFBC/5alSHxM5VgWZXFqDi0YFe8XNGT6iCa+z4V4zSt/PdZ7Dw==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-syntax-object-rest-spread": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
        "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-optional-catch-binding": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
        "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-optional-chaining": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
        "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-top-level-await": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.8.3.tgz",
        "integrity": "sha512-kwj1j9lL/6Wd0hROD3b/OZZ7MSrZLqqn9RAZ5+cYYsflQ9HZBIKCUkr3+uL1MEJ1NePiUbf98jjiMQSv0NMR9g==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-syntax-typescript": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.8.3.tgz",
        "integrity": "sha512-GO1MQ/SGGGoiEXY0e0bSpHimJvxqB7lktLLIq2pv8xG7WZ8IMEle74jIe1FhprHBWjwjZtXHkycDLZXIWM5Wfg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-arrow-functions": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.8.3.tgz",
        "integrity": "sha512-0MRF+KC8EqH4dbuITCWwPSzsyO3HIWWlm30v8BbbpOrS1B++isGxPnnuq/IZvOX5J2D/p7DQalQm+/2PnlKGxg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-async-to-generator": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.8.3.tgz",
        "integrity": "sha512-imt9tFLD9ogt56Dd5CI/6XgpukMwd/fLGSrix2httihVe7LOGVPhyhMh1BU5kDM7iHD08i8uUtmV2sWaBFlHVQ==",
        "requires": {
          "@babel/helper-module-imports": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/helper-remap-async-to-generator": "^7.8.3"
        }
      },
      "@babel/plugin-transform-block-scoped-functions": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.8.3.tgz",
        "integrity": "sha512-vo4F2OewqjbB1+yaJ7k2EJFHlTP3jR634Z9Cj9itpqNjuLXvhlVxgnjsHsdRgASR8xYDrx6onw4vW5H6We0Jmg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-block-scoping": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.8.3.tgz",
        "integrity": "sha512-pGnYfm7RNRgYRi7bids5bHluENHqJhrV4bCZRwc5GamaWIIs07N4rZECcmJL6ZClwjDz1GbdMZFtPs27hTB06w==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "lodash": "^4.17.13"
        }
      },
      "@babel/plugin-transform-classes": {
        "version": "7.9.5",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.9.5.tgz",
        "integrity": "sha512-x2kZoIuLC//O5iA7PEvecB105o7TLzZo8ofBVhP79N+DO3jaX+KYfww9TQcfBEZD0nikNyYcGB1IKtRq36rdmg==",
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.8.3",
          "@babel/helper-define-map": "^7.8.3",
          "@babel/helper-function-name": "^7.9.5",
          "@babel/helper-optimise-call-expression": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/helper-replace-supers": "^7.8.6",
          "@babel/helper-split-export-declaration": "^7.8.3",
          "globals": "^11.1.0"
        }
      },
      "@babel/plugin-transform-computed-properties": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.8.3.tgz",
        "integrity": "sha512-O5hiIpSyOGdrQZRQ2ccwtTVkgUDBBiCuK//4RJ6UfePllUTCENOzKxfh6ulckXKc0DixTFLCfb2HVkNA7aDpzA==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-destructuring": {
        "version": "7.9.5",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.9.5.tgz",
        "integrity": "sha512-j3OEsGel8nHL/iusv/mRd5fYZ3DrOxWC82x0ogmdN/vHfAP4MYw+AFKYanzWlktNwikKvlzUV//afBW5FTp17Q==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-dotall-regex": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.8.3.tgz",
        "integrity": "sha512-kLs1j9Nn4MQoBYdRXH6AeaXMbEJFaFu/v1nQkvib6QzTj8MZI5OQzqmD83/2jEM1z0DLilra5aWO5YpyC0ALIw==",
        "requires": {
          "@babel/helper-create-regexp-features-plugin": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-duplicate-keys": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.8.3.tgz",
        "integrity": "sha512-s8dHiBUbcbSgipS4SMFuWGqCvyge5V2ZeAWzR6INTVC3Ltjig/Vw1G2Gztv0vU/hRG9X8IvKvYdoksnUfgXOEQ==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-exponentiation-operator": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.8.3.tgz",
        "integrity": "sha512-zwIpuIymb3ACcInbksHaNcR12S++0MDLKkiqXHl3AzpgdKlFNhog+z/K0+TGW+b0w5pgTq4H6IwV/WhxbGYSjQ==",
        "requires": {
          "@babel/helper-builder-binary-assignment-operator-visitor": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-flow-strip-types": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-flow-strip-types/-/plugin-transform-flow-strip-types-7.9.0.tgz",
        "integrity": "sha512-7Qfg0lKQhEHs93FChxVLAvhBshOPQDtJUTVHr/ZwQNRccCm4O9D79r9tVSoV8iNwjP1YgfD+e/fgHcPkN1qEQg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-flow": "^7.8.3"
        }
      },
      "@babel/plugin-transform-for-of": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.9.0.tgz",
        "integrity": "sha512-lTAnWOpMwOXpyDx06N+ywmF3jNbafZEqZ96CGYabxHrxNX8l5ny7dt4bK/rGwAh9utyP2b2Hv7PlZh1AAS54FQ==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-function-name": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.8.3.tgz",
        "integrity": "sha512-rO/OnDS78Eifbjn5Py9v8y0aR+aSYhDhqAwVfsTl0ERuMZyr05L1aFSCJnbv2mmsLkit/4ReeQ9N2BgLnOcPCQ==",
        "requires": {
          "@babel/helper-function-name": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-literals": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.8.3.tgz",
        "integrity": "sha512-3Tqf8JJ/qB7TeldGl+TT55+uQei9JfYaregDcEAyBZ7akutriFrt6C/wLYIer6OYhleVQvH/ntEhjE/xMmy10A==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-member-expression-literals": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.8.3.tgz",
        "integrity": "sha512-3Wk2EXhnw+rP+IDkK6BdtPKsUE5IeZ6QOGrPYvw52NwBStw9V1ZVzxgK6fSKSxqUvH9eQPR3tm3cOq79HlsKYA==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-modules-amd": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.9.0.tgz",
        "integrity": "sha512-vZgDDF003B14O8zJy0XXLnPH4sg+9X5hFBBGN1V+B2rgrB+J2xIypSN6Rk9imB2hSTHQi5OHLrFWsZab1GMk+Q==",
        "requires": {
          "@babel/helper-module-transforms": "^7.9.0",
          "@babel/helper-plugin-utils": "^7.8.3",
          "babel-plugin-dynamic-import-node": "^2.3.0"
        }
      },
      "@babel/plugin-transform-modules-commonjs": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.9.0.tgz",
        "integrity": "sha512-qzlCrLnKqio4SlgJ6FMMLBe4bySNis8DFn1VkGmOcxG9gqEyPIOzeQrA//u0HAKrWpJlpZbZMPB1n/OPa4+n8g==",
        "requires": {
          "@babel/helper-module-transforms": "^7.9.0",
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/helper-simple-access": "^7.8.3",
          "babel-plugin-dynamic-import-node": "^2.3.0"
        }
      },
      "@babel/plugin-transform-modules-systemjs": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.9.0.tgz",
        "integrity": "sha512-FsiAv/nao/ud2ZWy4wFacoLOm5uxl0ExSQ7ErvP7jpoihLR6Cq90ilOFyX9UXct3rbtKsAiZ9kFt5XGfPe/5SQ==",
        "requires": {
          "@babel/helper-hoist-variables": "^7.8.3",
          "@babel/helper-module-transforms": "^7.9.0",
          "@babel/helper-plugin-utils": "^7.8.3",
          "babel-plugin-dynamic-import-node": "^2.3.0"
        }
      },
      "@babel/plugin-transform-modules-umd": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.9.0.tgz",
        "integrity": "sha512-uTWkXkIVtg/JGRSIABdBoMsoIeoHQHPTL0Y2E7xf5Oj7sLqwVsNXOkNk0VJc7vF0IMBsPeikHxFjGe+qmwPtTQ==",
        "requires": {
          "@babel/helper-module-transforms": "^7.9.0",
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-named-capturing-groups-regex": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.8.3.tgz",
        "integrity": "sha512-f+tF/8UVPU86TrCb06JoPWIdDpTNSGGcAtaD9mLP0aYGA0OS0j7j7DHJR0GTFrUZPUU6loZhbsVZgTh0N+Qdnw==",
        "requires": {
          "@babel/helper-create-regexp-features-plugin": "^7.8.3"
        }
      },
      "@babel/plugin-transform-new-target": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.8.3.tgz",
        "integrity": "sha512-QuSGysibQpyxexRyui2vca+Cmbljo8bcRckgzYV4kRIsHpVeyeC3JDO63pY+xFZ6bWOBn7pfKZTqV4o/ix9sFw==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-object-super": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.8.3.tgz",
        "integrity": "sha512-57FXk+gItG/GejofIyLIgBKTas4+pEU47IXKDBWFTxdPd7F80H8zybyAY7UoblVfBhBGs2EKM+bJUu2+iUYPDQ==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/helper-replace-supers": "^7.8.3"
        }
      },
      "@babel/plugin-transform-parameters": {
        "version": "7.9.5",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.9.5.tgz",
        "integrity": "sha512-0+1FhHnMfj6lIIhVvS4KGQJeuhe1GI//h5uptK4PvLt+BGBxsoUJbd3/IW002yk//6sZPlFgsG1hY6OHLcy6kA==",
        "requires": {
          "@babel/helper-get-function-arity": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-property-literals": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.8.3.tgz",
        "integrity": "sha512-uGiiXAZMqEoQhRWMK17VospMZh5sXWg+dlh2soffpkAl96KAm+WZuJfa6lcELotSRmooLqg0MWdH6UUq85nmmg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-react-constant-elements": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-constant-elements/-/plugin-transform-react-constant-elements-7.9.0.tgz",
        "integrity": "sha512-wXMXsToAUOxJuBBEHajqKLFWcCkOSLshTI2ChCFFj1zDd7od4IOxiwLCOObNUvOpkxLpjIuaIdBMmNt6ocCPAw==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-react-display-name": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.8.3.tgz",
        "integrity": "sha512-3Jy/PCw8Fe6uBKtEgz3M82ljt+lTg+xJaM4og+eyu83qLT87ZUSckn0wy7r31jflURWLO83TW6Ylf7lyXj3m5A==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-react-jsx": {
        "version": "7.9.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.9.4.tgz",
        "integrity": "sha512-Mjqf3pZBNLt854CK0C/kRuXAnE6H/bo7xYojP+WGtX8glDGSibcwnsWwhwoSuRg0+EBnxPC1ouVnuetUIlPSAw==",
        "requires": {
          "@babel/helper-builder-react-jsx": "^7.9.0",
          "@babel/helper-builder-react-jsx-experimental": "^7.9.0",
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-jsx": "^7.8.3"
        }
      },
      "@babel/plugin-transform-react-jsx-development": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-development/-/plugin-transform-react-jsx-development-7.9.0.tgz",
        "integrity": "sha512-tK8hWKrQncVvrhvtOiPpKrQjfNX3DtkNLSX4ObuGcpS9p0QrGetKmlySIGR07y48Zft8WVgPakqd/bk46JrMSw==",
        "requires": {
          "@babel/helper-builder-react-jsx-experimental": "^7.9.0",
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-jsx": "^7.8.3"
        }
      },
      "@babel/plugin-transform-react-jsx-self": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.9.0.tgz",
        "integrity": "sha512-K2ObbWPKT7KUTAoyjCsFilOkEgMvFG+y0FqOl6Lezd0/13kMkkjHskVsZvblRPj1PHA44PrToaZANrryppzTvQ==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-jsx": "^7.8.3"
        }
      },
      "@babel/plugin-transform-react-jsx-source": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.9.0.tgz",
        "integrity": "sha512-K6m3LlSnTSfRkM6FcRk8saNEeaeyG5k7AVkBU2bZK3+1zdkSED3qNdsWrUgQBeTVD2Tp3VMmerxVO2yM5iITmw==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-jsx": "^7.8.3"
        }
      },
      "@babel/plugin-transform-regenerator": {
        "version": "7.8.7",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.8.7.tgz",
        "integrity": "sha512-TIg+gAl4Z0a3WmD3mbYSk+J9ZUH6n/Yc57rtKRnlA/7rcCvpekHXe0CMZHP1gYp7/KLe9GHTuIba0vXmls6drA==",
        "requires": {
          "regenerator-transform": "^0.14.2"
        }
      },
      "@babel/plugin-transform-reserved-words": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.8.3.tgz",
        "integrity": "sha512-mwMxcycN3omKFDjDQUl+8zyMsBfjRFr0Zn/64I41pmjv4NJuqcYlEtezwYtw9TFd9WR1vN5kiM+O0gMZzO6L0A==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-runtime": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.9.0.tgz",
        "integrity": "sha512-pUu9VSf3kI1OqbWINQ7MaugnitRss1z533436waNXp+0N3ur3zfut37sXiQMxkuCF4VUjwZucen/quskCh7NHw==",
        "requires": {
          "@babel/helper-module-imports": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3",
          "resolve": "^1.8.1",
          "semver": "^5.5.1"
        },
        "dependencies": {
          "semver": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
          }
        }
      },
      "@babel/plugin-transform-shorthand-properties": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.8.3.tgz",
        "integrity": "sha512-I9DI6Odg0JJwxCHzbzW08ggMdCezoWcuQRz3ptdudgwaHxTjxw5HgdFJmZIkIMlRymL6YiZcped4TTCB0JcC8w==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-spread": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.8.3.tgz",
        "integrity": "sha512-CkuTU9mbmAoFOI1tklFWYYbzX5qCIZVXPVy0jpXgGwkplCndQAa58s2jr66fTeQnA64bDox0HL4U56CFYoyC7g==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-sticky-regex": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.8.3.tgz",
        "integrity": "sha512-9Spq0vGCD5Bb4Z/ZXXSK5wbbLFMG085qd2vhL1JYu1WcQ5bXqZBAYRzU1d+p79GcHs2szYv5pVQCX13QgldaWw==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/helper-regex": "^7.8.3"
        }
      },
      "@babel/plugin-transform-template-literals": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.8.3.tgz",
        "integrity": "sha512-820QBtykIQOLFT8NZOcTRJ1UNuztIELe4p9DCgvj4NK+PwluSJ49we7s9FB1HIGNIYT7wFUJ0ar2QpCDj0escQ==",
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-typeof-symbol": {
        "version": "7.8.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.8.4.tgz",
        "integrity": "sha512-2QKyfjGdvuNfHsb7qnBBlKclbD4CfshH2KvDabiijLMGXPHJXGxtDzwIF7bQP+T0ysw8fYTtxPafgfs/c1Lrqg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/plugin-transform-typescript": {
        "version": "7.9.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typescript/-/plugin-transform-typescript-7.9.4.tgz",
        "integrity": "sha512-yeWeUkKx2auDbSxRe8MusAG+n4m9BFY/v+lPjmQDgOFX5qnySkUY5oXzkp6FwPdsYqnKay6lorXYdC0n3bZO7w==",
        "requires": {
          "@babel/helper-create-class-features-plugin": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-syntax-typescript": "^7.8.3"
        }
      },
      "@babel/plugin-transform-unicode-regex": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.8.3.tgz",
        "integrity": "sha512-+ufgJjYdmWfSQ+6NS9VGUR2ns8cjJjYbrbi11mZBTaWm+Fui/ncTLFF28Ei1okavY+xkojGr1eJxNsWYeA5aZw==",
        "requires": {
          "@babel/helper-create-regexp-features-plugin": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3"
        }
      },
      "@babel/preset-env": {
        "version": "7.9.5",
        "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.9.5.tgz",
        "integrity": "sha512-eWGYeADTlPJH+wq1F0wNfPbVS1w1wtmMJiYk55Td5Yu28AsdR9AsC97sZ0Qq8fHqQuslVSIYSGJMcblr345GfQ==",
        "requires": {
          "@babel/compat-data": "^7.9.0",
          "@babel/helper-compilation-targets": "^7.8.7",
          "@babel/helper-module-imports": "^7.8.3",
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-proposal-async-generator-functions": "^7.8.3",
          "@babel/plugin-proposal-dynamic-import": "^7.8.3",
          "@babel/plugin-proposal-json-strings": "^7.8.3",
          "@babel/plugin-proposal-nullish-coalescing-operator": "^7.8.3",
          "@babel/plugin-proposal-numeric-separator": "^7.8.3",
          "@babel/plugin-proposal-object-rest-spread": "^7.9.5",
          "@babel/plugin-proposal-optional-catch-binding": "^7.8.3",
          "@babel/plugin-proposal-optional-chaining": "^7.9.0",
          "@babel/plugin-proposal-unicode-property-regex": "^7.8.3",
          "@babel/plugin-syntax-async-generators": "^7.8.0",
          "@babel/plugin-syntax-dynamic-import": "^7.8.0",
          "@babel/plugin-syntax-json-strings": "^7.8.0",
          "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0",
          "@babel/plugin-syntax-numeric-separator": "^7.8.0",
          "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
          "@babel/plugin-syntax-optional-catch-binding": "^7.8.0",
          "@babel/plugin-syntax-optional-chaining": "^7.8.0",
          "@babel/plugin-syntax-top-level-await": "^7.8.3",
          "@babel/plugin-transform-arrow-functions": "^7.8.3",
          "@babel/plugin-transform-async-to-generator": "^7.8.3",
          "@babel/plugin-transform-block-scoped-functions": "^7.8.3",
          "@babel/plugin-transform-block-scoping": "^7.8.3",
          "@babel/plugin-transform-classes": "^7.9.5",
          "@babel/plugin-transform-computed-properties": "^7.8.3",
          "@babel/plugin-transform-destructuring": "^7.9.5",
          "@babel/plugin-transform-dotall-regex": "^7.8.3",
          "@babel/plugin-transform-duplicate-keys": "^7.8.3",
          "@babel/plugin-transform-exponentiation-operator": "^7.8.3",
          "@babel/plugin-transform-for-of": "^7.9.0",
          "@babel/plugin-transform-function-name": "^7.8.3",
          "@babel/plugin-transform-literals": "^7.8.3",
          "@babel/plugin-transform-member-expression-literals": "^7.8.3",
          "@babel/plugin-transform-modules-amd": "^7.9.0",
          "@babel/plugin-transform-modules-commonjs": "^7.9.0",
          "@babel/plugin-transform-modules-systemjs": "^7.9.0",
          "@babel/plugin-transform-modules-umd": "^7.9.0",
          "@babel/plugin-transform-named-capturing-groups-regex": "^7.8.3",
          "@babel/plugin-transform-new-target": "^7.8.3",
          "@babel/plugin-transform-object-super": "^7.8.3",
          "@babel/plugin-transform-parameters": "^7.9.5",
          "@babel/plugin-transform-property-literals": "^7.8.3",
          "@babel/plugin-transform-regenerator": "^7.8.7",
          "@babel/plugin-transform-reserved-words": "^7.8.3",
          "@babel/plugin-transform-shorthand-properties": "^7.8.3",
          "@babel/plugin-transform-spread": "^7.8.3",
          "@babel/plugin-transform-sticky-regex": "^7.8.3",
          "@babel/plugin-transform-template-literals": "^7.8.3",
          "@babel/plugin-transform-typeof-symbol": "^7.8.4",
          "@babel/plugin-transform-unicode-regex": "^7.8.3",
          "@babel/preset-modules": "^0.1.3",
          "@babel/types": "^7.9.5",
          "browserslist": "^4.9.1",
          "core-js-compat": "^3.6.2",
          "invariant": "^2.2.2",
          "levenary": "^1.1.1",
          "semver": "^5.5.0"
        },
        "dependencies": {
          "semver": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
          }
        }
      },
      "@babel/preset-modules": {
        "version": "0.1.3",
        "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.3.tgz",
        "integrity": "sha512-Ra3JXOHBq2xd56xSF7lMKXdjBn3T772Y1Wet3yWnkDly9zHvJki029tAFzvAAK5cf4YV3yoxuP61crYRol6SVg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.0.0",
          "@babel/plugin-proposal-unicode-property-regex": "^7.4.4",
          "@babel/plugin-transform-dotall-regex": "^7.4.4",
          "@babel/types": "^7.4.4",
          "esutils": "^2.0.2"
        }
      },
      "@babel/preset-react": {
        "version": "7.9.4",
        "resolved": "https://registry.npmjs.org/@babel/preset-react/-/preset-react-7.9.4.tgz",
        "integrity": "sha512-AxylVB3FXeOTQXNXyiuAQJSvss62FEotbX2Pzx3K/7c+MKJMdSg6Ose6QYllkdCFA8EInCJVw7M/o5QbLuA4ZQ==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-transform-react-display-name": "^7.8.3",
          "@babel/plugin-transform-react-jsx": "^7.9.4",
          "@babel/plugin-transform-react-jsx-development": "^7.9.0",
          "@babel/plugin-transform-react-jsx-self": "^7.9.0",
          "@babel/plugin-transform-react-jsx-source": "^7.9.0"
        }
      },
      "@babel/preset-typescript": {
        "version": "7.9.0",
        "resolved": "https://registry.npmjs.org/@babel/preset-typescript/-/preset-typescript-7.9.0.tgz",
        "integrity": "sha512-S4cueFnGrIbvYJgwsVFKdvOmpiL0XGw9MFW9D0vgRys5g36PBhZRL8NX8Gr2akz8XRtzq6HuDXPD/1nniagNUg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.3",
          "@babel/plugin-transform-typescript": "^7.9.0"
        }
      },
      "@babel/runtime": {
        "version": "7.9.2",
        "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.9.2.tgz",
        "integrity": "sha512-NE2DtOdufG7R5vnfQUTehdTfNycfUANEtCa9PssN9O/xmTzP4E08UI797ixaei6hBEVL9BI/PsdJS5x7mWoB9Q==",
        "requires": {
          "regenerator-runtime": "^0.13.4"
        }
      },
      "@babel/runtime-corejs3": {
        "version": "7.9.2",
        "resolved": "https://registry.npmjs.org/@babel/runtime-corejs3/-/runtime-corejs3-7.9.2.tgz",
        "integrity": "sha512-HHxmgxbIzOfFlZ+tdeRKtaxWOMUoCG5Mu3wKeUmOxjYrwb3AAHgnmtCUbPPK11/raIWLIBK250t8E2BPO0p7jA==",
        "requires": {
          "core-js-pure": "^3.0.0",
          "regenerator-runtime": "^0.13.4"
        }
      },
      "@babel/template": {
        "version": "7.8.6",
        "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.8.6.tgz",
        "integrity": "sha512-zbMsPMy/v0PWFZEhQJ66bqjhH+z0JgMoBWuikXybgG3Gkd/3t5oQ1Rw2WQhnSrsOmsKXnZOx15tkC4qON/+JPg==",
        "requires": {
          "@babel/code-frame": "^7.8.3",
          "@babel/parser": "^7.8.6",
          "@babel/types": "^7.8.6"
        }
      },
      "@babel/traverse": {
        "version": "7.9.5",
        "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.9.5.tgz",
        "integrity": "sha512-c4gH3jsvSuGUezlP6rzSJ6jf8fYjLj3hsMZRx/nX0h+fmHN0w+ekubRrHPqnMec0meycA2nwCsJ7dC8IPem2FQ==",
        "requires": {
          "@babel/code-frame": "^7.8.3",
          "@babel/generator": "^7.9.5",
          "@babel/helper-function-name": "^7.9.5",
          "@babel/helper-split-export-declaration": "^7.8.3",
          "@babel/parser": "^7.9.0",
          "@babel/types": "^7.9.5",
          "debug": "^4.1.0",
          "globals": "^11.1.0",
          "lodash": "^4.17.13"
        },
        "dependencies": {
          "debug": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
            "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
            "requires": {
              "ms": "^2.1.1"
            }
          },
          "globals": {
            "version": "11.12.0",
            "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
            "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA=="
          },
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
          }
        }
      },
      "@babel/types": {
        "version": "7.9.5",
        "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.9.5.tgz",
        "integrity": "sha512-XjnvNqenk818r5zMaba+sLQjnbda31UfUURv3ei0qPQw4u+j2jMyJ5b11y8ZHYTRSI3NnInQkkkRT4fLqqPdHg==",
        "requires": {
          "@babel/helper-validator-identifier": "^7.9.5",
          "lodash": "^4.17.13",
          "to-fast-properties": "^2.0.0"
        },
        "dependencies": {
          "to-fast-properties": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
            "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4="
          }
        }
      },
      "@cnakazawa/watch": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/@cnakazawa/watch/-/watch-1.0.4.tgz",
        "integrity": "sha512-v9kIhKwjeZThiWrLmj0y17CWoyddASLj9O2yvbZkbvw/N3rWOYy9zkV66ursAoVr0mV15bL8g0c4QZUE6cdDoQ==",
        "requires": {
          "exec-sh": "^0.3.2",
          "minimist": "^1.2.0"
        }
      },
      "@csstools/convert-colors": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/@csstools/convert-colors/-/convert-colors-1.4.0.tgz",
        "integrity": "sha512-5a6wqoJV/xEdbRNKVo6I4hO3VjyDq//8q2f9I6PBAvMesJHFauXDorcNCsr9RzvsZnaWi5NYCcfyqP1QeFHFbw=="
      },
      "@csstools/normalize.css": {
        "version": "10.1.0",
        "resolved": "https://registry.npmjs.org/@csstools/normalize.css/-/normalize.css-10.1.0.tgz",
        "integrity": "sha512-ij4wRiunFfaJxjB0BdrYHIH8FxBJpOwNPhhAcunlmPdXudL1WQV1qoP9un6JsEBAgQH+7UXyyjh0g7jTxXK6tg=="
      },
      "@emotion/is-prop-valid": {
        "version": "0.8.8",
        "resolved": "https://registry.npmjs.org/@emotion/is-prop-valid/-/is-prop-valid-0.8.8.tgz",
        "integrity": "sha512-u5WtneEAr5IDG2Wv65yhunPSMLIpuKsbuOktRojfrEiEvRyC85LgPMZI63cr7NUqT8ZIGdSVg8ZKGxIug4lXcA==",
        "requires": {
          "@emotion/memoize": "0.7.4"
        }
      },
      "@emotion/memoize": {
        "version": "0.7.4",
        "resolved": "https://registry.npmjs.org/@emotion/memoize/-/memoize-0.7.4.tgz",
        "integrity": "sha512-Ja/Vfqe3HpuzRsG1oBtWTHk2PGZ7GR+2Vz5iYGelAw8dx32K0y7PjVuxK6z1nMpZOqAFsRUPCkK1YjJ56qJlgw=="
      },
      "@emotion/stylis": {
        "version": "0.8.5",
        "resolved": "https://registry.npmjs.org/@emotion/stylis/-/stylis-0.8.5.tgz",
        "integrity": "sha512-h6KtPihKFn3T9fuIrwvXXUOwlx3rfUvfZIcP5a6rh8Y7zjE3O06hT5Ss4S/YI1AYhuZ1kjaE/5EaOOI2NqSylQ=="
      },
      "@emotion/unitless": {
        "version": "0.7.5",
        "resolved": "https://registry.npmjs.org/@emotion/unitless/-/unitless-0.7.5.tgz",
        "integrity": "sha512-OWORNpfjMsSSUBVrRBVGECkhWcULOAJz9ZW8uK9qgxD+87M7jHRcvh/A96XXNhXTLmKcoYSQtBEX7lHMO7YRwg=="
      },
      "@hapi/address": {
        "version": "2.1.4",
        "resolved": "https://registry.npmjs.org/@hapi/address/-/address-2.1.4.tgz",
        "integrity": "sha512-QD1PhQk+s31P1ixsX0H0Suoupp3VMXzIVMSwobR3F3MSUO2YCV0B7xqLcUw/Bh8yuvd3LhpyqLQWTNcRmp6IdQ=="
      },
      "@hapi/bourne": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/@hapi/bourne/-/bourne-1.3.2.tgz",
        "integrity": "sha512-1dVNHT76Uu5N3eJNTYcvxee+jzX4Z9lfciqRRHCU27ihbUcYi+iSc2iml5Ke1LXe1SyJCLA0+14Jh4tXJgOppA=="
      },
      "@hapi/hoek": {
        "version": "8.5.1",
        "resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-8.5.1.tgz",
        "integrity": "sha512-yN7kbciD87WzLGc5539Tn0sApjyiGHAJgKvG9W8C7O+6c7qmoQMfVs0W4bX17eqz6C78QJqqFrtgdK5EWf6Qow=="
      },
      "@hapi/joi": {
        "version": "15.1.1",
        "resolved": "https://registry.npmjs.org/@hapi/joi/-/joi-15.1.1.tgz",
        "integrity": "sha512-entf8ZMOK8sc+8YfeOlM8pCfg3b5+WZIKBfUaaJT8UsjAAPjartzxIYm3TIbjvA4u+u++KbcXD38k682nVHDAQ==",
        "requires": {
          "@hapi/address": "2.x.x",
          "@hapi/bourne": "1.x.x",
          "@hapi/hoek": "8.x.x",
          "@hapi/topo": "3.x.x"
        }
      },
      "@hapi/topo": {
        "version": "3.1.6",
        "resolved": "https://registry.npmjs.org/@hapi/topo/-/topo-3.1.6.tgz",
        "integrity": "sha512-tAag0jEcjwH+P2quUfipd7liWCNX2F8NvYjQp2wtInsZxnMlypdw0FtAOLxtvvkO+GSRRbmNi8m/5y42PQJYCQ==",
        "requires": {
          "@hapi/hoek": "^8.3.0"
        }
      },
      "@jest/console": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
        "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
        "requires": {
          "@jest/source-map": "^24.9.0",
          "chalk": "^2.0.1",
          "slash": "^2.0.0"
        }
      },
      "@jest/core": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/@jest/core/-/core-24.9.0.tgz",
        "integrity": "sha512-Fogg3s4wlAr1VX7q+rhV9RVnUv5tD7VuWfYy1+whMiWUrvl7U3QJSJyWcDio9Lq2prqYsZaeTv2Rz24pWGkJ2A==",
        "requires": {
          "@jest/console": "^24.7.1",
          "@jest/reporters": "^24.9.0",
          "@jest/test-result": "^24.9.0",
          "@jest/transform": "^24.9.0",
          "@jest/types": "^24.9.0",
          "ansi-escapes": "^3.0.0",
          "chalk": "^2.0.1",
          "exit": "^0.1.2",
          "graceful-fs": "^4.1.15",
          "jest-changed-files": "^24.9.0",
          "jest-config": "^24.9.0",
          "jest-haste-map": "^24.9.0",
          "jest-message-util": "^24.9.0",
          "jest-regex-util": "^24.3.0",
          "jest-resolve": "^24.9.0",
          "jest-resolve-dependencies": "^24.9.0",
          "jest-runner": "^24.9.0",
          "jest-runtime": "^24.9.0",
          "jest-snapshot": "^24.9.0",
          "jest-util": "^24.9.0",
          "jest-validate": "^24.9.0",
          "jest-watcher": "^24.9.0",
          "micromatch": "^3.1.10",
          "p-each-series": "^1.0.0",
          "realpath-native": "^1.1.0",
          "rimraf": "^2.5.4",
          "slash": "^2.0.0",
          "strip-ansi": "^5.0.0"
        },
        "dependencies": {
          "ansi-escapes": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
            "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ=="
          }
        }
      },
      "@jest/environment": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-24.9.0.tgz",
        "integrity": "sha512-5A1QluTPhvdIPFYnO3sZC3smkNeXPVELz7ikPbhUj0bQjB07EoE9qtLrem14ZUYWdVayYbsjVwIiL4WBIMV4aQ==",
        "requires": {
          "@jest/fake-timers": "^24.9.0",
          "@jest/transform": "^24.9.0",
          "@jest/types": "^24.9.0",
          "jest-mock": "^24.9.0"
        }
      },
      "@jest/fake-timers": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
        "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
        "requires": {
          "@jest/types": "^24.9.0",
          "jest-message-util": "^24.9.0",
          "jest-mock": "^24.9.0"
        }
      },
      "@jest/reporters": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/@jest/reporters/-/reporters-24.9.0.tgz",
        "integrity": "sha512-mu4X0yjaHrffOsWmVLzitKmmmWSQ3GGuefgNscUSWNiUNcEOSEQk9k3pERKEQVBb0Cnn88+UESIsZEMH3o88Gw==",
        "requires": {
          "@jest/environment": "^24.9.0",
          "@jest/test-result": "^24.9.0",
          "@jest/transform": "^24.9.0",
          "@jest/types": "^24.9.0",
          "chalk": "^2.0.1",
          "exit": "^0.1.2",
          "glob": "^7.1.2",
          "istanbul-lib-coverage": "^2.0.2",
          "istanbul-lib-instrument": "^3.0.1",
          "istanbul-lib-report": "^2.0.4",
          "istanbul-lib-source-maps": "^3.0.1",
          "istanbul-reports": "^2.2.6",
          "jest-haste-map": "^24.9.0",
          "jest-resolve": "^24.9.0",
          "jest-runtime": "^24.9.0",
          "jest-util": "^24.9.0",
          "jest-worker": "^24.6.0",
          "node-notifier": "^5.4.2",
          "slash": "^2.0.0",
          "source-map": "^0.6.0",
          "string-length": "^2.0.0"
        }
      },
      "@jest/source-map": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
        "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
        "requires": {
          "callsites": "^3.0.0",
          "graceful-fs": "^4.1.15",
          "source-map": "^0.6.0"
        },
        "dependencies": {
          "callsites": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
            "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="
          }
        }
      },
      "@jest/test-result": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
        "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
        "requires": {
          "@jest/console": "^24.9.0",
          "@jest/types": "^24.9.0",
          "@types/istanbul-lib-coverage": "^2.0.0"
        }
      },
      "@jest/test-sequencer": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-24.9.0.tgz",
        "integrity": "sha512-6qqsU4o0kW1dvA95qfNog8v8gkRN9ph6Lz7r96IvZpHdNipP2cBcb07J1Z45mz/VIS01OHJ3pY8T5fUY38tg4A==",
        "requires": {
          "@jest/test-result": "^24.9.0",
          "jest-haste-map": "^24.9.0",
          "jest-runner": "^24.9.0",
          "jest-runtime": "^24.9.0"
        }
      },
      "@jest/transform": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-24.9.0.tgz",
        "integrity": "sha512-TcQUmyNRxV94S0QpMOnZl0++6RMiqpbH/ZMccFB/amku6Uwvyb1cjYX7xkp5nGNkbX4QPH/FcB6q1HBTHynLmQ==",
        "requires": {
          "@babel/core": "^7.1.0",
          "@jest/types": "^24.9.0",
          "babel-plugin-istanbul": "^5.1.0",
          "chalk": "^2.0.1",
          "convert-source-map": "^1.4.0",
          "fast-json-stable-stringify": "^2.0.0",
          "graceful-fs": "^4.1.15",
          "jest-haste-map": "^24.9.0",
          "jest-regex-util": "^24.9.0",
          "jest-util": "^24.9.0",
          "micromatch": "^3.1.10",
          "pirates": "^4.0.1",
          "realpath-native": "^1.1.0",
          "slash": "^2.0.0",
          "source-map": "^0.6.1",
          "write-file-atomic": "2.4.1"
        }
      },
      "@jest/types": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
        "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
        "requires": {
          "@types/istanbul-lib-coverage": "^2.0.0",
          "@types/istanbul-reports": "^1.1.1",
          "@types/yargs": "^13.0.0"
        }
      },
      "@mrmlnc/readdir-enhanced": {
        "version": "2.2.1",
        "resolved": "https://registry.npmjs.org/@mrmlnc/readdir-enhanced/-/readdir-enhanced-2.2.1.tgz",
        "integrity": "sha512-bPHp6Ji8b41szTOcaP63VlnbbO5Ny6dwAATtY6JTjh5N2OLrb5Qk/Th5cRkRQhkWCt+EJsYrNB0MiL+Gpn6e3g==",
        "requires": {
          "call-me-maybe": "^1.0.1",
          "glob-to-regexp": "^0.3.0"
        }
      },
      "@nodelib/fs.stat": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-1.1.3.tgz",
        "integrity": "sha512-shAmDyaQC4H92APFoIaVDHCx5bStIocgvbwQyxPRrbUY20V1EYTbSDchWbuwlMG3V17cprZhA6+78JfB+3DTPw=="
      },
      "@sheerun/mutationobserver-shim": {
        "version": "0.3.3",
        "resolved": "https://registry.npmjs.org/@sheerun/mutationobserver-shim/-/mutationobserver-shim-0.3.3.tgz",
        "integrity": "sha512-DetpxZw1fzPD5xUBrIAoplLChO2VB8DlL5Gg+I1IR9b2wPqYIca2WSUxL5g1vLeR4MsQq1NeWriXAVffV+U1Fw=="
      },
      "@svgr/babel-plugin-add-jsx-attribute": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-add-jsx-attribute/-/babel-plugin-add-jsx-attribute-4.2.0.tgz",
        "integrity": "sha512-j7KnilGyZzYr/jhcrSYS3FGWMZVaqyCG0vzMCwzvei0coIkczuYMcniK07nI0aHJINciujjH11T72ICW5eL5Ig=="
      },
      "@svgr/babel-plugin-remove-jsx-attribute": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-remove-jsx-attribute/-/babel-plugin-remove-jsx-attribute-4.2.0.tgz",
        "integrity": "sha512-3XHLtJ+HbRCH4n28S7y/yZoEQnRpl0tvTZQsHqvaeNXPra+6vE5tbRliH3ox1yZYPCxrlqaJT/Mg+75GpDKlvQ=="
      },
      "@svgr/babel-plugin-remove-jsx-empty-expression": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-remove-jsx-empty-expression/-/babel-plugin-remove-jsx-empty-expression-4.2.0.tgz",
        "integrity": "sha512-yTr2iLdf6oEuUE9MsRdvt0NmdpMBAkgK8Bjhl6epb+eQWk6abBaX3d65UZ3E3FWaOwePyUgNyNCMVG61gGCQ7w=="
      },
      "@svgr/babel-plugin-replace-jsx-attribute-value": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-replace-jsx-attribute-value/-/babel-plugin-replace-jsx-attribute-value-4.2.0.tgz",
        "integrity": "sha512-U9m870Kqm0ko8beHawRXLGLvSi/ZMrl89gJ5BNcT452fAjtF2p4uRzXkdzvGJJJYBgx7BmqlDjBN/eCp5AAX2w=="
      },
      "@svgr/babel-plugin-svg-dynamic-title": {
        "version": "4.3.3",
        "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-svg-dynamic-title/-/babel-plugin-svg-dynamic-title-4.3.3.tgz",
        "integrity": "sha512-w3Be6xUNdwgParsvxkkeZb545VhXEwjGMwExMVBIdPQJeyMQHqm9Msnb2a1teHBqUYL66qtwfhNkbj1iarCG7w=="
      },
      "@svgr/babel-plugin-svg-em-dimensions": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-svg-em-dimensions/-/babel-plugin-svg-em-dimensions-4.2.0.tgz",
        "integrity": "sha512-C0Uy+BHolCHGOZ8Dnr1zXy/KgpBOkEUYY9kI/HseHVPeMbluaX3CijJr7D4C5uR8zrc1T64nnq/k63ydQuGt4w=="
      },
      "@svgr/babel-plugin-transform-react-native-svg": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-transform-react-native-svg/-/babel-plugin-transform-react-native-svg-4.2.0.tgz",
        "integrity": "sha512-7YvynOpZDpCOUoIVlaaOUU87J4Z6RdD6spYN4eUb5tfPoKGSF9OG2NuhgYnq4jSkAxcpMaXWPf1cePkzmqTPNw=="
      },
      "@svgr/babel-plugin-transform-svg-component": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-transform-svg-component/-/babel-plugin-transform-svg-component-4.2.0.tgz",
        "integrity": "sha512-hYfYuZhQPCBVotABsXKSCfel2slf/yvJY8heTVX1PCTaq/IgASq1IyxPPKJ0chWREEKewIU/JMSsIGBtK1KKxw=="
      },
      "@svgr/babel-preset": {
        "version": "4.3.3",
        "resolved": "https://registry.npmjs.org/@svgr/babel-preset/-/babel-preset-4.3.3.tgz",
        "integrity": "sha512-6PG80tdz4eAlYUN3g5GZiUjg2FMcp+Wn6rtnz5WJG9ITGEF1pmFdzq02597Hn0OmnQuCVaBYQE1OVFAnwOl+0A==",
        "requires": {
          "@svgr/babel-plugin-add-jsx-attribute": "^4.2.0",
          "@svgr/babel-plugin-remove-jsx-attribute": "^4.2.0",
          "@svgr/babel-plugin-remove-jsx-empty-expression": "^4.2.0",
          "@svgr/babel-plugin-replace-jsx-attribute-value": "^4.2.0",
          "@svgr/babel-plugin-svg-dynamic-title": "^4.3.3",
          "@svgr/babel-plugin-svg-em-dimensions": "^4.2.0",
          "@svgr/babel-plugin-transform-react-native-svg": "^4.2.0",
          "@svgr/babel-plugin-transform-svg-component": "^4.2.0"
        }
      },
      "@svgr/core": {
        "version": "4.3.3",
        "resolved": "https://registry.npmjs.org/@svgr/core/-/core-4.3.3.tgz",
        "integrity": "sha512-qNuGF1QON1626UCaZamWt5yedpgOytvLj5BQZe2j1k1B8DUG4OyugZyfEwBeXozCUwhLEpsrgPrE+eCu4fY17w==",
        "requires": {
          "@svgr/plugin-jsx": "^4.3.3",
          "camelcase": "^5.3.1",
          "cosmiconfig": "^5.2.1"
        }
      },
      "@svgr/hast-util-to-babel-ast": {
        "version": "4.3.2",
        "resolved": "https://registry.npmjs.org/@svgr/hast-util-to-babel-ast/-/hast-util-to-babel-ast-4.3.2.tgz",
        "integrity": "sha512-JioXclZGhFIDL3ddn4Kiq8qEqYM2PyDKV0aYno8+IXTLuYt6TOgHUbUAAFvqtb0Xn37NwP0BTHglejFoYr8RZg==",
        "requires": {
          "@babel/types": "^7.4.4"
        }
      },
      "@svgr/plugin-jsx": {
        "version": "4.3.3",
        "resolved": "https://registry.npmjs.org/@svgr/plugin-jsx/-/plugin-jsx-4.3.3.tgz",
        "integrity": "sha512-cLOCSpNWQnDB1/v+SUENHH7a0XY09bfuMKdq9+gYvtuwzC2rU4I0wKGFEp1i24holdQdwodCtDQdFtJiTCWc+w==",
        "requires": {
          "@babel/core": "^7.4.5",
          "@svgr/babel-preset": "^4.3.3",
          "@svgr/hast-util-to-babel-ast": "^4.3.2",
          "svg-parser": "^2.0.0"
        }
      },
      "@svgr/plugin-svgo": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/@svgr/plugin-svgo/-/plugin-svgo-4.3.1.tgz",
        "integrity": "sha512-PrMtEDUWjX3Ea65JsVCwTIXuSqa3CG9px+DluF1/eo9mlDrgrtFE7NE/DjdhjJgSM9wenlVBzkzneSIUgfUI/w==",
        "requires": {
          "cosmiconfig": "^5.2.1",
          "merge-deep": "^3.0.2",
          "svgo": "^1.2.2"
        }
      },
      "@svgr/webpack": {
        "version": "4.3.3",
        "resolved": "https://registry.npmjs.org/@svgr/webpack/-/webpack-4.3.3.tgz",
        "integrity": "sha512-bjnWolZ6KVsHhgyCoYRFmbd26p8XVbulCzSG53BDQqAr+JOAderYK7CuYrB3bDjHJuF6LJ7Wrr42+goLRV9qIg==",
        "requires": {
          "@babel/core": "^7.4.5",
          "@babel/plugin-transform-react-constant-elements": "^7.0.0",
          "@babel/preset-env": "^7.4.5",
          "@babel/preset-react": "^7.0.0",
          "@svgr/core": "^4.3.3",
          "@svgr/plugin-jsx": "^4.3.3",
          "@svgr/plugin-svgo": "^4.3.1",
          "loader-utils": "^1.2.3"
        }
      },
      "@testing-library/dom": {
        "version": "6.16.0",
        "resolved": "https://registry.npmjs.org/@testing-library/dom/-/dom-6.16.0.tgz",
        "integrity": "sha512-lBD88ssxqEfz0wFL6MeUyyWZfV/2cjEZZV3YRpb2IoJRej/4f1jB0TzqIOznTpfR1r34CNesrubxwIlAQ8zgPA==",
        "requires": {
          "@babel/runtime": "^7.8.4",
          "@sheerun/mutationobserver-shim": "^0.3.2",
          "@types/testing-library__dom": "^6.12.1",
          "aria-query": "^4.0.2",
          "dom-accessibility-api": "^0.3.0",
          "pretty-format": "^25.1.0",
          "wait-for-expect": "^3.0.2"
        },
        "dependencies": {
          "@jest/types": {
            "version": "25.3.0",
            "resolved": "https://registry.npmjs.org/@jest/types/-/types-25.3.0.tgz",
            "integrity": "sha512-UkaDNewdqXAmCDbN2GlUM6amDKS78eCqiw/UmF5nE0mmLTd6moJkiZJML/X52Ke3LH7Swhw883IRXq8o9nWjVw==",
            "requires": {
              "@types/istanbul-lib-coverage": "^2.0.0",
              "@types/istanbul-reports": "^1.1.1",
              "@types/yargs": "^15.0.0",
              "chalk": "^3.0.0"
            }
          },
          "@types/yargs": {
            "version": "15.0.4",
            "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-15.0.4.tgz",
            "integrity": "sha512-9T1auFmbPZoxHz0enUFlUuKRy3it01R+hlggyVUMtnCTQRunsQYifnSGb8hET4Xo8yiC0o0r1paW3ud5+rbURg==",
            "requires": {
              "@types/yargs-parser": "*"
            }
          },
          "ansi-regex": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
            "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
          },
          "ansi-styles": {
            "version": "4.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.1.tgz",
            "integrity": "sha512-9VGjrMsG1vePxcSweQsN20KY/c4zN0h9fLjqAbwbPfahM3t+NL+M9HC8xeXG2I8pX5NoamTGNuomEUFI7fcUjA==",
            "requires": {
              "@types/color-name": "^1.1.1",
              "color-convert": "^2.0.1"
            }
          },
          "aria-query": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-4.0.2.tgz",
            "integrity": "sha512-S1G1V790fTaigUSM/Gd0NngzEfiMy9uTUfMyHhKhVyy4cH5O/eTuR01ydhGL0z4Za1PXFTRGH3qL8VhUQuEO5w==",
            "requires": {
              "@babel/runtime": "^7.7.4",
              "@babel/runtime-corejs3": "^7.7.4"
            }
          },
          "chalk": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
            "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
            "requires": {
              "ansi-styles": "^4.1.0",
              "supports-color": "^7.1.0"
            }
          },
          "color-convert": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
            "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
            "requires": {
              "color-name": "~1.1.4"
            }
          },
          "color-name": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
            "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
          },
          "has-flag": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
          },
          "pretty-format": {
            "version": "25.3.0",
            "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-25.3.0.tgz",
            "integrity": "sha512-wToHwF8bkQknIcFkBqNfKu4+UZqnrLn/Vr+wwKQwwvPzkBfDDKp/qIabFqdgtoi5PEnM8LFByVsOrHoa3SpTVA==",
            "requires": {
              "@jest/types": "^25.3.0",
              "ansi-regex": "^5.0.0",
              "ansi-styles": "^4.0.0",
              "react-is": "^16.12.0"
            }
          },
          "supports-color": {
            "version": "7.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
            "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
            "requires": {
              "has-flag": "^4.0.0"
            }
          }
        }
      },
      "@testing-library/jest-dom": {
        "version": "4.2.4",
        "resolved": "https://registry.npmjs.org/@testing-library/jest-dom/-/jest-dom-4.2.4.tgz",
        "integrity": "sha512-j31Bn0rQo12fhCWOUWy9fl7wtqkp7In/YP2p5ZFyRuiiB9Qs3g+hS4gAmDWONbAHcRmVooNJ5eOHQDCOmUFXHg==",
        "requires": {
          "@babel/runtime": "^7.5.1",
          "chalk": "^2.4.1",
          "css": "^2.2.3",
          "css.escape": "^1.5.1",
          "jest-diff": "^24.0.0",
          "jest-matcher-utils": "^24.0.0",
          "lodash": "^4.17.11",
          "pretty-format": "^24.0.0",
          "redent": "^3.0.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
            "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
          },
          "chalk": {
            "version": "2.4.2",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
            "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
            "requires": {
              "ansi-styles": "^3.2.1",
              "escape-string-regexp": "^1.0.5",
              "supports-color": "^5.3.0"
            }
          },
          "jest-diff": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-24.9.0.tgz",
            "integrity": "sha512-qMfrTs8AdJE2iqrTp0hzh7kTd2PQWrsFyj9tORoKmu32xjPjeE4NyjVRDz8ybYwqS2ik8N4hsIpiVTyFeo2lBQ==",
            "requires": {
              "chalk": "^2.0.1",
              "diff-sequences": "^24.9.0",
              "jest-get-type": "^24.9.0",
              "pretty-format": "^24.9.0"
            }
          },
          "jest-matcher-utils": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-24.9.0.tgz",
            "integrity": "sha512-OZz2IXsu6eaiMAwe67c1T+5tUAtQyQx27/EMEkbFAGiw52tB9em+uGbzpcgYVpA8wl0hlxKPZxrly4CXU/GjHA==",
            "requires": {
              "chalk": "^2.0.1",
              "jest-diff": "^24.9.0",
              "jest-get-type": "^24.9.0",
              "pretty-format": "^24.9.0"
            }
          },
          "pretty-format": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
            "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
            "requires": {
              "@jest/types": "^24.9.0",
              "ansi-regex": "^4.0.0",
              "ansi-styles": "^3.2.0",
              "react-is": "^16.8.4"
            }
          }
        }
      },
      "@testing-library/react": {
        "version": "9.5.0",
        "resolved": "https://registry.npmjs.org/@testing-library/react/-/react-9.5.0.tgz",
        "integrity": "sha512-di1b+D0p+rfeboHO5W7gTVeZDIK5+maEgstrZbWZSSvxDyfDRkkyBE1AJR5Psd6doNldluXlCWqXriUfqu/9Qg==",
        "requires": {
          "@babel/runtime": "^7.8.4",
          "@testing-library/dom": "^6.15.0",
          "@types/testing-library__react": "^9.1.2"
        }
      },
      "@testing-library/user-event": {
        "version": "7.2.1",
        "resolved": "https://registry.npmjs.org/@testing-library/user-event/-/user-event-7.2.1.tgz",
        "integrity": "sha512-oZ0Ib5I4Z2pUEcoo95cT1cr6slco9WY7yiPpG+RGNkj8YcYgJnM7pXmYmorNOReh8MIGcKSqXyeGjxnr8YiZbA=="
      },
      "@types/babel__core": {
        "version": "7.1.7",
        "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.1.7.tgz",
        "integrity": "sha512-RL62NqSFPCDK2FM1pSDH0scHpJvsXtZNiYlMB73DgPBaG1E38ZYVL+ei5EkWRbr+KC4YNiAUNBnRj+bgwpgjMw==",
        "requires": {
          "@babel/parser": "^7.1.0",
          "@babel/types": "^7.0.0",
          "@types/babel__generator": "*",
          "@types/babel__template": "*",
          "@types/babel__traverse": "*"
        }
      },
      "@types/babel__generator": {
        "version": "7.6.1",
        "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.1.tgz",
        "integrity": "sha512-bBKm+2VPJcMRVwNhxKu8W+5/zT7pwNEqeokFOmbvVSqGzFneNxYcEBro9Ac7/N9tlsaPYnZLK8J1LWKkMsLAew==",
        "requires": {
          "@babel/types": "^7.0.0"
        }
      },
      "@types/babel__template": {
        "version": "7.0.2",
        "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.0.2.tgz",
        "integrity": "sha512-/K6zCpeW7Imzgab2bLkLEbz0+1JlFSrUMdw7KoIIu+IUdu51GWaBZpd3y1VXGVXzynvGa4DaIaxNZHiON3GXUg==",
        "requires": {
          "@babel/parser": "^7.1.0",
          "@babel/types": "^7.0.0"
        }
      },
      "@types/babel__traverse": {
        "version": "7.0.10",
        "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.0.10.tgz",
        "integrity": "sha512-74fNdUGrWsgIB/V9kTO5FGHPWYY6Eqn+3Z7L6Hc4e/BxjYV7puvBqp5HwsVYYfLm6iURYBNCx4Ut37OF9yitCw==",
        "requires": {
          "@babel/types": "^7.3.0"
        }
      },
      "@types/color-name": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/@types/color-name/-/color-name-1.1.1.tgz",
        "integrity": "sha512-rr+OQyAjxze7GgWrSaJwydHStIhHq2lvY3BOC2Mj7KnzI7XK0Uw1TOOdI9lDoajEbSWLiYgoo4f1R51erQfhPQ=="
      },
      "@types/eslint-visitor-keys": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/@types/eslint-visitor-keys/-/eslint-visitor-keys-1.0.0.tgz",
        "integrity": "sha512-OCutwjDZ4aFS6PB1UZ988C4YgwlBHJd6wCeQqaLdmadZ/7e+w79+hbMUFC1QXDNCmdyoRfAFdm0RypzwR+Qpag=="
      },
      "@types/events": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/@types/events/-/events-3.0.0.tgz",
        "integrity": "sha512-EaObqwIvayI5a8dCzhFrjKzVwKLxjoG9T6Ppd5CEo07LRKfQ8Yokw54r5+Wq7FaBQ+yXRvQAYPrHwya1/UFt9g=="
      },
      "@types/glob": {
        "version": "7.1.1",
        "resolved": "https://registry.npmjs.org/@types/glob/-/glob-7.1.1.tgz",
        "integrity": "sha512-1Bh06cbWJUHMC97acuD6UMG29nMt0Aqz1vF3guLfG+kHHJhy3AyohZFFxYk2f7Q1SQIrNwvncxAE0N/9s70F2w==",
        "requires": {
          "@types/events": "*",
          "@types/minimatch": "*",
          "@types/node": "*"
        }
      },
      "@types/istanbul-lib-coverage": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.1.tgz",
        "integrity": "sha512-hRJD2ahnnpLgsj6KWMYSrmXkM3rm2Dl1qkx6IOFD5FnuNPXJIG5L0dhgKXCYTRMGzU4n0wImQ/xfmRc4POUFlg=="
      },
      "@types/istanbul-lib-report": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
        "integrity": "sha512-plGgXAPfVKFoYfa9NpYDAkseG+g6Jr294RqeqcqDixSbU34MZVJRi/P+7Y8GDpzkEwLaGZZOpKIEmeVZNtKsrg==",
        "requires": {
          "@types/istanbul-lib-coverage": "*"
        }
      },
      "@types/istanbul-reports": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.1.tgz",
        "integrity": "sha512-UpYjBi8xefVChsCoBpKShdxTllC9pwISirfoZsUa2AAdQg/Jd2KQGtSbw+ya7GPo7x/wAPlH6JBhKhAsXUEZNA==",
        "requires": {
          "@types/istanbul-lib-coverage": "*",
          "@types/istanbul-lib-report": "*"
        }
      },
      "@types/json-schema": {
        "version": "7.0.4",
        "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.4.tgz",
        "integrity": "sha512-8+KAKzEvSUdeo+kmqnKrqgeE+LcA0tjYWFY7RPProVYwnqDjukzO+3b6dLD56rYX5TdWejnEOLJYOIeh4CXKuA=="
      },
      "@types/minimatch": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/@types/minimatch/-/minimatch-3.0.3.tgz",
        "integrity": "sha512-tHq6qdbT9U1IRSGf14CL0pUlULksvY9OZ+5eEgl1N7t+OA3tGvNpxJCzuKQlsNgCVwbAs670L1vcVQi8j9HjnA=="
      },
      "@types/node": {
        "version": "13.11.1",
        "resolved": "https://registry.npmjs.org/@types/node/-/node-13.11.1.tgz",
        "integrity": "sha512-eWQGP3qtxwL8FGneRrC5DwrJLGN4/dH1clNTuLfN81HCrxVtxRjygDTUoZJ5ASlDEeo0ppYFQjQIlXhtXpOn6g=="
      },
      "@types/parse-json": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
        "integrity": "sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA=="
      },
      "@types/prop-types": {
        "version": "15.7.3",
        "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.3.tgz",
        "integrity": "sha512-KfRL3PuHmqQLOG+2tGpRO26Ctg+Cq1E01D2DMriKEATHgWLfeNDmq9e29Q9WIky0dQ3NPkd1mzYH8Lm936Z9qw=="
      },
      "@types/q": {
        "version": "1.5.2",
        "resolved": "https://registry.npmjs.org/@types/q/-/q-1.5.2.tgz",
        "integrity": "sha512-ce5d3q03Ex0sy4R14722Rmt6MT07Ua+k4FwDfdcToYJcMKNtRVQvJ6JCAPdAmAnbRb6CsX6aYb9m96NGod9uTw=="
      },
      "@types/react": {
        "version": "16.9.34",
        "resolved": "https://registry.npmjs.org/@types/react/-/react-16.9.34.tgz",
        "integrity": "sha512-8AJlYMOfPe1KGLKyHpflCg5z46n0b5DbRfqDksxBLBTUpB75ypDBAO9eCUcjNwE6LCUslwTz00yyG/X9gaVtow==",
        "requires": {
          "@types/prop-types": "*",
          "csstype": "^2.2.0"
        }
      },
      "@types/react-dom": {
        "version": "16.9.6",
        "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-16.9.6.tgz",
        "integrity": "sha512-S6ihtlPMDotrlCJE9ST1fRmYrQNNwfgL61UB4I1W7M6kPulUKx9fXAleW5zpdIjUQ4fTaaog8uERezjsGUj9HQ==",
        "requires": {
          "@types/react": "*"
        }
      },
      "@types/stack-utils": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/@types/stack-utils/-/stack-utils-1.0.1.tgz",
        "integrity": "sha512-l42BggppR6zLmpfU6fq9HEa2oGPEI8yrSPL3GITjfRInppYFahObbIQOQK3UGxEnyQpltZLaPe75046NOZQikw=="
      },
      "@types/testing-library__dom": {
        "version": "6.14.0",
        "resolved": "https://registry.npmjs.org/@types/testing-library__dom/-/testing-library__dom-6.14.0.tgz",
        "integrity": "sha512-sMl7OSv0AvMOqn1UJ6j1unPMIHRXen0Ita1ujnMX912rrOcawe4f7wu0Zt9GIQhBhJvH2BaibqFgQ3lP+Pj2hA==",
        "requires": {
          "pretty-format": "^24.3.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
            "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
          },
          "pretty-format": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
            "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
            "requires": {
              "@jest/types": "^24.9.0",
              "ansi-regex": "^4.0.0",
              "ansi-styles": "^3.2.0",
              "react-is": "^16.8.4"
            }
          }
        }
      },
      "@types/testing-library__react": {
        "version": "9.1.3",
        "resolved": "https://registry.npmjs.org/@types/testing-library__react/-/testing-library__react-9.1.3.tgz",
        "integrity": "sha512-iCdNPKU3IsYwRK9JieSYAiX0+aYDXOGAmrC/3/M7AqqSDKnWWVv07X+Zk1uFSL7cMTUYzv4lQRfohucEocn5/w==",
        "requires": {
          "@types/react-dom": "*",
          "@types/testing-library__dom": "*",
          "pretty-format": "^25.1.0"
        },
        "dependencies": {
          "@jest/types": {
            "version": "25.3.0",
            "resolved": "https://registry.npmjs.org/@jest/types/-/types-25.3.0.tgz",
            "integrity": "sha512-UkaDNewdqXAmCDbN2GlUM6amDKS78eCqiw/UmF5nE0mmLTd6moJkiZJML/X52Ke3LH7Swhw883IRXq8o9nWjVw==",
            "requires": {
              "@types/istanbul-lib-coverage": "^2.0.0",
              "@types/istanbul-reports": "^1.1.1",
              "@types/yargs": "^15.0.0",
              "chalk": "^3.0.0"
            }
          },
          "@types/yargs": {
            "version": "15.0.4",
            "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-15.0.4.tgz",
            "integrity": "sha512-9T1auFmbPZoxHz0enUFlUuKRy3it01R+hlggyVUMtnCTQRunsQYifnSGb8hET4Xo8yiC0o0r1paW3ud5+rbURg==",
            "requires": {
              "@types/yargs-parser": "*"
            }
          },
          "ansi-regex": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
            "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
          },
          "ansi-styles": {
            "version": "4.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.1.tgz",
            "integrity": "sha512-9VGjrMsG1vePxcSweQsN20KY/c4zN0h9fLjqAbwbPfahM3t+NL+M9HC8xeXG2I8pX5NoamTGNuomEUFI7fcUjA==",
            "requires": {
              "@types/color-name": "^1.1.1",
              "color-convert": "^2.0.1"
            }
          },
          "chalk": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
            "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
            "requires": {
              "ansi-styles": "^4.1.0",
              "supports-color": "^7.1.0"
            }
          },
          "color-convert": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
            "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
            "requires": {
              "color-name": "~1.1.4"
            }
          },
          "color-name": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
            "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
          },
          "has-flag": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
          },
          "pretty-format": {
            "version": "25.3.0",
            "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-25.3.0.tgz",
            "integrity": "sha512-wToHwF8bkQknIcFkBqNfKu4+UZqnrLn/Vr+wwKQwwvPzkBfDDKp/qIabFqdgtoi5PEnM8LFByVsOrHoa3SpTVA==",
            "requires": {
              "@jest/types": "^25.3.0",
              "ansi-regex": "^5.0.0",
              "ansi-styles": "^4.0.0",
              "react-is": "^16.12.0"
            }
          },
          "supports-color": {
            "version": "7.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
            "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
            "requires": {
              "has-flag": "^4.0.0"
            }
          }
        }
      },
      "@types/yargs": {
        "version": "13.0.8",
        "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
        "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
        "requires": {
          "@types/yargs-parser": "*"
        }
      },
      "@types/yargs-parser": {
        "version": "15.0.0",
        "resolved": "https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-15.0.0.tgz",
        "integrity": "sha512-FA/BWv8t8ZWJ+gEOnLLd8ygxH/2UFbAvgEonyfN6yWGLKc7zVjbpl2Y4CTjid9h2RfgPP6SEt6uHwEOply00yw=="
      },
      "@typescript-eslint/eslint-plugin": {
        "version": "2.27.0",
        "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-2.27.0.tgz",
        "integrity": "sha512-/my+vVHRN7zYgcp0n4z5A6HAK7bvKGBiswaM5zIlOQczsxj/aiD7RcgD+dvVFuwFaGh5+kM7XA6Q6PN0bvb1tw==",
        "requires": {
          "@typescript-eslint/experimental-utils": "2.27.0",
          "functional-red-black-tree": "^1.0.1",
          "regexpp": "^3.0.0",
          "tsutils": "^3.17.1"
        }
      },
      "@typescript-eslint/experimental-utils": {
        "version": "2.27.0",
        "resolved": "https://registry.npmjs.org/@typescript-eslint/experimental-utils/-/experimental-utils-2.27.0.tgz",
        "integrity": "sha512-vOsYzjwJlY6E0NJRXPTeCGqjv5OHgRU1kzxHKWJVPjDYGbPgLudBXjIlc+OD1hDBZ4l1DLbOc5VjofKahsu9Jw==",
        "requires": {
          "@types/json-schema": "^7.0.3",
          "@typescript-eslint/typescript-estree": "2.27.0",
          "eslint-scope": "^5.0.0",
          "eslint-utils": "^2.0.0"
        }
      },
      "@typescript-eslint/parser": {
        "version": "2.27.0",
        "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-2.27.0.tgz",
        "integrity": "sha512-HFUXZY+EdwrJXZo31DW4IS1ujQW3krzlRjBrFRrJcMDh0zCu107/nRfhk/uBasO8m0NVDbBF5WZKcIUMRO7vPg==",
        "requires": {
          "@types/eslint-visitor-keys": "^1.0.0",
          "@typescript-eslint/experimental-utils": "2.27.0",
          "@typescript-eslint/typescript-estree": "2.27.0",
          "eslint-visitor-keys": "^1.1.0"
        }
      },
      "@typescript-eslint/typescript-estree": {
        "version": "2.27.0",
        "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-2.27.0.tgz",
        "integrity": "sha512-t2miCCJIb/FU8yArjAvxllxbTiyNqaXJag7UOpB5DVoM3+xnjeOngtqlJkLRnMtzaRcJhe3CIR9RmL40omubhg==",
        "requires": {
          "debug": "^4.1.1",
          "eslint-visitor-keys": "^1.1.0",
          "glob": "^7.1.6",
          "is-glob": "^4.0.1",
          "lodash": "^4.17.15",
          "semver": "^6.3.0",
          "tsutils": "^3.17.1"
        }
      },
      "@webassemblyjs/ast": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.8.5.tgz",
        "integrity": "sha512-aJMfngIZ65+t71C3y2nBBg5FFG0Okt9m0XEgWZ7Ywgn1oMAT8cNwx00Uv1cQyHtidq0Xn94R4TAywO+LCQ+ZAQ==",
        "requires": {
          "@webassemblyjs/helper-module-context": "1.8.5",
          "@webassemblyjs/helper-wasm-bytecode": "1.8.5",
          "@webassemblyjs/wast-parser": "1.8.5"
        }
      },
      "@webassemblyjs/floating-point-hex-parser": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.8.5.tgz",
        "integrity": "sha512-9p+79WHru1oqBh9ewP9zW95E3XAo+90oth7S5Re3eQnECGq59ly1Ri5tsIipKGpiStHsUYmY3zMLqtk3gTcOtQ=="
      },
      "@webassemblyjs/helper-api-error": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.8.5.tgz",
        "integrity": "sha512-Za/tnzsvnqdaSPOUXHyKJ2XI7PDX64kWtURyGiJJZKVEdFOsdKUCPTNEVFZq3zJ2R0G5wc2PZ5gvdTRFgm81zA=="
      },
      "@webassemblyjs/helper-buffer": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.8.5.tgz",
        "integrity": "sha512-Ri2R8nOS0U6G49Q86goFIPNgjyl6+oE1abW1pS84BuhP1Qcr5JqMwRFT3Ah3ADDDYGEgGs1iyb1DGX+kAi/c/Q=="
      },
      "@webassemblyjs/helper-code-frame": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-code-frame/-/helper-code-frame-1.8.5.tgz",
        "integrity": "sha512-VQAadSubZIhNpH46IR3yWO4kZZjMxN1opDrzePLdVKAZ+DFjkGD/rf4v1jap744uPVU6yjL/smZbRIIJTOUnKQ==",
        "requires": {
          "@webassemblyjs/wast-printer": "1.8.5"
        }
      },
      "@webassemblyjs/helper-fsm": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-fsm/-/helper-fsm-1.8.5.tgz",
        "integrity": "sha512-kRuX/saORcg8se/ft6Q2UbRpZwP4y7YrWsLXPbbmtepKr22i8Z4O3V5QE9DbZK908dh5Xya4Un57SDIKwB9eow=="
      },
      "@webassemblyjs/helper-module-context": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-module-context/-/helper-module-context-1.8.5.tgz",
        "integrity": "sha512-/O1B236mN7UNEU4t9X7Pj38i4VoU8CcMHyy3l2cV/kIF4U5KoHXDVqcDuOs1ltkac90IM4vZdHc52t1x8Yfs3g==",
        "requires": {
          "@webassemblyjs/ast": "1.8.5",
          "mamacro": "^0.0.3"
        }
      },
      "@webassemblyjs/helper-wasm-bytecode": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.8.5.tgz",
        "integrity": "sha512-Cu4YMYG3Ddl72CbmpjU/wbP6SACcOPVbHN1dI4VJNJVgFwaKf1ppeFJrwydOG3NDHxVGuCfPlLZNyEdIYlQ6QQ=="
      },
      "@webassemblyjs/helper-wasm-section": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.8.5.tgz",
        "integrity": "sha512-VV083zwR+VTrIWWtgIUpqfvVdK4ff38loRmrdDBgBT8ADXYsEZ5mPQ4Nde90N3UYatHdYoDIFb7oHzMncI02tA==",
        "requires": {
          "@webassemblyjs/ast": "1.8.5",
          "@webassemblyjs/helper-buffer": "1.8.5",
          "@webassemblyjs/helper-wasm-bytecode": "1.8.5",
          "@webassemblyjs/wasm-gen": "1.8.5"
        }
      },
      "@webassemblyjs/ieee754": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.8.5.tgz",
        "integrity": "sha512-aaCvQYrvKbY/n6wKHb/ylAJr27GglahUO89CcGXMItrOBqRarUMxWLJgxm9PJNuKULwN5n1csT9bYoMeZOGF3g==",
        "requires": {
          "@xtuc/ieee754": "^1.2.0"
        }
      },
      "@webassemblyjs/leb128": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.8.5.tgz",
        "integrity": "sha512-plYUuUwleLIziknvlP8VpTgO4kqNaH57Y3JnNa6DLpu/sGcP6hbVdfdX5aHAV716pQBKrfuU26BJK29qY37J7A==",
        "requires": {
          "@xtuc/long": "4.2.2"
        }
      },
      "@webassemblyjs/utf8": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.8.5.tgz",
        "integrity": "sha512-U7zgftmQriw37tfD934UNInokz6yTmn29inT2cAetAsaU9YeVCveWEwhKL1Mg4yS7q//NGdzy79nlXh3bT8Kjw=="
      },
      "@webassemblyjs/wasm-edit": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.8.5.tgz",
        "integrity": "sha512-A41EMy8MWw5yvqj7MQzkDjU29K7UJq1VrX2vWLzfpRHt3ISftOXqrtojn7nlPsZ9Ijhp5NwuODuycSvfAO/26Q==",
        "requires": {
          "@webassemblyjs/ast": "1.8.5",
          "@webassemblyjs/helper-buffer": "1.8.5",
          "@webassemblyjs/helper-wasm-bytecode": "1.8.5",
          "@webassemblyjs/helper-wasm-section": "1.8.5",
          "@webassemblyjs/wasm-gen": "1.8.5",
          "@webassemblyjs/wasm-opt": "1.8.5",
          "@webassemblyjs/wasm-parser": "1.8.5",
          "@webassemblyjs/wast-printer": "1.8.5"
        }
      },
      "@webassemblyjs/wasm-gen": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.8.5.tgz",
        "integrity": "sha512-BCZBT0LURC0CXDzj5FXSc2FPTsxwp3nWcqXQdOZE4U7h7i8FqtFK5Egia6f9raQLpEKT1VL7zr4r3+QX6zArWg==",
        "requires": {
          "@webassemblyjs/ast": "1.8.5",
          "@webassemblyjs/helper-wasm-bytecode": "1.8.5",
          "@webassemblyjs/ieee754": "1.8.5",
          "@webassemblyjs/leb128": "1.8.5",
          "@webassemblyjs/utf8": "1.8.5"
        }
      },
      "@webassemblyjs/wasm-opt": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.8.5.tgz",
        "integrity": "sha512-HKo2mO/Uh9A6ojzu7cjslGaHaUU14LdLbGEKqTR7PBKwT6LdPtLLh9fPY33rmr5wcOMrsWDbbdCHq4hQUdd37Q==",
        "requires": {
          "@webassemblyjs/ast": "1.8.5",
          "@webassemblyjs/helper-buffer": "1.8.5",
          "@webassemblyjs/wasm-gen": "1.8.5",
          "@webassemblyjs/wasm-parser": "1.8.5"
        }
      },
      "@webassemblyjs/wasm-parser": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.8.5.tgz",
        "integrity": "sha512-pi0SYE9T6tfcMkthwcgCpL0cM9nRYr6/6fjgDtL6q/ZqKHdMWvxitRi5JcZ7RI4SNJJYnYNaWy5UUrHQy998lw==",
        "requires": {
          "@webassemblyjs/ast": "1.8.5",
          "@webassemblyjs/helper-api-error": "1.8.5",
          "@webassemblyjs/helper-wasm-bytecode": "1.8.5",
          "@webassemblyjs/ieee754": "1.8.5",
          "@webassemblyjs/leb128": "1.8.5",
          "@webassemblyjs/utf8": "1.8.5"
        }
      },
      "@webassemblyjs/wast-parser": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-parser/-/wast-parser-1.8.5.tgz",
        "integrity": "sha512-daXC1FyKWHF1i11obK086QRlsMsY4+tIOKgBqI1lxAnkp9xe9YMcgOxm9kLe+ttjs5aWV2KKE1TWJCN57/Btsg==",
        "requires": {
          "@webassemblyjs/ast": "1.8.5",
          "@webassemblyjs/floating-point-hex-parser": "1.8.5",
          "@webassemblyjs/helper-api-error": "1.8.5",
          "@webassemblyjs/helper-code-frame": "1.8.5",
          "@webassemblyjs/helper-fsm": "1.8.5",
          "@xtuc/long": "4.2.2"
        }
      },
      "@webassemblyjs/wast-printer": {
        "version": "1.8.5",
        "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.8.5.tgz",
        "integrity": "sha512-w0U0pD4EhlnvRyeJzBqaVSJAo9w/ce7/WPogeXLzGkO6hzhr4GnQIZ4W4uUt5b9ooAaXPtnXlj0gzsXEOUNYMg==",
        "requires": {
          "@webassemblyjs/ast": "1.8.5",
          "@webassemblyjs/wast-parser": "1.8.5",
          "@xtuc/long": "4.2.2"
        }
      },
      "@xtuc/ieee754": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
        "integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA=="
      },
      "@xtuc/long": {
        "version": "4.2.2",
        "resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz",
        "integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ=="
      },
      "abab": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.3.tgz",
        "integrity": "sha512-tsFzPpcttalNjFBCFMqsKYQcWxxen1pgJR56by//QwvJc4/OUS3kPOOttx2tSIfjsylB0pYu7f5D3K1RCxUnUg=="
      },
      "accepts": {
        "version": "1.3.7",
        "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
        "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
        "requires": {
          "mime-types": "~2.1.24",
          "negotiator": "0.6.2"
        }
      },
      "acorn": {
        "version": "7.1.1",
        "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.1.1.tgz",
        "integrity": "sha512-add7dgA5ppRPxCFJoAGfMDi7PIBXq1RtGo7BhbLaxwrXPOmw8gq48Y9ozT01hUKy9byMjlR20EJhu5zlkErEkg=="
      },
      "acorn-globals": {
        "version": "4.3.4",
        "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-4.3.4.tgz",
        "integrity": "sha512-clfQEh21R+D0leSbUdWf3OcfqyaCSAQ8Ryq00bofSekfr9W8u1jyYZo6ir0xu9Gtcf7BjcHJpnbZH7JOCpP60A==",
        "requires": {
          "acorn": "^6.0.1",
          "acorn-walk": "^6.0.1"
        },
        "dependencies": {
          "acorn": {
            "version": "6.4.1",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.1.tgz",
            "integrity": "sha512-ZVA9k326Nwrj3Cj9jlh3wGFutC2ZornPNARZwsNYqQYgN0EsV2d53w5RN/co65Ohn4sUAUtb1rSUAOD6XN9idA=="
          }
        }
      },
      "acorn-jsx": {
        "version": "5.2.0",
        "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.2.0.tgz",
        "integrity": "sha512-HiUX/+K2YpkpJ+SzBffkM/AQ2YE03S0U1kjTLVpoJdhZMOWy8qvXVN9JdLqv2QsaQ6MPYQIuNmwD8zOiYUofLQ=="
      },
      "acorn-walk": {
        "version": "6.2.0",
        "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-6.2.0.tgz",
        "integrity": "sha512-7evsyfH1cLOCdAzZAd43Cic04yKydNx0cF+7tiA19p1XnLLPU4dpCQOqpjqwokFe//vS0QqfqqjCS2JkiIs0cA=="
      },
      "address": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/address/-/address-1.1.2.tgz",
        "integrity": "sha512-aT6camzM4xEA54YVJYSqxz1kv4IHnQZRtThJJHhUMRExaU5spC7jX5ugSwTaTgJliIgs4VhZOk7htClvQ/LmRA=="
      },
      "adjust-sourcemap-loader": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/adjust-sourcemap-loader/-/adjust-sourcemap-loader-2.0.0.tgz",
        "integrity": "sha512-4hFsTsn58+YjrU9qKzML2JSSDqKvN8mUGQ0nNIrfPi8hmIONT4L3uUaT6MKdMsZ9AjsU6D2xDkZxCkbQPxChrA==",
        "requires": {
          "assert": "1.4.1",
          "camelcase": "5.0.0",
          "loader-utils": "1.2.3",
          "object-path": "0.11.4",
          "regex-parser": "2.2.10"
        },
        "dependencies": {
          "camelcase": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.0.0.tgz",
            "integrity": "sha512-faqwZqnWxbxn+F1d399ygeamQNy3lPp/H9H6rNrqYh4FSVCtcY+3cub1MxA8o9mDd55mM8Aghuu/kuyYA6VTsA=="
          },
          "emojis-list": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-2.1.0.tgz",
            "integrity": "sha1-TapNnbAPmBmIDHn6RXrlsJof04k="
          },
          "json5": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
            "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
            "requires": {
              "minimist": "^1.2.0"
            }
          },
          "loader-utils": {
            "version": "1.2.3",
            "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.2.3.tgz",
            "integrity": "sha512-fkpz8ejdnEMG3s37wGL07iSBDg99O9D5yflE9RGNH3hRdx9SOwYfnGYdZOUIZitN8E+E2vkq3MUMYMvPYl5ZZA==",
            "requires": {
              "big.js": "^5.2.2",
              "emojis-list": "^2.0.0",
              "json5": "^1.0.1"
            }
          }
        }
      },
      "aggregate-error": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.0.1.tgz",
        "integrity": "sha512-quoaXsZ9/BLNae5yiNoUz+Nhkwz83GhWwtYFglcjEQB2NDHCIpApbqXxIFnm4Pq/Nvhrsq5sYJFyohrrxnTGAA==",
        "requires": {
          "clean-stack": "^2.0.0",
          "indent-string": "^4.0.0"
        }
      },
      "ajv": {
        "version": "6.12.0",
        "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.0.tgz",
        "integrity": "sha512-D6gFiFA0RRLyUbvijN74DWAjXSFxWKaWP7mldxkVhyhAV3+SWA9HEJPHQ2c9soIeTFJqcSdFDGFgdqs1iUU2Hw==",
        "requires": {
          "fast-deep-equal": "^3.1.1",
          "fast-json-stable-stringify": "^2.0.0",
          "json-schema-traverse": "^0.4.1",
          "uri-js": "^4.2.2"
        }
      },
      "ajv-errors": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/ajv-errors/-/ajv-errors-1.0.1.tgz",
        "integrity": "sha512-DCRfO/4nQ+89p/RK43i8Ezd41EqdGIU4ld7nGF8OQ14oc/we5rEntLCUa7+jrn3nn83BosfwZA0wb4pon2o8iQ=="
      },
      "ajv-keywords": {
        "version": "3.4.1",
        "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.4.1.tgz",
        "integrity": "sha512-RO1ibKvd27e6FEShVFfPALuHI3WjSVNeK5FIsmme/LYRNxjKuNj+Dt7bucLa6NdSv3JcVTyMlm9kGR84z1XpaQ=="
      },
      "alphanum-sort": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/alphanum-sort/-/alphanum-sort-1.0.2.tgz",
        "integrity": "sha1-l6ERlkmyEa0zaR2fn0hqjsn74KM="
      },
      "ansi-colors": {
        "version": "3.2.4",
        "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-3.2.4.tgz",
        "integrity": "sha512-hHUXGagefjN2iRrID63xckIvotOXOojhQKWIPUZ4mNUZ9nLZW+7FMNoE1lOkEhNWYsx/7ysGIuJYCiMAA9FnrA=="
      },
      "ansi-escapes": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.1.tgz",
        "integrity": "sha512-JWF7ocqNrp8u9oqpgV+wH5ftbt+cfvv+PTjOvKLT3AdYly/LmORARfEVT1iyjwN+4MqE5UmVKoAdIBqeoCHgLA==",
        "requires": {
          "type-fest": "^0.11.0"
        },
        "dependencies": {
          "type-fest": {
            "version": "0.11.0",
            "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.11.0.tgz",
            "integrity": "sha512-OdjXJxnCN1AvyLSzeKIgXTXxV+99ZuXl3Hpo9XpJAv9MBcHrrJOQ5kV7ypXOuQie+AmWG25hLbiKdwYTifzcfQ=="
          }
        }
      },
      "ansi-html": {
        "version": "0.0.7",
        "resolved": "https://registry.npmjs.org/ansi-html/-/ansi-html-0.0.7.tgz",
        "integrity": "sha1-gTWEAhliqenm/QOflA0S9WynhZ4="
      },
      "ansi-regex": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
        "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
      },
      "ansi-styles": {
        "version": "3.2.1",
        "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
        "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
        "requires": {
          "color-convert": "^1.9.0"
        }
      },
      "anymatch": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
        "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
        "requires": {
          "micromatch": "^3.1.4",
          "normalize-path": "^2.1.1"
        }
      },
      "aproba": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
        "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw=="
      },
      "argparse": {
        "version": "1.0.10",
        "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
        "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
        "requires": {
          "sprintf-js": "~1.0.2"
        }
      },
      "aria-query": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-3.0.0.tgz",
        "integrity": "sha1-ZbP8wcoRVajJrmTW7uKX8V1RM8w=",
        "requires": {
          "ast-types-flow": "0.0.7",
          "commander": "^2.11.0"
        }
      },
      "arity-n": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/arity-n/-/arity-n-1.0.4.tgz",
        "integrity": "sha1-2edrEXM+CFacCEeuezmyhgswt0U="
      },
      "arr-diff": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
        "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA="
      },
      "arr-flatten": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
        "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg=="
      },
      "arr-union": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
        "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ="
      },
      "array-equal": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/array-equal/-/array-equal-1.0.0.tgz",
        "integrity": "sha1-jCpe8kcv2ep0KwTHenUJO6J1fJM="
      },
      "array-flatten": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-2.1.2.tgz",
        "integrity": "sha512-hNfzcOV8W4NdualtqBFPyVO+54DSJuZGY9qT4pRroB6S9e3iiido2ISIC5h9R2sPJ8H3FHCIiEnsv1lPXO3KtQ=="
      },
      "array-includes": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.1.tgz",
        "integrity": "sha512-c2VXaCHl7zPsvpkFsw4nxvFie4fh1ur9bpcgsVkIjqn0H/Xwdg+7fv3n2r/isyS8EBj5b06M9kHyZuIr4El6WQ==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.0",
          "is-string": "^1.0.5"
        }
      },
      "array-union": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/array-union/-/array-union-1.0.2.tgz",
        "integrity": "sha1-mjRBDk9OPaI96jdb5b5w8kd47Dk=",
        "requires": {
          "array-uniq": "^1.0.1"
        }
      },
      "array-uniq": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/array-uniq/-/array-uniq-1.0.3.tgz",
        "integrity": "sha1-r2rId6Jcx/dOBYiUdThY39sk/bY="
      },
      "array-unique": {
        "version": "0.3.2",
        "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
        "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg="
      },
      "array.prototype.flat": {
        "version": "1.2.3",
        "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.2.3.tgz",
        "integrity": "sha512-gBlRZV0VSmfPIeWfuuy56XZMvbVfbEUnOXUvt3F/eUUUSyzlgLxhEX4YAEpxNAogRGehPSnfXyPtYyKAhkzQhQ==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.0-next.1"
        }
      },
      "arrify": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
        "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0="
      },
      "asap": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/asap/-/asap-2.0.6.tgz",
        "integrity": "sha1-5QNHYR1+aQlDIIu9r+vLwvuGbUY="
      },
      "asn1": {
        "version": "0.2.4",
        "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
        "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
        "requires": {
          "safer-buffer": "~2.1.0"
        }
      },
      "asn1.js": {
        "version": "4.10.1",
        "resolved": "https://registry.npmjs.org/asn1.js/-/asn1.js-4.10.1.tgz",
        "integrity": "sha512-p32cOF5q0Zqs9uBiONKYLm6BClCoBCM5O9JfeUSlnQLBTxYdTK+pW+nXflm8UkKd2UYlEbYz5qEi0JuZR9ckSw==",
        "requires": {
          "bn.js": "^4.0.0",
          "inherits": "^2.0.1",
          "minimalistic-assert": "^1.0.0"
        }
      },
      "assert": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/assert/-/assert-1.4.1.tgz",
        "integrity": "sha1-mZEtWRg2tab1s0XA8H7vwI/GXZE=",
        "requires": {
          "util": "0.10.3"
        }
      },
      "assert-plus": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
        "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU="
      },
      "assign-symbols": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
        "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c="
      },
      "ast-types-flow": {
        "version": "0.0.7",
        "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.7.tgz",
        "integrity": "sha1-9wtzXGvKGlycItmCw+Oef+ujva0="
      },
      "astral-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-1.0.0.tgz",
        "integrity": "sha512-+Ryf6g3BKoRc7jfp7ad8tM4TtMiaWvbF/1/sQcZPkkS7ag3D5nMBCe2UfOTONtAkaG0tO0ij3C5Lwmf1EiyjHg=="
      },
      "async": {
        "version": "2.6.3",
        "resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
        "integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
        "requires": {
          "lodash": "^4.17.14"
        }
      },
      "async-each": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.3.tgz",
        "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ=="
      },
      "async-limiter": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
        "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ=="
      },
      "asynckit": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
        "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k="
      },
      "atob": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
        "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg=="
      },
      "autoprefixer": {
        "version": "9.7.6",
        "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-9.7.6.tgz",
        "integrity": "sha512-F7cYpbN7uVVhACZTeeIeealwdGM6wMtfWARVLTy5xmKtgVdBNJvbDRoCK3YO1orcs7gv/KwYlb3iXwu9Ug9BkQ==",
        "requires": {
          "browserslist": "^4.11.1",
          "caniuse-lite": "^1.0.30001039",
          "chalk": "^2.4.2",
          "normalize-range": "^0.1.2",
          "num2fraction": "^1.2.2",
          "postcss": "^7.0.27",
          "postcss-value-parser": "^4.0.3"
        }
      },
      "aws-sign2": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
        "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg="
      },
      "aws4": {
        "version": "1.9.1",
        "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.9.1.tgz",
        "integrity": "sha512-wMHVg2EOHaMRxbzgFJ9gtjOOCrI80OHLG14rxi28XwOW8ux6IiEbRCGGGqCtdAIg4FQCbW20k9RsT4y3gJlFug=="
      },
      "axobject-query": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-2.1.2.tgz",
        "integrity": "sha512-ICt34ZmrVt8UQnvPl6TVyDTkmhXmAyAT4Jh5ugfGUX4MOrZ+U/ZY6/sdylRw3qGNr9Ub5AJsaHeDMzNLehRdOQ=="
      },
      "babel-code-frame": {
        "version": "6.26.0",
        "resolved": "https://registry.npmjs.org/babel-code-frame/-/babel-code-frame-6.26.0.tgz",
        "integrity": "sha1-Y/1D99weO7fONZR9uP42mj9Yx0s=",
        "requires": {
          "chalk": "^1.1.3",
          "esutils": "^2.0.2",
          "js-tokens": "^3.0.2"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
            "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
          },
          "ansi-styles": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
            "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4="
          },
          "chalk": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
            "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
            "requires": {
              "ansi-styles": "^2.2.1",
              "escape-string-regexp": "^1.0.2",
              "has-ansi": "^2.0.0",
              "strip-ansi": "^3.0.0",
              "supports-color": "^2.0.0"
            }
          },
          "js-tokens": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-3.0.2.tgz",
            "integrity": "sha1-mGbfOVECEw449/mWvOtlRDIJwls="
          },
          "strip-ansi": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
            "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
            "requires": {
              "ansi-regex": "^2.0.0"
            }
          },
          "supports-color": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
            "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc="
          }
        }
      },
      "babel-eslint": {
        "version": "10.1.0",
        "resolved": "https://registry.npmjs.org/babel-eslint/-/babel-eslint-10.1.0.tgz",
        "integrity": "sha512-ifWaTHQ0ce+448CYop8AdrQiBsGrnC+bMgfyKFdi6EsPLTAWG+QfyDeM6OH+FmWnKvEq5NnBMLvlBUPKQZoDSg==",
        "requires": {
          "@babel/code-frame": "^7.0.0",
          "@babel/parser": "^7.7.0",
          "@babel/traverse": "^7.7.0",
          "@babel/types": "^7.7.0",
          "eslint-visitor-keys": "^1.0.0",
          "resolve": "^1.12.0"
        }
      },
      "babel-extract-comments": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/babel-extract-comments/-/babel-extract-comments-1.0.0.tgz",
        "integrity": "sha512-qWWzi4TlddohA91bFwgt6zO/J0X+io7Qp184Fw0m2JYRSTZnJbFR8+07KmzudHCZgOiKRCrjhylwv9Xd8gfhVQ==",
        "requires": {
          "babylon": "^6.18.0"
        }
      },
      "babel-jest": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-24.9.0.tgz",
        "integrity": "sha512-ntuddfyiN+EhMw58PTNL1ph4C9rECiQXjI4nMMBKBaNjXvqLdkXpPRcMSr4iyBrJg/+wz9brFUD6RhOAT6r4Iw==",
        "requires": {
          "@jest/transform": "^24.9.0",
          "@jest/types": "^24.9.0",
          "@types/babel__core": "^7.1.0",
          "babel-plugin-istanbul": "^5.1.0",
          "babel-preset-jest": "^24.9.0",
          "chalk": "^2.4.2",
          "slash": "^2.0.0"
        }
      },
      "babel-loader": {
        "version": "8.1.0",
        "resolved": "https://registry.npmjs.org/babel-loader/-/babel-loader-8.1.0.tgz",
        "integrity": "sha512-7q7nC1tYOrqvUrN3LQK4GwSk/TQorZSOlO9C+RZDZpODgyN4ZlCqE5q9cDsyWOliN+aU9B4JX01xK9eJXowJLw==",
        "requires": {
          "find-cache-dir": "^2.1.0",
          "loader-utils": "^1.4.0",
          "mkdirp": "^0.5.3",
          "pify": "^4.0.1",
          "schema-utils": "^2.6.5"
        },
        "dependencies": {
          "pify": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
            "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g=="
          }
        }
      },
      "babel-plugin-dynamic-import-node": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.0.tgz",
        "integrity": "sha512-o6qFkpeQEBxcqt0XYlWzAVxNCSCZdUgcR8IRlhD/8DylxjjO4foPcvTW0GGKa/cVt3rvxZ7o5ippJ+/0nvLhlQ==",
        "requires": {
          "object.assign": "^4.1.0"
        }
      },
      "babel-plugin-istanbul": {
        "version": "5.2.0",
        "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-5.2.0.tgz",
        "integrity": "sha512-5LphC0USA8t4i1zCtjbbNb6jJj/9+X6P37Qfirc/70EQ34xKlMW+a1RHGwxGI+SwWpNwZ27HqvzAobeqaXwiZw==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.0.0",
          "find-up": "^3.0.0",
          "istanbul-lib-instrument": "^3.3.0",
          "test-exclude": "^5.2.3"
        },
        "dependencies": {
          "find-up": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
            "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
            "requires": {
              "locate-path": "^3.0.0"
            }
          },
          "locate-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
            "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
            "requires": {
              "p-locate": "^3.0.0",
              "path-exists": "^3.0.0"
            }
          },
          "p-limit": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
            "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
            "requires": {
              "p-try": "^2.0.0"
            }
          },
          "p-locate": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
            "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
            "requires": {
              "p-limit": "^2.0.0"
            }
          },
          "p-try": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
            "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
          }
        }
      },
      "babel-plugin-jest-hoist": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-24.9.0.tgz",
        "integrity": "sha512-2EMA2P8Vp7lG0RAzr4HXqtYwacfMErOuv1U3wrvxHX6rD1sV6xS3WXG3r8TRQ2r6w8OhvSdWt+z41hQNwNm3Xw==",
        "requires": {
          "@types/babel__traverse": "^7.0.6"
        }
      },
      "babel-plugin-macros": {
        "version": "2.8.0",
        "resolved": "https://registry.npmjs.org/babel-plugin-macros/-/babel-plugin-macros-2.8.0.tgz",
        "integrity": "sha512-SEP5kJpfGYqYKpBrj5XU3ahw5p5GOHJ0U5ssOSQ/WBVdwkD2Dzlce95exQTs3jOVWPPKLBN2rlEWkCK7dSmLvg==",
        "requires": {
          "@babel/runtime": "^7.7.2",
          "cosmiconfig": "^6.0.0",
          "resolve": "^1.12.0"
        },
        "dependencies": {
          "cosmiconfig": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-6.0.0.tgz",
            "integrity": "sha512-xb3ZL6+L8b9JLLCx3ZdoZy4+2ECphCMo2PwqgP1tlfVq6M6YReyzBJtvWWtbDSpNr9hn96pkCiZqUcFEc+54Qg==",
            "requires": {
              "@types/parse-json": "^4.0.0",
              "import-fresh": "^3.1.0",
              "parse-json": "^5.0.0",
              "path-type": "^4.0.0",
              "yaml": "^1.7.2"
            }
          },
          "import-fresh": {
            "version": "3.2.1",
            "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.2.1.tgz",
            "integrity": "sha512-6e1q1cnWP2RXD9/keSkxHScg508CdXqXWgWBaETNhyuBFz+kUZlKboh+ISK+bU++DmbHimVBrOz/zzPe0sZ3sQ==",
            "requires": {
              "parent-module": "^1.0.0",
              "resolve-from": "^4.0.0"
            }
          },
          "parse-json": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.0.0.tgz",
            "integrity": "sha512-OOY5b7PAEFV0E2Fir1KOkxchnZNCdowAJgQ5NuxjpBKTRP3pQhwkrkxqQjeoKJ+fO7bCpmIZaogI4eZGDMEGOw==",
            "requires": {
              "@babel/code-frame": "^7.0.0",
              "error-ex": "^1.3.1",
              "json-parse-better-errors": "^1.0.1",
              "lines-and-columns": "^1.1.6"
            }
          },
          "path-type": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
            "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw=="
          },
          "resolve-from": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
            "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g=="
          }
        }
      },
      "babel-plugin-named-asset-import": {
        "version": "0.3.6",
        "resolved": "https://registry.npmjs.org/babel-plugin-named-asset-import/-/babel-plugin-named-asset-import-0.3.6.tgz",
        "integrity": "sha512-1aGDUfL1qOOIoqk9QKGIo2lANk+C7ko/fqH0uIyC71x3PEGz0uVP8ISgfEsFuG+FKmjHTvFK/nNM8dowpmUxLA=="
      },
      "babel-plugin-styled-components": {
        "version": "1.10.7",
        "resolved": "https://registry.npmjs.org/babel-plugin-styled-components/-/babel-plugin-styled-components-1.10.7.tgz",
        "integrity": "sha512-MBMHGcIA22996n9hZRf/UJLVVgkEOITuR2SvjHLb5dSTUyR4ZRGn+ngITapes36FI3WLxZHfRhkA1ffHxihOrg==",
        "requires": {
          "@babel/helper-annotate-as-pure": "^7.0.0",
          "@babel/helper-module-imports": "^7.0.0",
          "babel-plugin-syntax-jsx": "^6.18.0",
          "lodash": "^4.17.11"
        }
      },
      "babel-plugin-syntax-jsx": {
        "version": "6.18.0",
        "resolved": "https://registry.npmjs.org/babel-plugin-syntax-jsx/-/babel-plugin-syntax-jsx-6.18.0.tgz",
        "integrity": "sha1-CvMqmm4Tyno/1QaeYtew9Y0NiUY="
      },
      "babel-plugin-syntax-object-rest-spread": {
        "version": "6.13.0",
        "resolved": "https://registry.npmjs.org/babel-plugin-syntax-object-rest-spread/-/babel-plugin-syntax-object-rest-spread-6.13.0.tgz",
        "integrity": "sha1-/WU28rzhODb/o6VFjEkDpZe7O/U="
      },
      "babel-plugin-transform-object-rest-spread": {
        "version": "6.26.0",
        "resolved": "https://registry.npmjs.org/babel-plugin-transform-object-rest-spread/-/babel-plugin-transform-object-rest-spread-6.26.0.tgz",
        "integrity": "sha1-DzZpLVD+9rfi1LOsFHgTepY7ewY=",
        "requires": {
          "babel-plugin-syntax-object-rest-spread": "^6.8.0",
          "babel-runtime": "^6.26.0"
        }
      },
      "babel-plugin-transform-react-remove-prop-types": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/babel-plugin-transform-react-remove-prop-types/-/babel-plugin-transform-react-remove-prop-types-0.4.24.tgz",
        "integrity": "sha512-eqj0hVcJUR57/Ug2zE1Yswsw4LhuqqHhD+8v120T1cl3kjg76QwtyBrdIk4WVwK+lAhBJVYCd/v+4nc4y+8JsA=="
      },
      "babel-preset-jest": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-24.9.0.tgz",
        "integrity": "sha512-izTUuhE4TMfTRPF92fFwD2QfdXaZW08qvWTFCI51V8rW5x00UuPgc3ajRoWofXOuxjfcOM5zzSYsQS3H8KGCAg==",
        "requires": {
          "@babel/plugin-syntax-object-rest-spread": "^7.0.0",
          "babel-plugin-jest-hoist": "^24.9.0"
        }
      },
      "babel-preset-react-app": {
        "version": "9.1.2",
        "resolved": "https://registry.npmjs.org/babel-preset-react-app/-/babel-preset-react-app-9.1.2.tgz",
        "integrity": "sha512-k58RtQOKH21NyKtzptoAvtAODuAJJs3ZhqBMl456/GnXEQ/0La92pNmwgWoMn5pBTrsvk3YYXdY7zpY4e3UIxA==",
        "requires": {
          "@babel/core": "7.9.0",
          "@babel/plugin-proposal-class-properties": "7.8.3",
          "@babel/plugin-proposal-decorators": "7.8.3",
          "@babel/plugin-proposal-nullish-coalescing-operator": "7.8.3",
          "@babel/plugin-proposal-numeric-separator": "7.8.3",
          "@babel/plugin-proposal-optional-chaining": "7.9.0",
          "@babel/plugin-transform-flow-strip-types": "7.9.0",
          "@babel/plugin-transform-react-display-name": "7.8.3",
          "@babel/plugin-transform-runtime": "7.9.0",
          "@babel/preset-env": "7.9.0",
          "@babel/preset-react": "7.9.1",
          "@babel/preset-typescript": "7.9.0",
          "@babel/runtime": "7.9.0",
          "babel-plugin-macros": "2.8.0",
          "babel-plugin-transform-react-remove-prop-types": "0.4.24"
        },
        "dependencies": {
          "@babel/preset-env": {
            "version": "7.9.0",
            "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.9.0.tgz",
            "integrity": "sha512-712DeRXT6dyKAM/FMbQTV/FvRCms2hPCx+3weRjZ8iQVQWZejWWk1wwG6ViWMyqb/ouBbGOl5b6aCk0+j1NmsQ==",
            "requires": {
              "@babel/compat-data": "^7.9.0",
              "@babel/helper-compilation-targets": "^7.8.7",
              "@babel/helper-module-imports": "^7.8.3",
              "@babel/helper-plugin-utils": "^7.8.3",
              "@babel/plugin-proposal-async-generator-functions": "^7.8.3",
              "@babel/plugin-proposal-dynamic-import": "^7.8.3",
              "@babel/plugin-proposal-json-strings": "^7.8.3",
              "@babel/plugin-proposal-nullish-coalescing-operator": "^7.8.3",
              "@babel/plugin-proposal-numeric-separator": "^7.8.3",
              "@babel/plugin-proposal-object-rest-spread": "^7.9.0",
              "@babel/plugin-proposal-optional-catch-binding": "^7.8.3",
              "@babel/plugin-proposal-optional-chaining": "^7.9.0",
              "@babel/plugin-proposal-unicode-property-regex": "^7.8.3",
              "@babel/plugin-syntax-async-generators": "^7.8.0",
              "@babel/plugin-syntax-dynamic-import": "^7.8.0",
              "@babel/plugin-syntax-json-strings": "^7.8.0",
              "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0",
              "@babel/plugin-syntax-numeric-separator": "^7.8.0",
              "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
              "@babel/plugin-syntax-optional-catch-binding": "^7.8.0",
              "@babel/plugin-syntax-optional-chaining": "^7.8.0",
              "@babel/plugin-syntax-top-level-await": "^7.8.3",
              "@babel/plugin-transform-arrow-functions": "^7.8.3",
              "@babel/plugin-transform-async-to-generator": "^7.8.3",
              "@babel/plugin-transform-block-scoped-functions": "^7.8.3",
              "@babel/plugin-transform-block-scoping": "^7.8.3",
              "@babel/plugin-transform-classes": "^7.9.0",
              "@babel/plugin-transform-computed-properties": "^7.8.3",
              "@babel/plugin-transform-destructuring": "^7.8.3",
              "@babel/plugin-transform-dotall-regex": "^7.8.3",
              "@babel/plugin-transform-duplicate-keys": "^7.8.3",
              "@babel/plugin-transform-exponentiation-operator": "^7.8.3",
              "@babel/plugin-transform-for-of": "^7.9.0",
              "@babel/plugin-transform-function-name": "^7.8.3",
              "@babel/plugin-transform-literals": "^7.8.3",
              "@babel/plugin-transform-member-expression-literals": "^7.8.3",
              "@babel/plugin-transform-modules-amd": "^7.9.0",
              "@babel/plugin-transform-modules-commonjs": "^7.9.0",
              "@babel/plugin-transform-modules-systemjs": "^7.9.0",
              "@babel/plugin-transform-modules-umd": "^7.9.0",
              "@babel/plugin-transform-named-capturing-groups-regex": "^7.8.3",
              "@babel/plugin-transform-new-target": "^7.8.3",
              "@babel/plugin-transform-object-super": "^7.8.3",
              "@babel/plugin-transform-parameters": "^7.8.7",
              "@babel/plugin-transform-property-literals": "^7.8.3",
              "@babel/plugin-transform-regenerator": "^7.8.7",
              "@babel/plugin-transform-reserved-words": "^7.8.3",
              "@babel/plugin-transform-shorthand-properties": "^7.8.3",
              "@babel/plugin-transform-spread": "^7.8.3",
              "@babel/plugin-transform-sticky-regex": "^7.8.3",
              "@babel/plugin-transform-template-literals": "^7.8.3",
              "@babel/plugin-transform-typeof-symbol": "^7.8.4",
              "@babel/plugin-transform-unicode-regex": "^7.8.3",
              "@babel/preset-modules": "^0.1.3",
              "@babel/types": "^7.9.0",
              "browserslist": "^4.9.1",
              "core-js-compat": "^3.6.2",
              "invariant": "^2.2.2",
              "levenary": "^1.1.1",
              "semver": "^5.5.0"
            }
          },
          "@babel/preset-react": {
            "version": "7.9.1",
            "resolved": "https://registry.npmjs.org/@babel/preset-react/-/preset-react-7.9.1.tgz",
            "integrity": "sha512-aJBYF23MPj0RNdp/4bHnAP0NVqqZRr9kl0NAOP4nJCex6OYVio59+dnQzsAWFuogdLyeaKA1hmfUIVZkY5J+TQ==",
            "requires": {
              "@babel/helper-plugin-utils": "^7.8.3",
              "@babel/plugin-transform-react-display-name": "^7.8.3",
              "@babel/plugin-transform-react-jsx": "^7.9.1",
              "@babel/plugin-transform-react-jsx-development": "^7.9.0",
              "@babel/plugin-transform-react-jsx-self": "^7.9.0",
              "@babel/plugin-transform-react-jsx-source": "^7.9.0"
            }
          },
          "@babel/runtime": {
            "version": "7.9.0",
            "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.9.0.tgz",
            "integrity": "sha512-cTIudHnzuWLS56ik4DnRnqqNf8MkdUzV4iFFI1h7Jo9xvrpQROYaAnaSd2mHLQAzzZAPfATynX5ord6YlNYNMA==",
            "requires": {
              "regenerator-runtime": "^0.13.4"
            }
          },
          "semver": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
          }
        }
      },
      "babel-runtime": {
        "version": "6.26.0",
        "resolved": "https://registry.npmjs.org/babel-runtime/-/babel-runtime-6.26.0.tgz",
        "integrity": "sha1-llxwWGaOgrVde/4E/yM3vItWR/4=",
        "requires": {
          "core-js": "^2.4.0",
          "regenerator-runtime": "^0.11.0"
        },
        "dependencies": {
          "core-js": {
            "version": "2.6.11",
            "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.11.tgz",
            "integrity": "sha512-5wjnpaT/3dV+XB4borEsnAYQchn00XSgTAWKDkEqv+K8KevjbzmofK6hfJ9TZIlpj2N0xQpazy7PiRQiWHqzWg=="
          },
          "regenerator-runtime": {
            "version": "0.11.1",
            "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",
            "integrity": "sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg=="
          }
        }
      },
      "babylon": {
        "version": "6.18.0",
        "resolved": "https://registry.npmjs.org/babylon/-/babylon-6.18.0.tgz",
        "integrity": "sha512-q/UEjfGJ2Cm3oKV71DJz9d25TPnq5rhBVL2Q4fA5wcC3jcrdn7+SssEybFIxwAvvP+YCsCYNKughoF33GxgycQ=="
      },
      "balanced-match": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
        "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c="
      },
      "base": {
        "version": "0.11.2",
        "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
        "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
        "requires": {
          "cache-base": "^1.0.1",
          "class-utils": "^0.3.5",
          "component-emitter": "^1.2.1",
          "define-property": "^1.0.0",
          "isobject": "^3.0.1",
          "mixin-deep": "^1.2.0",
          "pascalcase": "^0.1.1"
        },
        "dependencies": {
          "define-property": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
            "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
            "requires": {
              "is-descriptor": "^1.0.0"
            }
          },
          "is-accessor-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
            "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-data-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
            "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-descriptor": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
            "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
            "requires": {
              "is-accessor-descriptor": "^1.0.0",
              "is-data-descriptor": "^1.0.0",
              "kind-of": "^6.0.2"
            }
          },
          "kind-of": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
            "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
          }
        }
      },
      "base64-js": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.3.1.tgz",
        "integrity": "sha512-mLQ4i2QO1ytvGWFWmcngKO//JXAQueZvwEKtjgQFM4jIK0kU+ytMfplL8j+n5mspOfjHwoAg+9yhb7BwAHm36g=="
      },
      "batch": {
        "version": "0.6.1",
        "resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz",
        "integrity": "sha1-3DQxT05nkxgJP8dgJyUl+UvyXBY="
      },
      "bcrypt-pbkdf": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
        "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
        "requires": {
          "tweetnacl": "^0.14.3"
        }
      },
      "big.js": {
        "version": "5.2.2",
        "resolved": "https://registry.npmjs.org/big.js/-/big.js-5.2.2.tgz",
        "integrity": "sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ=="
      },
      "binary-extensions": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.0.0.tgz",
        "integrity": "sha512-Phlt0plgpIIBOGTT/ehfFnbNlfsDEiqmzE2KRXoX1bLIlir4X/MR+zSyBEkL05ffWgnRSf/DXv+WrUAVr93/ow=="
      },
      "bluebird": {
        "version": "3.7.2",
        "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz",
        "integrity": "sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg=="
      },
      "bn.js": {
        "version": "4.11.8",
        "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.8.tgz",
        "integrity": "sha512-ItfYfPLkWHUjckQCk8xC+LwxgK8NYcXywGigJgSwOP8Y2iyWT4f2vsZnoOXTTbo+o5yXmIUJ4gn5538SO5S3gA=="
      },
      "body-parser": {
        "version": "1.19.0",
        "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
        "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
        "requires": {
          "bytes": "3.1.0",
          "content-type": "~1.0.4",
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "http-errors": "1.7.2",
          "iconv-lite": "0.4.24",
          "on-finished": "~2.3.0",
          "qs": "6.7.0",
          "raw-body": "2.4.0",
          "type-is": "~1.6.17"
        },
        "dependencies": {
          "bytes": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
            "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg=="
          },
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
              "ms": "2.0.0"
            }
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
          },
          "qs": {
            "version": "6.7.0",
            "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
            "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
          }
        }
      },
      "bonjour": {
        "version": "3.5.0",
        "resolved": "https://registry.npmjs.org/bonjour/-/bonjour-3.5.0.tgz",
        "integrity": "sha1-jokKGD2O6aI5OzhExpGkK897yfU=",
        "requires": {
          "array-flatten": "^2.1.0",
          "deep-equal": "^1.0.1",
          "dns-equal": "^1.0.0",
          "dns-txt": "^2.0.2",
          "multicast-dns": "^6.0.1",
          "multicast-dns-service-types": "^1.1.0"
        }
      },
      "boolbase": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
        "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24="
      },
      "bowser": {
        "version": "1.9.4",
        "resolved": "https://registry.npmjs.org/bowser/-/bowser-1.9.4.tgz",
        "integrity": "sha512-9IdMmj2KjigRq6oWhmwv1W36pDuA4STQZ8q6YO9um+x07xgYNCD3Oou+WP/3L1HNz7iqythGet3/p4wvc8AAwQ=="
      },
      "brace-expansion": {
        "version": "1.1.11",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "requires": {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1"
        }
      },
      "braces": {
        "version": "2.3.2",
        "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
        "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
        "requires": {
          "arr-flatten": "^1.1.0",
          "array-unique": "^0.3.2",
          "extend-shallow": "^2.0.1",
          "fill-range": "^4.0.0",
          "isobject": "^3.0.1",
          "repeat-element": "^1.1.2",
          "snapdragon": "^0.8.1",
          "snapdragon-node": "^2.0.1",
          "split-string": "^3.0.2",
          "to-regex": "^3.0.1"
        },
        "dependencies": {
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "requires": {
              "is-extendable": "^0.1.0"
            }
          }
        }
      },
      "brorand": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/brorand/-/brorand-1.1.0.tgz",
        "integrity": "sha1-EsJe/kCkXjwyPrhnWgoM5XsiNx8="
      },
      "browser-process-hrtime": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
        "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow=="
      },
      "browser-resolve": {
        "version": "1.11.3",
        "resolved": "https://registry.npmjs.org/browser-resolve/-/browser-resolve-1.11.3.tgz",
        "integrity": "sha512-exDi1BYWB/6raKHmDTCicQfTkqwN5fioMFV4j8BsfMU4R2DK/QfZfK7kOVkmWCNANf0snkBzqGqAJBao9gZMdQ==",
        "requires": {
          "resolve": "1.1.7"
        },
        "dependencies": {
          "resolve": {
            "version": "1.1.7",
            "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.1.7.tgz",
            "integrity": "sha1-IDEU2CrSxe2ejgQRs5ModeiJ6Xs="
          }
        }
      },
      "browserify-aes": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/browserify-aes/-/browserify-aes-1.2.0.tgz",
        "integrity": "sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==",
        "requires": {
          "buffer-xor": "^1.0.3",
          "cipher-base": "^1.0.0",
          "create-hash": "^1.1.0",
          "evp_bytestokey": "^1.0.3",
          "inherits": "^2.0.1",
          "safe-buffer": "^5.0.1"
        }
      },
      "browserify-cipher": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/browserify-cipher/-/browserify-cipher-1.0.1.tgz",
        "integrity": "sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==",
        "requires": {
          "browserify-aes": "^1.0.4",
          "browserify-des": "^1.0.0",
          "evp_bytestokey": "^1.0.0"
        }
      },
      "browserify-des": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/browserify-des/-/browserify-des-1.0.2.tgz",
        "integrity": "sha512-BioO1xf3hFwz4kc6iBhI3ieDFompMhrMlnDFC4/0/vd5MokpuAc3R+LYbwTA9A5Yc9pq9UYPqffKpW2ObuwX5A==",
        "requires": {
          "cipher-base": "^1.0.1",
          "des.js": "^1.0.0",
          "inherits": "^2.0.1",
          "safe-buffer": "^5.1.2"
        }
      },
      "browserify-rsa": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/browserify-rsa/-/browserify-rsa-4.0.1.tgz",
        "integrity": "sha1-IeCr+vbyApzy+vsTNWenAdQTVSQ=",
        "requires": {
          "bn.js": "^4.1.0",
          "randombytes": "^2.0.1"
        }
      },
      "browserify-sign": {
        "version": "4.0.4",
        "resolved": "https://registry.npmjs.org/browserify-sign/-/browserify-sign-4.0.4.tgz",
        "integrity": "sha1-qk62jl17ZYuqa/alfmMMvXqT0pg=",
        "requires": {
          "bn.js": "^4.1.1",
          "browserify-rsa": "^4.0.0",
          "create-hash": "^1.1.0",
          "create-hmac": "^1.1.2",
          "elliptic": "^6.0.0",
          "inherits": "^2.0.1",
          "parse-asn1": "^5.0.0"
        }
      },
      "browserify-zlib": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/browserify-zlib/-/browserify-zlib-0.2.0.tgz",
        "integrity": "sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==",
        "requires": {
          "pako": "~1.0.5"
        }
      },
      "browserslist": {
        "version": "4.11.1",
        "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.11.1.tgz",
        "integrity": "sha512-DCTr3kDrKEYNw6Jb9HFxVLQNaue8z+0ZfRBRjmCunKDEXEBajKDj2Y+Uelg+Pi29OnvaSGwjOsnRyNEkXzHg5g==",
        "requires": {
          "caniuse-lite": "^1.0.30001038",
          "electron-to-chromium": "^1.3.390",
          "node-releases": "^1.1.53",
          "pkg-up": "^2.0.0"
        }
      },
      "bser": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
        "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
        "requires": {
          "node-int64": "^0.4.0"
        }
      },
      "buffer": {
        "version": "4.9.2",
        "resolved": "https://registry.npmjs.org/buffer/-/buffer-4.9.2.tgz",
        "integrity": "sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==",
        "requires": {
          "base64-js": "^1.0.2",
          "ieee754": "^1.1.4",
          "isarray": "^1.0.0"
        }
      },
      "buffer-from": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
        "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A=="
      },
      "buffer-indexof": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/buffer-indexof/-/buffer-indexof-1.1.1.tgz",
        "integrity": "sha512-4/rOEg86jivtPTeOUUT61jJO1Ya1TrR/OkqCSZDyq84WJh3LuuiphBYJN+fm5xufIk4XAFcEwte/8WzC8If/1g=="
      },
      "buffer-xor": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/buffer-xor/-/buffer-xor-1.0.3.tgz",
        "integrity": "sha1-JuYe0UIvtw3ULm42cp7VHYVf6Nk="
      },
      "builtin-status-codes": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/builtin-status-codes/-/builtin-status-codes-3.0.0.tgz",
        "integrity": "sha1-hZgoeOIbmOHGZCXgPQF0eI9Wnug="
      },
      "bytes": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
        "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg="
      },
      "cacache": {
        "version": "13.0.1",
        "resolved": "https://registry.npmjs.org/cacache/-/cacache-13.0.1.tgz",
        "integrity": "sha512-5ZvAxd05HDDU+y9BVvcqYu2LLXmPnQ0hW62h32g4xBTgL/MppR4/04NHfj/ycM2y6lmTnbw6HVi+1eN0Psba6w==",
        "requires": {
          "chownr": "^1.1.2",
          "figgy-pudding": "^3.5.1",
          "fs-minipass": "^2.0.0",
          "glob": "^7.1.4",
          "graceful-fs": "^4.2.2",
          "infer-owner": "^1.0.4",
          "lru-cache": "^5.1.1",
          "minipass": "^3.0.0",
          "minipass-collect": "^1.0.2",
          "minipass-flush": "^1.0.5",
          "minipass-pipeline": "^1.2.2",
          "mkdirp": "^0.5.1",
          "move-concurrently": "^1.0.1",
          "p-map": "^3.0.0",
          "promise-inflight": "^1.0.1",
          "rimraf": "^2.7.1",
          "ssri": "^7.0.0",
          "unique-filename": "^1.1.1"
        },
        "dependencies": {
          "rimraf": {
            "version": "2.7.1",
            "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
            "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
            "requires": {
              "glob": "^7.1.3"
            }
          }
        }
      },
      "cache-base": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
        "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
        "requires": {
          "collection-visit": "^1.0.0",
          "component-emitter": "^1.2.1",
          "get-value": "^2.0.6",
          "has-value": "^1.0.0",
          "isobject": "^3.0.1",
          "set-value": "^2.0.0",
          "to-object-path": "^0.3.0",
          "union-value": "^1.0.0",
          "unset-value": "^1.0.0"
        }
      },
      "call-me-maybe": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/call-me-maybe/-/call-me-maybe-1.0.1.tgz",
        "integrity": "sha1-JtII6onje1y95gJQoV8DHBak1ms="
      },
      "caller-callsite": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
        "integrity": "sha1-hH4PzgoiN1CpoCfFSzNzGtMVQTQ=",
        "requires": {
          "callsites": "^2.0.0"
        }
      },
      "caller-path": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
        "integrity": "sha1-Ro+DBE42mrIBD6xfBs7uFbsssfQ=",
        "requires": {
          "caller-callsite": "^2.0.0"
        }
      },
      "callsites": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
        "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA="
      },
      "camel-case": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/camel-case/-/camel-case-4.1.1.tgz",
        "integrity": "sha512-7fa2WcG4fYFkclIvEmxBbTvmibwF2/agfEBc6q3lOpVu0A13ltLsA+Hr/8Hp6kp5f+G7hKi6t8lys6XxP+1K6Q==",
        "requires": {
          "pascal-case": "^3.1.1",
          "tslib": "^1.10.0"
        }
      },
      "camelcase": {
        "version": "5.3.1",
        "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
        "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="
      },
      "camelize": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/camelize/-/camelize-1.0.0.tgz",
        "integrity": "sha1-FkpUg+Yw+kMh5a8HAg5TGDGyYJs="
      },
      "caniuse-api": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/caniuse-api/-/caniuse-api-3.0.0.tgz",
        "integrity": "sha512-bsTwuIg/BZZK/vreVTYYbSWoe2F+71P7K5QGEX+pT250DZbfU1MQ5prOKpPR+LL6uWKK3KMwMCAS74QB3Um1uw==",
        "requires": {
          "browserslist": "^4.0.0",
          "caniuse-lite": "^1.0.0",
          "lodash.memoize": "^4.1.2",
          "lodash.uniq": "^4.5.0"
        }
      },
      "caniuse-lite": {
        "version": "1.0.30001041",
        "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001041.tgz",
        "integrity": "sha512-fqDtRCApddNrQuBxBS7kEiSGdBsgO4wiVw4G/IClfqzfhW45MbTumfN4cuUJGTM0YGFNn97DCXPJ683PS6zwvA=="
      },
      "capture-exit": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/capture-exit/-/capture-exit-2.0.0.tgz",
        "integrity": "sha512-PiT/hQmTonHhl/HFGN+Lx3JJUznrVYJ3+AQsnthneZbvW7x+f08Tk7yLJTLEOUvBTbduLeeBkxEaYXUOUrRq6g==",
        "requires": {
          "rsvp": "^4.8.4"
        }
      },
      "case-sensitive-paths-webpack-plugin": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/case-sensitive-paths-webpack-plugin/-/case-sensitive-paths-webpack-plugin-2.3.0.tgz",
        "integrity": "sha512-/4YgnZS8y1UXXmC02xD5rRrBEu6T5ub+mQHLNRj0fzTRbgdBYhsNo2V5EqwgqrExjxsjtF/OpAKAMkKsxbD5XQ=="
      },
      "caseless": {
        "version": "0.12.0",
        "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
        "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw="
      },
      "chalk": {
        "version": "2.4.2",
        "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
        "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
        "requires": {
          "ansi-styles": "^3.2.1",
          "escape-string-regexp": "^1.0.5",
          "supports-color": "^5.3.0"
        }
      },
      "chardet": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
        "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA=="
      },
      "chokidar": {
        "version": "3.3.1",
        "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.3.1.tgz",
        "integrity": "sha512-4QYCEWOcK3OJrxwvyyAOxFuhpvOVCYkr33LPfFNBjAD/w3sEzWsp2BUOkI4l9bHvWioAd0rc6NlHUOEaWkTeqg==",
        "requires": {
          "anymatch": "~3.1.1",
          "braces": "~3.0.2",
          "fsevents": "~2.1.2",
          "glob-parent": "~5.1.0",
          "is-binary-path": "~2.1.0",
          "is-glob": "~4.0.1",
          "normalize-path": "~3.0.0",
          "readdirp": "~3.3.0"
        },
        "dependencies": {
          "anymatch": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.1.tgz",
            "integrity": "sha512-mM8522psRCqzV+6LhomX5wgp25YVibjh8Wj23I5RPkPppSVSjyKD2A2mBJmWGa+KN7f2D6LNh9jkBCeyLktzjg==",
            "requires": {
              "normalize-path": "^3.0.0",
              "picomatch": "^2.0.4"
            }
          },
          "braces": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
            "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
            "requires": {
              "fill-range": "^7.0.1"
            }
          },
          "fill-range": {
            "version": "7.0.1",
            "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
            "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
            "requires": {
              "to-regex-range": "^5.0.1"
            }
          },
          "is-number": {
            "version": "7.0.0",
            "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
            "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="
          },
          "normalize-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
            "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
          },
          "to-regex-range": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
            "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
            "requires": {
              "is-number": "^7.0.0"
            }
          }
        }
      },
      "chownr": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
        "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg=="
      },
      "chrome-trace-event": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.2.tgz",
        "integrity": "sha512-9e/zx1jw7B4CO+c/RXoCsfg/x1AfUBioy4owYH0bJprEYAx5hRFLRhWBqHAG57D0ZM4H7vxbP7bPe0VwhQRYDQ==",
        "requires": {
          "tslib": "^1.9.0"
        }
      },
      "ci-info": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
        "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ=="
      },
      "cipher-base": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/cipher-base/-/cipher-base-1.0.4.tgz",
        "integrity": "sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==",
        "requires": {
          "inherits": "^2.0.1",
          "safe-buffer": "^5.0.1"
        }
      },
      "class-utils": {
        "version": "0.3.6",
        "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
        "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
        "requires": {
          "arr-union": "^3.1.0",
          "define-property": "^0.2.5",
          "isobject": "^3.0.0",
          "static-extend": "^0.1.1"
        },
        "dependencies": {
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          }
        }
      },
      "clean-css": {
        "version": "4.2.3",
        "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-4.2.3.tgz",
        "integrity": "sha512-VcMWDN54ZN/DS+g58HYL5/n4Zrqe8vHJpGA8KdgUXFU4fuP/aHNw8eld9SyEIyabIMJX/0RaY/fplOo5hYLSFA==",
        "requires": {
          "source-map": "~0.6.0"
        }
      },
      "clean-stack": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
        "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A=="
      },
      "cli-cursor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
        "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
        "requires": {
          "restore-cursor": "^3.1.0"
        }
      },
      "cli-width": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.0.tgz",
        "integrity": "sha1-/xnt6Kml5XkyQUewwR8PvLq+1jk="
      },
      "cliui": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
        "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
        "requires": {
          "string-width": "^3.1.0",
          "strip-ansi": "^5.2.0",
          "wrap-ansi": "^5.1.0"
        },
        "dependencies": {
          "emoji-regex": {
            "version": "7.0.3",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
            "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
          },
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
          },
          "string-width": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
            "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
            "requires": {
              "emoji-regex": "^7.0.1",
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^5.1.0"
            }
          }
        }
      },
      "clone-deep": {
        "version": "0.2.4",
        "resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-0.2.4.tgz",
        "integrity": "sha1-TnPdCen7lxzDhnDF3O2cGJZIHMY=",
        "requires": {
          "for-own": "^0.1.3",
          "is-plain-object": "^2.0.1",
          "kind-of": "^3.0.2",
          "lazy-cache": "^1.0.3",
          "shallow-clone": "^0.1.2"
        }
      },
      "co": {
        "version": "4.6.0",
        "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
        "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ="
      },
      "coa": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/coa/-/coa-2.0.2.tgz",
        "integrity": "sha512-q5/jG+YQnSy4nRTV4F7lPepBJZ8qBNJJDBuJdoejDyLXgmL7IEo+Le2JDZudFTFt7mrCqIRaSjws4ygRCTCAXA==",
        "requires": {
          "@types/q": "^1.5.1",
          "chalk": "^2.4.1",
          "q": "^1.1.2"
        }
      },
      "code-point-at": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
        "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
      },
      "collection-visit": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
        "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
        "requires": {
          "map-visit": "^1.0.0",
          "object-visit": "^1.0.0"
        }
      },
      "color": {
        "version": "3.1.2",
        "resolved": "https://registry.npmjs.org/color/-/color-3.1.2.tgz",
        "integrity": "sha512-vXTJhHebByxZn3lDvDJYw4lR5+uB3vuoHsuYA5AKuxRVn5wzzIfQKGLBmgdVRHKTJYeK5rvJcHnrd0Li49CFpg==",
        "requires": {
          "color-convert": "^1.9.1",
          "color-string": "^1.5.2"
        }
      },
      "color-convert": {
        "version": "1.9.3",
        "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
        "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
        "requires": {
          "color-name": "1.1.3"
        }
      },
      "color-name": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
        "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
      },
      "color-string": {
        "version": "1.5.3",
        "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.5.3.tgz",
        "integrity": "sha512-dC2C5qeWoYkxki5UAXapdjqO672AM4vZuPGRQfO8b5HKuKGBbKWpITyDYN7TOFKvRW7kOgAn3746clDBMDJyQw==",
        "requires": {
          "color-name": "^1.0.0",
          "simple-swizzle": "^0.2.2"
        }
      },
      "combined-stream": {
        "version": "1.0.8",
        "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
        "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
        "requires": {
          "delayed-stream": "~1.0.0"
        }
      },
      "commander": {
        "version": "2.20.3",
        "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
        "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ=="
      },
      "common-tags": {
        "version": "1.8.0",
        "resolved": "https://registry.npmjs.org/common-tags/-/common-tags-1.8.0.tgz",
        "integrity": "sha512-6P6g0uetGpW/sdyUy/iQQCbFF0kWVMSIVSyYz7Zgjcgh8mgw8PQzDNZeyZ5DQ2gM7LBoZPHmnjz8rUthkBG5tw=="
      },
      "commondir": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
        "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs="
      },
      "component-emitter": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
        "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg=="
      },
      "compose-function": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/compose-function/-/compose-function-3.0.3.tgz",
        "integrity": "sha1-ntZ18TzFRQHTCVCkhv9qe6OrGF8=",
        "requires": {
          "arity-n": "^1.0.4"
        }
      },
      "compressible": {
        "version": "2.0.18",
        "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
        "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
        "requires": {
          "mime-db": ">= 1.43.0 < 2"
        }
      },
      "compression": {
        "version": "1.7.4",
        "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
        "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
        "requires": {
          "accepts": "~1.3.5",
          "bytes": "3.0.0",
          "compressible": "~2.0.16",
          "debug": "2.6.9",
          "on-headers": "~1.0.2",
          "safe-buffer": "5.1.2",
          "vary": "~1.1.2"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
              "ms": "2.0.0"
            }
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
          }
        }
      },
      "concat-map": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
      },
      "concat-stream": {
        "version": "1.6.2",
        "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
        "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
        "requires": {
          "buffer-from": "^1.0.0",
          "inherits": "^2.0.3",
          "readable-stream": "^2.2.2",
          "typedarray": "^0.0.6"
        },
        "dependencies": {
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "confusing-browser-globals": {
        "version": "1.0.9",
        "resolved": "https://registry.npmjs.org/confusing-browser-globals/-/confusing-browser-globals-1.0.9.tgz",
        "integrity": "sha512-KbS1Y0jMtyPgIxjO7ZzMAuUpAKMt1SzCL9fsrKsX6b0zJPTaT0SiSPmewwVZg9UAO83HVIlEhZF84LIjZ0lmAw=="
      },
      "connect-history-api-fallback": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-1.6.0.tgz",
        "integrity": "sha512-e54B99q/OUoH64zYYRf3HBP5z24G38h5D3qXu23JGRoigpX5Ss4r9ZnDk3g0Z8uQC2x2lPaJ+UlWBc1ZWBWdLg=="
      },
      "console-browserify": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/console-browserify/-/console-browserify-1.2.0.tgz",
        "integrity": "sha512-ZMkYO/LkF17QvCPqM0gxw8yUzigAOZOSWSHg91FH6orS7vcEj5dVZTidN2fQ14yBSdg97RqhSNwLUXInd52OTA=="
      },
      "constants-browserify": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/constants-browserify/-/constants-browserify-1.0.0.tgz",
        "integrity": "sha1-wguW2MYXdIqvHBYCF2DNJ/y4y3U="
      },
      "contains-path": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/contains-path/-/contains-path-0.1.0.tgz",
        "integrity": "sha1-/ozxhP9mcLa67wGp1IYaXL7EEgo="
      },
      "content-disposition": {
        "version": "0.5.3",
        "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
        "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
        "requires": {
          "safe-buffer": "5.1.2"
        }
      },
      "content-type": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
        "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
      },
      "convert-source-map": {
        "version": "1.7.0",
        "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
        "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
        "requires": {
          "safe-buffer": "~5.1.1"
        }
      },
      "cookie": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
        "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg=="
      },
      "cookie-signature": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
        "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
      },
      "copy-concurrently": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/copy-concurrently/-/copy-concurrently-1.0.5.tgz",
        "integrity": "sha512-f2domd9fsVDFtaFcbaRZuYXwtdmnzqbADSwhSWYxYB/Q8zsdUUFMXVRwXGDMWmbEzAn1kdRrtI1T/KTFOL4X2A==",
        "requires": {
          "aproba": "^1.1.1",
          "fs-write-stream-atomic": "^1.0.8",
          "iferr": "^0.1.5",
          "mkdirp": "^0.5.1",
          "rimraf": "^2.5.4",
          "run-queue": "^1.0.0"
        }
      },
      "copy-descriptor": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
        "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40="
      },
      "core-js": {
        "version": "3.6.5",
        "resolved": "https://registry.npmjs.org/core-js/-/core-js-3.6.5.tgz",
        "integrity": "sha512-vZVEEwZoIsI+vPEuoF9Iqf5H7/M3eeQqWlQnYa8FSKKePuYTf5MWnxb5SDAzCa60b3JBRS5g9b+Dq7b1y/RCrA=="
      },
      "core-js-compat": {
        "version": "3.6.5",
        "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.6.5.tgz",
        "integrity": "sha512-7ItTKOhOZbznhXAQ2g/slGg1PJV5zDO/WdkTwi7UEOJmkvsE32PWvx6mKtDjiMpjnR2CNf6BAD6sSxIlv7ptng==",
        "requires": {
          "browserslist": "^4.8.5",
          "semver": "7.0.0"
        },
        "dependencies": {
          "semver": {
            "version": "7.0.0",
            "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
            "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A=="
          }
        }
      },
      "core-js-pure": {
        "version": "3.6.5",
        "resolved": "https://registry.npmjs.org/core-js-pure/-/core-js-pure-3.6.5.tgz",
        "integrity": "sha512-lacdXOimsiD0QyNf9BC/mxivNJ/ybBGJXQFKzRekp1WTHoVUWsUHEn+2T8GJAzzIhyOuXA+gOxCVN3l+5PLPUA=="
      },
      "core-util-is": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
        "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
      },
      "cosmiconfig": {
        "version": "5.2.1",
        "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
        "integrity": "sha512-H65gsXo1SKjf8zmrJ67eJk8aIRKV5ff2D4uKZIBZShbhGSpEmsQOPW/SKMKYhSTrqR7ufy6RP69rPogdaPh/kA==",
        "requires": {
          "import-fresh": "^2.0.0",
          "is-directory": "^0.3.1",
          "js-yaml": "^3.13.1",
          "parse-json": "^4.0.0"
        }
      },
      "create-ecdh": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/create-ecdh/-/create-ecdh-4.0.3.tgz",
        "integrity": "sha512-GbEHQPMOswGpKXM9kCWVrremUcBmjteUaQ01T9rkKCPDXfUHX0IoP9LpHYo2NPFampa4e+/pFDc3jQdxrxQLaw==",
        "requires": {
          "bn.js": "^4.1.0",
          "elliptic": "^6.0.0"
        }
      },
      "create-hash": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/create-hash/-/create-hash-1.2.0.tgz",
        "integrity": "sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==",
        "requires": {
          "cipher-base": "^1.0.1",
          "inherits": "^2.0.1",
          "md5.js": "^1.3.4",
          "ripemd160": "^2.0.1",
          "sha.js": "^2.4.0"
        }
      },
      "create-hmac": {
        "version": "1.1.7",
        "resolved": "https://registry.npmjs.org/create-hmac/-/create-hmac-1.1.7.tgz",
        "integrity": "sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==",
        "requires": {
          "cipher-base": "^1.0.3",
          "create-hash": "^1.1.0",
          "inherits": "^2.0.1",
          "ripemd160": "^2.0.0",
          "safe-buffer": "^5.0.1",
          "sha.js": "^2.4.8"
        }
      },
      "cross-spawn": {
        "version": "6.0.5",
        "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
        "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
        "requires": {
          "nice-try": "^1.0.4",
          "path-key": "^2.0.1",
          "semver": "^5.5.0",
          "shebang-command": "^1.2.0",
          "which": "^1.2.9"
        },
        "dependencies": {
          "semver": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
          }
        }
      },
      "crypto-browserify": {
        "version": "3.12.0",
        "resolved": "https://registry.npmjs.org/crypto-browserify/-/crypto-browserify-3.12.0.tgz",
        "integrity": "sha512-fz4spIh+znjO2VjL+IdhEpRJ3YN6sMzITSBijk6FK2UvTqruSQW+/cCZTSNsMiZNvUeq0CqurF+dAbyiGOY6Wg==",
        "requires": {
          "browserify-cipher": "^1.0.0",
          "browserify-sign": "^4.0.0",
          "create-ecdh": "^4.0.0",
          "create-hash": "^1.1.0",
          "create-hmac": "^1.1.0",
          "diffie-hellman": "^5.0.0",
          "inherits": "^2.0.1",
          "pbkdf2": "^3.0.3",
          "public-encrypt": "^4.0.0",
          "randombytes": "^2.0.0",
          "randomfill": "^1.0.3"
        }
      },
      "css": {
        "version": "2.2.4",
        "resolved": "https://registry.npmjs.org/css/-/css-2.2.4.tgz",
        "integrity": "sha512-oUnjmWpy0niI3x/mPL8dVEI1l7MnG3+HHyRPHf+YFSbK+svOhXpmSOcDURUh2aOCgl2grzrOPt1nHLuCVFULLw==",
        "requires": {
          "inherits": "^2.0.3",
          "source-map": "^0.6.1",
          "source-map-resolve": "^0.5.2",
          "urix": "^0.1.0"
        }
      },
      "css-blank-pseudo": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/css-blank-pseudo/-/css-blank-pseudo-0.1.4.tgz",
        "integrity": "sha512-LHz35Hr83dnFeipc7oqFDmsjHdljj3TQtxGGiNWSOsTLIAubSm4TEz8qCaKFpk7idaQ1GfWscF4E6mgpBysA1w==",
        "requires": {
          "postcss": "^7.0.5"
        }
      },
      "css-color-keywords": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/css-color-keywords/-/css-color-keywords-1.0.0.tgz",
        "integrity": "sha1-/qJhbcZ2spYmhrOvjb2+GAskTgU="
      },
      "css-color-names": {
        "version": "0.0.4",
        "resolved": "https://registry.npmjs.org/css-color-names/-/css-color-names-0.0.4.tgz",
        "integrity": "sha1-gIrcLnnPhHOAabZGyyDsJ762KeA="
      },
      "css-declaration-sorter": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/css-declaration-sorter/-/css-declaration-sorter-4.0.1.tgz",
        "integrity": "sha512-BcxQSKTSEEQUftYpBVnsH4SF05NTuBokb19/sBt6asXGKZ/6VP7PLG1CBCkFDYOnhXhPh0jMhO6xZ71oYHXHBA==",
        "requires": {
          "postcss": "^7.0.1",
          "timsort": "^0.3.0"
        }
      },
      "css-has-pseudo": {
        "version": "0.10.0",
        "resolved": "https://registry.npmjs.org/css-has-pseudo/-/css-has-pseudo-0.10.0.tgz",
        "integrity": "sha512-Z8hnfsZu4o/kt+AuFzeGpLVhFOGO9mluyHBaA2bA8aCGTwah5sT3WV/fTHH8UNZUytOIImuGPrl/prlb4oX4qQ==",
        "requires": {
          "postcss": "^7.0.6",
          "postcss-selector-parser": "^5.0.0-rc.4"
        },
        "dependencies": {
          "cssesc": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-2.0.0.tgz",
            "integrity": "sha512-MsCAG1z9lPdoO/IUMLSBWBSVxVtJ1395VGIQ+Fc2gNdkQ1hNDnQdw3YhA71WJCBW1vdwA0cAnk/DnW6bqoEUYg=="
          },
          "postcss-selector-parser": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-5.0.0.tgz",
            "integrity": "sha512-w+zLE5Jhg6Liz8+rQOWEAwtwkyqpfnmsinXjXg6cY7YIONZZtgvE0v2O0uhQBs0peNomOJwWRKt6JBfTdTd3OQ==",
            "requires": {
              "cssesc": "^2.0.0",
              "indexes-of": "^1.0.1",
              "uniq": "^1.0.1"
            }
          }
        }
      },
      "css-in-js-utils": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/css-in-js-utils/-/css-in-js-utils-2.0.1.tgz",
        "integrity": "sha512-PJF0SpJT+WdbVVt0AOYp9C8GnuruRlL/UFW7932nLWmFLQTaWEzTBQEx7/hn4BuV+WON75iAViSUJLiU3PKbpA==",
        "requires": {
          "hyphenate-style-name": "^1.0.2",
          "isobject": "^3.0.1"
        },
        "dependencies": {
          "isobject": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
            "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8="
          }
        }
      },
      "css-loader": {
        "version": "3.5.2",
        "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-3.5.2.tgz",
        "integrity": "sha512-hDL0DPopg6zQQSRlZm0hyeaqIRnL0wbWjay9BZxoiJBpbfOW4WHfbaYQhwnDmEa0kZUc1CJ3IFo15ot1yULMIQ==",
        "dev": true,
        "requires": {
          "camelcase": "^5.3.1",
          "cssesc": "^3.0.0",
          "icss-utils": "^4.1.1",
          "loader-utils": "^1.2.3",
          "normalize-path": "^3.0.0",
          "postcss": "^7.0.27",
          "postcss-modules-extract-imports": "^2.0.0",
          "postcss-modules-local-by-default": "^3.0.2",
          "postcss-modules-scope": "^2.2.0",
          "postcss-modules-values": "^3.0.0",
          "postcss-value-parser": "^4.0.3",
          "schema-utils": "^2.6.5",
          "semver": "^6.3.0"
        },
        "dependencies": {
          "normalize-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
            "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
            "dev": true
          }
        }
      },
      "css-prefers-color-scheme": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/css-prefers-color-scheme/-/css-prefers-color-scheme-3.1.1.tgz",
        "integrity": "sha512-MTu6+tMs9S3EUqzmqLXEcgNRbNkkD/TGFvowpeoWJn5Vfq7FMgsmRQs9X5NXAURiOBmOxm/lLjsDNXDE6k9bhg==",
        "requires": {
          "postcss": "^7.0.5"
        }
      },
      "css-select": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/css-select/-/css-select-2.1.0.tgz",
        "integrity": "sha512-Dqk7LQKpwLoH3VovzZnkzegqNSuAziQyNZUcrdDM401iY+R5NkGBXGmtO05/yaXQziALuPogeG0b7UAgjnTJTQ==",
        "requires": {
          "boolbase": "^1.0.0",
          "css-what": "^3.2.1",
          "domutils": "^1.7.0",
          "nth-check": "^1.0.2"
        }
      },
      "css-select-base-adapter": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/css-select-base-adapter/-/css-select-base-adapter-0.1.1.tgz",
        "integrity": "sha512-jQVeeRG70QI08vSTwf1jHxp74JoZsr2XSgETae8/xC8ovSnL2WF87GTLO86Sbwdt2lK4Umg4HnnwMO4YF3Ce7w=="
      },
      "css-to-react-native": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/css-to-react-native/-/css-to-react-native-3.0.0.tgz",
        "integrity": "sha512-Ro1yETZA813eoyUp2GDBhG2j+YggidUmzO1/v9eYBKR2EHVEniE2MI/NqpTQ954BMpTPZFsGNPm46qFB9dpaPQ==",
        "requires": {
          "camelize": "^1.0.0",
          "css-color-keywords": "^1.0.0",
          "postcss-value-parser": "^4.0.2"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.0.3.tgz",
            "integrity": "sha512-N7h4pG+Nnu5BEIzyeaaIYWs0LI5XC40OrRh5L60z0QjFsqGWcHcbkBvpe1WYpcIS9yQ8sOi/vIPt1ejQCrMVrg=="
          }
        }
      },
      "css-tree": {
        "version": "1.0.0-alpha.37",
        "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.0.0-alpha.37.tgz",
        "integrity": "sha512-DMxWJg0rnz7UgxKT0Q1HU/L9BeJI0M6ksor0OgqOnF+aRCDWg/N2641HmVyU9KVIu0OVVWOb2IpC9A+BJRnejg==",
        "requires": {
          "mdn-data": "2.0.4",
          "source-map": "^0.6.1"
        }
      },
      "css-what": {
        "version": "3.2.1",
        "resolved": "https://registry.npmjs.org/css-what/-/css-what-3.2.1.tgz",
        "integrity": "sha512-WwOrosiQTvyms+Ti5ZC5vGEK0Vod3FTt1ca+payZqvKuGJF+dq7bG63DstxtN0dpm6FxY27a/zS3Wten+gEtGw=="
      },
      "css.escape": {
        "version": "1.5.1",
        "resolved": "https://registry.npmjs.org/css.escape/-/css.escape-1.5.1.tgz",
        "integrity": "sha1-QuJ9T6BK4y+TGktNQZH6nN3ul8s="
      },
      "cssdb": {
        "version": "4.4.0",
        "resolved": "https://registry.npmjs.org/cssdb/-/cssdb-4.4.0.tgz",
        "integrity": "sha512-LsTAR1JPEM9TpGhl/0p3nQecC2LJ0kD8X5YARu1hk/9I1gril5vDtMZyNxcEpxxDj34YNck/ucjuoUd66K03oQ=="
      },
      "cssesc": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
        "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg=="
      },
      "cssnano": {
        "version": "4.1.10",
        "resolved": "https://registry.npmjs.org/cssnano/-/cssnano-4.1.10.tgz",
        "integrity": "sha512-5wny+F6H4/8RgNlaqab4ktc3e0/blKutmq8yNlBFXA//nSFFAqAngjNVRzUvCgYROULmZZUoosL/KSoZo5aUaQ==",
        "requires": {
          "cosmiconfig": "^5.0.0",
          "cssnano-preset-default": "^4.0.7",
          "is-resolvable": "^1.0.0",
          "postcss": "^7.0.0"
        }
      },
      "cssnano-preset-default": {
        "version": "4.0.7",
        "resolved": "https://registry.npmjs.org/cssnano-preset-default/-/cssnano-preset-default-4.0.7.tgz",
        "integrity": "sha512-x0YHHx2h6p0fCl1zY9L9roD7rnlltugGu7zXSKQx6k2rYw0Hi3IqxcoAGF7u9Q5w1nt7vK0ulxV8Lo+EvllGsA==",
        "requires": {
          "css-declaration-sorter": "^4.0.1",
          "cssnano-util-raw-cache": "^4.0.1",
          "postcss": "^7.0.0",
          "postcss-calc": "^7.0.1",
          "postcss-colormin": "^4.0.3",
          "postcss-convert-values": "^4.0.1",
          "postcss-discard-comments": "^4.0.2",
          "postcss-discard-duplicates": "^4.0.2",
          "postcss-discard-empty": "^4.0.1",
          "postcss-discard-overridden": "^4.0.1",
          "postcss-merge-longhand": "^4.0.11",
          "postcss-merge-rules": "^4.0.3",
          "postcss-minify-font-values": "^4.0.2",
          "postcss-minify-gradients": "^4.0.2",
          "postcss-minify-params": "^4.0.2",
          "postcss-minify-selectors": "^4.0.2",
          "postcss-normalize-charset": "^4.0.1",
          "postcss-normalize-display-values": "^4.0.2",
          "postcss-normalize-positions": "^4.0.2",
          "postcss-normalize-repeat-style": "^4.0.2",
          "postcss-normalize-string": "^4.0.2",
          "postcss-normalize-timing-functions": "^4.0.2",
          "postcss-normalize-unicode": "^4.0.1",
          "postcss-normalize-url": "^4.0.1",
          "postcss-normalize-whitespace": "^4.0.2",
          "postcss-ordered-values": "^4.1.2",
          "postcss-reduce-initial": "^4.0.3",
          "postcss-reduce-transforms": "^4.0.2",
          "postcss-svgo": "^4.0.2",
          "postcss-unique-selectors": "^4.0.1"
        }
      },
      "cssnano-util-get-arguments": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/cssnano-util-get-arguments/-/cssnano-util-get-arguments-4.0.0.tgz",
        "integrity": "sha1-7ToIKZ8h11dBsg87gfGU7UnMFQ8="
      },
      "cssnano-util-get-match": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/cssnano-util-get-match/-/cssnano-util-get-match-4.0.0.tgz",
        "integrity": "sha1-wOTKB/U4a7F+xeUiULT1lhNlFW0="
      },
      "cssnano-util-raw-cache": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/cssnano-util-raw-cache/-/cssnano-util-raw-cache-4.0.1.tgz",
        "integrity": "sha512-qLuYtWK2b2Dy55I8ZX3ky1Z16WYsx544Q0UWViebptpwn/xDBmog2TLg4f+DBMg1rJ6JDWtn96WHbOKDWt1WQA==",
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "cssnano-util-same-parent": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/cssnano-util-same-parent/-/cssnano-util-same-parent-4.0.1.tgz",
        "integrity": "sha512-WcKx5OY+KoSIAxBW6UBBRay1U6vkYheCdjyVNDm85zt5K9mHoGOfsOsqIszfAqrQQFIIKgjh2+FDgIj/zsl21Q=="
      },
      "csso": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/csso/-/csso-4.0.3.tgz",
        "integrity": "sha512-NL3spysxUkcrOgnpsT4Xdl2aiEiBG6bXswAABQVHcMrfjjBisFOKwLDOmf4wf32aPdcJws1zds2B0Rg+jqMyHQ==",
        "requires": {
          "css-tree": "1.0.0-alpha.39"
        },
        "dependencies": {
          "css-tree": {
            "version": "1.0.0-alpha.39",
            "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.0.0-alpha.39.tgz",
            "integrity": "sha512-7UvkEYgBAHRG9Nt980lYxjsTrCyHFN53ky3wVsDkiMdVqylqRt+Zc+jm5qw7/qyOvN2dHSYtX0e4MbCCExSvnA==",
            "requires": {
              "mdn-data": "2.0.6",
              "source-map": "^0.6.1"
            }
          },
          "mdn-data": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.6.tgz",
            "integrity": "sha512-rQvjv71olwNHgiTbfPZFkJtjNMciWgswYeciZhtvWLO8bmX3TnhyA62I6sTWOyZssWHJJjY6/KiWwqQsWWsqOA=="
          }
        }
      },
      "cssom": {
        "version": "0.3.8",
        "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
        "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg=="
      },
      "cssstyle": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-1.4.0.tgz",
        "integrity": "sha512-GBrLZYZ4X4x6/QEoBnIrqb8B/f5l4+8me2dkom/j1Gtbxy0kBv6OGzKuAsGM75bkGwGAFkt56Iwg28S3XTZgSA==",
        "requires": {
          "cssom": "0.3.x"
        }
      },
      "csstype": {
        "version": "2.6.10",
        "resolved": "https://registry.npmjs.org/csstype/-/csstype-2.6.10.tgz",
        "integrity": "sha512-D34BqZU4cIlMCY93rZHbrq9pjTAQJ3U8S8rfBqjwHxkGPThWFjzZDQpgMJY0QViLxth6ZKYiwFBo14RdN44U/w=="
      },
      "cyclist": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/cyclist/-/cyclist-1.0.1.tgz",
        "integrity": "sha1-WW6WmP0MgOEgOMK4LW6xs1tiJNk="
      },
      "d": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/d/-/d-1.0.1.tgz",
        "integrity": "sha512-m62ShEObQ39CfralilEQRjH6oAMtNCV1xJyEx5LpRYUVN+EviphDgUc/F3hnYbADmkiNs67Y+3ylmlG7Lnu+FA==",
        "requires": {
          "es5-ext": "^0.10.50",
          "type": "^1.0.1"
        }
      },
      "damerau-levenshtein": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.6.tgz",
        "integrity": "sha512-JVrozIeElnj3QzfUIt8tB8YMluBJom4Vw9qTPpjGYQ9fYlB3D/rb6OordUxf3xeFB35LKWs0xqcO5U6ySvBtug=="
      },
      "dashdash": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
        "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
        "requires": {
          "assert-plus": "^1.0.0"
        }
      },
      "data-urls": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-1.1.0.tgz",
        "integrity": "sha512-YTWYI9se1P55u58gL5GkQHW4P6VJBJ5iBT+B5a7i2Tjadhv52paJG0qHX4A0OR6/t52odI64KP2YvFpkDOi3eQ==",
        "requires": {
          "abab": "^2.0.0",
          "whatwg-mimetype": "^2.2.0",
          "whatwg-url": "^7.0.0"
        },
        "dependencies": {
          "whatwg-url": {
            "version": "7.1.0",
            "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.1.0.tgz",
            "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
            "requires": {
              "lodash.sortby": "^4.7.0",
              "tr46": "^1.0.1",
              "webidl-conversions": "^4.0.2"
            }
          }
        }
      },
      "debug": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
        "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
        "requires": {
          "ms": "^2.1.1"
        }
      },
      "decamelize": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
        "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA="
      },
      "decode-uri-component": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
        "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU="
      },
      "deep-equal": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-1.1.1.tgz",
        "integrity": "sha512-yd9c5AdiqVcR+JjcwUQb9DkhJc8ngNr0MahEBGvDiJw8puWab2yZlh+nkasOnZP+EGTAP6rRp2JzJhJZzvNF8g==",
        "requires": {
          "is-arguments": "^1.0.4",
          "is-date-object": "^1.0.1",
          "is-regex": "^1.0.4",
          "object-is": "^1.0.1",
          "object-keys": "^1.1.1",
          "regexp.prototype.flags": "^1.2.0"
        }
      },
      "deep-is": {
        "version": "0.1.3",
        "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
        "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ="
      },
      "default-gateway": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/default-gateway/-/default-gateway-4.2.0.tgz",
        "integrity": "sha512-h6sMrVB1VMWVrW13mSc6ia/DwYYw5MN6+exNu1OaJeFac5aSAvwM7lZ0NVfTABuSkQelr4h5oebg3KB1XPdjgA==",
        "requires": {
          "execa": "^1.0.0",
          "ip-regex": "^2.1.0"
        }
      },
      "define-properties": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
        "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
        "requires": {
          "object-keys": "^1.0.12"
        }
      },
      "define-property": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
        "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
        "requires": {
          "is-descriptor": "^1.0.2",
          "isobject": "^3.0.1"
        },
        "dependencies": {
          "is-accessor-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
            "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-data-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
            "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-descriptor": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
            "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
            "requires": {
              "is-accessor-descriptor": "^1.0.0",
              "is-data-descriptor": "^1.0.0",
              "kind-of": "^6.0.2"
            }
          },
          "kind-of": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
            "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
          }
        }
      },
      "del": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/del/-/del-4.1.1.tgz",
        "integrity": "sha512-QwGuEUouP2kVwQenAsOof5Fv8K9t3D8Ca8NxcXKrIpEHjTXK5J2nXLdP+ALI1cgv8wj7KuwBhTwBkOZSJKM5XQ==",
        "requires": {
          "@types/glob": "^7.1.1",
          "globby": "^6.1.0",
          "is-path-cwd": "^2.0.0",
          "is-path-in-cwd": "^2.0.0",
          "p-map": "^2.0.0",
          "pify": "^4.0.1",
          "rimraf": "^2.6.3"
        },
        "dependencies": {
          "globby": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/globby/-/globby-6.1.0.tgz",
            "integrity": "sha1-9abXDoOV4hyFj7BInWTfAkJNUGw=",
            "requires": {
              "array-union": "^1.0.1",
              "glob": "^7.0.3",
              "object-assign": "^4.0.1",
              "pify": "^2.0.0",
              "pinkie-promise": "^2.0.0"
            },
            "dependencies": {
              "pify": {
                "version": "2.3.0",
                "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
                "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw="
              }
            }
          },
          "p-map": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/p-map/-/p-map-2.1.0.tgz",
            "integrity": "sha512-y3b8Kpd8OAN444hxfBbFfj1FY/RjtTd8tzYwhUqNYXx0fXx2iX4maP4Qr6qhIKbQXI02wTLAda4fYUbDagTUFw=="
          },
          "pify": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
            "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g=="
          }
        }
      },
      "delayed-stream": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
        "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk="
      },
      "depd": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
        "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
      },
      "des.js": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/des.js/-/des.js-1.0.1.tgz",
        "integrity": "sha512-Q0I4pfFrv2VPd34/vfLrFOoRmlYj3OV50i7fskps1jZWK1kApMWWT9G6RRUeYedLcBDIhnSDaUvJMb3AhUlaEA==",
        "requires": {
          "inherits": "^2.0.1",
          "minimalistic-assert": "^1.0.0"
        }
      },
      "destroy": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
        "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
      },
      "detect-newline": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-2.1.0.tgz",
        "integrity": "sha1-9B8cEL5LAOh7XxPaaAdZ8sW/0+I="
      },
      "detect-node": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/detect-node/-/detect-node-2.0.4.tgz",
        "integrity": "sha512-ZIzRpLJrOj7jjP2miAtgqIfmzbxa4ZOr5jJc601zklsfEx9oTzmmj2nVpIPRpNlRTIh8lc1kyViIY7BWSGNmKw=="
      },
      "detect-port-alt": {
        "version": "1.1.6",
        "resolved": "https://registry.npmjs.org/detect-port-alt/-/detect-port-alt-1.1.6.tgz",
        "integrity": "sha512-5tQykt+LqfJFBEYaDITx7S7cR7mJ/zQmLXZ2qt5w04ainYZw6tBf9dBunMjVeVOdYVRUzUOE4HkY5J7+uttb5Q==",
        "requires": {
          "address": "^1.0.1",
          "debug": "^2.6.0"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
              "ms": "2.0.0"
            }
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
          }
        }
      },
      "diff-sequences": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-24.9.0.tgz",
        "integrity": "sha512-Dj6Wk3tWyTE+Fo1rW8v0Xhwk80um6yFYKbuAxc9c3EZxIHFDYwbi34Uk42u1CdnIiVorvt4RmlSDjIPyzGC2ew=="
      },
      "diffie-hellman": {
        "version": "5.0.3",
        "resolved": "https://registry.npmjs.org/diffie-hellman/-/diffie-hellman-5.0.3.tgz",
        "integrity": "sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==",
        "requires": {
          "bn.js": "^4.1.0",
          "miller-rabin": "^4.0.0",
          "randombytes": "^2.0.0"
        }
      },
      "dir-glob": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-2.0.0.tgz",
        "integrity": "sha512-37qirFDz8cA5fimp9feo43fSuRo2gHwaIn6dXL8Ber1dGwUosDrGZeCCXq57WnIqE4aQ+u3eQZzsk1yOzhdwag==",
        "requires": {
          "arrify": "^1.0.1",
          "path-type": "^3.0.0"
        }
      },
      "dns-equal": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/dns-equal/-/dns-equal-1.0.0.tgz",
        "integrity": "sha1-s55/HabrCnW6nBcySzR1PEfgZU0="
      },
      "dns-packet": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/dns-packet/-/dns-packet-1.3.1.tgz",
        "integrity": "sha512-0UxfQkMhYAUaZI+xrNZOz/as5KgDU0M/fQ9b6SpkyLbk3GEswDi6PADJVaYJradtRVsRIlF1zLyOodbcTCDzUg==",
        "requires": {
          "ip": "^1.1.0",
          "safe-buffer": "^5.0.1"
        }
      },
      "dns-txt": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/dns-txt/-/dns-txt-2.0.2.tgz",
        "integrity": "sha1-uR2Ab10nGI5Ks+fRB9iBocxGQrY=",
        "requires": {
          "buffer-indexof": "^1.0.0"
        }
      },
      "doctrine": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
        "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
        "requires": {
          "esutils": "^2.0.2"
        }
      },
      "dom-accessibility-api": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/dom-accessibility-api/-/dom-accessibility-api-0.3.0.tgz",
        "integrity": "sha512-PzwHEmsRP3IGY4gv/Ug+rMeaTIyTJvadCb+ujYXYeIylbHJezIyNToe8KfEgHTCEYyC+/bUghYOGg8yMGlZ6vA=="
      },
      "dom-converter": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/dom-converter/-/dom-converter-0.2.0.tgz",
        "integrity": "sha512-gd3ypIPfOMr9h5jIKq8E3sHOTCjeirnl0WK5ZdS1AW0Odt0b1PaWaHdJ4Qk4klv+YB9aJBS7mESXjFoDQPu6DA==",
        "requires": {
          "utila": "~0.4"
        }
      },
      "dom-serializer": {
        "version": "0.2.2",
        "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.2.tgz",
        "integrity": "sha512-2/xPb3ORsQ42nHYiSunXkDjPLBaEj/xTwUO4B7XCZQTRk7EBtTOPaygh10YAAh2OI1Qrp6NWfpAhzswj0ydt9g==",
        "requires": {
          "domelementtype": "^2.0.1",
          "entities": "^2.0.0"
        },
        "dependencies": {
          "domelementtype": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.0.1.tgz",
            "integrity": "sha512-5HOHUDsYZWV8FGWN0Njbr/Rn7f/eWSQi1v7+HsUVwXgn8nWWlL64zKDkS0n8ZmQ3mlWOMuXOnR+7Nx/5tMO5AQ=="
          }
        }
      },
      "domain-browser": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/domain-browser/-/domain-browser-1.2.0.tgz",
        "integrity": "sha512-jnjyiM6eRyZl2H+W8Q/zLMA481hzi0eszAaBUzIVnmYVDBbnLxVNnfu1HgEBvCbL+71FrxMl3E6lpKH7Ge3OXA=="
      },
      "domelementtype": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.1.tgz",
        "integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w=="
      },
      "domexception": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/domexception/-/domexception-1.0.1.tgz",
        "integrity": "sha512-raigMkn7CJNNo6Ihro1fzG7wr3fHuYVytzquZKX5n0yizGsTcYgzdIUwj1X9pK0VvjeihV+XiclP+DjwbsSKug==",
        "requires": {
          "webidl-conversions": "^4.0.2"
        }
      },
      "domhandler": {
        "version": "2.4.2",
        "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-2.4.2.tgz",
        "integrity": "sha512-JiK04h0Ht5u/80fdLMCEmV4zkNh2BcoMFBmZ/91WtYZ8qVXSKjiw7fXMgFPnHcSZgOo3XdinHvmnDUeMf5R4wA==",
        "requires": {
          "domelementtype": "1"
        }
      },
      "domutils": {
        "version": "1.7.0",
        "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.7.0.tgz",
        "integrity": "sha512-Lgd2XcJ/NjEw+7tFvfKxOzCYKZsdct5lczQ2ZaQY8Djz7pfAD3Gbp8ySJWtreII/vDlMVmxwa6pHmdxIYgttDg==",
        "requires": {
          "dom-serializer": "0",
          "domelementtype": "1"
        }
      },
      "dot-case": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/dot-case/-/dot-case-3.0.3.tgz",
        "integrity": "sha512-7hwEmg6RiSQfm/GwPL4AAWXKy3YNNZA3oFv2Pdiey0mwkRCPZ9x6SZbkLcn8Ma5PYeVokzoD4Twv2n7LKp5WeA==",
        "requires": {
          "no-case": "^3.0.3",
          "tslib": "^1.10.0"
        }
      },
      "dot-prop": {
        "version": "5.2.0",
        "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.2.0.tgz",
        "integrity": "sha512-uEUyaDKoSQ1M4Oq8l45hSE26SnTxL6snNnqvK/VWx5wJhmff5z0FUVJDKDanor/6w3kzE3i7XZOk+7wC0EXr1A==",
        "requires": {
          "is-obj": "^2.0.0"
        }
      },
      "dotenv": {
        "version": "8.2.0",
        "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-8.2.0.tgz",
        "integrity": "sha512-8sJ78ElpbDJBHNeBzUbUVLsqKdccaa/BXF1uPTw3GrvQTBgrQrtObr2mUrE38vzYd8cEv+m/JBfDLioYcfXoaw=="
      },
      "dotenv-expand": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/dotenv-expand/-/dotenv-expand-5.1.0.tgz",
        "integrity": "sha512-YXQl1DSa4/PQyRfgrv6aoNjhasp/p4qs9FjJ4q4cQk+8m4r6k4ZSiEyytKG8f8W9gi8WsQtIObNmKd+tMzNTmA=="
      },
      "duplexer": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/duplexer/-/duplexer-0.1.1.tgz",
        "integrity": "sha1-rOb/gIwc5mtX0ev5eXessCM0z8E="
      },
      "duplexify": {
        "version": "3.7.1",
        "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.7.1.tgz",
        "integrity": "sha512-07z8uv2wMyS51kKhD1KsdXJg5WQ6t93RneqRxUHnskXVtlYYkLqM0gqStQZ3pj073g687jPCHrqNfCzawLYh5g==",
        "requires": {
          "end-of-stream": "^1.0.0",
          "inherits": "^2.0.1",
          "readable-stream": "^2.0.0",
          "stream-shift": "^1.0.0"
        },
        "dependencies": {
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "ecc-jsbn": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
        "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
        "requires": {
          "jsbn": "~0.1.0",
          "safer-buffer": "^2.1.0"
        }
      },
      "ee-first": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
        "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
      },
      "electron-to-chromium": {
        "version": "1.3.403",
        "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.403.tgz",
        "integrity": "sha512-JaoxV4RzdBAZOnsF4dAlZ2ijJW72MbqO5lNfOBHUWiBQl3Rwe+mk2RCUMrRI3rSClLJ8HSNQNqcry12H+0ZjFw=="
      },
      "elliptic": {
        "version": "6.5.2",
        "resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.5.2.tgz",
        "integrity": "sha512-f4x70okzZbIQl/NSRLkI/+tteV/9WqL98zx+SQ69KbXxmVrmjwsNUPn/gYJJ0sHvEak24cZgHIPegRePAtA/xw==",
        "requires": {
          "bn.js": "^4.4.0",
          "brorand": "^1.0.1",
          "hash.js": "^1.0.0",
          "hmac-drbg": "^1.0.0",
          "inherits": "^2.0.1",
          "minimalistic-assert": "^1.0.0",
          "minimalistic-crypto-utils": "^1.0.0"
        }
      },
      "emoji-regex": {
        "version": "8.0.0",
        "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
        "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
      },
      "emojis-list": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-3.0.0.tgz",
        "integrity": "sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q=="
      },
      "encodeurl": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
        "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
      },
      "end-of-stream": {
        "version": "1.4.4",
        "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
        "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
        "requires": {
          "once": "^1.4.0"
        }
      },
      "enhanced-resolve": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-4.1.1.tgz",
        "integrity": "sha512-98p2zE+rL7/g/DzMHMTF4zZlCgeVdJ7yr6xzEpJRYwFYrGi9ANdn5DnJURg6RpBkyk60XYDnWIv51VfIhfNGuA==",
        "requires": {
          "graceful-fs": "^4.1.2",
          "memory-fs": "^0.5.0",
          "tapable": "^1.0.0"
        },
        "dependencies": {
          "memory-fs": {
            "version": "0.5.0",
            "resolved": "https://registry.npmjs.org/memory-fs/-/memory-fs-0.5.0.tgz",
            "integrity": "sha512-jA0rdU5KoQMC0e6ppoNRtpp6vjFq6+NY7r8hywnC7V+1Xj/MtHwGIbB1QaK/dunyjWteJzmkpd7ooeWg10T7GA==",
            "requires": {
              "errno": "^0.1.3",
              "readable-stream": "^2.0.1"
            }
          },
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "entities": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/entities/-/entities-2.0.0.tgz",
        "integrity": "sha512-D9f7V0JSRwIxlRI2mjMqufDrRDnx8p+eEOz7aUM9SuvF8gsBzra0/6tbjl1m8eQHrZlYj6PxqE00hZ1SAIKPLw=="
      },
      "errno": {
        "version": "0.1.7",
        "resolved": "https://registry.npmjs.org/errno/-/errno-0.1.7.tgz",
        "integrity": "sha512-MfrRBDWzIWifgq6tJj60gkAwtLNb6sQPlcFrSOflcP1aFmmruKQ2wRnze/8V6kgyz7H3FF8Npzv78mZ7XLLflg==",
        "requires": {
          "prr": "~1.0.1"
        }
      },
      "error-ex": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
        "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
        "requires": {
          "is-arrayish": "^0.2.1"
        }
      },
      "es-abstract": {
        "version": "1.17.5",
        "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.17.5.tgz",
        "integrity": "sha512-BR9auzDbySxOcfog0tLECW8l28eRGpDpU3Dm3Hp4q/N+VtLTmyj4EUN088XZWQDW/hzj6sYRDXeOFsaAODKvpg==",
        "requires": {
          "es-to-primitive": "^1.2.1",
          "function-bind": "^1.1.1",
          "has": "^1.0.3",
          "has-symbols": "^1.0.1",
          "is-callable": "^1.1.5",
          "is-regex": "^1.0.5",
          "object-inspect": "^1.7.0",
          "object-keys": "^1.1.1",
          "object.assign": "^4.1.0",
          "string.prototype.trimleft": "^2.1.1",
          "string.prototype.trimright": "^2.1.1"
        }
      },
      "es-to-primitive": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
        "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
        "requires": {
          "is-callable": "^1.1.4",
          "is-date-object": "^1.0.1",
          "is-symbol": "^1.0.2"
        }
      },
      "es5-ext": {
        "version": "0.10.53",
        "resolved": "https://registry.npmjs.org/es5-ext/-/es5-ext-0.10.53.tgz",
        "integrity": "sha512-Xs2Stw6NiNHWypzRTY1MtaG/uJlwCk8kH81920ma8mvN8Xq1gsfhZvpkImLQArw8AHnv8MT2I45J3c0R8slE+Q==",
        "requires": {
          "es6-iterator": "~2.0.3",
          "es6-symbol": "~3.1.3",
          "next-tick": "~1.0.0"
        }
      },
      "es6-iterator": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/es6-iterator/-/es6-iterator-2.0.3.tgz",
        "integrity": "sha1-p96IkUGgWpSwhUQDstCg+/qY87c=",
        "requires": {
          "d": "1",
          "es5-ext": "^0.10.35",
          "es6-symbol": "^3.1.1"
        }
      },
      "es6-symbol": {
        "version": "3.1.3",
        "resolved": "https://registry.npmjs.org/es6-symbol/-/es6-symbol-3.1.3.tgz",
        "integrity": "sha512-NJ6Yn3FuDinBaBRWl/q5X/s4koRHBrgKAu+yGI6JCBeiu3qrcbJhwT2GeR/EXVfylRk8dpQVJoLEFhK+Mu31NA==",
        "requires": {
          "d": "^1.0.1",
          "ext": "^1.1.2"
        }
      },
      "escape-html": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
        "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
      },
      "escape-string-regexp": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
        "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="
      },
      "escodegen": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.1.tgz",
        "integrity": "sha512-Bmt7NcRySdIfNPfU2ZoXDrrXsG9ZjvDxcAlMfDUgRBjLOWTuIACXPBFJH7Z+cLb40JeQco5toikyc9t9P8E9SQ==",
        "requires": {
          "esprima": "^4.0.1",
          "estraverse": "^4.2.0",
          "esutils": "^2.0.2",
          "optionator": "^0.8.1",
          "source-map": "~0.6.1"
        }
      },
      "eslint": {
        "version": "6.8.0",
        "resolved": "https://registry.npmjs.org/eslint/-/eslint-6.8.0.tgz",
        "integrity": "sha512-K+Iayyo2LtyYhDSYwz5D5QdWw0hCacNzyq1Y821Xna2xSJj7cijoLLYmLxTQgcgZ9mC61nryMy9S7GRbYpI5Ig==",
        "requires": {
          "@babel/code-frame": "^7.0.0",
          "ajv": "^6.10.0",
          "chalk": "^2.1.0",
          "cross-spawn": "^6.0.5",
          "debug": "^4.0.1",
          "doctrine": "^3.0.0",
          "eslint-scope": "^5.0.0",
          "eslint-utils": "^1.4.3",
          "eslint-visitor-keys": "^1.1.0",
          "espree": "^6.1.2",
          "esquery": "^1.0.1",
          "esutils": "^2.0.2",
          "file-entry-cache": "^5.0.1",
          "functional-red-black-tree": "^1.0.1",
          "glob-parent": "^5.0.0",
          "globals": "^12.1.0",
          "ignore": "^4.0.6",
          "import-fresh": "^3.0.0",
          "imurmurhash": "^0.1.4",
          "inquirer": "^7.0.0",
          "is-glob": "^4.0.0",
          "js-yaml": "^3.13.1",
          "json-stable-stringify-without-jsonify": "^1.0.1",
          "levn": "^0.3.0",
          "lodash": "^4.17.14",
          "minimatch": "^3.0.4",
          "mkdirp": "^0.5.1",
          "natural-compare": "^1.4.0",
          "optionator": "^0.8.3",
          "progress": "^2.0.0",
          "regexpp": "^2.0.1",
          "semver": "^6.1.2",
          "strip-ansi": "^5.2.0",
          "strip-json-comments": "^3.0.1",
          "table": "^5.2.3",
          "text-table": "^0.2.0",
          "v8-compile-cache": "^2.0.3"
        },
        "dependencies": {
          "eslint-utils": {
            "version": "1.4.3",
            "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-1.4.3.tgz",
            "integrity": "sha512-fbBN5W2xdY45KulGXmLHZ3c3FHfVYmKg0IrAKGOkT/464PQsx2UeIzfz1RmEci+KLm1bBaAzZAh8+/E+XAeZ8Q==",
            "requires": {
              "eslint-visitor-keys": "^1.1.0"
            }
          },
          "globals": {
            "version": "12.4.0",
            "resolved": "https://registry.npmjs.org/globals/-/globals-12.4.0.tgz",
            "integrity": "sha512-BWICuzzDvDoH54NHKCseDanAhE3CeDorgDL5MT6LMXXj2WCnd9UC2szdk4AWLfjdgNBCXLUanXYcpBBKOSWGwg==",
            "requires": {
              "type-fest": "^0.8.1"
            }
          },
          "import-fresh": {
            "version": "3.2.1",
            "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.2.1.tgz",
            "integrity": "sha512-6e1q1cnWP2RXD9/keSkxHScg508CdXqXWgWBaETNhyuBFz+kUZlKboh+ISK+bU++DmbHimVBrOz/zzPe0sZ3sQ==",
            "requires": {
              "parent-module": "^1.0.0",
              "resolve-from": "^4.0.0"
            }
          },
          "regexpp": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/regexpp/-/regexpp-2.0.1.tgz",
            "integrity": "sha512-lv0M6+TkDVniA3aD1Eg0DVpfU/booSu7Eev3TDO/mZKHBfVjgCGTV4t4buppESEYDtkArYFOxTJWv6S5C+iaNw=="
          },
          "resolve-from": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
            "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g=="
          }
        }
      },
      "eslint-config-react-app": {
        "version": "5.2.1",
        "resolved": "https://registry.npmjs.org/eslint-config-react-app/-/eslint-config-react-app-5.2.1.tgz",
        "integrity": "sha512-pGIZ8t0mFLcV+6ZirRgYK6RVqUIKRIi9MmgzUEmrIknsn3AdO0I32asO86dJgloHq+9ZPl8UIg8mYrvgP5u2wQ==",
        "requires": {
          "confusing-browser-globals": "^1.0.9"
        }
      },
      "eslint-import-resolver-node": {
        "version": "0.3.3",
        "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.3.tgz",
        "integrity": "sha512-b8crLDo0M5RSe5YG8Pu2DYBj71tSB6OvXkfzwbJU2w7y8P4/yo0MyF8jU26IEuEuHF2K5/gcAJE3LhQGqBBbVg==",
        "requires": {
          "debug": "^2.6.9",
          "resolve": "^1.13.1"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
              "ms": "2.0.0"
            }
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
          }
        }
      },
      "eslint-loader": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/eslint-loader/-/eslint-loader-3.0.3.tgz",
        "integrity": "sha512-+YRqB95PnNvxNp1HEjQmvf9KNvCin5HXYYseOXVC2U0KEcw4IkQ2IQEBG46j7+gW39bMzeu0GsUhVbBY3Votpw==",
        "requires": {
          "fs-extra": "^8.1.0",
          "loader-fs-cache": "^1.0.2",
          "loader-utils": "^1.2.3",
          "object-hash": "^2.0.1",
          "schema-utils": "^2.6.1"
        }
      },
      "eslint-module-utils": {
        "version": "2.6.0",
        "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.6.0.tgz",
        "integrity": "sha512-6j9xxegbqe8/kZY8cYpcp0xhbK0EgJlg3g9mib3/miLaExuuwc3n5UEfSnU6hWMbT0FAYVvDbL9RrRgpUeQIvA==",
        "requires": {
          "debug": "^2.6.9",
          "pkg-dir": "^2.0.0"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
              "ms": "2.0.0"
            }
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
          },
          "pkg-dir": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-2.0.0.tgz",
            "integrity": "sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=",
            "requires": {
              "find-up": "^2.1.0"
            }
          }
        }
      },
      "eslint-plugin-flowtype": {
        "version": "4.6.0",
        "resolved": "https://registry.npmjs.org/eslint-plugin-flowtype/-/eslint-plugin-flowtype-4.6.0.tgz",
        "integrity": "sha512-W5hLjpFfZyZsXfo5anlu7HM970JBDqbEshAJUkeczP6BFCIfJXuiIBQXyberLRtOStT0OGPF8efeTbxlHk4LpQ==",
        "requires": {
          "lodash": "^4.17.15"
        }
      },
      "eslint-plugin-import": {
        "version": "2.20.1",
        "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.20.1.tgz",
        "integrity": "sha512-qQHgFOTjguR+LnYRoToeZWT62XM55MBVXObHM6SKFd1VzDcX/vqT1kAz8ssqigh5eMj8qXcRoXXGZpPP6RfdCw==",
        "requires": {
          "array-includes": "^3.0.3",
          "array.prototype.flat": "^1.2.1",
          "contains-path": "^0.1.0",
          "debug": "^2.6.9",
          "doctrine": "1.5.0",
          "eslint-import-resolver-node": "^0.3.2",
          "eslint-module-utils": "^2.4.1",
          "has": "^1.0.3",
          "minimatch": "^3.0.4",
          "object.values": "^1.1.0",
          "read-pkg-up": "^2.0.0",
          "resolve": "^1.12.0"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
              "ms": "2.0.0"
            }
          },
          "doctrine": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-1.5.0.tgz",
            "integrity": "sha1-N53Ocw9hZvds76TmcHoVmwLFpvo=",
            "requires": {
              "esutils": "^2.0.2",
              "isarray": "^1.0.0"
            }
          },
          "load-json-file": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-2.0.0.tgz",
            "integrity": "sha1-eUfkIUmvgNaWy/eXvKq8/h/inKg=",
            "requires": {
              "graceful-fs": "^4.1.2",
              "parse-json": "^2.2.0",
              "pify": "^2.0.0",
              "strip-bom": "^3.0.0"
            }
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
          },
          "parse-json": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
            "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
            "requires": {
              "error-ex": "^1.2.0"
            }
          },
          "path-type": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/path-type/-/path-type-2.0.0.tgz",
            "integrity": "sha1-8BLMuEFbcJb8LaoQVMPXI4lZTHM=",
            "requires": {
              "pify": "^2.0.0"
            }
          },
          "pify": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
            "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw="
          },
          "read-pkg": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz",
            "integrity": "sha1-jvHAYjxqbbDcZxPEv6xGMysjaPg=",
            "requires": {
              "load-json-file": "^2.0.0",
              "normalize-package-data": "^2.3.2",
              "path-type": "^2.0.0"
            }
          },
          "read-pkg-up": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-2.0.0.tgz",
            "integrity": "sha1-a3KoBImE4MQeeVEP1en6mbO1Sb4=",
            "requires": {
              "find-up": "^2.0.0",
              "read-pkg": "^2.0.0"
            }
          }
        }
      },
      "eslint-plugin-jsx-a11y": {
        "version": "6.2.3",
        "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.2.3.tgz",
        "integrity": "sha512-CawzfGt9w83tyuVekn0GDPU9ytYtxyxyFZ3aSWROmnRRFQFT2BiPJd7jvRdzNDi6oLWaS2asMeYSNMjWTV4eNg==",
        "requires": {
          "@babel/runtime": "^7.4.5",
          "aria-query": "^3.0.0",
          "array-includes": "^3.0.3",
          "ast-types-flow": "^0.0.7",
          "axobject-query": "^2.0.2",
          "damerau-levenshtein": "^1.0.4",
          "emoji-regex": "^7.0.2",
          "has": "^1.0.3",
          "jsx-ast-utils": "^2.2.1"
        },
        "dependencies": {
          "emoji-regex": {
            "version": "7.0.3",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
            "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
          }
        }
      },
      "eslint-plugin-react": {
        "version": "7.19.0",
        "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.19.0.tgz",
        "integrity": "sha512-SPT8j72CGuAP+JFbT0sJHOB80TX/pu44gQ4vXH/cq+hQTiY2PuZ6IHkqXJV6x1b28GDdo1lbInjKUrrdUf0LOQ==",
        "requires": {
          "array-includes": "^3.1.1",
          "doctrine": "^2.1.0",
          "has": "^1.0.3",
          "jsx-ast-utils": "^2.2.3",
          "object.entries": "^1.1.1",
          "object.fromentries": "^2.0.2",
          "object.values": "^1.1.1",
          "prop-types": "^15.7.2",
          "resolve": "^1.15.1",
          "semver": "^6.3.0",
          "string.prototype.matchall": "^4.0.2",
          "xregexp": "^4.3.0"
        },
        "dependencies": {
          "doctrine": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
            "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
            "requires": {
              "esutils": "^2.0.2"
            }
          },
          "resolve": {
            "version": "1.15.1",
            "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.15.1.tgz",
            "integrity": "sha512-84oo6ZTtoTUpjgNEr5SJyzQhzL72gaRodsSfyxC/AXRvwu0Yse9H8eF9IpGo7b8YetZhlI6v7ZQ6bKBFV/6S7w==",
            "requires": {
              "path-parse": "^1.0.6"
            }
          }
        }
      },
      "eslint-plugin-react-hooks": {
        "version": "1.7.0",
        "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-1.7.0.tgz",
        "integrity": "sha512-iXTCFcOmlWvw4+TOE8CLWj6yX1GwzT0Y6cUfHHZqWnSk144VmVIRcVGtUAzrLES7C798lmvnt02C7rxaOX1HNA=="
      },
      "eslint-scope": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.0.0.tgz",
        "integrity": "sha512-oYrhJW7S0bxAFDvWqzvMPRm6pcgcnWc4QnofCAqRTRfQC0JcwenzGglTtsLyIuuWFfkqDG9vz67cnttSd53djw==",
        "requires": {
          "esrecurse": "^4.1.0",
          "estraverse": "^4.1.1"
        }
      },
      "eslint-utils": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-2.0.0.tgz",
        "integrity": "sha512-0HCPuJv+7Wv1bACm8y5/ECVfYdfsAm9xmVb7saeFlxjPYALefjhbYoCkBjPdPzGH8wWyTpAez82Fh3VKYEZ8OA==",
        "requires": {
          "eslint-visitor-keys": "^1.1.0"
        }
      },
      "eslint-visitor-keys": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.1.0.tgz",
        "integrity": "sha512-8y9YjtM1JBJU/A9Kc+SbaOV4y29sSWckBwMHa+FGtVj5gN/sbnKDf6xJUl+8g7FAij9LVaP8C24DUiH/f/2Z9A=="
      },
      "espree": {
        "version": "6.2.1",
        "resolved": "https://registry.npmjs.org/espree/-/espree-6.2.1.tgz",
        "integrity": "sha512-ysCxRQY3WaXJz9tdbWOwuWr5Y/XrPTGX9Kiz3yoUXwW0VZ4w30HTkQLaGx/+ttFjF8i+ACbArnB4ce68a9m5hw==",
        "requires": {
          "acorn": "^7.1.1",
          "acorn-jsx": "^5.2.0",
          "eslint-visitor-keys": "^1.1.0"
        }
      },
      "esprima": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
        "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="
      },
      "esquery": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.2.0.tgz",
        "integrity": "sha512-weltsSqdeWIX9G2qQZz7KlTRJdkkOCTPgLYJUz1Hacf48R4YOwGPHO3+ORfWedqJKbq5WQmsgK90n+pFLIKt/Q==",
        "requires": {
          "estraverse": "^5.0.0"
        },
        "dependencies": {
          "estraverse": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.0.0.tgz",
            "integrity": "sha512-j3acdrMzqrxmJTNj5dbr1YbjacrYgAxVMeF0gK16E3j494mOe7xygM/ZLIguEQ0ETwAg2hlJCtHRGav+y0Ny5A=="
          }
        }
      },
      "esrecurse": {
        "version": "4.2.1",
        "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.2.1.tgz",
        "integrity": "sha512-64RBB++fIOAXPw3P9cy89qfMlvZEXZkqqJkjqqXIvzP5ezRZjW+lPWjw35UX/3EhUPFYbg5ER4JYgDw4007/DQ==",
        "requires": {
          "estraverse": "^4.1.0"
        }
      },
      "estraverse": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
        "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw=="
      },
      "esutils": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
        "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
      },
      "etag": {
        "version": "1.8.1",
        "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
        "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
      },
      "eventemitter3": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.0.tgz",
        "integrity": "sha512-qerSRB0p+UDEssxTtm6EDKcE7W4OaoisfIMl4CngyEhjpYglocpNg6UEqCvemdGhosAsg4sO2dXJOdyBifPGCg=="
      },
      "events": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/events/-/events-3.1.0.tgz",
        "integrity": "sha512-Rv+u8MLHNOdMjTAFeT3nCjHn2aGlx435FP/sDHNaRhDEMwyI/aB22Kj2qIN8R0cw3z28psEQLYwxVKLsKrMgWg=="
      },
      "eventsource": {
        "version": "1.0.7",
        "resolved": "https://registry.npmjs.org/eventsource/-/eventsource-1.0.7.tgz",
        "integrity": "sha512-4Ln17+vVT0k8aWq+t/bF5arcS3EpT9gYtW66EPacdj/mAFevznsnyoHLPy2BA8gbIQeIHoPsvwmfBftfcG//BQ==",
        "requires": {
          "original": "^1.0.0"
        }
      },
      "evp_bytestokey": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/evp_bytestokey/-/evp_bytestokey-1.0.3.tgz",
        "integrity": "sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==",
        "requires": {
          "md5.js": "^1.3.4",
          "safe-buffer": "^5.1.1"
        }
      },
      "exec-sh": {
        "version": "0.3.4",
        "resolved": "https://registry.npmjs.org/exec-sh/-/exec-sh-0.3.4.tgz",
        "integrity": "sha512-sEFIkc61v75sWeOe72qyrqg2Qg0OuLESziUDk/O/z2qgS15y2gWVFrI6f2Qn/qw/0/NCfCEsmNA4zOjkwEZT1A=="
      },
      "execa": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/execa/-/execa-1.0.0.tgz",
        "integrity": "sha512-adbxcyWV46qiHyvSp50TKt05tB4tK3HcmF7/nxfAdhnox83seTDbwnaqKO4sXRy7roHAIFqJP/Rw/AuEbX61LA==",
        "requires": {
          "cross-spawn": "^6.0.0",
          "get-stream": "^4.0.0",
          "is-stream": "^1.1.0",
          "npm-run-path": "^2.0.0",
          "p-finally": "^1.0.0",
          "signal-exit": "^3.0.0",
          "strip-eof": "^1.0.0"
        }
      },
      "exenv": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/exenv/-/exenv-1.2.2.tgz",
        "integrity": "sha1-KueOhdmJQVhnCwPUe+wfA72Ru50="
      },
      "exit": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/exit/-/exit-0.1.2.tgz",
        "integrity": "sha1-BjJjj42HfMghB9MKD/8aF8uhzQw="
      },
      "expand-brackets": {
        "version": "2.1.4",
        "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
        "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
        "requires": {
          "debug": "^2.3.3",
          "define-property": "^0.2.5",
          "extend-shallow": "^2.0.1",
          "posix-character-classes": "^0.1.0",
          "regex-not": "^1.0.0",
          "snapdragon": "^0.8.1",
          "to-regex": "^3.0.1"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
              "ms": "2.0.0"
            }
          },
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          },
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "requires": {
              "is-extendable": "^0.1.0"
            }
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
          }
        }
      },
      "expect": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/expect/-/expect-24.9.0.tgz",
        "integrity": "sha512-wvVAx8XIol3Z5m9zvZXiyZOQ+sRJqNTIm6sGjdWlaZIeupQGO3WbYI+15D/AmEwZywL6wtJkbAbJtzkOfBuR0Q==",
        "requires": {
          "@jest/types": "^24.9.0",
          "ansi-styles": "^3.2.0",
          "jest-get-type": "^24.9.0",
          "jest-matcher-utils": "^24.9.0",
          "jest-message-util": "^24.9.0",
          "jest-regex-util": "^24.9.0"
        }
      },
      "express": {
        "version": "4.17.1",
        "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
        "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
        "requires": {
          "accepts": "~1.3.7",
          "array-flatten": "1.1.1",
          "body-parser": "1.19.0",
          "content-disposition": "0.5.3",
          "content-type": "~1.0.4",
          "cookie": "0.4.0",
          "cookie-signature": "1.0.6",
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "finalhandler": "~1.1.2",
          "fresh": "0.5.2",
          "merge-descriptors": "1.0.1",
          "methods": "~1.1.2",
          "on-finished": "~2.3.0",
          "parseurl": "~1.3.3",
          "path-to-regexp": "0.1.7",
          "proxy-addr": "~2.0.5",
          "qs": "6.7.0",
          "range-parser": "~1.2.1",
          "safe-buffer": "5.1.2",
          "send": "0.17.1",
          "serve-static": "1.14.1",
          "setprototypeof": "1.1.1",
          "statuses": "~1.5.0",
          "type-is": "~1.6.18",
          "utils-merge": "1.0.1",
          "vary": "~1.1.2"
        },
        "dependencies": {
          "array-flatten": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
            "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
          },
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
              "ms": "2.0.0"
            }
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
          },
          "qs": {
            "version": "6.7.0",
            "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
            "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
          }
        }
      },
      "ext": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/ext/-/ext-1.4.0.tgz",
        "integrity": "sha512-Key5NIsUxdqKg3vIsdw9dSuXpPCQ297y6wBjL30edxwPgt2E44WcWBZey/ZvUc6sERLTxKdyCu4gZFmUbk1Q7A==",
        "requires": {
          "type": "^2.0.0"
        },
        "dependencies": {
          "type": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/type/-/type-2.0.0.tgz",
            "integrity": "sha512-KBt58xCHry4Cejnc2ISQAF7QY+ORngsWfxezO68+12hKV6lQY8P/psIkcbjeHWn7MqcgciWJyCCevFMJdIXpow=="
          }
        }
      },
      "extend": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
        "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g=="
      },
      "extend-shallow": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
        "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
        "requires": {
          "assign-symbols": "^1.0.0",
          "is-extendable": "^1.0.1"
        },
        "dependencies": {
          "is-extendable": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
            "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
            "requires": {
              "is-plain-object": "^2.0.4"
            }
          }
        }
      },
      "external-editor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
        "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
        "requires": {
          "chardet": "^0.7.0",
          "iconv-lite": "^0.4.24",
          "tmp": "^0.0.33"
        }
      },
      "extglob": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
        "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
        "requires": {
          "array-unique": "^0.3.2",
          "define-property": "^1.0.0",
          "expand-brackets": "^2.1.4",
          "extend-shallow": "^2.0.1",
          "fragment-cache": "^0.2.1",
          "regex-not": "^1.0.0",
          "snapdragon": "^0.8.1",
          "to-regex": "^3.0.1"
        },
        "dependencies": {
          "define-property": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
            "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
            "requires": {
              "is-descriptor": "^1.0.0"
            }
          },
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "requires": {
              "is-extendable": "^0.1.0"
            }
          },
          "is-accessor-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
            "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-data-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
            "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-descriptor": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
            "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
            "requires": {
              "is-accessor-descriptor": "^1.0.0",
              "is-data-descriptor": "^1.0.0",
              "kind-of": "^6.0.2"
            }
          },
          "kind-of": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
            "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
          }
        }
      },
      "extsprintf": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
        "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU="
      },
      "fast-deep-equal": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.1.tgz",
        "integrity": "sha512-8UEa58QDLauDNfpbrX55Q9jrGHThw2ZMdOky5Gl1CDtVeJDPVrG4Jxx1N8jw2gkWaff5UUuX1KJd+9zGe2B+ZA=="
      },
      "fast-glob": {
        "version": "2.2.7",
        "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-2.2.7.tgz",
        "integrity": "sha512-g1KuQwHOZAmOZMuBtHdxDtju+T2RT8jgCC9aANsbpdiDDTSnjgfuVsIBNKbUeJI3oKMRExcfNDtJl4OhbffMsw==",
        "requires": {
          "@mrmlnc/readdir-enhanced": "^2.2.1",
          "@nodelib/fs.stat": "^1.1.2",
          "glob-parent": "^3.1.0",
          "is-glob": "^4.0.0",
          "merge2": "^1.2.3",
          "micromatch": "^3.1.10"
        },
        "dependencies": {
          "glob-parent": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
            "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
            "requires": {
              "is-glob": "^3.1.0",
              "path-dirname": "^1.0.0"
            },
            "dependencies": {
              "is-glob": {
                "version": "3.1.0",
                "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
                "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
                "requires": {
                  "is-extglob": "^2.1.0"
                }
              }
            }
          }
        }
      },
      "fast-json-stable-stringify": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
        "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="
      },
      "fast-levenshtein": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
        "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc="
      },
      "faye-websocket": {
        "version": "0.10.0",
        "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.10.0.tgz",
        "integrity": "sha1-TkkvjQTftviQA1B/btvy1QHnxvQ=",
        "requires": {
          "websocket-driver": ">=0.5.1"
        }
      },
      "fb-watchman": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.1.tgz",
        "integrity": "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==",
        "requires": {
          "bser": "2.1.1"
        }
      },
      "figgy-pudding": {
        "version": "3.5.2",
        "resolved": "https://registry.npmjs.org/figgy-pudding/-/figgy-pudding-3.5.2.tgz",
        "integrity": "sha512-0btnI/H8f2pavGMN8w40mlSKOfTK2SVJmBfBeVIj3kNw0swwgzyRq0d5TJVOwodFmtvpPeWPN/MCcfuWF0Ezbw=="
      },
      "figures": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/figures/-/figures-3.2.0.tgz",
        "integrity": "sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==",
        "requires": {
          "escape-string-regexp": "^1.0.5"
        }
      },
      "file-entry-cache": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-5.0.1.tgz",
        "integrity": "sha512-bCg29ictuBaKUwwArK4ouCaqDgLZcysCFLmM/Yn/FDoqndh/9vNuQfXRDvTuXKLxfD/JtZQGKFT8MGcJBK644g==",
        "requires": {
          "flat-cache": "^2.0.1"
        }
      },
      "file-loader": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/file-loader/-/file-loader-4.3.0.tgz",
        "integrity": "sha512-aKrYPYjF1yG3oX0kWRrqrSMfgftm7oJW5M+m4owoldH5C51C0RkIwB++JbRvEW3IU6/ZG5n8UvEcdgwOt2UOWA==",
        "requires": {
          "loader-utils": "^1.2.3",
          "schema-utils": "^2.5.0"
        }
      },
      "filesize": {
        "version": "6.0.1",
        "resolved": "https://registry.npmjs.org/filesize/-/filesize-6.0.1.tgz",
        "integrity": "sha512-u4AYWPgbI5GBhs6id1KdImZWn5yfyFrrQ8OWZdN7ZMfA8Bf4HcO0BGo9bmUIEV8yrp8I1xVfJ/dn90GtFNNJcg=="
      },
      "fill-range": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
        "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
        "requires": {
          "extend-shallow": "^2.0.1",
          "is-number": "^3.0.0",
          "repeat-string": "^1.6.1",
          "to-regex-range": "^2.1.0"
        },
        "dependencies": {
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "requires": {
              "is-extendable": "^0.1.0"
            }
          }
        }
      },
      "finalhandler": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
        "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
        "requires": {
          "debug": "2.6.9",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "on-finished": "~2.3.0",
          "parseurl": "~1.3.3",
          "statuses": "~1.5.0",
          "unpipe": "~1.0.0"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
              "ms": "2.0.0"
            }
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
          }
        }
      },
      "find-cache-dir": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
        "integrity": "sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==",
        "requires": {
          "commondir": "^1.0.1",
          "make-dir": "^2.0.0",
          "pkg-dir": "^3.0.0"
        }
      },
      "find-up": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
        "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
        "requires": {
          "locate-path": "^2.0.0"
        }
      },
      "flat-cache": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-2.0.1.tgz",
        "integrity": "sha512-LoQe6yDuUMDzQAEH8sgmh4Md6oZnc/7PjtwjNFSzveXqSHt6ka9fPBuso7IGf9Rz4uqnSnWiFH2B/zj24a5ReA==",
        "requires": {
          "flatted": "^2.0.0",
          "rimraf": "2.6.3",
          "write": "1.0.3"
        }
      },
      "flatted": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/flatted/-/flatted-2.0.2.tgz",
        "integrity": "sha512-r5wGx7YeOwNWNlCA0wQ86zKyDLMQr+/RB8xy74M4hTphfmjlijTSSXGuH8rnvKZnfT9i+75zmd8jcKdMR4O6jA=="
      },
      "flatten": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/flatten/-/flatten-1.0.3.tgz",
        "integrity": "sha512-dVsPA/UwQ8+2uoFe5GHtiBMu48dWLTdsuEd7CKGlZlD78r1TTWBvDuFaFGKCo/ZfEr95Uk56vZoX86OsHkUeIg=="
      },
      "flush-write-stream": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/flush-write-stream/-/flush-write-stream-1.1.1.tgz",
        "integrity": "sha512-3Z4XhFZ3992uIq0XOqb9AreonueSYphE6oYbpt5+3u06JWklbsPkNv3ZKkP9Bz/r+1MWCaMoSQ28P85+1Yc77w==",
        "requires": {
          "inherits": "^2.0.3",
          "readable-stream": "^2.3.6"
        },
        "dependencies": {
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "follow-redirects": {
        "version": "1.11.0",
        "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.11.0.tgz",
        "integrity": "sha512-KZm0V+ll8PfBrKwMzdo5D13b1bur9Iq9Zd/RMmAoQQcl2PxxFml8cxXPaaPYVbV0RjNjq1CU7zIzAOqtUPudmA==",
        "requires": {
          "debug": "^3.0.0"
        },
        "dependencies": {
          "debug": {
            "version": "3.2.6",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
            "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
            "requires": {
              "ms": "^2.1.1"
            }
          }
        }
      },
      "for-in": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
        "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA="
      },
      "for-own": {
        "version": "0.1.5",
        "resolved": "https://registry.npmjs.org/for-own/-/for-own-0.1.5.tgz",
        "integrity": "sha1-UmXGgaTylNq78XyVCbZ2OqhFEM4=",
        "requires": {
          "for-in": "^1.0.1"
        }
      },
      "forever-agent": {
        "version": "0.6.1",
        "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
        "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE="
      },
      "fork-ts-checker-webpack-plugin": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/fork-ts-checker-webpack-plugin/-/fork-ts-checker-webpack-plugin-3.1.1.tgz",
        "integrity": "sha512-DuVkPNrM12jR41KM2e+N+styka0EgLkTnXmNcXdgOM37vtGeY+oCBK/Jx0hzSeEU6memFCtWb4htrHPMDfwwUQ==",
        "requires": {
          "babel-code-frame": "^6.22.0",
          "chalk": "^2.4.1",
          "chokidar": "^3.3.0",
          "micromatch": "^3.1.10",
          "minimatch": "^3.0.4",
          "semver": "^5.6.0",
          "tapable": "^1.0.0",
          "worker-rpc": "^0.1.0"
        },
        "dependencies": {
          "semver": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
          }
        }
      },
      "form-data": {
        "version": "2.3.3",
        "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
        "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
        "requires": {
          "asynckit": "^0.4.0",
          "combined-stream": "^1.0.6",
          "mime-types": "^2.1.12"
        }
      },
      "forwarded": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
        "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ="
      },
      "fragment-cache": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
        "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
        "requires": {
          "map-cache": "^0.2.2"
        }
      },
      "fresh": {
        "version": "0.5.2",
        "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
        "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
      },
      "from2": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/from2/-/from2-2.3.0.tgz",
        "integrity": "sha1-i/tVAr3kpNNs/e6gB/zKIdfjgq8=",
        "requires": {
          "inherits": "^2.0.1",
          "readable-stream": "^2.0.0"
        },
        "dependencies": {
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "fs-extra": {
        "version": "8.1.0",
        "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
        "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
        "requires": {
          "graceful-fs": "^4.2.0",
          "jsonfile": "^4.0.0",
          "universalify": "^0.1.0"
        }
      },
      "fs-minipass": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
        "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
        "requires": {
          "minipass": "^3.0.0"
        }
      },
      "fs-write-stream-atomic": {
        "version": "1.0.10",
        "resolved": "https://registry.npmjs.org/fs-write-stream-atomic/-/fs-write-stream-atomic-1.0.10.tgz",
        "integrity": "sha1-tH31NJPvkR33VzHnCp3tAYnbQMk=",
        "requires": {
          "graceful-fs": "^4.1.2",
          "iferr": "^0.1.5",
          "imurmurhash": "^0.1.4",
          "readable-stream": "1 || 2"
        },
        "dependencies": {
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "fs.realpath": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
      },
      "fsevents": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.1.2.tgz",
        "integrity": "sha512-R4wDiBwZ0KzpgOWetKDug1FZcYhqYnUYKtfZYt4mD5SBz76q0KR4Q9o7GIPamsVPGmW3EYPPJ0dOOjvx32ldZA==",
        "optional": true
      },
      "function-bind": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
        "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
      },
      "functional-red-black-tree": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz",
        "integrity": "sha1-GwqzvVU7Kg1jmdKcDj6gslIHgyc="
      },
      "gensync": {
        "version": "1.0.0-beta.1",
        "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.1.tgz",
        "integrity": "sha512-r8EC6NO1sngH/zdD9fiRDLdcgnbayXah+mLgManTaIZJqEC1MZstmnox8KpnI2/fxQwrp5OpCOYWLp4rBl4Jcg=="
      },
      "get-caller-file": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
        "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="
      },
      "get-own-enumerable-property-symbols": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/get-own-enumerable-property-symbols/-/get-own-enumerable-property-symbols-3.0.2.tgz",
        "integrity": "sha512-I0UBV/XOz1XkIJHEUDMZAbzCThU/H8DxmSfmdGcKPnVhu2VfFqr34jr9777IyaTYvxjedWhqVIilEDsCdP5G6g=="
      },
      "get-stream": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
        "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
        "requires": {
          "pump": "^3.0.0"
        }
      },
      "get-value": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
        "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg="
      },
      "getpass": {
        "version": "0.1.7",
        "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
        "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
        "requires": {
          "assert-plus": "^1.0.0"
        }
      },
      "glob": {
        "version": "7.1.6",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
        "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
        "requires": {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0"
        }
      },
      "glob-parent": {
        "version": "5.1.1",
        "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.1.tgz",
        "integrity": "sha512-FnI+VGOpnlGHWZxthPGR+QhR78fuiK0sNLkHQv+bL9fQi57lNNdquIbna/WrfROrolq8GK5Ek6BiMwqL/voRYQ==",
        "requires": {
          "is-glob": "^4.0.1"
        }
      },
      "glob-to-regexp": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.3.0.tgz",
        "integrity": "sha1-jFoUlNIGbFcMw7/kSWF1rMTVAqs="
      },
      "global-modules": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/global-modules/-/global-modules-2.0.0.tgz",
        "integrity": "sha512-NGbfmJBp9x8IxyJSd1P+otYK8vonoJactOogrVfFRIAEY1ukil8RSKDz2Yo7wh1oihl51l/r6W4epkeKJHqL8A==",
        "requires": {
          "global-prefix": "^3.0.0"
        }
      },
      "global-prefix": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/global-prefix/-/global-prefix-3.0.0.tgz",
        "integrity": "sha512-awConJSVCHVGND6x3tmMaKcQvwXLhjdkmomy2W+Goaui8YPgYgXJZewhg3fWC+DlfqqQuWg8AwqjGTD2nAPVWg==",
        "requires": {
          "ini": "^1.3.5",
          "kind-of": "^6.0.2",
          "which": "^1.3.1"
        },
        "dependencies": {
          "kind-of": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
            "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
          }
        }
      },
      "globals": {
        "version": "11.12.0",
        "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
        "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA=="
      },
      "globby": {
        "version": "8.0.2",
        "resolved": "https://registry.npmjs.org/globby/-/globby-8.0.2.tgz",
        "integrity": "sha512-yTzMmKygLp8RUpG1Ymu2VXPSJQZjNAZPD4ywgYEaG7e4tBJeUQBO8OpXrf1RCNcEs5alsoJYPAMiIHP0cmeC7w==",
        "requires": {
          "array-union": "^1.0.1",
          "dir-glob": "2.0.0",
          "fast-glob": "^2.0.2",
          "glob": "^7.1.2",
          "ignore": "^3.3.5",
          "pify": "^3.0.0",
          "slash": "^1.0.0"
        },
        "dependencies": {
          "ignore": {
            "version": "3.3.10",
            "resolved": "https://registry.npmjs.org/ignore/-/ignore-3.3.10.tgz",
            "integrity": "sha512-Pgs951kaMm5GXP7MOvxERINe3gsaVjUWFm+UZPSq9xYriQAksyhg0csnS0KXSNRD5NmNdapXEpjxG49+AKh/ug=="
          },
          "slash": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/slash/-/slash-1.0.0.tgz",
            "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU="
          }
        }
      },
      "graceful-fs": {
        "version": "4.2.3",
        "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.3.tgz",
        "integrity": "sha512-a30VEBm4PEdx1dRB7MFK7BejejvCvBronbLjht+sHuGYj8PHs7M/5Z+rt5lw551vZ7yfTCj4Vuyy3mSJytDWRQ=="
      },
      "growly": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/growly/-/growly-1.3.0.tgz",
        "integrity": "sha1-8QdIy+dq+WS3yWyTxrzCivEgwIE="
      },
      "gzip-size": {
        "version": "5.1.1",
        "resolved": "https://registry.npmjs.org/gzip-size/-/gzip-size-5.1.1.tgz",
        "integrity": "sha512-FNHi6mmoHvs1mxZAds4PpdCS6QG8B4C1krxJsMutgxl5t3+GlRTzzI3NEkifXx2pVsOvJdOGSmIgDhQ55FwdPA==",
        "requires": {
          "duplexer": "^0.1.1",
          "pify": "^4.0.1"
        },
        "dependencies": {
          "pify": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
            "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g=="
          }
        }
      },
      "handle-thing": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/handle-thing/-/handle-thing-2.0.1.tgz",
        "integrity": "sha512-9Qn4yBxelxoh2Ow62nP+Ka/kMnOXRi8BXnRaUwezLNhqelnN49xKz4F/dPP8OYLxLxq6JDtZb2i9XznUQbNPTg=="
      },
      "har-schema": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
        "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI="
      },
      "har-validator": {
        "version": "5.1.3",
        "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.3.tgz",
        "integrity": "sha512-sNvOCzEQNr/qrvJgc3UG/kD4QtlHycrzwS+6mfTrrSq97BvaYcPZZI1ZSqGSPR73Cxn4LKTD4PttRwfU7jWq5g==",
        "requires": {
          "ajv": "^6.5.5",
          "har-schema": "^2.0.0"
        }
      },
      "harmony-reflect": {
        "version": "1.6.1",
        "resolved": "https://registry.npmjs.org/harmony-reflect/-/harmony-reflect-1.6.1.tgz",
        "integrity": "sha512-WJTeyp0JzGtHcuMsi7rw2VwtkvLa+JyfEKJCFyfcS0+CDkjQ5lHPu7zEhFZP+PDSRrEgXa5Ah0l1MbgbE41XjA=="
      },
      "has": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
        "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
        "requires": {
          "function-bind": "^1.1.1"
        }
      },
      "has-ansi": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
        "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
        "requires": {
          "ansi-regex": "^2.0.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
            "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
          }
        }
      },
      "has-flag": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
        "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
      },
      "has-symbols": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.1.tgz",
        "integrity": "sha512-PLcsoqu++dmEIZB+6totNFKq/7Do+Z0u4oT0zKOJNl3lYK6vGwwu2hjHs+68OEZbTjiUE9bgOABXbP/GvrS0Kg=="
      },
      "has-value": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
        "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
        "requires": {
          "get-value": "^2.0.6",
          "has-values": "^1.0.0",
          "isobject": "^3.0.0"
        }
      },
      "has-values": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
        "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
        "requires": {
          "is-number": "^3.0.0",
          "kind-of": "^4.0.0"
        },
        "dependencies": {
          "kind-of": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
            "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "hash-base": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/hash-base/-/hash-base-3.0.4.tgz",
        "integrity": "sha1-X8hoaEfs1zSZQDMZprCj8/auSRg=",
        "requires": {
          "inherits": "^2.0.1",
          "safe-buffer": "^5.0.1"
        }
      },
      "hash.js": {
        "version": "1.1.7",
        "resolved": "https://registry.npmjs.org/hash.js/-/hash.js-1.1.7.tgz",
        "integrity": "sha512-taOaskGt4z4SOANNseOviYDvjEJinIkRgmp7LbKP2YTTmVxWBl87s/uzK9r+44BclBSp2X7K1hqeNfz9JbBeXA==",
        "requires": {
          "inherits": "^2.0.3",
          "minimalistic-assert": "^1.0.1"
        }
      },
      "he": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
        "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw=="
      },
      "hex-color-regex": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/hex-color-regex/-/hex-color-regex-1.1.0.tgz",
        "integrity": "sha512-l9sfDFsuqtOqKDsQdqrMRk0U85RZc0RtOR9yPI7mRVOa4FsR/BVnZ0shmQRM96Ji99kYZP/7hn1cedc1+ApsTQ=="
      },
      "hmac-drbg": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/hmac-drbg/-/hmac-drbg-1.0.1.tgz",
        "integrity": "sha1-0nRXAQJabHdabFRXk+1QL8DGSaE=",
        "requires": {
          "hash.js": "^1.0.3",
          "minimalistic-assert": "^1.0.0",
          "minimalistic-crypto-utils": "^1.0.1"
        }
      },
      "hoist-non-react-statics": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/hoist-non-react-statics/-/hoist-non-react-statics-3.3.0.tgz",
        "integrity": "sha512-0XsbTXxgiaCDYDIWFcwkmerZPSwywfUqYmwT4jzewKTQSWoE6FCMoUVOeBJWK3E/CrWbxRG3m5GzY4lnIwGRBA==",
        "requires": {
          "react-is": "^16.7.0"
        }
      },
      "hosted-git-info": {
        "version": "2.8.8",
        "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.8.tgz",
        "integrity": "sha512-f/wzC2QaWBs7t9IYqB4T3sR1xviIViXJRJTWBlx2Gf3g0Xi5vI7Yy4koXQ1c9OYDGHN9sBy1DQ2AB8fqZBWhUg=="
      },
      "hpack.js": {
        "version": "2.1.6",
        "resolved": "https://registry.npmjs.org/hpack.js/-/hpack.js-2.1.6.tgz",
        "integrity": "sha1-h3dMCUnlE/QuhFdbPEVoH63ioLI=",
        "requires": {
          "inherits": "^2.0.1",
          "obuf": "^1.0.0",
          "readable-stream": "^2.0.1",
          "wbuf": "^1.1.0"
        },
        "dependencies": {
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "hsl-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/hsl-regex/-/hsl-regex-1.0.0.tgz",
        "integrity": "sha1-1JMwx4ntgZ4nakwNJy3/owsY/m4="
      },
      "hsla-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/hsla-regex/-/hsla-regex-1.0.0.tgz",
        "integrity": "sha1-wc56MWjIxmFAM6S194d/OyJfnDg="
      },
      "html-comment-regex": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/html-comment-regex/-/html-comment-regex-1.1.2.tgz",
        "integrity": "sha512-P+M65QY2JQ5Y0G9KKdlDpo0zK+/OHptU5AaBwUfAIDJZk1MYf32Frm84EcOytfJE0t5JvkAnKlmjsXDnWzCJmQ=="
      },
      "html-encoding-sniffer": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-1.0.2.tgz",
        "integrity": "sha512-71lZziiDnsuabfdYiUeWdCVyKuqwWi23L8YeIgV9jSSZHCtb6wB1BKWooH7L3tn4/FuZJMVWyNaIDr4RGmaSYw==",
        "requires": {
          "whatwg-encoding": "^1.0.1"
        }
      },
      "html-entities": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/html-entities/-/html-entities-1.3.1.tgz",
        "integrity": "sha512-rhE/4Z3hIhzHAUKbW8jVcCyuT5oJCXXqhN/6mXXVCpzTmvJnoH2HL/bt3EZ6p55jbFJBeAe1ZNpL5BugLujxNA=="
      },
      "html-escaper": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
        "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg=="
      },
      "html-minifier-terser": {
        "version": "5.0.5",
        "resolved": "https://registry.npmjs.org/html-minifier-terser/-/html-minifier-terser-5.0.5.tgz",
        "integrity": "sha512-cBSFFghQh/uHcfSiL42KxxIRMF7A144+3E44xdlctIjxEmkEfCvouxNyFH2wysXk1fCGBPwtcr3hDWlGTfkDew==",
        "requires": {
          "camel-case": "^4.1.1",
          "clean-css": "^4.2.3",
          "commander": "^4.1.1",
          "he": "^1.2.0",
          "param-case": "^3.0.3",
          "relateurl": "^0.2.7",
          "terser": "^4.6.3"
        },
        "dependencies": {
          "commander": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
            "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA=="
          }
        }
      },
      "html-webpack-plugin": {
        "version": "4.0.0-beta.11",
        "resolved": "https://registry.npmjs.org/html-webpack-plugin/-/html-webpack-plugin-4.0.0-beta.11.tgz",
        "integrity": "sha512-4Xzepf0qWxf8CGg7/WQM5qBB2Lc/NFI7MhU59eUDTkuQp3skZczH4UA1d6oQyDEIoMDgERVhRyTdtUPZ5s5HBg==",
        "requires": {
          "html-minifier-terser": "^5.0.1",
          "loader-utils": "^1.2.3",
          "lodash": "^4.17.15",
          "pretty-error": "^2.1.1",
          "tapable": "^1.1.3",
          "util.promisify": "1.0.0"
        },
        "dependencies": {
          "util.promisify": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.0.0.tgz",
            "integrity": "sha512-i+6qA2MPhvoKLuxnJNpXAGhg7HphQOSUq2LKMZD0m15EiskXUkMvKdF4Uui0WYeCUGea+o2cw/ZuwehtfsrNkA==",
            "requires": {
              "define-properties": "^1.1.2",
              "object.getownpropertydescriptors": "^2.0.3"
            }
          }
        }
      },
      "htmlparser2": {
        "version": "3.10.1",
        "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-3.10.1.tgz",
        "integrity": "sha512-IgieNijUMbkDovyoKObU1DUhm1iwNYE/fuifEoEHfd1oZKZDaONBSkal7Y01shxsM49R4XaMdGez3WnF9UfiCQ==",
        "requires": {
          "domelementtype": "^1.3.1",
          "domhandler": "^2.3.0",
          "domutils": "^1.5.1",
          "entities": "^1.1.1",
          "inherits": "^2.0.1",
          "readable-stream": "^3.1.1"
        },
        "dependencies": {
          "entities": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/entities/-/entities-1.1.2.tgz",
            "integrity": "sha512-f2LZMYl1Fzu7YSBKg+RoROelpOaNrcGmE9AZubeDfrCEia483oW4MI4VyFd5VNHIgQ/7qm1I0wUHK1eJnn2y2w=="
          }
        }
      },
      "http-deceiver": {
        "version": "1.2.7",
        "resolved": "https://registry.npmjs.org/http-deceiver/-/http-deceiver-1.2.7.tgz",
        "integrity": "sha1-+nFolEq5pRnTN8sL7HKE3D5yPYc="
      },
      "http-errors": {
        "version": "1.7.2",
        "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
        "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
        "requires": {
          "depd": "~1.1.2",
          "inherits": "2.0.3",
          "setprototypeof": "1.1.1",
          "statuses": ">= 1.5.0 < 2",
          "toidentifier": "1.0.0"
        },
        "dependencies": {
          "inherits": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
            "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
          }
        }
      },
      "http-parser-js": {
        "version": "0.4.10",
        "resolved": "https://registry.npmjs.org/http-parser-js/-/http-parser-js-0.4.10.tgz",
        "integrity": "sha1-ksnBN0w1CF912zWexWzCV8u5P6Q="
      },
      "http-proxy": {
        "version": "1.18.0",
        "resolved": "https://registry.npmjs.org/http-proxy/-/http-proxy-1.18.0.tgz",
        "integrity": "sha512-84I2iJM/n1d4Hdgc6y2+qY5mDaz2PUVjlg9znE9byl+q0uC3DeByqBGReQu5tpLK0TAqTIXScRUV+dg7+bUPpQ==",
        "requires": {
          "eventemitter3": "^4.0.0",
          "follow-redirects": "^1.0.0",
          "requires-port": "^1.0.0"
        }
      },
      "http-proxy-middleware": {
        "version": "0.19.1",
        "resolved": "https://registry.npmjs.org/http-proxy-middleware/-/http-proxy-middleware-0.19.1.tgz",
        "integrity": "sha512-yHYTgWMQO8VvwNS22eLLloAkvungsKdKTLO8AJlftYIKNfJr3GK3zK0ZCfzDDGUBttdGc8xFy1mCitvNKQtC3Q==",
        "requires": {
          "http-proxy": "^1.17.0",
          "is-glob": "^4.0.0",
          "lodash": "^4.17.11",
          "micromatch": "^3.1.10"
        }
      },
      "http-signature": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
        "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
        "requires": {
          "assert-plus": "^1.0.0",
          "jsprim": "^1.2.2",
          "sshpk": "^1.7.0"
        }
      },
      "https-browserify": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/https-browserify/-/https-browserify-1.0.0.tgz",
        "integrity": "sha1-7AbBDgo0wPL68Zn3/X/Hj//QPHM="
      },
      "hyphenate-style-name": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/hyphenate-style-name/-/hyphenate-style-name-1.0.3.tgz",
        "integrity": "sha512-EcuixamT82oplpoJ2XU4pDtKGWQ7b00CD9f1ug9IaQ3p1bkHMiKCZ9ut9QDI6qsa6cpUuB+A/I+zLtdNK4n2DQ=="
      },
      "iconv-lite": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
        "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
        "requires": {
          "safer-buffer": ">= 2.1.2 < 3"
        }
      },
      "icss-utils": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/icss-utils/-/icss-utils-4.1.1.tgz",
        "integrity": "sha512-4aFq7wvWyMHKgxsH8QQtGpvbASCf+eM3wPRLI6R+MgAnTCZ6STYsRvttLvRWK0Nfif5piF394St3HeJDaljGPA==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.14"
        }
      },
      "identity-obj-proxy": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/identity-obj-proxy/-/identity-obj-proxy-3.0.0.tgz",
        "integrity": "sha1-lNK9qWCERT7zb7xarsN+D3nx/BQ=",
        "requires": {
          "harmony-reflect": "^1.4.6"
        }
      },
      "ieee754": {
        "version": "1.1.13",
        "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.1.13.tgz",
        "integrity": "sha512-4vf7I2LYV/HaWerSo3XmlMkp5eZ83i+/CDluXi/IGTs/O1sejBNhTtnxzmRZfvOUqj7lZjqHkeTvpgSFDlWZTg=="
      },
      "iferr": {
        "version": "0.1.5",
        "resolved": "https://registry.npmjs.org/iferr/-/iferr-0.1.5.tgz",
        "integrity": "sha1-xg7taebY/bazEEofy8ocGS3FtQE="
      },
      "ignore": {
        "version": "4.0.6",
        "resolved": "https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz",
        "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg=="
      },
      "immer": {
        "version": "1.10.0",
        "resolved": "https://registry.npmjs.org/immer/-/immer-1.10.0.tgz",
        "integrity": "sha512-O3sR1/opvCDGLEVcvrGTMtLac8GJ5IwZC4puPrLuRj3l7ICKvkmA0vGuU9OW8mV9WIBRnaxp5GJh9IEAaNOoYg=="
      },
      "import-cwd": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/import-cwd/-/import-cwd-2.1.0.tgz",
        "integrity": "sha1-qmzzbnInYShcs3HsZRn1PiQ1sKk=",
        "requires": {
          "import-from": "^2.1.0"
        }
      },
      "import-fresh": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-2.0.0.tgz",
        "integrity": "sha1-2BNVwVYS04bGH53dOSLUMEgipUY=",
        "requires": {
          "caller-path": "^2.0.0",
          "resolve-from": "^3.0.0"
        }
      },
      "import-from": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/import-from/-/import-from-2.1.0.tgz",
        "integrity": "sha1-M1238qev/VOqpHHUuAId7ja387E=",
        "requires": {
          "resolve-from": "^3.0.0"
        }
      },
      "import-local": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/import-local/-/import-local-2.0.0.tgz",
        "integrity": "sha512-b6s04m3O+s3CGSbqDIyP4R6aAwAeYlVq9+WUWep6iHa8ETRf9yei1U48C5MmfJmV9AiLYYBKPMq/W+/WRpQmCQ==",
        "requires": {
          "pkg-dir": "^3.0.0",
          "resolve-cwd": "^2.0.0"
        }
      },
      "imurmurhash": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
        "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o="
      },
      "indent-string": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
        "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg=="
      },
      "indexes-of": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/indexes-of/-/indexes-of-1.0.1.tgz",
        "integrity": "sha1-8w9xbI4r00bHtn0985FVZqfAVgc="
      },
      "infer-owner": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/infer-owner/-/infer-owner-1.0.4.tgz",
        "integrity": "sha512-IClj+Xz94+d7irH5qRyfJonOdfTzuDaifE6ZPWfx0N0+/ATZCbuTPq2prFl526urkQd90WyUKIh1DfBQ2hMz9A=="
      },
      "inflight": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
        "requires": {
          "once": "^1.3.0",
          "wrappy": "1"
        }
      },
      "inherits": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
      },
      "ini": {
        "version": "1.3.5",
        "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.5.tgz",
        "integrity": "sha512-RZY5huIKCMRWDUqZlEi72f/lmXKMvuszcMBduliQ3nnWbx9X/ZBQO7DijMEYS9EhHBb2qacRUMtC7svLwe0lcw=="
      },
      "inline-style-prefixer": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/inline-style-prefixer/-/inline-style-prefixer-4.0.2.tgz",
        "integrity": "sha512-N8nVhwfYga9MiV9jWlwfdj1UDIaZlBFu4cJSJkIr7tZX7sHpHhGR5su1qdpW+7KPL8ISTvCIkcaFi/JdBknvPg==",
        "requires": {
          "bowser": "^1.7.3",
          "css-in-js-utils": "^2.0.0"
        }
      },
      "inquirer": {
        "version": "7.1.0",
        "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-7.1.0.tgz",
        "integrity": "sha512-5fJMWEmikSYu0nv/flMc475MhGbB7TSPd/2IpFV4I4rMklboCH2rQjYY5kKiYGHqUF9gvaambupcJFFG9dvReg==",
        "requires": {
          "ansi-escapes": "^4.2.1",
          "chalk": "^3.0.0",
          "cli-cursor": "^3.1.0",
          "cli-width": "^2.0.0",
          "external-editor": "^3.0.3",
          "figures": "^3.0.0",
          "lodash": "^4.17.15",
          "mute-stream": "0.0.8",
          "run-async": "^2.4.0",
          "rxjs": "^6.5.3",
          "string-width": "^4.1.0",
          "strip-ansi": "^6.0.0",
          "through": "^2.3.6"
        },
        "dependencies": {
          "ansi-styles": {
            "version": "4.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.1.tgz",
            "integrity": "sha512-9VGjrMsG1vePxcSweQsN20KY/c4zN0h9fLjqAbwbPfahM3t+NL+M9HC8xeXG2I8pX5NoamTGNuomEUFI7fcUjA==",
            "requires": {
              "@types/color-name": "^1.1.1",
              "color-convert": "^2.0.1"
            }
          },
          "chalk": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
            "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
            "requires": {
              "ansi-styles": "^4.1.0",
              "supports-color": "^7.1.0"
            }
          },
          "color-convert": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
            "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
            "requires": {
              "color-name": "~1.1.4"
            }
          },
          "color-name": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
            "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
          },
          "has-flag": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
          },
          "strip-ansi": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
            "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
            "requires": {
              "ansi-regex": "^5.0.0"
            }
          },
          "supports-color": {
            "version": "7.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
            "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
            "requires": {
              "has-flag": "^4.0.0"
            }
          }
        }
      },
      "internal-ip": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/internal-ip/-/internal-ip-4.3.0.tgz",
        "integrity": "sha512-S1zBo1D6zcsyuC6PMmY5+55YMILQ9av8lotMx447Bq6SAgo/sDK6y6uUKmuYhW7eacnIhFfsPmCNYdDzsnnDCg==",
        "requires": {
          "default-gateway": "^4.2.0",
          "ipaddr.js": "^1.9.0"
        }
      },
      "internal-slot": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.0.2.tgz",
        "integrity": "sha512-2cQNfwhAfJIkU4KZPkDI+Gj5yNNnbqi40W9Gge6dfnk4TocEVm00B3bdiL+JINrbGJil2TeHvM4rETGzk/f/0g==",
        "requires": {
          "es-abstract": "^1.17.0-next.1",
          "has": "^1.0.3",
          "side-channel": "^1.0.2"
        }
      },
      "invariant": {
        "version": "2.2.4",
        "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
        "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
        "requires": {
          "loose-envify": "^1.0.0"
        }
      },
      "invert-kv": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-2.0.0.tgz",
        "integrity": "sha512-wPVv/y/QQ/Uiirj/vh3oP+1Ww+AWehmi1g5fFWGPF6IpCBCDVrhgHRMvrLfdYcwDh3QJbGXDW4JAuzxElLSqKA=="
      },
      "ip": {
        "version": "1.1.5",
        "resolved": "https://registry.npmjs.org/ip/-/ip-1.1.5.tgz",
        "integrity": "sha1-vd7XARQpCCjAoDnnLvJfWq7ENUo="
      },
      "ip-regex": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/ip-regex/-/ip-regex-2.1.0.tgz",
        "integrity": "sha1-+ni/XS5pE8kRzp+BnuUUa7bYROk="
      },
      "ipaddr.js": {
        "version": "1.9.1",
        "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
        "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
      },
      "is-absolute-url": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-absolute-url/-/is-absolute-url-2.1.0.tgz",
        "integrity": "sha1-UFMN+4T8yap9vnhS6Do3uTufKqY="
      },
      "is-accessor-descriptor": {
        "version": "0.1.6",
        "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
        "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
        "requires": {
          "kind-of": "^3.0.2"
        }
      },
      "is-arguments": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.0.4.tgz",
        "integrity": "sha512-xPh0Rmt8NE65sNzvyUmWgI1tz3mKq74lGA0mL8LYZcoIzKOzDh6HmrYm3d18k60nHerC8A9Km8kYu87zfSFnLA=="
      },
      "is-arrayish": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
        "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="
      },
      "is-binary-path": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
        "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
        "requires": {
          "binary-extensions": "^2.0.0"
        }
      },
      "is-buffer": {
        "version": "1.1.6",
        "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
        "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w=="
      },
      "is-callable": {
        "version": "1.1.5",
        "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.1.5.tgz",
        "integrity": "sha512-ESKv5sMCJB2jnHTWZ3O5itG+O128Hsus4K4Qh1h2/cgn2vbgnLSVqfV46AeJA9D5EeeLa9w81KUXMtn34zhX+Q=="
      },
      "is-ci": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
        "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
        "requires": {
          "ci-info": "^2.0.0"
        }
      },
      "is-color-stop": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-color-stop/-/is-color-stop-1.1.0.tgz",
        "integrity": "sha1-z/9HGu5N1cnhWFmPvhKWe1za00U=",
        "requires": {
          "css-color-names": "^0.0.4",
          "hex-color-regex": "^1.1.0",
          "hsl-regex": "^1.0.0",
          "hsla-regex": "^1.0.0",
          "rgb-regex": "^1.0.1",
          "rgba-regex": "^1.0.0"
        }
      },
      "is-data-descriptor": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
        "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
        "requires": {
          "kind-of": "^3.0.2"
        }
      },
      "is-date-object": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz",
        "integrity": "sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g=="
      },
      "is-descriptor": {
        "version": "0.1.6",
        "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
        "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
        "requires": {
          "is-accessor-descriptor": "^0.1.6",
          "is-data-descriptor": "^0.1.4",
          "kind-of": "^5.0.0"
        },
        "dependencies": {
          "kind-of": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
            "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
          }
        }
      },
      "is-directory": {
        "version": "0.3.1",
        "resolved": "https://registry.npmjs.org/is-directory/-/is-directory-0.3.1.tgz",
        "integrity": "sha1-YTObbyR1/Hcv2cnYP1yFddwVSuE="
      },
      "is-docker": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.0.0.tgz",
        "integrity": "sha512-pJEdRugimx4fBMra5z2/5iRdZ63OhYV0vr0Dwm5+xtW4D1FvRkB8hamMIhnWfyJeDdyr/aa7BDyNbtG38VxgoQ=="
      },
      "is-extendable": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
        "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
      },
      "is-extglob": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
        "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI="
      },
      "is-fullwidth-code-point": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
        "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
      },
      "is-generator-fn": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-generator-fn/-/is-generator-fn-2.1.0.tgz",
        "integrity": "sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ=="
      },
      "is-glob": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
        "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
        "requires": {
          "is-extglob": "^2.1.1"
        }
      },
      "is-number": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
        "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
        "requires": {
          "kind-of": "^3.0.2"
        }
      },
      "is-obj": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
        "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w=="
      },
      "is-path-cwd": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-2.2.0.tgz",
        "integrity": "sha512-w942bTcih8fdJPJmQHFzkS76NEP8Kzzvmw92cXsazb8intwLqPibPPdXf4ANdKV3rYMuuQYGIWtvz9JilB3NFQ=="
      },
      "is-path-in-cwd": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-path-in-cwd/-/is-path-in-cwd-2.1.0.tgz",
        "integrity": "sha512-rNocXHgipO+rvnP6dk3zI20RpOtrAM/kzbB258Uw5BWr3TpXi861yzjo16Dn4hUox07iw5AyeMLHWsujkjzvRQ==",
        "requires": {
          "is-path-inside": "^2.1.0"
        }
      },
      "is-path-inside": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-2.1.0.tgz",
        "integrity": "sha512-wiyhTzfDWsvwAW53OBWF5zuvaOGlZ6PwYxAbPVDhpm+gM09xKQGjBq/8uYN12aDvMxnAnq3dxTyoSoRNmg5YFg==",
        "requires": {
          "path-is-inside": "^1.0.2"
        }
      },
      "is-plain-obj": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
        "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4="
      },
      "is-plain-object": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
        "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
        "requires": {
          "isobject": "^3.0.1"
        }
      },
      "is-promise": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-2.1.0.tgz",
        "integrity": "sha1-eaKp7OfwlugPNtKy87wWwf9L8/o="
      },
      "is-regex": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.0.5.tgz",
        "integrity": "sha512-vlKW17SNq44owv5AQR3Cq0bQPEb8+kF3UKZ2fiZNOWtztYE5i0CzCZxFDwO58qAOWtxdBRVO/V5Qin1wjCqFYQ==",
        "requires": {
          "has": "^1.0.3"
        }
      },
      "is-regexp": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-regexp/-/is-regexp-1.0.0.tgz",
        "integrity": "sha1-/S2INUXEa6xaYz57mgnof6LLUGk="
      },
      "is-resolvable": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-resolvable/-/is-resolvable-1.1.0.tgz",
        "integrity": "sha512-qgDYXFSR5WvEfuS5dMj6oTMEbrrSaM0CrFk2Yiq/gXnBvD9pMa2jGXxyhGLfvhZpuMZe18CJpFxAt3CRs42NMg=="
      },
      "is-root": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-root/-/is-root-2.1.0.tgz",
        "integrity": "sha512-AGOriNp96vNBd3HtU+RzFEc75FfR5ymiYv8E553I71SCeXBiMsVDUtdio1OEFvrPyLIQ9tVR5RxXIFe5PUFjMg=="
      },
      "is-stream": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
        "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ="
      },
      "is-string": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.5.tgz",
        "integrity": "sha512-buY6VNRjhQMiF1qWDouloZlQbRhDPCebwxSjxMjxgemYT46YMd2NR0/H+fBhEfWX4A/w9TBJ+ol+okqJKFE6vQ=="
      },
      "is-svg": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/is-svg/-/is-svg-3.0.0.tgz",
        "integrity": "sha512-gi4iHK53LR2ujhLVVj+37Ykh9GLqYHX6JOVXbLAucaG/Cqw9xwdFOjDM2qeifLs1sF1npXXFvDu0r5HNgCMrzQ==",
        "requires": {
          "html-comment-regex": "^1.1.0"
        }
      },
      "is-symbol": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz",
        "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
        "requires": {
          "has-symbols": "^1.0.1"
        }
      },
      "is-typedarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
        "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="
      },
      "is-windows": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
        "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA=="
      },
      "is-wsl": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
        "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0="
      },
      "isarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
        "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
      },
      "isexe": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
        "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
      },
      "isobject": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
        "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8="
      },
      "isstream": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
        "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo="
      },
      "istanbul-lib-coverage": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.5.tgz",
        "integrity": "sha512-8aXznuEPCJvGnMSRft4udDRDtb1V3pkQkMMI5LI+6HuQz5oQ4J2UFn1H82raA3qJtyOLkkwVqICBQkjnGtn5mA=="
      },
      "istanbul-lib-instrument": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-3.3.0.tgz",
        "integrity": "sha512-5nnIN4vo5xQZHdXno/YDXJ0G+I3dAm4XgzfSVTPLQpj/zAV2dV6Juy0yaf10/zrJOJeHoN3fraFe+XRq2bFVZA==",
        "requires": {
          "@babel/generator": "^7.4.0",
          "@babel/parser": "^7.4.3",
          "@babel/template": "^7.4.0",
          "@babel/traverse": "^7.4.3",
          "@babel/types": "^7.4.0",
          "istanbul-lib-coverage": "^2.0.5",
          "semver": "^6.0.0"
        }
      },
      "istanbul-lib-report": {
        "version": "2.0.8",
        "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-2.0.8.tgz",
        "integrity": "sha512-fHBeG573EIihhAblwgxrSenp0Dby6tJMFR/HvlerBsrCTD5bkUuoNtn3gVh29ZCS824cGGBPn7Sg7cNk+2xUsQ==",
        "requires": {
          "istanbul-lib-coverage": "^2.0.5",
          "make-dir": "^2.1.0",
          "supports-color": "^6.1.0"
        },
        "dependencies": {
          "supports-color": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
            "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
            "requires": {
              "has-flag": "^3.0.0"
            }
          }
        }
      },
      "istanbul-lib-source-maps": {
        "version": "3.0.6",
        "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-3.0.6.tgz",
        "integrity": "sha512-R47KzMtDJH6X4/YW9XTx+jrLnZnscW4VpNN+1PViSYTejLVPWv7oov+Duf8YQSPyVRUvueQqz1TcsC6mooZTXw==",
        "requires": {
          "debug": "^4.1.1",
          "istanbul-lib-coverage": "^2.0.5",
          "make-dir": "^2.1.0",
          "rimraf": "^2.6.3",
          "source-map": "^0.6.1"
        }
      },
      "istanbul-reports": {
        "version": "2.2.7",
        "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-2.2.7.tgz",
        "integrity": "sha512-uu1F/L1o5Y6LzPVSVZXNOoD/KXpJue9aeLRd0sM9uMXfZvzomB0WxVamWb5ue8kA2vVWEmW7EG+A5n3f1kqHKg==",
        "requires": {
          "html-escaper": "^2.0.0"
        }
      },
      "jest": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest/-/jest-24.9.0.tgz",
        "integrity": "sha512-YvkBL1Zm7d2B1+h5fHEOdyjCG+sGMz4f8D86/0HiqJ6MB4MnDc8FgP5vdWsGnemOQro7lnYo8UakZ3+5A0jxGw==",
        "requires": {
          "import-local": "^2.0.0",
          "jest-cli": "^24.9.0"
        },
        "dependencies": {
          "jest-cli": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-24.9.0.tgz",
            "integrity": "sha512-+VLRKyitT3BWoMeSUIHRxV/2g8y9gw91Jh5z2UmXZzkZKpbC08CSehVxgHUwTpy+HwGcns/tqafQDJW7imYvGg==",
            "requires": {
              "@jest/core": "^24.9.0",
              "@jest/test-result": "^24.9.0",
              "@jest/types": "^24.9.0",
              "chalk": "^2.0.1",
              "exit": "^0.1.2",
              "import-local": "^2.0.0",
              "is-ci": "^2.0.0",
              "jest-config": "^24.9.0",
              "jest-util": "^24.9.0",
              "jest-validate": "^24.9.0",
              "prompts": "^2.0.1",
              "realpath-native": "^1.1.0",
              "yargs": "^13.3.0"
            }
          }
        }
      },
      "jest-changed-files": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-24.9.0.tgz",
        "integrity": "sha512-6aTWpe2mHF0DhL28WjdkO8LyGjs3zItPET4bMSeXU6T3ub4FPMw+mcOcbdGXQOAfmLcxofD23/5Bl9Z4AkFwqg==",
        "requires": {
          "@jest/types": "^24.9.0",
          "execa": "^1.0.0",
          "throat": "^4.0.0"
        }
      },
      "jest-config": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-24.9.0.tgz",
        "integrity": "sha512-RATtQJtVYQrp7fvWg6f5y3pEFj9I+H8sWw4aKxnDZ96mob5i5SD6ZEGWgMLXQ4LE8UurrjbdlLWdUeo+28QpfQ==",
        "requires": {
          "@babel/core": "^7.1.0",
          "@jest/test-sequencer": "^24.9.0",
          "@jest/types": "^24.9.0",
          "babel-jest": "^24.9.0",
          "chalk": "^2.0.1",
          "glob": "^7.1.1",
          "jest-environment-jsdom": "^24.9.0",
          "jest-environment-node": "^24.9.0",
          "jest-get-type": "^24.9.0",
          "jest-jasmine2": "^24.9.0",
          "jest-regex-util": "^24.3.0",
          "jest-resolve": "^24.9.0",
          "jest-util": "^24.9.0",
          "jest-validate": "^24.9.0",
          "micromatch": "^3.1.10",
          "pretty-format": "^24.9.0",
          "realpath-native": "^1.1.0"
        }
      },
      "jest-diff": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-24.9.0.tgz",
        "integrity": "sha512-qMfrTs8AdJE2iqrTp0hzh7kTd2PQWrsFyj9tORoKmu32xjPjeE4NyjVRDz8ybYwqS2ik8N4hsIpiVTyFeo2lBQ==",
        "requires": {
          "chalk": "^2.0.1",
          "diff-sequences": "^24.9.0",
          "jest-get-type": "^24.9.0",
          "pretty-format": "^24.9.0"
        }
      },
      "jest-docblock": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-24.9.0.tgz",
        "integrity": "sha512-F1DjdpDMJMA1cN6He0FNYNZlo3yYmOtRUnktrT9Q37njYzC5WEaDdmbynIgy0L/IvXvvgsG8OsqhLPXTpfmZAA==",
        "requires": {
          "detect-newline": "^2.1.0"
        }
      },
      "jest-each": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-each/-/jest-each-24.9.0.tgz",
        "integrity": "sha512-ONi0R4BvW45cw8s2Lrx8YgbeXL1oCQ/wIDwmsM3CqM/nlblNCPmnC3IPQlMbRFZu3wKdQ2U8BqM6lh3LJ5Bsog==",
        "requires": {
          "@jest/types": "^24.9.0",
          "chalk": "^2.0.1",
          "jest-get-type": "^24.9.0",
          "jest-util": "^24.9.0",
          "pretty-format": "^24.9.0"
        }
      },
      "jest-environment-jsdom": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-24.9.0.tgz",
        "integrity": "sha512-Zv9FV9NBRzLuALXjvRijO2351DRQeLYXtpD4xNvfoVFw21IOKNhZAEUKcbiEtjTkm2GsJ3boMVgkaR7rN8qetA==",
        "requires": {
          "@jest/environment": "^24.9.0",
          "@jest/fake-timers": "^24.9.0",
          "@jest/types": "^24.9.0",
          "jest-mock": "^24.9.0",
          "jest-util": "^24.9.0",
          "jsdom": "^11.5.1"
        }
      },
      "jest-environment-jsdom-fourteen": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/jest-environment-jsdom-fourteen/-/jest-environment-jsdom-fourteen-1.0.1.tgz",
        "integrity": "sha512-DojMX1sY+at5Ep+O9yME34CdidZnO3/zfPh8UW+918C5fIZET5vCjfkegixmsi7AtdYfkr4bPlIzmWnlvQkP7Q==",
        "requires": {
          "@jest/environment": "^24.3.0",
          "@jest/fake-timers": "^24.3.0",
          "@jest/types": "^24.3.0",
          "jest-mock": "^24.0.0",
          "jest-util": "^24.0.0",
          "jsdom": "^14.1.0"
        },
        "dependencies": {
          "acorn": {
            "version": "6.4.1",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.1.tgz",
            "integrity": "sha512-ZVA9k326Nwrj3Cj9jlh3wGFutC2ZornPNARZwsNYqQYgN0EsV2d53w5RN/co65Ohn4sUAUtb1rSUAOD6XN9idA=="
          },
          "jsdom": {
            "version": "14.1.0",
            "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-14.1.0.tgz",
            "integrity": "sha512-O901mfJSuTdwU2w3Sn+74T+RnDVP+FuV5fH8tcPWyqrseRAb0s5xOtPgCFiPOtLcyK7CLIJwPyD83ZqQWvA5ng==",
            "requires": {
              "abab": "^2.0.0",
              "acorn": "^6.0.4",
              "acorn-globals": "^4.3.0",
              "array-equal": "^1.0.0",
              "cssom": "^0.3.4",
              "cssstyle": "^1.1.1",
              "data-urls": "^1.1.0",
              "domexception": "^1.0.1",
              "escodegen": "^1.11.0",
              "html-encoding-sniffer": "^1.0.2",
              "nwsapi": "^2.1.3",
              "parse5": "5.1.0",
              "pn": "^1.1.0",
              "request": "^2.88.0",
              "request-promise-native": "^1.0.5",
              "saxes": "^3.1.9",
              "symbol-tree": "^3.2.2",
              "tough-cookie": "^2.5.0",
              "w3c-hr-time": "^1.0.1",
              "w3c-xmlserializer": "^1.1.2",
              "webidl-conversions": "^4.0.2",
              "whatwg-encoding": "^1.0.5",
              "whatwg-mimetype": "^2.3.0",
              "whatwg-url": "^7.0.0",
              "ws": "^6.1.2",
              "xml-name-validator": "^3.0.0"
            }
          },
          "parse5": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/parse5/-/parse5-5.1.0.tgz",
            "integrity": "sha512-fxNG2sQjHvlVAYmzBZS9YlDp6PTSSDwa98vkD4QgVDDCAo84z5X1t5XyJQ62ImdLXx5NdIIfihey6xpum9/gRQ=="
          },
          "whatwg-url": {
            "version": "7.1.0",
            "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.1.0.tgz",
            "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
            "requires": {
              "lodash.sortby": "^4.7.0",
              "tr46": "^1.0.1",
              "webidl-conversions": "^4.0.2"
            }
          },
          "ws": {
            "version": "6.2.1",
            "resolved": "https://registry.npmjs.org/ws/-/ws-6.2.1.tgz",
            "integrity": "sha512-GIyAXC2cB7LjvpgMt9EKS2ldqr0MTrORaleiOno6TweZ6r3TKtoFQWay/2PceJ3RuBasOHzXNn5Lrw1X0bEjqA==",
            "requires": {
              "async-limiter": "~1.0.0"
            }
          }
        }
      },
      "jest-environment-node": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-24.9.0.tgz",
        "integrity": "sha512-6d4V2f4nxzIzwendo27Tr0aFm+IXWa0XEUnaH6nU0FMaozxovt+sfRvh4J47wL1OvF83I3SSTu0XK+i4Bqe7uA==",
        "requires": {
          "@jest/environment": "^24.9.0",
          "@jest/fake-timers": "^24.9.0",
          "@jest/types": "^24.9.0",
          "jest-mock": "^24.9.0",
          "jest-util": "^24.9.0"
        }
      },
      "jest-get-type": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.9.0.tgz",
        "integrity": "sha512-lUseMzAley4LhIcpSP9Jf+fTrQ4a1yHQwLNeeVa2cEmbCGeoZAtYPOIv8JaxLD/sUpKxetKGP+gsHl8f8TSj8Q=="
      },
      "jest-haste-map": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
        "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
        "requires": {
          "@jest/types": "^24.9.0",
          "anymatch": "^2.0.0",
          "fb-watchman": "^2.0.0",
          "fsevents": "^1.2.7",
          "graceful-fs": "^4.1.15",
          "invariant": "^2.2.4",
          "jest-serializer": "^24.9.0",
          "jest-util": "^24.9.0",
          "jest-worker": "^24.9.0",
          "micromatch": "^3.1.10",
          "sane": "^4.0.3",
          "walker": "^1.0.7"
        },
        "dependencies": {
          "fsevents": {
            "version": "1.2.12",
            "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.12.tgz",
            "integrity": "sha512-Ggd/Ktt7E7I8pxZRbGIs7vwqAPscSESMrCSkx2FtWeqmheJgCo2R74fTsZFCifr0VTPwqRpPv17+6b8Zp7th0Q==",
            "optional": true,
            "requires": {
              "node-pre-gyp": "*"
            },
            "dependencies": {
              "abbrev": {
                "version": "1.1.1",
                "bundled": true,
                "optional": true
              },
              "ansi-regex": {
                "version": "2.1.1",
                "bundled": true,
                "optional": true
              },
              "aproba": {
                "version": "1.2.0",
                "bundled": true,
                "optional": true
              },
              "are-we-there-yet": {
                "version": "1.1.5",
                "bundled": true,
                "optional": true,
                "requires": {
                  "delegates": "^1.0.0",
                  "readable-stream": "^2.0.6"
                }
              },
              "balanced-match": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true
              },
              "brace-expansion": {
                "version": "1.1.11",
                "bundled": true,
                "optional": true,
                "requires": {
                  "balanced-match": "^1.0.0",
                  "concat-map": "0.0.1"
                }
              },
              "chownr": {
                "version": "1.1.4",
                "bundled": true,
                "optional": true
              },
              "code-point-at": {
                "version": "1.1.0",
                "bundled": true,
                "optional": true
              },
              "concat-map": {
                "version": "0.0.1",
                "bundled": true,
                "optional": true
              },
              "console-control-strings": {
                "version": "1.1.0",
                "bundled": true,
                "optional": true
              },
              "core-util-is": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "debug": {
                "version": "3.2.6",
                "bundled": true,
                "optional": true,
                "requires": {
                  "ms": "^2.1.1"
                }
              },
              "deep-extend": {
                "version": "0.6.0",
                "bundled": true,
                "optional": true
              },
              "delegates": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true
              },
              "detect-libc": {
                "version": "1.0.3",
                "bundled": true,
                "optional": true
              },
              "fs-minipass": {
                "version": "1.2.7",
                "bundled": true,
                "optional": true,
                "requires": {
                  "minipass": "^2.6.0"
                }
              },
              "fs.realpath": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true
              },
              "gauge": {
                "version": "2.7.4",
                "bundled": true,
                "optional": true,
                "requires": {
                  "aproba": "^1.0.3",
                  "console-control-strings": "^1.0.0",
                  "has-unicode": "^2.0.0",
                  "object-assign": "^4.1.0",
                  "signal-exit": "^3.0.0",
                  "string-width": "^1.0.1",
                  "strip-ansi": "^3.0.1",
                  "wide-align": "^1.1.0"
                }
              },
              "glob": {
                "version": "7.1.6",
                "bundled": true,
                "optional": true,
                "requires": {
                  "fs.realpath": "^1.0.0",
                  "inflight": "^1.0.4",
                  "inherits": "2",
                  "minimatch": "^3.0.4",
                  "once": "^1.3.0",
                  "path-is-absolute": "^1.0.0"
                }
              },
              "has-unicode": {
                "version": "2.0.1",
                "bundled": true,
                "optional": true
              },
              "iconv-lite": {
                "version": "0.4.24",
                "bundled": true,
                "optional": true,
                "requires": {
                  "safer-buffer": ">= 2.1.2 < 3"
                }
              },
              "ignore-walk": {
                "version": "3.0.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "minimatch": "^3.0.4"
                }
              },
              "inflight": {
                "version": "1.0.6",
                "bundled": true,
                "optional": true,
                "requires": {
                  "once": "^1.3.0",
                  "wrappy": "1"
                }
              },
              "inherits": {
                "version": "2.0.4",
                "bundled": true,
                "optional": true
              },
              "ini": {
                "version": "1.3.5",
                "bundled": true,
                "optional": true
              },
              "is-fullwidth-code-point": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true,
                "requires": {
                  "number-is-nan": "^1.0.0"
                }
              },
              "isarray": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true
              },
              "minimatch": {
                "version": "3.0.4",
                "bundled": true,
                "optional": true,
                "requires": {
                  "brace-expansion": "^1.1.7"
                }
              },
              "minimist": {
                "version": "1.2.5",
                "bundled": true,
                "optional": true
              },
              "minipass": {
                "version": "2.9.0",
                "bundled": true,
                "optional": true,
                "requires": {
                  "safe-buffer": "^5.1.2",
                  "yallist": "^3.0.0"
                }
              },
              "minizlib": {
                "version": "1.3.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "minipass": "^2.9.0"
                }
              },
              "mkdirp": {
                "version": "0.5.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "minimist": "^1.2.5"
                }
              },
              "ms": {
                "version": "2.1.2",
                "bundled": true,
                "optional": true
              },
              "needle": {
                "version": "2.3.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "debug": "^3.2.6",
                  "iconv-lite": "^0.4.4",
                  "sax": "^1.2.4"
                }
              },
              "node-pre-gyp": {
                "version": "0.14.0",
                "bundled": true,
                "optional": true,
                "requires": {
                  "detect-libc": "^1.0.2",
                  "mkdirp": "^0.5.1",
                  "needle": "^2.2.1",
                  "nopt": "^4.0.1",
                  "npm-packlist": "^1.1.6",
                  "npmlog": "^4.0.2",
                  "rc": "^1.2.7",
                  "rimraf": "^2.6.1",
                  "semver": "^5.3.0",
                  "tar": "^4.4.2"
                }
              },
              "nopt": {
                "version": "4.0.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "abbrev": "1",
                  "osenv": "^0.1.4"
                }
              },
              "npm-bundled": {
                "version": "1.1.1",
                "bundled": true,
                "optional": true,
                "requires": {
                  "npm-normalize-package-bin": "^1.0.1"
                }
              },
              "npm-normalize-package-bin": {
                "version": "1.0.1",
                "bundled": true,
                "optional": true
              },
              "npm-packlist": {
                "version": "1.4.8",
                "bundled": true,
                "optional": true,
                "requires": {
                  "ignore-walk": "^3.0.1",
                  "npm-bundled": "^1.0.1",
                  "npm-normalize-package-bin": "^1.0.1"
                }
              },
              "npmlog": {
                "version": "4.1.2",
                "bundled": true,
                "optional": true,
                "requires": {
                  "are-we-there-yet": "~1.1.2",
                  "console-control-strings": "~1.1.0",
                  "gauge": "~2.7.3",
                  "set-blocking": "~2.0.0"
                }
              },
              "number-is-nan": {
                "version": "1.0.1",
                "bundled": true,
                "optional": true
              },
              "object-assign": {
                "version": "4.1.1",
                "bundled": true,
                "optional": true
              },
              "once": {
                "version": "1.4.0",
                "bundled": true,
                "optional": true,
                "requires": {
                  "wrappy": "1"
                }
              },
              "os-homedir": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "os-tmpdir": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "osenv": {
                "version": "0.1.5",
                "bundled": true,
                "optional": true,
                "requires": {
                  "os-homedir": "^1.0.0",
                  "os-tmpdir": "^1.0.0"
                }
              },
              "path-is-absolute": {
                "version": "1.0.1",
                "bundled": true,
                "optional": true
              },
              "process-nextick-args": {
                "version": "2.0.1",
                "bundled": true,
                "optional": true
              },
              "rc": {
                "version": "1.2.8",
                "bundled": true,
                "optional": true,
                "requires": {
                  "deep-extend": "^0.6.0",
                  "ini": "~1.3.0",
                  "minimist": "^1.2.0",
                  "strip-json-comments": "~2.0.1"
                }
              },
              "readable-stream": {
                "version": "2.3.7",
                "bundled": true,
                "optional": true,
                "requires": {
                  "core-util-is": "~1.0.0",
                  "inherits": "~2.0.3",
                  "isarray": "~1.0.0",
                  "process-nextick-args": "~2.0.0",
                  "safe-buffer": "~5.1.1",
                  "string_decoder": "~1.1.1",
                  "util-deprecate": "~1.0.1"
                }
              },
              "rimraf": {
                "version": "2.7.1",
                "bundled": true,
                "optional": true,
                "requires": {
                  "glob": "^7.1.3"
                }
              },
              "safe-buffer": {
                "version": "5.1.2",
                "bundled": true,
                "optional": true
              },
              "safer-buffer": {
                "version": "2.1.2",
                "bundled": true,
                "optional": true
              },
              "sax": {
                "version": "1.2.4",
                "bundled": true,
                "optional": true
              },
              "semver": {
                "version": "5.7.1",
                "bundled": true,
                "optional": true
              },
              "set-blocking": {
                "version": "2.0.0",
                "bundled": true,
                "optional": true
              },
              "signal-exit": {
                "version": "3.0.2",
                "bundled": true,
                "optional": true
              },
              "string-width": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true,
                "requires": {
                  "code-point-at": "^1.0.0",
                  "is-fullwidth-code-point": "^1.0.0",
                  "strip-ansi": "^3.0.0"
                }
              },
              "string_decoder": {
                "version": "1.1.1",
                "bundled": true,
                "optional": true,
                "requires": {
                  "safe-buffer": "~5.1.0"
                }
              },
              "strip-ansi": {
                "version": "3.0.1",
                "bundled": true,
                "optional": true,
                "requires": {
                  "ansi-regex": "^2.0.0"
                }
              },
              "strip-json-comments": {
                "version": "2.0.1",
                "bundled": true,
                "optional": true
              },
              "tar": {
                "version": "4.4.13",
                "bundled": true,
                "optional": true,
                "requires": {
                  "chownr": "^1.1.1",
                  "fs-minipass": "^1.2.5",
                  "minipass": "^2.8.6",
                  "minizlib": "^1.2.1",
                  "mkdirp": "^0.5.0",
                  "safe-buffer": "^5.1.2",
                  "yallist": "^3.0.3"
                }
              },
              "util-deprecate": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "wide-align": {
                "version": "1.1.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "string-width": "^1.0.2 || 2"
                }
              },
              "wrappy": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "yallist": {
                "version": "3.1.1",
                "bundled": true,
                "optional": true
              }
            }
          }
        }
      },
      "jest-jasmine2": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-24.9.0.tgz",
        "integrity": "sha512-Cq7vkAgaYKp+PsX+2/JbTarrk0DmNhsEtqBXNwUHkdlbrTBLtMJINADf2mf5FkowNsq8evbPc07/qFO0AdKTzw==",
        "requires": {
          "@babel/traverse": "^7.1.0",
          "@jest/environment": "^24.9.0",
          "@jest/test-result": "^24.9.0",
          "@jest/types": "^24.9.0",
          "chalk": "^2.0.1",
          "co": "^4.6.0",
          "expect": "^24.9.0",
          "is-generator-fn": "^2.0.0",
          "jest-each": "^24.9.0",
          "jest-matcher-utils": "^24.9.0",
          "jest-message-util": "^24.9.0",
          "jest-runtime": "^24.9.0",
          "jest-snapshot": "^24.9.0",
          "jest-util": "^24.9.0",
          "pretty-format": "^24.9.0",
          "throat": "^4.0.0"
        }
      },
      "jest-leak-detector": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-24.9.0.tgz",
        "integrity": "sha512-tYkFIDsiKTGwb2FG1w8hX9V0aUb2ot8zY/2nFg087dUageonw1zrLMP4W6zsRO59dPkTSKie+D4rhMuP9nRmrA==",
        "requires": {
          "jest-get-type": "^24.9.0",
          "pretty-format": "^24.9.0"
        }
      },
      "jest-matcher-utils": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-24.9.0.tgz",
        "integrity": "sha512-OZz2IXsu6eaiMAwe67c1T+5tUAtQyQx27/EMEkbFAGiw52tB9em+uGbzpcgYVpA8wl0hlxKPZxrly4CXU/GjHA==",
        "requires": {
          "chalk": "^2.0.1",
          "jest-diff": "^24.9.0",
          "jest-get-type": "^24.9.0",
          "pretty-format": "^24.9.0"
        }
      },
      "jest-message-util": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
        "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
        "requires": {
          "@babel/code-frame": "^7.0.0",
          "@jest/test-result": "^24.9.0",
          "@jest/types": "^24.9.0",
          "@types/stack-utils": "^1.0.1",
          "chalk": "^2.0.1",
          "micromatch": "^3.1.10",
          "slash": "^2.0.0",
          "stack-utils": "^1.0.1"
        }
      },
      "jest-mock": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
        "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
        "requires": {
          "@jest/types": "^24.9.0"
        }
      },
      "jest-pnp-resolver": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/jest-pnp-resolver/-/jest-pnp-resolver-1.2.1.tgz",
        "integrity": "sha512-pgFw2tm54fzgYvc/OHrnysABEObZCUNFnhjoRjaVOCN8NYc032/gVjPaHD4Aq6ApkSieWtfKAFQtmDKAmhupnQ=="
      },
      "jest-regex-util": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
        "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA=="
      },
      "jest-resolve": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-24.9.0.tgz",
        "integrity": "sha512-TaLeLVL1l08YFZAt3zaPtjiVvyy4oSA6CRe+0AFPPVX3Q/VI0giIWWoAvoS5L96vj9Dqxj4fB5p2qrHCmTU/MQ==",
        "requires": {
          "@jest/types": "^24.9.0",
          "browser-resolve": "^1.11.3",
          "chalk": "^2.0.1",
          "jest-pnp-resolver": "^1.2.1",
          "realpath-native": "^1.1.0"
        }
      },
      "jest-resolve-dependencies": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-24.9.0.tgz",
        "integrity": "sha512-Fm7b6AlWnYhT0BXy4hXpactHIqER7erNgIsIozDXWl5dVm+k8XdGVe1oTg1JyaFnOxarMEbax3wyRJqGP2Pq+g==",
        "requires": {
          "@jest/types": "^24.9.0",
          "jest-regex-util": "^24.3.0",
          "jest-snapshot": "^24.9.0"
        }
      },
      "jest-runner": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-24.9.0.tgz",
        "integrity": "sha512-KksJQyI3/0mhcfspnxxEOBueGrd5E4vV7ADQLT9ESaCzz02WnbdbKWIf5Mkaucoaj7obQckYPVX6JJhgUcoWWg==",
        "requires": {
          "@jest/console": "^24.7.1",
          "@jest/environment": "^24.9.0",
          "@jest/test-result": "^24.9.0",
          "@jest/types": "^24.9.0",
          "chalk": "^2.4.2",
          "exit": "^0.1.2",
          "graceful-fs": "^4.1.15",
          "jest-config": "^24.9.0",
          "jest-docblock": "^24.3.0",
          "jest-haste-map": "^24.9.0",
          "jest-jasmine2": "^24.9.0",
          "jest-leak-detector": "^24.9.0",
          "jest-message-util": "^24.9.0",
          "jest-resolve": "^24.9.0",
          "jest-runtime": "^24.9.0",
          "jest-util": "^24.9.0",
          "jest-worker": "^24.6.0",
          "source-map-support": "^0.5.6",
          "throat": "^4.0.0"
        }
      },
      "jest-runtime": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-24.9.0.tgz",
        "integrity": "sha512-8oNqgnmF3v2J6PVRM2Jfuj8oX3syKmaynlDMMKQ4iyzbQzIG6th5ub/lM2bCMTmoTKM3ykcUYI2Pw9xwNtjMnw==",
        "requires": {
          "@jest/console": "^24.7.1",
          "@jest/environment": "^24.9.0",
          "@jest/source-map": "^24.3.0",
          "@jest/transform": "^24.9.0",
          "@jest/types": "^24.9.0",
          "@types/yargs": "^13.0.0",
          "chalk": "^2.0.1",
          "exit": "^0.1.2",
          "glob": "^7.1.3",
          "graceful-fs": "^4.1.15",
          "jest-config": "^24.9.0",
          "jest-haste-map": "^24.9.0",
          "jest-message-util": "^24.9.0",
          "jest-mock": "^24.9.0",
          "jest-regex-util": "^24.3.0",
          "jest-resolve": "^24.9.0",
          "jest-snapshot": "^24.9.0",
          "jest-util": "^24.9.0",
          "jest-validate": "^24.9.0",
          "realpath-native": "^1.1.0",
          "slash": "^2.0.0",
          "strip-bom": "^3.0.0",
          "yargs": "^13.3.0"
        }
      },
      "jest-serializer": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
        "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ=="
      },
      "jest-snapshot": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-24.9.0.tgz",
        "integrity": "sha512-uI/rszGSs73xCM0l+up7O7a40o90cnrk429LOiK3aeTvfC0HHmldbd81/B7Ix81KSFe1lwkbl7GnBGG4UfuDew==",
        "requires": {
          "@babel/types": "^7.0.0",
          "@jest/types": "^24.9.0",
          "chalk": "^2.0.1",
          "expect": "^24.9.0",
          "jest-diff": "^24.9.0",
          "jest-get-type": "^24.9.0",
          "jest-matcher-utils": "^24.9.0",
          "jest-message-util": "^24.9.0",
          "jest-resolve": "^24.9.0",
          "mkdirp": "^0.5.1",
          "natural-compare": "^1.4.0",
          "pretty-format": "^24.9.0",
          "semver": "^6.2.0"
        }
      },
      "jest-util": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
        "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
        "requires": {
          "@jest/console": "^24.9.0",
          "@jest/fake-timers": "^24.9.0",
          "@jest/source-map": "^24.9.0",
          "@jest/test-result": "^24.9.0",
          "@jest/types": "^24.9.0",
          "callsites": "^3.0.0",
          "chalk": "^2.0.1",
          "graceful-fs": "^4.1.15",
          "is-ci": "^2.0.0",
          "mkdirp": "^0.5.1",
          "slash": "^2.0.0",
          "source-map": "^0.6.0"
        },
        "dependencies": {
          "callsites": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
            "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="
          }
        }
      },
      "jest-validate": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-24.9.0.tgz",
        "integrity": "sha512-HPIt6C5ACwiqSiwi+OfSSHbK8sG7akG8eATl+IPKaeIjtPOeBUd/g3J7DghugzxrGjI93qS/+RPKe1H6PqvhRQ==",
        "requires": {
          "@jest/types": "^24.9.0",
          "camelcase": "^5.3.1",
          "chalk": "^2.0.1",
          "jest-get-type": "^24.9.0",
          "leven": "^3.1.0",
          "pretty-format": "^24.9.0"
        }
      },
      "jest-watch-typeahead": {
        "version": "0.4.2",
        "resolved": "https://registry.npmjs.org/jest-watch-typeahead/-/jest-watch-typeahead-0.4.2.tgz",
        "integrity": "sha512-f7VpLebTdaXs81rg/oj4Vg/ObZy2QtGzAmGLNsqUS5G5KtSN68tFcIsbvNODfNyQxU78g7D8x77o3bgfBTR+2Q==",
        "requires": {
          "ansi-escapes": "^4.2.1",
          "chalk": "^2.4.1",
          "jest-regex-util": "^24.9.0",
          "jest-watcher": "^24.3.0",
          "slash": "^3.0.0",
          "string-length": "^3.1.0",
          "strip-ansi": "^5.0.0"
        },
        "dependencies": {
          "slash": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
            "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q=="
          },
          "string-length": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/string-length/-/string-length-3.1.0.tgz",
            "integrity": "sha512-Ttp5YvkGm5v9Ijagtaz1BnN+k9ObpvS0eIBblPMp2YWL8FBmi9qblQ9fexc2k/CXFgrTIteU3jAw3payCnwSTA==",
            "requires": {
              "astral-regex": "^1.0.0",
              "strip-ansi": "^5.2.0"
            }
          }
        }
      },
      "jest-watcher": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-24.9.0.tgz",
        "integrity": "sha512-+/fLOfKPXXYJDYlks62/4R4GoT+GU1tYZed99JSCOsmzkkF7727RqKrjNAxtfO4YpGv11wybgRvCjR73lK2GZw==",
        "requires": {
          "@jest/test-result": "^24.9.0",
          "@jest/types": "^24.9.0",
          "@types/yargs": "^13.0.0",
          "ansi-escapes": "^3.0.0",
          "chalk": "^2.0.1",
          "jest-util": "^24.9.0",
          "string-length": "^2.0.0"
        },
        "dependencies": {
          "ansi-escapes": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
            "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ=="
          }
        }
      },
      "jest-worker": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
        "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
        "requires": {
          "merge-stream": "^2.0.0",
          "supports-color": "^6.1.0"
        },
        "dependencies": {
          "supports-color": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
            "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
            "requires": {
              "has-flag": "^3.0.0"
            }
          }
        }
      },
      "js-tokens": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
        "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
      },
      "js-yaml": {
        "version": "3.13.1",
        "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.13.1.tgz",
        "integrity": "sha512-YfbcO7jXDdyj0DGxYVSlSeQNHbD7XPWvrVWeVUujrQEoZzWJIRrCPoyk6kL6IAjAG2IolMK4T0hNUe0HOUs5Jw==",
        "requires": {
          "argparse": "^1.0.7",
          "esprima": "^4.0.0"
        }
      },
      "jsbn": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
        "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM="
      },
      "jsdom": {
        "version": "11.12.0",
        "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-11.12.0.tgz",
        "integrity": "sha512-y8Px43oyiBM13Zc1z780FrfNLJCXTL40EWlty/LXUtcjykRBNgLlCjWXpfSPBl2iv+N7koQN+dvqszHZgT/Fjw==",
        "requires": {
          "abab": "^2.0.0",
          "acorn": "^5.5.3",
          "acorn-globals": "^4.1.0",
          "array-equal": "^1.0.0",
          "cssom": ">= 0.3.2 < 0.4.0",
          "cssstyle": "^1.0.0",
          "data-urls": "^1.0.0",
          "domexception": "^1.0.1",
          "escodegen": "^1.9.1",
          "html-encoding-sniffer": "^1.0.2",
          "left-pad": "^1.3.0",
          "nwsapi": "^2.0.7",
          "parse5": "4.0.0",
          "pn": "^1.1.0",
          "request": "^2.87.0",
          "request-promise-native": "^1.0.5",
          "sax": "^1.2.4",
          "symbol-tree": "^3.2.2",
          "tough-cookie": "^2.3.4",
          "w3c-hr-time": "^1.0.1",
          "webidl-conversions": "^4.0.2",
          "whatwg-encoding": "^1.0.3",
          "whatwg-mimetype": "^2.1.0",
          "whatwg-url": "^6.4.1",
          "ws": "^5.2.0",
          "xml-name-validator": "^3.0.0"
        },
        "dependencies": {
          "acorn": {
            "version": "5.7.4",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-5.7.4.tgz",
            "integrity": "sha512-1D++VG7BhrtvQpNbBzovKNc1FLGGEE/oGe7b9xJm/RFHMBeUaUGpluV9RLjZa47YFdPcDAenEYuq9pQPcMdLJg=="
          }
        }
      },
      "jsesc": {
        "version": "0.5.0",
        "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
        "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0="
      },
      "json-parse-better-errors": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
        "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw=="
      },
      "json-schema": {
        "version": "0.2.3",
        "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
        "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM="
      },
      "json-schema-traverse": {
        "version": "0.4.1",
        "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
        "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=="
      },
      "json-stable-stringify": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/json-stable-stringify/-/json-stable-stringify-1.0.1.tgz",
        "integrity": "sha1-mnWdOcXy/1A/1TAGRu1EX4jE+a8=",
        "requires": {
          "jsonify": "~0.0.0"
        }
      },
      "json-stable-stringify-without-jsonify": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
        "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE="
      },
      "json-stringify-safe": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
        "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus="
      },
      "json3": {
        "version": "3.3.3",
        "resolved": "https://registry.npmjs.org/json3/-/json3-3.3.3.tgz",
        "integrity": "sha512-c7/8mbUsKigAbLkD5B010BK4D9LZm7A1pNItkEwiUZRpIN66exu/e7YQWysGun+TRKaJp8MhemM+VkfWv42aCA=="
      },
      "json5": {
        "version": "2.1.3",
        "resolved": "https://registry.npmjs.org/json5/-/json5-2.1.3.tgz",
        "integrity": "sha512-KXPvOm8K9IJKFM0bmdn8QXh7udDh1g/giieX0NLCaMnb4hEiVFqnop2ImTXCc5e0/oHz3LTqmHGtExn5hfMkOA==",
        "requires": {
          "minimist": "^1.2.5"
        }
      },
      "jsonfile": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
        "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
        "requires": {
          "graceful-fs": "^4.1.6"
        }
      },
      "jsonify": {
        "version": "0.0.0",
        "resolved": "https://registry.npmjs.org/jsonify/-/jsonify-0.0.0.tgz",
        "integrity": "sha1-LHS27kHZPKUbe1qu6PUDYx0lKnM="
      },
      "jsprim": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
        "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
        "requires": {
          "assert-plus": "1.0.0",
          "extsprintf": "1.3.0",
          "json-schema": "0.2.3",
          "verror": "1.10.0"
        }
      },
      "jsx-ast-utils": {
        "version": "2.2.3",
        "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-2.2.3.tgz",
        "integrity": "sha512-EdIHFMm+1BPynpKOpdPqiOsvnIrInRGJD7bzPZdPkjitQEqpdpUuFpq4T0npZFKTiB3RhWFdGN+oqOJIdhDhQA==",
        "requires": {
          "array-includes": "^3.0.3",
          "object.assign": "^4.1.0"
        }
      },
      "killable": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/killable/-/killable-1.0.1.tgz",
        "integrity": "sha512-LzqtLKlUwirEUyl/nicirVmNiPvYs7l5n8wOPP7fyJVpUPkvCnW/vuiXGpylGUlnPDnB7311rARzAt3Mhswpjg=="
      },
      "kind-of": {
        "version": "3.2.2",
        "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
        "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
        "requires": {
          "is-buffer": "^1.1.5"
        }
      },
      "kleur": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
        "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w=="
      },
      "last-call-webpack-plugin": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/last-call-webpack-plugin/-/last-call-webpack-plugin-3.0.0.tgz",
        "integrity": "sha512-7KI2l2GIZa9p2spzPIVZBYyNKkN+e/SQPpnjlTiPhdbDW3F86tdKKELxKpzJ5sgU19wQWsACULZmpTPYHeWO5w==",
        "requires": {
          "lodash": "^4.17.5",
          "webpack-sources": "^1.1.0"
        }
      },
      "lazy-cache": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/lazy-cache/-/lazy-cache-1.0.4.tgz",
        "integrity": "sha1-odePw6UEdMuAhF07O24dpJpEbo4="
      },
      "lcid": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/lcid/-/lcid-2.0.0.tgz",
        "integrity": "sha512-avPEb8P8EGnwXKClwsNUgryVjllcRqtMYa49NTsbQagYuT1DcXnl1915oxWjoyGrXR6zH/Y0Zc96xWsPcoDKeA==",
        "requires": {
          "invert-kv": "^2.0.0"
        }
      },
      "left-pad": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/left-pad/-/left-pad-1.3.0.tgz",
        "integrity": "sha512-XI5MPzVNApjAyhQzphX8BkmKsKUxD4LdyK24iZeQGinBN9yTQT3bFlCBy/aVx2HrNcqQGsdot8ghrjyrvMCoEA=="
      },
      "leven": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
        "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A=="
      },
      "levenary": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/levenary/-/levenary-1.1.1.tgz",
        "integrity": "sha512-mkAdOIt79FD6irqjYSs4rdbnlT5vRonMEvBVPVb3XmevfS8kgRXwfes0dhPdEtzTWD/1eNE/Bm/G1iRt6DcnQQ==",
        "requires": {
          "leven": "^3.1.0"
        }
      },
      "levn": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
        "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
        "requires": {
          "prelude-ls": "~1.1.2",
          "type-check": "~0.3.2"
        }
      },
      "lines-and-columns": {
        "version": "1.1.6",
        "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.1.6.tgz",
        "integrity": "sha1-HADHQ7QzzQpOgHWPe2SldEDZ/wA="
      },
      "load-json-file": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
        "integrity": "sha1-L19Fq5HjMhYjT9U62rZo607AmTs=",
        "requires": {
          "graceful-fs": "^4.1.2",
          "parse-json": "^4.0.0",
          "pify": "^3.0.0",
          "strip-bom": "^3.0.0"
        }
      },
      "loader-fs-cache": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/loader-fs-cache/-/loader-fs-cache-1.0.3.tgz",
        "integrity": "sha512-ldcgZpjNJj71n+2Mf6yetz+c9bM4xpKtNds4LbqXzU/PTdeAX0g3ytnU1AJMEcTk2Lex4Smpe3Q/eCTsvUBxbA==",
        "requires": {
          "find-cache-dir": "^0.1.1",
          "mkdirp": "^0.5.1"
        },
        "dependencies": {
          "find-cache-dir": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-0.1.1.tgz",
            "integrity": "sha1-yN765XyKUqinhPnjHFfHQumToLk=",
            "requires": {
              "commondir": "^1.0.1",
              "mkdirp": "^0.5.1",
              "pkg-dir": "^1.0.0"
            }
          },
          "find-up": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
            "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
            "requires": {
              "path-exists": "^2.0.0",
              "pinkie-promise": "^2.0.0"
            }
          },
          "path-exists": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
            "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
            "requires": {
              "pinkie-promise": "^2.0.0"
            }
          },
          "pkg-dir": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-1.0.0.tgz",
            "integrity": "sha1-ektQio1bstYp1EcFb/TpyTFM89Q=",
            "requires": {
              "find-up": "^1.0.0"
            }
          }
        }
      },
      "loader-runner": {
        "version": "2.4.0",
        "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-2.4.0.tgz",
        "integrity": "sha512-Jsmr89RcXGIwivFY21FcRrisYZfvLMTWx5kOLc+JTxtpBOG6xML0vzbc6SEQG2FO9/4Fc3wW4LVcB5DmGflaRw=="
      },
      "loader-utils": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.4.0.tgz",
        "integrity": "sha512-qH0WSMBtn/oHuwjy/NucEgbx5dbxxnxup9s4PVXJUDHZBQY+s0NWA9rJf53RBnQZxfch7euUui7hpoAPvALZdA==",
        "requires": {
          "big.js": "^5.2.2",
          "emojis-list": "^3.0.0",
          "json5": "^1.0.1"
        },
        "dependencies": {
          "json5": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
            "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
            "requires": {
              "minimist": "^1.2.0"
            }
          }
        }
      },
      "locate-path": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
        "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
        "requires": {
          "p-locate": "^2.0.0",
          "path-exists": "^3.0.0"
        }
      },
      "lodash": {
        "version": "4.17.15",
        "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz",
        "integrity": "sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A=="
      },
      "lodash._reinterpolate": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/lodash._reinterpolate/-/lodash._reinterpolate-3.0.0.tgz",
        "integrity": "sha1-DM8tiRZq8Ds2Y8eWU4t1rG4RTZ0="
      },
      "lodash.memoize": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/lodash.memoize/-/lodash.memoize-4.1.2.tgz",
        "integrity": "sha1-vMbEmkKihA7Zl/Mj6tpezRguC/4="
      },
      "lodash.sortby": {
        "version": "4.7.0",
        "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
        "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg="
      },
      "lodash.template": {
        "version": "4.5.0",
        "resolved": "https://registry.npmjs.org/lodash.template/-/lodash.template-4.5.0.tgz",
        "integrity": "sha512-84vYFxIkmidUiFxidA/KjjH9pAycqW+h980j7Fuz5qxRtO9pgB7MDFTdys1N7A5mcucRiDyEq4fusljItR1T/A==",
        "requires": {
          "lodash._reinterpolate": "^3.0.0",
          "lodash.templatesettings": "^4.0.0"
        }
      },
      "lodash.templatesettings": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/lodash.templatesettings/-/lodash.templatesettings-4.2.0.tgz",
        "integrity": "sha512-stgLz+i3Aa9mZgnjr/O+v9ruKZsPsndy7qPZOchbqk2cnTU1ZaldKK+v7m54WoKIyxiuMZTKT2H81F8BeAc3ZQ==",
        "requires": {
          "lodash._reinterpolate": "^3.0.0"
        }
      },
      "lodash.uniq": {
        "version": "4.5.0",
        "resolved": "https://registry.npmjs.org/lodash.uniq/-/lodash.uniq-4.5.0.tgz",
        "integrity": "sha1-0CJTc662Uq3BvILklFM5qEJ1R3M="
      },
      "loglevel": {
        "version": "1.6.7",
        "resolved": "https://registry.npmjs.org/loglevel/-/loglevel-1.6.7.tgz",
        "integrity": "sha512-cY2eLFrQSAfVPhCgH1s7JI73tMbg9YC3v3+ZHVW67sBS7UxWzNEk/ZBbSfLykBWHp33dqqtOv82gjhKEi81T/A=="
      },
      "loose-envify": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
        "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
        "requires": {
          "js-tokens": "^3.0.0 || ^4.0.0"
        }
      },
      "lower-case": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/lower-case/-/lower-case-2.0.1.tgz",
        "integrity": "sha512-LiWgfDLLb1dwbFQZsSglpRj+1ctGnayXz3Uv0/WO8n558JycT5fg6zkNcnW0G68Nn0aEldTFeEfmjCfmqry/rQ==",
        "requires": {
          "tslib": "^1.10.0"
        }
      },
      "lru-cache": {
        "version": "5.1.1",
        "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
        "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
        "requires": {
          "yallist": "^3.0.2"
        },
        "dependencies": {
          "yallist": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
            "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
          }
        }
      },
      "make-dir": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
        "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
        "requires": {
          "pify": "^4.0.1",
          "semver": "^5.6.0"
        },
        "dependencies": {
          "pify": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
            "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g=="
          },
          "semver": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
          }
        }
      },
      "makeerror": {
        "version": "1.0.11",
        "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.11.tgz",
        "integrity": "sha1-4BpckQnyr3lmDk6LlYd5AYT1qWw=",
        "requires": {
          "tmpl": "1.0.x"
        }
      },
      "mamacro": {
        "version": "0.0.3",
        "resolved": "https://registry.npmjs.org/mamacro/-/mamacro-0.0.3.tgz",
        "integrity": "sha512-qMEwh+UujcQ+kbz3T6V+wAmO2U8veoq2w+3wY8MquqwVA3jChfwY+Tk52GZKDfACEPjuZ7r2oJLejwpt8jtwTA=="
      },
      "map-age-cleaner": {
        "version": "0.1.3",
        "resolved": "https://registry.npmjs.org/map-age-cleaner/-/map-age-cleaner-0.1.3.tgz",
        "integrity": "sha512-bJzx6nMoP6PDLPBFmg7+xRKeFZvFboMrGlxmNj9ClvX53KrmvM5bXFXEWjbz4cz1AFn+jWJ9z/DJSz7hrs0w3w==",
        "requires": {
          "p-defer": "^1.0.0"
        }
      },
      "map-cache": {
        "version": "0.2.2",
        "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
        "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8="
      },
      "map-visit": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
        "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
        "requires": {
          "object-visit": "^1.0.0"
        }
      },
      "md5.js": {
        "version": "1.3.5",
        "resolved": "https://registry.npmjs.org/md5.js/-/md5.js-1.3.5.tgz",
        "integrity": "sha512-xitP+WxNPcTTOgnTJcrhM0xvdPepipPSf3I8EIpGKeFLjt3PlJLIDG3u8EX53ZIubkb+5U2+3rELYpEhHhzdkg==",
        "requires": {
          "hash-base": "^3.0.0",
          "inherits": "^2.0.1",
          "safe-buffer": "^5.1.2"
        }
      },
      "mdn-data": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.4.tgz",
        "integrity": "sha512-iV3XNKw06j5Q7mi6h+9vbx23Tv7JkjEVgKHW4pimwyDGWm0OIQntJJ+u1C6mg6mK1EaTv42XQ7w76yuzH7M2cA=="
      },
      "media-typer": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
        "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
      },
      "mem": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/mem/-/mem-4.3.0.tgz",
        "integrity": "sha512-qX2bG48pTqYRVmDB37rn/6PT7LcR8T7oAX3bf99u1Tt1nzxYfxkgqDwUwolPlXweM0XzBOBFzSx4kfp7KP1s/w==",
        "requires": {
          "map-age-cleaner": "^0.1.1",
          "mimic-fn": "^2.0.0",
          "p-is-promise": "^2.0.0"
        }
      },
      "memory-fs": {
        "version": "0.4.1",
        "resolved": "https://registry.npmjs.org/memory-fs/-/memory-fs-0.4.1.tgz",
        "integrity": "sha1-OpoguEYlI+RHz7x+i7gO1me/xVI=",
        "requires": {
          "errno": "^0.1.3",
          "readable-stream": "^2.0.1"
        },
        "dependencies": {
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "merge-deep": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/merge-deep/-/merge-deep-3.0.2.tgz",
        "integrity": "sha512-T7qC8kg4Zoti1cFd8Cr0M+qaZfOwjlPDEdZIIPPB2JZctjaPM4fX+i7HOId69tAti2fvO6X5ldfYUONDODsrkA==",
        "requires": {
          "arr-union": "^3.1.0",
          "clone-deep": "^0.2.4",
          "kind-of": "^3.0.2"
        }
      },
      "merge-descriptors": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
        "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
      },
      "merge-stream": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
        "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w=="
      },
      "merge2": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.3.0.tgz",
        "integrity": "sha512-2j4DAdlBOkiSZIsaXk4mTE3sRS02yBHAtfy127xRV3bQUFqXkjHCHLW6Scv7DwNRbIWNHH8zpnz9zMaKXIdvYw=="
      },
      "methods": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
        "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
      },
      "microevent.ts": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/microevent.ts/-/microevent.ts-0.1.1.tgz",
        "integrity": "sha512-jo1OfR4TaEwd5HOrt5+tAZ9mqT4jmpNAusXtyfNzqVm9uiSYFZlKM1wYL4oU7azZW/PxQW53wM0S6OR1JHNa2g=="
      },
      "micromatch": {
        "version": "3.1.10",
        "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
        "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
        "requires": {
          "arr-diff": "^4.0.0",
          "array-unique": "^0.3.2",
          "braces": "^2.3.1",
          "define-property": "^2.0.2",
          "extend-shallow": "^3.0.2",
          "extglob": "^2.0.4",
          "fragment-cache": "^0.2.1",
          "kind-of": "^6.0.2",
          "nanomatch": "^1.2.9",
          "object.pick": "^1.3.0",
          "regex-not": "^1.0.0",
          "snapdragon": "^0.8.1",
          "to-regex": "^3.0.2"
        },
        "dependencies": {
          "kind-of": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
            "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
          }
        }
      },
      "miller-rabin": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/miller-rabin/-/miller-rabin-4.0.1.tgz",
        "integrity": "sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==",
        "requires": {
          "bn.js": "^4.0.0",
          "brorand": "^1.0.1"
        }
      },
      "mime": {
        "version": "2.4.4",
        "resolved": "https://registry.npmjs.org/mime/-/mime-2.4.4.tgz",
        "integrity": "sha512-LRxmNwziLPT828z+4YkNzloCFC2YM4wrB99k+AV5ZbEyfGNWfG8SO1FUXLmLDBSo89NrJZ4DIWeLjy1CHGhMGA=="
      },
      "mime-db": {
        "version": "1.43.0",
        "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.43.0.tgz",
        "integrity": "sha512-+5dsGEEovYbT8UY9yD7eE4XTc4UwJ1jBYlgaQQF38ENsKR3wj/8q8RFZrF9WIZpB2V1ArTVFUva8sAul1NzRzQ=="
      },
      "mime-types": {
        "version": "2.1.26",
        "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.26.tgz",
        "integrity": "sha512-01paPWYgLrkqAyrlDorC1uDwl2p3qZT7yl806vW7DvDoxwXi46jsjFbg+WdwotBIk6/MbEhO/dh5aZ5sNj/dWQ==",
        "requires": {
          "mime-db": "1.43.0"
        }
      },
      "mimic-fn": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
        "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="
      },
      "min-indent": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/min-indent/-/min-indent-1.0.0.tgz",
        "integrity": "sha1-z8RcN+nsDY8KDsPdTvf3w6vjklY="
      },
      "mini-css-extract-plugin": {
        "version": "0.9.0",
        "resolved": "https://registry.npmjs.org/mini-css-extract-plugin/-/mini-css-extract-plugin-0.9.0.tgz",
        "integrity": "sha512-lp3GeY7ygcgAmVIcRPBVhIkf8Us7FZjA+ILpal44qLdSu11wmjKQ3d9k15lfD7pO4esu9eUIAW7qiYIBppv40A==",
        "requires": {
          "loader-utils": "^1.1.0",
          "normalize-url": "1.9.1",
          "schema-utils": "^1.0.0",
          "webpack-sources": "^1.1.0"
        },
        "dependencies": {
          "schema-utils": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
            "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
            "requires": {
              "ajv": "^6.1.0",
              "ajv-errors": "^1.0.0",
              "ajv-keywords": "^3.1.0"
            }
          }
        }
      },
      "minimalistic-assert": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
        "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A=="
      },
      "minimalistic-crypto-utils": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/minimalistic-crypto-utils/-/minimalistic-crypto-utils-1.0.1.tgz",
        "integrity": "sha1-9sAMHAsIIkblxNmd+4x8CDsrWCo="
      },
      "minimatch": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
        "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
        "requires": {
          "brace-expansion": "^1.1.7"
        }
      },
      "minimist": {
        "version": "1.2.5",
        "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
        "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
      },
      "minipass": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.1.tgz",
        "integrity": "sha512-UFqVihv6PQgwj8/yTGvl9kPz7xIAY+R5z6XYjRInD3Gk3qx6QGSD6zEcpeG4Dy/lQnv1J6zv8ejV90hyYIKf3w==",
        "requires": {
          "yallist": "^4.0.0"
        }
      },
      "minipass-collect": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-1.0.2.tgz",
        "integrity": "sha512-6T6lH0H8OG9kITm/Jm6tdooIbogG9e0tLgpY6mphXSm/A9u8Nq1ryBG+Qspiub9LjWlBPsPS3tWQ/Botq4FdxA==",
        "requires": {
          "minipass": "^3.0.0"
        }
      },
      "minipass-flush": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/minipass-flush/-/minipass-flush-1.0.5.tgz",
        "integrity": "sha512-JmQSYYpPUqX5Jyn1mXaRwOda1uQ8HP5KAT/oDSLCzt1BYRhQU0/hDtsB1ufZfEEzMZ9aAVmsBw8+FWsIXlClWw==",
        "requires": {
          "minipass": "^3.0.0"
        }
      },
      "minipass-pipeline": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.2.tgz",
        "integrity": "sha512-3JS5A2DKhD2g0Gg8x3yamO0pj7YeKGwVlDS90pF++kxptwx/F+B//roxf9SqYil5tQo65bijy+dAuAFZmYOouA==",
        "requires": {
          "minipass": "^3.0.0"
        }
      },
      "mississippi": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/mississippi/-/mississippi-3.0.0.tgz",
        "integrity": "sha512-x471SsVjUtBRtcvd4BzKE9kFC+/2TeWgKCgw0bZcw1b9l2X3QX5vCWgF+KaZaYm87Ss//rHnWryupDrgLvmSkA==",
        "requires": {
          "concat-stream": "^1.5.0",
          "duplexify": "^3.4.2",
          "end-of-stream": "^1.1.0",
          "flush-write-stream": "^1.0.0",
          "from2": "^2.1.0",
          "parallel-transform": "^1.1.0",
          "pump": "^3.0.0",
          "pumpify": "^1.3.3",
          "stream-each": "^1.1.0",
          "through2": "^2.0.0"
        }
      },
      "mixin-deep": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
        "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
        "requires": {
          "for-in": "^1.0.2",
          "is-extendable": "^1.0.1"
        },
        "dependencies": {
          "is-extendable": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
            "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
            "requires": {
              "is-plain-object": "^2.0.4"
            }
          }
        }
      },
      "mixin-object": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/mixin-object/-/mixin-object-2.0.1.tgz",
        "integrity": "sha1-T7lJRB2rGCVA8f4DW6YOGUel5X4=",
        "requires": {
          "for-in": "^0.1.3",
          "is-extendable": "^0.1.1"
        },
        "dependencies": {
          "for-in": {
            "version": "0.1.8",
            "resolved": "https://registry.npmjs.org/for-in/-/for-in-0.1.8.tgz",
            "integrity": "sha1-2Hc5COMSVhCZUrH9ubP6hn0ndeE="
          }
        }
      },
      "mkdirp": {
        "version": "0.5.5",
        "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
        "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
        "requires": {
          "minimist": "^1.2.5"
        }
      },
      "move-concurrently": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/move-concurrently/-/move-concurrently-1.0.1.tgz",
        "integrity": "sha1-viwAX9oy4LKa8fBdfEszIUxwH5I=",
        "requires": {
          "aproba": "^1.1.1",
          "copy-concurrently": "^1.0.0",
          "fs-write-stream-atomic": "^1.0.8",
          "mkdirp": "^0.5.1",
          "rimraf": "^2.5.4",
          "run-queue": "^1.0.3"
        }
      },
      "ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
      },
      "multicast-dns": {
        "version": "6.2.3",
        "resolved": "https://registry.npmjs.org/multicast-dns/-/multicast-dns-6.2.3.tgz",
        "integrity": "sha512-ji6J5enbMyGRHIAkAOu3WdV8nggqviKCEKtXcOqfphZZtQrmHKycfynJ2V7eVPUA4NhJ6V7Wf4TmGbTwKE9B6g==",
        "requires": {
          "dns-packet": "^1.3.1",
          "thunky": "^1.0.2"
        }
      },
      "multicast-dns-service-types": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/multicast-dns-service-types/-/multicast-dns-service-types-1.1.0.tgz",
        "integrity": "sha1-iZ8R2WhuXgXLkbNdXw5jt3PPyQE="
      },
      "mute-stream": {
        "version": "0.0.8",
        "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.8.tgz",
        "integrity": "sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA=="
      },
      "nanomatch": {
        "version": "1.2.13",
        "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
        "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
        "requires": {
          "arr-diff": "^4.0.0",
          "array-unique": "^0.3.2",
          "define-property": "^2.0.2",
          "extend-shallow": "^3.0.2",
          "fragment-cache": "^0.2.1",
          "is-windows": "^1.0.2",
          "kind-of": "^6.0.2",
          "object.pick": "^1.3.0",
          "regex-not": "^1.0.0",
          "snapdragon": "^0.8.1",
          "to-regex": "^3.0.1"
        },
        "dependencies": {
          "kind-of": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
            "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
          }
        }
      },
      "natural-compare": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
        "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc="
      },
      "negotiator": {
        "version": "0.6.2",
        "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
        "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
      },
      "neo-async": {
        "version": "2.6.1",
        "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.1.tgz",
        "integrity": "sha512-iyam8fBuCUpWeKPGpaNMetEocMt364qkCsfL9JuhjXX6dRnguRVOfk2GZaDpPjcOKiiXCPINZC1GczQ7iTq3Zw=="
      },
      "next-tick": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/next-tick/-/next-tick-1.0.0.tgz",
        "integrity": "sha1-yobR/ogoFpsBICCOPchCS524NCw="
      },
      "nice-try": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
        "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ=="
      },
      "no-case": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/no-case/-/no-case-3.0.3.tgz",
        "integrity": "sha512-ehY/mVQCf9BL0gKfsJBvFJen+1V//U+0HQMPrWct40ixE4jnv0bfvxDbWtAHL9EcaPEOJHVVYKoQn1TlZUB8Tw==",
        "requires": {
          "lower-case": "^2.0.1",
          "tslib": "^1.10.0"
        }
      },
      "node-forge": {
        "version": "0.9.0",
        "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-0.9.0.tgz",
        "integrity": "sha512-7ASaDa3pD+lJ3WvXFsxekJQelBKRpne+GOVbLbtHYdd7pFspyeuJHnWfLplGf3SwKGbfs/aYl5V/JCIaHVUKKQ=="
      },
      "node-int64": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
        "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs="
      },
      "node-libs-browser": {
        "version": "2.2.1",
        "resolved": "https://registry.npmjs.org/node-libs-browser/-/node-libs-browser-2.2.1.tgz",
        "integrity": "sha512-h/zcD8H9kaDZ9ALUWwlBUDo6TKF8a7qBSCSEGfjTVIYeqsioSKaAX+BN7NgiMGp6iSIXZ3PxgCu8KS3b71YK5Q==",
        "requires": {
          "assert": "^1.1.1",
          "browserify-zlib": "^0.2.0",
          "buffer": "^4.3.0",
          "console-browserify": "^1.1.0",
          "constants-browserify": "^1.0.0",
          "crypto-browserify": "^3.11.0",
          "domain-browser": "^1.1.1",
          "events": "^3.0.0",
          "https-browserify": "^1.0.0",
          "os-browserify": "^0.3.0",
          "path-browserify": "0.0.1",
          "process": "^0.11.10",
          "punycode": "^1.2.4",
          "querystring-es3": "^0.2.0",
          "readable-stream": "^2.3.3",
          "stream-browserify": "^2.0.1",
          "stream-http": "^2.7.2",
          "string_decoder": "^1.0.0",
          "timers-browserify": "^2.0.4",
          "tty-browserify": "0.0.0",
          "url": "^0.11.0",
          "util": "^0.11.0",
          "vm-browserify": "^1.0.1"
        },
        "dependencies": {
          "punycode": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
            "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4="
          },
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            },
            "dependencies": {
              "string_decoder": {
                "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
                "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
                "requires": {
                  "safe-buffer": "~5.1.0"
                }
              }
            }
          },
          "util": {
            "version": "0.11.1",
            "resolved": "https://registry.npmjs.org/util/-/util-0.11.1.tgz",
            "integrity": "sha512-HShAsny+zS2TZfaXxD9tYj4HQGlBezXZMZuM/S5PKLLoZkShZiGk9o5CzukI1LVHZvjdvZ2Sj1aW/Ndn2NB/HQ==",
            "requires": {
              "inherits": "2.0.3"
            },
            "dependencies": {
              "inherits": {
                "version": "2.0.3",
                "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
                "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
              }
            }
          }
        }
      },
      "node-modules-regexp": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
        "integrity": "sha1-jZ2+KJZKSsVxLpExZCEHxx6Q7EA="
      },
      "node-notifier": {
        "version": "5.4.3",
        "resolved": "https://registry.npmjs.org/node-notifier/-/node-notifier-5.4.3.tgz",
        "integrity": "sha512-M4UBGcs4jeOK9CjTsYwkvH6/MzuUmGCyTW+kCY7uO+1ZVr0+FHGdPdIf5CCLqAaxnRrWidyoQlNkMIIVwbKB8Q==",
        "requires": {
          "growly": "^1.3.0",
          "is-wsl": "^1.1.0",
          "semver": "^5.5.0",
          "shellwords": "^0.1.1",
          "which": "^1.3.0"
        },
        "dependencies": {
          "semver": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
          }
        }
      },
      "node-releases": {
        "version": "1.1.53",
        "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.53.tgz",
        "integrity": "sha512-wp8zyQVwef2hpZ/dJH7SfSrIPD6YoJz6BDQDpGEkcA0s3LpAQoxBIYmfIq6QAhC1DhwsyCgTaTTcONwX8qzCuQ=="
      },
      "normalize-package-data": {
        "version": "2.5.0",
        "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
        "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
        "requires": {
          "hosted-git-info": "^2.1.4",
          "resolve": "^1.10.0",
          "semver": "2 || 3 || 4 || 5",
          "validate-npm-package-license": "^3.0.1"
        },
        "dependencies": {
          "semver": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
          }
        }
      },
      "normalize-path": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
        "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
        "requires": {
          "remove-trailing-separator": "^1.0.1"
        }
      },
      "normalize-range": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
        "integrity": "sha1-LRDAa9/TEuqXd2laTShDlFa3WUI="
      },
      "normalize-url": {
        "version": "1.9.1",
        "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-1.9.1.tgz",
        "integrity": "sha1-LMDWazHqIwNkWENuNiDYWVTGbDw=",
        "requires": {
          "object-assign": "^4.0.1",
          "prepend-http": "^1.0.0",
          "query-string": "^4.1.0",
          "sort-keys": "^1.0.0"
        }
      },
      "npm-run-path": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
        "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
        "requires": {
          "path-key": "^2.0.0"
        }
      },
      "nth-check": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.2.tgz",
        "integrity": "sha512-WeBOdju8SnzPN5vTUJYxYUxLeXpCaVP5i5e0LF8fg7WORF2Wd7wFX/pk0tYZk7s8T+J7VLy0Da6J1+wCT0AtHg==",
        "requires": {
          "boolbase": "~1.0.0"
        }
      },
      "num2fraction": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/num2fraction/-/num2fraction-1.2.2.tgz",
        "integrity": "sha1-b2gragJ6Tp3fpFZM0lidHU5mnt4="
      },
      "number-is-nan": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
        "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
      },
      "nwsapi": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
        "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ=="
      },
      "oauth-sign": {
        "version": "0.9.0",
        "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
        "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ=="
      },
      "object-assign": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
        "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
      },
      "object-copy": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
        "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
        "requires": {
          "copy-descriptor": "^0.1.0",
          "define-property": "^0.2.5",
          "kind-of": "^3.0.3"
        },
        "dependencies": {
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          }
        }
      },
      "object-hash": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-2.0.3.tgz",
        "integrity": "sha512-JPKn0GMu+Fa3zt3Bmr66JhokJU5BaNBIh4ZeTlaCBzrBsOeXzwcKKAK1tbLiPKgvwmPXsDvvLHoWh5Bm7ofIYg=="
      },
      "object-inspect": {
        "version": "1.7.0",
        "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.7.0.tgz",
        "integrity": "sha512-a7pEHdh1xKIAgTySUGgLMx/xwDZskN1Ud6egYYN3EdRW4ZMPNEDUTF+hwy2LUC+Bl+SyLXANnwz/jyh/qutKUw=="
      },
      "object-is": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/object-is/-/object-is-1.0.2.tgz",
        "integrity": "sha512-Epah+btZd5wrrfjkJZq1AOB9O6OxUQto45hzFd7lXGrpHPGE0W1k+426yrZV+k6NJOzLNNW/nVsmZdIWsAqoOQ=="
      },
      "object-keys": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
        "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA=="
      },
      "object-path": {
        "version": "0.11.4",
        "resolved": "https://registry.npmjs.org/object-path/-/object-path-0.11.4.tgz",
        "integrity": "sha1-NwrnUvvzfePqcKhhwju6iRVpGUk="
      },
      "object-visit": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
        "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
        "requires": {
          "isobject": "^3.0.0"
        }
      },
      "object.assign": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.0.tgz",
        "integrity": "sha512-exHJeq6kBKj58mqGyTQ9DFvrZC/eR6OwxzoM9YRoGBqrXYonaFyGiFMuc9VZrXf7DarreEwMpurG3dd+CNyW5w==",
        "requires": {
          "define-properties": "^1.1.2",
          "function-bind": "^1.1.1",
          "has-symbols": "^1.0.0",
          "object-keys": "^1.0.11"
        }
      },
      "object.entries": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.1.tgz",
        "integrity": "sha512-ilqR7BgdyZetJutmDPfXCDffGa0/Yzl2ivVNpbx/g4UeWrCdRnFDUBrKJGLhGieRHDATnyZXWBeCb29k9CJysQ==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.0-next.1",
          "function-bind": "^1.1.1",
          "has": "^1.0.3"
        }
      },
      "object.fromentries": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.2.tgz",
        "integrity": "sha512-r3ZiBH7MQppDJVLx6fhD618GKNG40CZYH9wgwdhKxBDDbQgjeWGGd4AtkZad84d291YxvWe7bJGuE65Anh0dxQ==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.0-next.1",
          "function-bind": "^1.1.1",
          "has": "^1.0.3"
        }
      },
      "object.getownpropertydescriptors": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.0.tgz",
        "integrity": "sha512-Z53Oah9A3TdLoblT7VKJaTDdXdT+lQO+cNpKVnya5JDe9uLvzu1YyY1yFDFrcxrlRgWrEFH0jJtD/IbuwjcEVg==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.0-next.1"
        }
      },
      "object.pick": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
        "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
        "requires": {
          "isobject": "^3.0.1"
        }
      },
      "object.values": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.1.1.tgz",
        "integrity": "sha512-WTa54g2K8iu0kmS/us18jEmdv1a4Wi//BZ/DTVYEcH0XhLM5NYdpDHja3gt57VrZLcNAO2WGA+KpWsDBaHt6eA==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.0-next.1",
          "function-bind": "^1.1.1",
          "has": "^1.0.3"
        }
      },
      "obuf": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/obuf/-/obuf-1.1.2.tgz",
        "integrity": "sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg=="
      },
      "on-finished": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
        "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
        "requires": {
          "ee-first": "1.1.1"
        }
      },
      "on-headers": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
        "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA=="
      },
      "once": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
        "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
        "requires": {
          "wrappy": "1"
        }
      },
      "onetime": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.0.tgz",
        "integrity": "sha512-5NcSkPHhwTVFIQN+TUqXoS5+dlElHXdpAWu9I0HP20YOtIi+aZ0Ct82jdlILDxjLEAWwvm+qj1m6aEtsDVmm6Q==",
        "requires": {
          "mimic-fn": "^2.1.0"
        }
      },
      "open": {
        "version": "7.0.3",
        "resolved": "https://registry.npmjs.org/open/-/open-7.0.3.tgz",
        "integrity": "sha512-sP2ru2v0P290WFfv49Ap8MF6PkzGNnGlAwHweB4WR4mr5d2d0woiCluUeJ218w7/+PmoBy9JmYgD5A4mLcWOFA==",
        "requires": {
          "is-docker": "^2.0.0",
          "is-wsl": "^2.1.1"
        },
        "dependencies": {
          "is-wsl": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.1.1.tgz",
            "integrity": "sha512-umZHcSrwlDHo2TGMXv0DZ8dIUGunZ2Iv68YZnrmCiBPkZ4aaOhtv7pXJKeki9k3qJ3RJr0cDyitcl5wEH3AYog=="
          }
        }
      },
      "opn": {
        "version": "5.5.0",
        "resolved": "https://registry.npmjs.org/opn/-/opn-5.5.0.tgz",
        "integrity": "sha512-PqHpggC9bLV0VeWcdKhkpxY+3JTzetLSqTCWL/z/tFIbI6G8JCjondXklT1JinczLz2Xib62sSp0T/gKT4KksA==",
        "requires": {
          "is-wsl": "^1.1.0"
        }
      },
      "optimize-css-assets-webpack-plugin": {
        "version": "5.0.3",
        "resolved": "https://registry.npmjs.org/optimize-css-assets-webpack-plugin/-/optimize-css-assets-webpack-plugin-5.0.3.tgz",
        "integrity": "sha512-q9fbvCRS6EYtUKKSwI87qm2IxlyJK5b4dygW1rKUBT6mMDhdG5e5bZT63v6tnJR9F9FB/H5a0HTmtw+laUBxKA==",
        "requires": {
          "cssnano": "^4.1.10",
          "last-call-webpack-plugin": "^3.0.0"
        }
      },
      "optionator": {
        "version": "0.8.3",
        "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
        "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
        "requires": {
          "deep-is": "~0.1.3",
          "fast-levenshtein": "~2.0.6",
          "levn": "~0.3.0",
          "prelude-ls": "~1.1.2",
          "type-check": "~0.3.2",
          "word-wrap": "~1.2.3"
        }
      },
      "original": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/original/-/original-1.0.2.tgz",
        "integrity": "sha512-hyBVl6iqqUOJ8FqRe+l/gS8H+kKYjrEndd5Pm1MfBtsEKA038HkkdbAl/72EAXGyonD/PFsvmVG+EvcIpliMBg==",
        "requires": {
          "url-parse": "^1.4.3"
        }
      },
      "os-browserify": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/os-browserify/-/os-browserify-0.3.0.tgz",
        "integrity": "sha1-hUNzx/XCMVkU/Jv8a9gjj92h7Cc="
      },
      "os-locale": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-3.1.0.tgz",
        "integrity": "sha512-Z8l3R4wYWM40/52Z+S265okfFj8Kt2cC2MKY+xNi3kFs+XGI7WXu/I309QQQYbRW4ijiZ+yxs9pqEhJh0DqW3Q==",
        "requires": {
          "execa": "^1.0.0",
          "lcid": "^2.0.0",
          "mem": "^4.0.0"
        }
      },
      "os-tmpdir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
        "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
      },
      "p-defer": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/p-defer/-/p-defer-1.0.0.tgz",
        "integrity": "sha1-n26xgvbJqozXQwBKfU+WsZaw+ww="
      },
      "p-each-series": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/p-each-series/-/p-each-series-1.0.0.tgz",
        "integrity": "sha1-kw89Et0fUOdDRFeiLNbwSsatf3E=",
        "requires": {
          "p-reduce": "^1.0.0"
        }
      },
      "p-finally": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
        "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4="
      },
      "p-is-promise": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/p-is-promise/-/p-is-promise-2.1.0.tgz",
        "integrity": "sha512-Y3W0wlRPK8ZMRbNq97l4M5otioeA5lm1z7bkNkxCka8HSPjR0xRWmpCmc9utiaLP9Jb1eD8BgeIxTW4AIF45Pg=="
      },
      "p-limit": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
        "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
        "requires": {
          "p-try": "^1.0.0"
        }
      },
      "p-locate": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
        "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
        "requires": {
          "p-limit": "^1.1.0"
        }
      },
      "p-map": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/p-map/-/p-map-3.0.0.tgz",
        "integrity": "sha512-d3qXVTF/s+W+CdJ5A29wywV2n8CQQYahlgz2bFiA+4eVNJbHJodPZ+/gXwPGh0bOqA+j8S+6+ckmvLGPk1QpxQ==",
        "requires": {
          "aggregate-error": "^3.0.0"
        }
      },
      "p-reduce": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/p-reduce/-/p-reduce-1.0.0.tgz",
        "integrity": "sha1-GMKw3ZNqRpClKfgjH1ig/bakffo="
      },
      "p-retry": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/p-retry/-/p-retry-3.0.1.tgz",
        "integrity": "sha512-XE6G4+YTTkT2a0UWb2kjZe8xNwf8bIbnqpc/IS/idOBVhyves0mK5OJgeocjx7q5pvX/6m23xuzVPYT1uGM73w==",
        "requires": {
          "retry": "^0.12.0"
        }
      },
      "p-try": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
        "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M="
      },
      "pako": {
        "version": "1.0.11",
        "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
        "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw=="
      },
      "parallel-transform": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/parallel-transform/-/parallel-transform-1.2.0.tgz",
        "integrity": "sha512-P2vSmIu38uIlvdcU7fDkyrxj33gTUy/ABO5ZUbGowxNCopBq/OoD42bP4UmMrJoPyk4Uqf0mu3mtWBhHCZD8yg==",
        "requires": {
          "cyclist": "^1.0.1",
          "inherits": "^2.0.3",
          "readable-stream": "^2.1.5"
        },
        "dependencies": {
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "param-case": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/param-case/-/param-case-3.0.3.tgz",
        "integrity": "sha512-VWBVyimc1+QrzappRs7waeN2YmoZFCGXWASRYX1/rGHtXqEcrGEIDm+jqIwFa2fRXNgQEwrxaYuIrX0WcAguTA==",
        "requires": {
          "dot-case": "^3.0.3",
          "tslib": "^1.10.0"
        }
      },
      "parent-module": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
        "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
        "requires": {
          "callsites": "^3.0.0"
        },
        "dependencies": {
          "callsites": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
            "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="
          }
        }
      },
      "parse-asn1": {
        "version": "5.1.5",
        "resolved": "https://registry.npmjs.org/parse-asn1/-/parse-asn1-5.1.5.tgz",
        "integrity": "sha512-jkMYn1dcJqF6d5CpU689bq7w/b5ALS9ROVSpQDPrZsqqesUJii9qutvoT5ltGedNXMO2e16YUWIghG9KxaViTQ==",
        "requires": {
          "asn1.js": "^4.0.0",
          "browserify-aes": "^1.0.0",
          "create-hash": "^1.1.0",
          "evp_bytestokey": "^1.0.0",
          "pbkdf2": "^3.0.3",
          "safe-buffer": "^5.1.1"
        }
      },
      "parse-json": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
        "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
        "requires": {
          "error-ex": "^1.3.1",
          "json-parse-better-errors": "^1.0.1"
        }
      },
      "parse5": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/parse5/-/parse5-4.0.0.tgz",
        "integrity": "sha512-VrZ7eOd3T1Fk4XWNXMgiGBK/z0MG48BWG2uQNU4I72fkQuKUTZpl+u9k+CxEG0twMVzSmXEEz12z5Fnw1jIQFA=="
      },
      "parseurl": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
        "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
      },
      "pascal-case": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/pascal-case/-/pascal-case-3.1.1.tgz",
        "integrity": "sha512-XIeHKqIrsquVTQL2crjq3NfJUxmdLasn3TYOU0VBM+UX2a6ztAWBlJQBePLGY7VHW8+2dRadeIPK5+KImwTxQA==",
        "requires": {
          "no-case": "^3.0.3",
          "tslib": "^1.10.0"
        }
      },
      "pascalcase": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
        "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ="
      },
      "path-browserify": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-0.0.1.tgz",
        "integrity": "sha512-BapA40NHICOS+USX9SN4tyhq+A2RrN/Ws5F0Z5aMHDp98Fl86lX8Oti8B7uN93L4Ifv4fHOEA+pQw87gmMO/lQ=="
      },
      "path-dirname": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
        "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA="
      },
      "path-exists": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
        "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU="
      },
      "path-is-absolute": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
      },
      "path-is-inside": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/path-is-inside/-/path-is-inside-1.0.2.tgz",
        "integrity": "sha1-NlQX3t5EQw0cEa9hAn+s8HS9/FM="
      },
      "path-key": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
        "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A="
      },
      "path-parse": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
        "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw=="
      },
      "path-to-regexp": {
        "version": "0.1.7",
        "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
        "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
      },
      "path-type": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
        "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
        "requires": {
          "pify": "^3.0.0"
        }
      },
      "pbkdf2": {
        "version": "3.0.17",
        "resolved": "https://registry.npmjs.org/pbkdf2/-/pbkdf2-3.0.17.tgz",
        "integrity": "sha512-U/il5MsrZp7mGg3mSQfn742na2T+1/vHDCG5/iTI3X9MKUuYUZVLQhyRsg06mCgDBTd57TxzgZt7P+fYfjRLtA==",
        "requires": {
          "create-hash": "^1.1.2",
          "create-hmac": "^1.1.4",
          "ripemd160": "^2.0.1",
          "safe-buffer": "^5.0.1",
          "sha.js": "^2.4.8"
        }
      },
      "performance-now": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
        "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns="
      },
      "picomatch": {
        "version": "2.2.2",
        "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.2.tgz",
        "integrity": "sha512-q0M/9eZHzmr0AulXyPwNfZjtwZ/RBZlbN3K3CErVrk50T2ASYI7Bye0EvekFY3IP1Nt2DHu0re+V2ZHIpMkuWg=="
      },
      "pify": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
        "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY="
      },
      "pinkie": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
        "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA="
      },
      "pinkie-promise": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
        "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
        "requires": {
          "pinkie": "^2.0.0"
        }
      },
      "pirates": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.1.tgz",
        "integrity": "sha512-WuNqLTbMI3tmfef2TKxlQmAiLHKtFhlsCZnPIpuv2Ow0RDVO8lfy1Opf4NUzlMXLjPl+Men7AuVdX6TA+s+uGA==",
        "requires": {
          "node-modules-regexp": "^1.0.0"
        }
      },
      "pkg-dir": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
        "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
        "requires": {
          "find-up": "^3.0.0"
        },
        "dependencies": {
          "find-up": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
            "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
            "requires": {
              "locate-path": "^3.0.0"
            }
          },
          "locate-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
            "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
            "requires": {
              "p-locate": "^3.0.0",
              "path-exists": "^3.0.0"
            }
          },
          "p-limit": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
            "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
            "requires": {
              "p-try": "^2.0.0"
            }
          },
          "p-locate": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
            "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
            "requires": {
              "p-limit": "^2.0.0"
            }
          },
          "p-try": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
            "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
          }
        }
      },
      "pkg-up": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/pkg-up/-/pkg-up-2.0.0.tgz",
        "integrity": "sha1-yBmscoBZpGHKscOImivjxJoATX8=",
        "requires": {
          "find-up": "^2.1.0"
        }
      },
      "pn": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/pn/-/pn-1.1.0.tgz",
        "integrity": "sha512-2qHaIQr2VLRFoxe2nASzsV6ef4yOOH+Fi9FBOVH6cqeSgUnoyySPZkxzLuzd+RYOQTRpROA0ztTMqxROKSb/nA=="
      },
      "pnp-webpack-plugin": {
        "version": "1.6.4",
        "resolved": "https://registry.npmjs.org/pnp-webpack-plugin/-/pnp-webpack-plugin-1.6.4.tgz",
        "integrity": "sha512-7Wjy+9E3WwLOEL30D+m8TSTF7qJJUJLONBnwQp0518siuMxUQUbgZwssaFX+QKlZkjHZcw/IpZCt/H0srrntSg==",
        "requires": {
          "ts-pnp": "^1.1.6"
        }
      },
      "portfinder": {
        "version": "1.0.25",
        "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.25.tgz",
        "integrity": "sha512-6ElJnHBbxVA1XSLgBp7G1FiCkQdlqGzuF7DswL5tcea+E8UpuvPU7beVAjjRwCioTS9ZluNbu+ZyRvgTsmqEBg==",
        "requires": {
          "async": "^2.6.2",
          "debug": "^3.1.1",
          "mkdirp": "^0.5.1"
        },
        "dependencies": {
          "debug": {
            "version": "3.2.6",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
            "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
            "requires": {
              "ms": "^2.1.1"
            }
          }
        }
      },
      "posix-character-classes": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
        "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs="
      },
      "postcss": {
        "version": "7.0.27",
        "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.27.tgz",
        "integrity": "sha512-WuQETPMcW9Uf1/22HWUWP9lgsIC+KEHg2kozMflKjbeUtw9ujvFX6QmIfozaErDkmLWS9WEnEdEe6Uo9/BNTdQ==",
        "requires": {
          "chalk": "^2.4.2",
          "source-map": "^0.6.1",
          "supports-color": "^6.1.0"
        },
        "dependencies": {
          "supports-color": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
            "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
            "requires": {
              "has-flag": "^3.0.0"
            }
          }
        }
      },
      "postcss-attribute-case-insensitive": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-attribute-case-insensitive/-/postcss-attribute-case-insensitive-4.0.2.tgz",
        "integrity": "sha512-clkFxk/9pcdb4Vkn0hAHq3YnxBQ2p0CGD1dy24jN+reBck+EWxMbxSUqN4Yj7t0w8csl87K6p0gxBe1utkJsYA==",
        "requires": {
          "postcss": "^7.0.2",
          "postcss-selector-parser": "^6.0.2"
        }
      },
      "postcss-browser-comments": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/postcss-browser-comments/-/postcss-browser-comments-3.0.0.tgz",
        "integrity": "sha512-qfVjLfq7HFd2e0HW4s1dvU8X080OZdG46fFbIBFjW7US7YPDcWfRvdElvwMJr2LI6hMmD+7LnH2HcmXTs+uOig==",
        "requires": {
          "postcss": "^7"
        }
      },
      "postcss-calc": {
        "version": "7.0.2",
        "resolved": "https://registry.npmjs.org/postcss-calc/-/postcss-calc-7.0.2.tgz",
        "integrity": "sha512-rofZFHUg6ZIrvRwPeFktv06GdbDYLcGqh9EwiMutZg+a0oePCCw1zHOEiji6LCpyRcjTREtPASuUqeAvYlEVvQ==",
        "requires": {
          "postcss": "^7.0.27",
          "postcss-selector-parser": "^6.0.2",
          "postcss-value-parser": "^4.0.2"
        }
      },
      "postcss-color-functional-notation": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/postcss-color-functional-notation/-/postcss-color-functional-notation-2.0.1.tgz",
        "integrity": "sha512-ZBARCypjEDofW4P6IdPVTLhDNXPRn8T2s1zHbZidW6rPaaZvcnCS2soYFIQJrMZSxiePJ2XIYTlcb2ztr/eT2g==",
        "requires": {
          "postcss": "^7.0.2",
          "postcss-values-parser": "^2.0.0"
        }
      },
      "postcss-color-gray": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/postcss-color-gray/-/postcss-color-gray-5.0.0.tgz",
        "integrity": "sha512-q6BuRnAGKM/ZRpfDascZlIZPjvwsRye7UDNalqVz3s7GDxMtqPY6+Q871liNxsonUw8oC61OG+PSaysYpl1bnw==",
        "requires": {
          "@csstools/convert-colors": "^1.4.0",
          "postcss": "^7.0.5",
          "postcss-values-parser": "^2.0.0"
        }
      },
      "postcss-color-hex-alpha": {
        "version": "5.0.3",
        "resolved": "https://registry.npmjs.org/postcss-color-hex-alpha/-/postcss-color-hex-alpha-5.0.3.tgz",
        "integrity": "sha512-PF4GDel8q3kkreVXKLAGNpHKilXsZ6xuu+mOQMHWHLPNyjiUBOr75sp5ZKJfmv1MCus5/DWUGcK9hm6qHEnXYw==",
        "requires": {
          "postcss": "^7.0.14",
          "postcss-values-parser": "^2.0.1"
        }
      },
      "postcss-color-mod-function": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/postcss-color-mod-function/-/postcss-color-mod-function-3.0.3.tgz",
        "integrity": "sha512-YP4VG+xufxaVtzV6ZmhEtc+/aTXH3d0JLpnYfxqTvwZPbJhWqp8bSY3nfNzNRFLgB4XSaBA82OE4VjOOKpCdVQ==",
        "requires": {
          "@csstools/convert-colors": "^1.4.0",
          "postcss": "^7.0.2",
          "postcss-values-parser": "^2.0.0"
        }
      },
      "postcss-color-rebeccapurple": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-color-rebeccapurple/-/postcss-color-rebeccapurple-4.0.1.tgz",
        "integrity": "sha512-aAe3OhkS6qJXBbqzvZth2Au4V3KieR5sRQ4ptb2b2O8wgvB3SJBsdG+jsn2BZbbwekDG8nTfcCNKcSfe/lEy8g==",
        "requires": {
          "postcss": "^7.0.2",
          "postcss-values-parser": "^2.0.0"
        }
      },
      "postcss-colormin": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/postcss-colormin/-/postcss-colormin-4.0.3.tgz",
        "integrity": "sha512-WyQFAdDZpExQh32j0U0feWisZ0dmOtPl44qYmJKkq9xFWY3p+4qnRzCHeNrkeRhwPHz9bQ3mo0/yVkaply0MNw==",
        "requires": {
          "browserslist": "^4.0.0",
          "color": "^3.0.0",
          "has": "^1.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-convert-values": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-convert-values/-/postcss-convert-values-4.0.1.tgz",
        "integrity": "sha512-Kisdo1y77KUC0Jmn0OXU/COOJbzM8cImvw1ZFsBgBgMgb1iL23Zs/LXRe3r+EZqM3vGYKdQ2YJVQ5VkJI+zEJQ==",
        "requires": {
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-custom-media": {
        "version": "7.0.8",
        "resolved": "https://registry.npmjs.org/postcss-custom-media/-/postcss-custom-media-7.0.8.tgz",
        "integrity": "sha512-c9s5iX0Ge15o00HKbuRuTqNndsJUbaXdiNsksnVH8H4gdc+zbLzr/UasOwNG6CTDpLFekVY4672eWdiiWu2GUg==",
        "requires": {
          "postcss": "^7.0.14"
        }
      },
      "postcss-custom-properties": {
        "version": "8.0.11",
        "resolved": "https://registry.npmjs.org/postcss-custom-properties/-/postcss-custom-properties-8.0.11.tgz",
        "integrity": "sha512-nm+o0eLdYqdnJ5abAJeXp4CEU1c1k+eB2yMCvhgzsds/e0umabFrN6HoTy/8Q4K5ilxERdl/JD1LO5ANoYBeMA==",
        "requires": {
          "postcss": "^7.0.17",
          "postcss-values-parser": "^2.0.1"
        }
      },
      "postcss-custom-selectors": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/postcss-custom-selectors/-/postcss-custom-selectors-5.1.2.tgz",
        "integrity": "sha512-DSGDhqinCqXqlS4R7KGxL1OSycd1lydugJ1ky4iRXPHdBRiozyMHrdu0H3o7qNOCiZwySZTUI5MV0T8QhCLu+w==",
        "requires": {
          "postcss": "^7.0.2",
          "postcss-selector-parser": "^5.0.0-rc.3"
        },
        "dependencies": {
          "cssesc": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-2.0.0.tgz",
            "integrity": "sha512-MsCAG1z9lPdoO/IUMLSBWBSVxVtJ1395VGIQ+Fc2gNdkQ1hNDnQdw3YhA71WJCBW1vdwA0cAnk/DnW6bqoEUYg=="
          },
          "postcss-selector-parser": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-5.0.0.tgz",
            "integrity": "sha512-w+zLE5Jhg6Liz8+rQOWEAwtwkyqpfnmsinXjXg6cY7YIONZZtgvE0v2O0uhQBs0peNomOJwWRKt6JBfTdTd3OQ==",
            "requires": {
              "cssesc": "^2.0.0",
              "indexes-of": "^1.0.1",
              "uniq": "^1.0.1"
            }
          }
        }
      },
      "postcss-dir-pseudo-class": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/postcss-dir-pseudo-class/-/postcss-dir-pseudo-class-5.0.0.tgz",
        "integrity": "sha512-3pm4oq8HYWMZePJY+5ANriPs3P07q+LW6FAdTlkFH2XqDdP4HeeJYMOzn0HYLhRSjBO3fhiqSwwU9xEULSrPgw==",
        "requires": {
          "postcss": "^7.0.2",
          "postcss-selector-parser": "^5.0.0-rc.3"
        },
        "dependencies": {
          "cssesc": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-2.0.0.tgz",
            "integrity": "sha512-MsCAG1z9lPdoO/IUMLSBWBSVxVtJ1395VGIQ+Fc2gNdkQ1hNDnQdw3YhA71WJCBW1vdwA0cAnk/DnW6bqoEUYg=="
          },
          "postcss-selector-parser": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-5.0.0.tgz",
            "integrity": "sha512-w+zLE5Jhg6Liz8+rQOWEAwtwkyqpfnmsinXjXg6cY7YIONZZtgvE0v2O0uhQBs0peNomOJwWRKt6JBfTdTd3OQ==",
            "requires": {
              "cssesc": "^2.0.0",
              "indexes-of": "^1.0.1",
              "uniq": "^1.0.1"
            }
          }
        }
      },
      "postcss-discard-comments": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-discard-comments/-/postcss-discard-comments-4.0.2.tgz",
        "integrity": "sha512-RJutN259iuRf3IW7GZyLM5Sw4GLTOH8FmsXBnv8Ab/Tc2k4SR4qbV4DNbyyY4+Sjo362SyDmW2DQ7lBSChrpkg==",
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "postcss-discard-duplicates": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-discard-duplicates/-/postcss-discard-duplicates-4.0.2.tgz",
        "integrity": "sha512-ZNQfR1gPNAiXZhgENFfEglF93pciw0WxMkJeVmw8eF+JZBbMD7jp6C67GqJAXVZP2BWbOztKfbsdmMp/k8c6oQ==",
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "postcss-discard-empty": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-discard-empty/-/postcss-discard-empty-4.0.1.tgz",
        "integrity": "sha512-B9miTzbznhDjTfjvipfHoqbWKwd0Mj+/fL5s1QOz06wufguil+Xheo4XpOnc4NqKYBCNqqEzgPv2aPBIJLox0w==",
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "postcss-discard-overridden": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-discard-overridden/-/postcss-discard-overridden-4.0.1.tgz",
        "integrity": "sha512-IYY2bEDD7g1XM1IDEsUT4//iEYCxAmP5oDSFMVU/JVvT7gh+l4fmjciLqGgwjdWpQIdb0Che2VX00QObS5+cTg==",
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "postcss-double-position-gradients": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/postcss-double-position-gradients/-/postcss-double-position-gradients-1.0.0.tgz",
        "integrity": "sha512-G+nV8EnQq25fOI8CH/B6krEohGWnF5+3A6H/+JEpOncu5dCnkS1QQ6+ct3Jkaepw1NGVqqOZH6lqrm244mCftA==",
        "requires": {
          "postcss": "^7.0.5",
          "postcss-values-parser": "^2.0.0"
        }
      },
      "postcss-env-function": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/postcss-env-function/-/postcss-env-function-2.0.2.tgz",
        "integrity": "sha512-rwac4BuZlITeUbiBq60h/xbLzXY43qOsIErngWa4l7Mt+RaSkT7QBjXVGTcBHupykkblHMDrBFh30zchYPaOUw==",
        "requires": {
          "postcss": "^7.0.2",
          "postcss-values-parser": "^2.0.0"
        }
      },
      "postcss-flexbugs-fixes": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/postcss-flexbugs-fixes/-/postcss-flexbugs-fixes-4.1.0.tgz",
        "integrity": "sha512-jr1LHxQvStNNAHlgco6PzY308zvLklh7SJVYuWUwyUQncofaAlD2l+P/gxKHOdqWKe7xJSkVLFF/2Tp+JqMSZA==",
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "postcss-focus-visible": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/postcss-focus-visible/-/postcss-focus-visible-4.0.0.tgz",
        "integrity": "sha512-Z5CkWBw0+idJHSV6+Bgf2peDOFf/x4o+vX/pwcNYrWpXFrSfTkQ3JQ1ojrq9yS+upnAlNRHeg8uEwFTgorjI8g==",
        "requires": {
          "postcss": "^7.0.2"
        }
      },
      "postcss-focus-within": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/postcss-focus-within/-/postcss-focus-within-3.0.0.tgz",
        "integrity": "sha512-W0APui8jQeBKbCGZudW37EeMCjDeVxKgiYfIIEo8Bdh5SpB9sxds/Iq8SEuzS0Q4YFOlG7EPFulbbxujpkrV2w==",
        "requires": {
          "postcss": "^7.0.2"
        }
      },
      "postcss-font-variant": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/postcss-font-variant/-/postcss-font-variant-4.0.0.tgz",
        "integrity": "sha512-M8BFYKOvCrI2aITzDad7kWuXXTm0YhGdP9Q8HanmN4EF1Hmcgs1KK5rSHylt/lUJe8yLxiSwWAHdScoEiIxztg==",
        "requires": {
          "postcss": "^7.0.2"
        }
      },
      "postcss-gap-properties": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/postcss-gap-properties/-/postcss-gap-properties-2.0.0.tgz",
        "integrity": "sha512-QZSqDaMgXCHuHTEzMsS2KfVDOq7ZFiknSpkrPJY6jmxbugUPTuSzs/vuE5I3zv0WAS+3vhrlqhijiprnuQfzmg==",
        "requires": {
          "postcss": "^7.0.2"
        }
      },
      "postcss-image-set-function": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/postcss-image-set-function/-/postcss-image-set-function-3.0.1.tgz",
        "integrity": "sha512-oPTcFFip5LZy8Y/whto91L9xdRHCWEMs3e1MdJxhgt4jy2WYXfhkng59fH5qLXSCPN8k4n94p1Czrfe5IOkKUw==",
        "requires": {
          "postcss": "^7.0.2",
          "postcss-values-parser": "^2.0.0"
        }
      },
      "postcss-initial": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/postcss-initial/-/postcss-initial-3.0.2.tgz",
        "integrity": "sha512-ugA2wKonC0xeNHgirR4D3VWHs2JcU08WAi1KFLVcnb7IN89phID6Qtg2RIctWbnvp1TM2BOmDtX8GGLCKdR8YA==",
        "requires": {
          "lodash.template": "^4.5.0",
          "postcss": "^7.0.2"
        }
      },
      "postcss-lab-function": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/postcss-lab-function/-/postcss-lab-function-2.0.1.tgz",
        "integrity": "sha512-whLy1IeZKY+3fYdqQFuDBf8Auw+qFuVnChWjmxm/UhHWqNHZx+B99EwxTvGYmUBqe3Fjxs4L1BoZTJmPu6usVg==",
        "requires": {
          "@csstools/convert-colors": "^1.4.0",
          "postcss": "^7.0.2",
          "postcss-values-parser": "^2.0.0"
        }
      },
      "postcss-load-config": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-2.1.0.tgz",
        "integrity": "sha512-4pV3JJVPLd5+RueiVVB+gFOAa7GWc25XQcMp86Zexzke69mKf6Nx9LRcQywdz7yZI9n1udOxmLuAwTBypypF8Q==",
        "requires": {
          "cosmiconfig": "^5.0.0",
          "import-cwd": "^2.0.0"
        }
      },
      "postcss-loader": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/postcss-loader/-/postcss-loader-3.0.0.tgz",
        "integrity": "sha512-cLWoDEY5OwHcAjDnkyRQzAXfs2jrKjXpO/HQFcc5b5u/r7aa471wdmChmwfnv7x2u840iat/wi0lQ5nbRgSkUA==",
        "requires": {
          "loader-utils": "^1.1.0",
          "postcss": "^7.0.0",
          "postcss-load-config": "^2.0.0",
          "schema-utils": "^1.0.0"
        },
        "dependencies": {
          "schema-utils": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
            "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
            "requires": {
              "ajv": "^6.1.0",
              "ajv-errors": "^1.0.0",
              "ajv-keywords": "^3.1.0"
            }
          }
        }
      },
      "postcss-logical": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/postcss-logical/-/postcss-logical-3.0.0.tgz",
        "integrity": "sha512-1SUKdJc2vuMOmeItqGuNaC+N8MzBWFWEkAnRnLpFYj1tGGa7NqyVBujfRtgNa2gXR+6RkGUiB2O5Vmh7E2RmiA==",
        "requires": {
          "postcss": "^7.0.2"
        }
      },
      "postcss-media-minmax": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/postcss-media-minmax/-/postcss-media-minmax-4.0.0.tgz",
        "integrity": "sha512-fo9moya6qyxsjbFAYl97qKO9gyre3qvbMnkOZeZwlsW6XYFsvs2DMGDlchVLfAd8LHPZDxivu/+qW2SMQeTHBw==",
        "requires": {
          "postcss": "^7.0.2"
        }
      },
      "postcss-merge-longhand": {
        "version": "4.0.11",
        "resolved": "https://registry.npmjs.org/postcss-merge-longhand/-/postcss-merge-longhand-4.0.11.tgz",
        "integrity": "sha512-alx/zmoeXvJjp7L4mxEMjh8lxVlDFX1gqWHzaaQewwMZiVhLo42TEClKaeHbRf6J7j82ZOdTJ808RtN0ZOZwvw==",
        "requires": {
          "css-color-names": "0.0.4",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0",
          "stylehacks": "^4.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-merge-rules": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/postcss-merge-rules/-/postcss-merge-rules-4.0.3.tgz",
        "integrity": "sha512-U7e3r1SbvYzO0Jr3UT/zKBVgYYyhAz0aitvGIYOYK5CPmkNih+WDSsS5tvPrJ8YMQYlEMvsZIiqmn7HdFUaeEQ==",
        "requires": {
          "browserslist": "^4.0.0",
          "caniuse-api": "^3.0.0",
          "cssnano-util-same-parent": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-selector-parser": "^3.0.0",
          "vendors": "^1.0.0"
        },
        "dependencies": {
          "postcss-selector-parser": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
            "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
            "requires": {
              "dot-prop": "^5.2.0",
              "indexes-of": "^1.0.1",
              "uniq": "^1.0.1"
            }
          }
        }
      },
      "postcss-minify-font-values": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-minify-font-values/-/postcss-minify-font-values-4.0.2.tgz",
        "integrity": "sha512-j85oO6OnRU9zPf04+PZv1LYIYOprWm6IA6zkXkrJXyRveDEuQggG6tvoy8ir8ZwjLxLuGfNkCZEQG7zan+Hbtg==",
        "requires": {
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-minify-gradients": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-minify-gradients/-/postcss-minify-gradients-4.0.2.tgz",
        "integrity": "sha512-qKPfwlONdcf/AndP1U8SJ/uzIJtowHlMaSioKzebAXSG4iJthlWC9iSWznQcX4f66gIWX44RSA841HTHj3wK+Q==",
        "requires": {
          "cssnano-util-get-arguments": "^4.0.0",
          "is-color-stop": "^1.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-minify-params": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-minify-params/-/postcss-minify-params-4.0.2.tgz",
        "integrity": "sha512-G7eWyzEx0xL4/wiBBJxJOz48zAKV2WG3iZOqVhPet/9geefm/Px5uo1fzlHu+DOjT+m0Mmiz3jkQzVHe6wxAWg==",
        "requires": {
          "alphanum-sort": "^1.0.0",
          "browserslist": "^4.0.0",
          "cssnano-util-get-arguments": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0",
          "uniqs": "^2.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-minify-selectors": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-minify-selectors/-/postcss-minify-selectors-4.0.2.tgz",
        "integrity": "sha512-D5S1iViljXBj9kflQo4YutWnJmwm8VvIsU1GeXJGiG9j8CIg9zs4voPMdQDUmIxetUOh60VilsNzCiAFTOqu3g==",
        "requires": {
          "alphanum-sort": "^1.0.0",
          "has": "^1.0.0",
          "postcss": "^7.0.0",
          "postcss-selector-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-selector-parser": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
            "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
            "requires": {
              "dot-prop": "^5.2.0",
              "indexes-of": "^1.0.1",
              "uniq": "^1.0.1"
            }
          }
        }
      },
      "postcss-modules-extract-imports": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/postcss-modules-extract-imports/-/postcss-modules-extract-imports-2.0.0.tgz",
        "integrity": "sha512-LaYLDNS4SG8Q5WAWqIJgdHPJrDDr/Lv775rMBFUbgjTz6j34lUznACHcdRWroPvXANP2Vj7yNK57vp9eFqzLWQ==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.5"
        }
      },
      "postcss-modules-local-by-default": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-3.0.2.tgz",
        "integrity": "sha512-jM/V8eqM4oJ/22j0gx4jrp63GSvDH6v86OqyTHHUvk4/k1vceipZsaymiZ5PvocqZOl5SFHiFJqjs3la0wnfIQ==",
        "dev": true,
        "requires": {
          "icss-utils": "^4.1.1",
          "postcss": "^7.0.16",
          "postcss-selector-parser": "^6.0.2",
          "postcss-value-parser": "^4.0.0"
        }
      },
      "postcss-modules-scope": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/postcss-modules-scope/-/postcss-modules-scope-2.2.0.tgz",
        "integrity": "sha512-YyEgsTMRpNd+HmyC7H/mh3y+MeFWevy7V1evVhJWewmMbjDHIbZbOXICC2y+m1xI1UVfIT1HMW/O04Hxyu9oXQ==",
        "dev": true,
        "requires": {
          "postcss": "^7.0.6",
          "postcss-selector-parser": "^6.0.0"
        }
      },
      "postcss-modules-values": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/postcss-modules-values/-/postcss-modules-values-3.0.0.tgz",
        "integrity": "sha512-1//E5jCBrZ9DmRX+zCtmQtRSV6PV42Ix7Bzj9GbwJceduuf7IqP8MgeTXuRDHOWj2m0VzZD5+roFWDuU8RQjcg==",
        "dev": true,
        "requires": {
          "icss-utils": "^4.0.0",
          "postcss": "^7.0.6"
        }
      },
      "postcss-nesting": {
        "version": "7.0.1",
        "resolved": "https://registry.npmjs.org/postcss-nesting/-/postcss-nesting-7.0.1.tgz",
        "integrity": "sha512-FrorPb0H3nuVq0Sff7W2rnc3SmIcruVC6YwpcS+k687VxyxO33iE1amna7wHuRVzM8vfiYofXSBHNAZ3QhLvYg==",
        "requires": {
          "postcss": "^7.0.2"
        }
      },
      "postcss-normalize": {
        "version": "8.0.1",
        "resolved": "https://registry.npmjs.org/postcss-normalize/-/postcss-normalize-8.0.1.tgz",
        "integrity": "sha512-rt9JMS/m9FHIRroDDBGSMsyW1c0fkvOJPy62ggxSHUldJO7B195TqFMqIf+lY5ezpDcYOV4j86aUp3/XbxzCCQ==",
        "requires": {
          "@csstools/normalize.css": "^10.1.0",
          "browserslist": "^4.6.2",
          "postcss": "^7.0.17",
          "postcss-browser-comments": "^3.0.0",
          "sanitize.css": "^10.0.0"
        }
      },
      "postcss-normalize-charset": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-normalize-charset/-/postcss-normalize-charset-4.0.1.tgz",
        "integrity": "sha512-gMXCrrlWh6G27U0hF3vNvR3w8I1s2wOBILvA87iNXaPvSNo5uZAMYsZG7XjCUf1eVxuPfyL4TJ7++SGZLc9A3g==",
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "postcss-normalize-display-values": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-normalize-display-values/-/postcss-normalize-display-values-4.0.2.tgz",
        "integrity": "sha512-3F2jcsaMW7+VtRMAqf/3m4cPFhPD3EFRgNs18u+k3lTJJlVe7d0YPO+bnwqo2xg8YiRpDXJI2u8A0wqJxMsQuQ==",
        "requires": {
          "cssnano-util-get-match": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-normalize-positions": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-normalize-positions/-/postcss-normalize-positions-4.0.2.tgz",
        "integrity": "sha512-Dlf3/9AxpxE+NF1fJxYDeggi5WwV35MXGFnnoccP/9qDtFrTArZ0D0R+iKcg5WsUd8nUYMIl8yXDCtcrT8JrdA==",
        "requires": {
          "cssnano-util-get-arguments": "^4.0.0",
          "has": "^1.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-normalize-repeat-style": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-normalize-repeat-style/-/postcss-normalize-repeat-style-4.0.2.tgz",
        "integrity": "sha512-qvigdYYMpSuoFs3Is/f5nHdRLJN/ITA7huIoCyqqENJe9PvPmLhNLMu7QTjPdtnVf6OcYYO5SHonx4+fbJE1+Q==",
        "requires": {
          "cssnano-util-get-arguments": "^4.0.0",
          "cssnano-util-get-match": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-normalize-string": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-normalize-string/-/postcss-normalize-string-4.0.2.tgz",
        "integrity": "sha512-RrERod97Dnwqq49WNz8qo66ps0swYZDSb6rM57kN2J+aoyEAJfZ6bMx0sx/F9TIEX0xthPGCmeyiam/jXif0eA==",
        "requires": {
          "has": "^1.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-normalize-timing-functions": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-normalize-timing-functions/-/postcss-normalize-timing-functions-4.0.2.tgz",
        "integrity": "sha512-acwJY95edP762e++00Ehq9L4sZCEcOPyaHwoaFOhIwWCDfik6YvqsYNxckee65JHLKzuNSSmAdxwD2Cud1Z54A==",
        "requires": {
          "cssnano-util-get-match": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-normalize-unicode": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-normalize-unicode/-/postcss-normalize-unicode-4.0.1.tgz",
        "integrity": "sha512-od18Uq2wCYn+vZ/qCOeutvHjB5jm57ToxRaMeNuf0nWVHaP9Hua56QyMF6fs/4FSUnVIw0CBPsU0K4LnBPwYwg==",
        "requires": {
          "browserslist": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-normalize-url": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-normalize-url/-/postcss-normalize-url-4.0.1.tgz",
        "integrity": "sha512-p5oVaF4+IHwu7VpMan/SSpmpYxcJMtkGppYf0VbdH5B6hN8YNmVyJLuY9FmLQTzY3fag5ESUUHDqM+heid0UVA==",
        "requires": {
          "is-absolute-url": "^2.0.0",
          "normalize-url": "^3.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "normalize-url": {
            "version": "3.3.0",
            "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-3.3.0.tgz",
            "integrity": "sha512-U+JJi7duF1o+u2pynbp2zXDW2/PADgC30f0GsHZtRh+HOcXHnw137TrNlyxxRvWW5fjKd3bcLHPxofWuCjaeZg=="
          },
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-normalize-whitespace": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-normalize-whitespace/-/postcss-normalize-whitespace-4.0.2.tgz",
        "integrity": "sha512-tO8QIgrsI3p95r8fyqKV+ufKlSHh9hMJqACqbv2XknufqEDhDvbguXGBBqxw9nsQoXWf0qOqppziKJKHMD4GtA==",
        "requires": {
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-ordered-values": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/postcss-ordered-values/-/postcss-ordered-values-4.1.2.tgz",
        "integrity": "sha512-2fCObh5UanxvSxeXrtLtlwVThBvHn6MQcu4ksNT2tsaV2Fg76R2CV98W7wNSlX+5/pFwEyaDwKLLoEV7uRybAw==",
        "requires": {
          "cssnano-util-get-arguments": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-overflow-shorthand": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/postcss-overflow-shorthand/-/postcss-overflow-shorthand-2.0.0.tgz",
        "integrity": "sha512-aK0fHc9CBNx8jbzMYhshZcEv8LtYnBIRYQD5i7w/K/wS9c2+0NSR6B3OVMu5y0hBHYLcMGjfU+dmWYNKH0I85g==",
        "requires": {
          "postcss": "^7.0.2"
        }
      },
      "postcss-page-break": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/postcss-page-break/-/postcss-page-break-2.0.0.tgz",
        "integrity": "sha512-tkpTSrLpfLfD9HvgOlJuigLuk39wVTbbd8RKcy8/ugV2bNBUW3xU+AIqyxhDrQr1VUj1RmyJrBn1YWrqUm9zAQ==",
        "requires": {
          "postcss": "^7.0.2"
        }
      },
      "postcss-place": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-place/-/postcss-place-4.0.1.tgz",
        "integrity": "sha512-Zb6byCSLkgRKLODj/5mQugyuj9bvAAw9LqJJjgwz5cYryGeXfFZfSXoP1UfveccFmeq0b/2xxwcTEVScnqGxBg==",
        "requires": {
          "postcss": "^7.0.2",
          "postcss-values-parser": "^2.0.0"
        }
      },
      "postcss-preset-env": {
        "version": "6.7.0",
        "resolved": "https://registry.npmjs.org/postcss-preset-env/-/postcss-preset-env-6.7.0.tgz",
        "integrity": "sha512-eU4/K5xzSFwUFJ8hTdTQzo2RBLbDVt83QZrAvI07TULOkmyQlnYlpwep+2yIK+K+0KlZO4BvFcleOCCcUtwchg==",
        "requires": {
          "autoprefixer": "^9.6.1",
          "browserslist": "^4.6.4",
          "caniuse-lite": "^1.0.30000981",
          "css-blank-pseudo": "^0.1.4",
          "css-has-pseudo": "^0.10.0",
          "css-prefers-color-scheme": "^3.1.1",
          "cssdb": "^4.4.0",
          "postcss": "^7.0.17",
          "postcss-attribute-case-insensitive": "^4.0.1",
          "postcss-color-functional-notation": "^2.0.1",
          "postcss-color-gray": "^5.0.0",
          "postcss-color-hex-alpha": "^5.0.3",
          "postcss-color-mod-function": "^3.0.3",
          "postcss-color-rebeccapurple": "^4.0.1",
          "postcss-custom-media": "^7.0.8",
          "postcss-custom-properties": "^8.0.11",
          "postcss-custom-selectors": "^5.1.2",
          "postcss-dir-pseudo-class": "^5.0.0",
          "postcss-double-position-gradients": "^1.0.0",
          "postcss-env-function": "^2.0.2",
          "postcss-focus-visible": "^4.0.0",
          "postcss-focus-within": "^3.0.0",
          "postcss-font-variant": "^4.0.0",
          "postcss-gap-properties": "^2.0.0",
          "postcss-image-set-function": "^3.0.1",
          "postcss-initial": "^3.0.0",
          "postcss-lab-function": "^2.0.1",
          "postcss-logical": "^3.0.0",
          "postcss-media-minmax": "^4.0.0",
          "postcss-nesting": "^7.0.0",
          "postcss-overflow-shorthand": "^2.0.0",
          "postcss-page-break": "^2.0.0",
          "postcss-place": "^4.0.1",
          "postcss-pseudo-class-any-link": "^6.0.0",
          "postcss-replace-overflow-wrap": "^3.0.0",
          "postcss-selector-matches": "^4.0.0",
          "postcss-selector-not": "^4.0.0"
        }
      },
      "postcss-pseudo-class-any-link": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/postcss-pseudo-class-any-link/-/postcss-pseudo-class-any-link-6.0.0.tgz",
        "integrity": "sha512-lgXW9sYJdLqtmw23otOzrtbDXofUdfYzNm4PIpNE322/swES3VU9XlXHeJS46zT2onFO7V1QFdD4Q9LiZj8mew==",
        "requires": {
          "postcss": "^7.0.2",
          "postcss-selector-parser": "^5.0.0-rc.3"
        },
        "dependencies": {
          "cssesc": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-2.0.0.tgz",
            "integrity": "sha512-MsCAG1z9lPdoO/IUMLSBWBSVxVtJ1395VGIQ+Fc2gNdkQ1hNDnQdw3YhA71WJCBW1vdwA0cAnk/DnW6bqoEUYg=="
          },
          "postcss-selector-parser": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-5.0.0.tgz",
            "integrity": "sha512-w+zLE5Jhg6Liz8+rQOWEAwtwkyqpfnmsinXjXg6cY7YIONZZtgvE0v2O0uhQBs0peNomOJwWRKt6JBfTdTd3OQ==",
            "requires": {
              "cssesc": "^2.0.0",
              "indexes-of": "^1.0.1",
              "uniq": "^1.0.1"
            }
          }
        }
      },
      "postcss-reduce-initial": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/postcss-reduce-initial/-/postcss-reduce-initial-4.0.3.tgz",
        "integrity": "sha512-gKWmR5aUulSjbzOfD9AlJiHCGH6AEVLaM0AV+aSioxUDd16qXP1PCh8d1/BGVvpdWn8k/HiK7n6TjeoXN1F7DA==",
        "requires": {
          "browserslist": "^4.0.0",
          "caniuse-api": "^3.0.0",
          "has": "^1.0.0",
          "postcss": "^7.0.0"
        }
      },
      "postcss-reduce-transforms": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-reduce-transforms/-/postcss-reduce-transforms-4.0.2.tgz",
        "integrity": "sha512-EEVig1Q2QJ4ELpJXMZR8Vt5DQx8/mo+dGWSR7vWXqcob2gQLyQGsionYcGKATXvQzMPn6DSN1vTN7yFximdIAg==",
        "requires": {
          "cssnano-util-get-match": "^4.0.0",
          "has": "^1.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-replace-overflow-wrap": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/postcss-replace-overflow-wrap/-/postcss-replace-overflow-wrap-3.0.0.tgz",
        "integrity": "sha512-2T5hcEHArDT6X9+9dVSPQdo7QHzG4XKclFT8rU5TzJPDN7RIRTbO9c4drUISOVemLj03aezStHCR2AIcr8XLpw==",
        "requires": {
          "postcss": "^7.0.2"
        }
      },
      "postcss-safe-parser": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-safe-parser/-/postcss-safe-parser-4.0.1.tgz",
        "integrity": "sha512-xZsFA3uX8MO3yAda03QrG3/Eg1LN3EPfjjf07vke/46HERLZyHrTsQ9E1r1w1W//fWEhtYNndo2hQplN2cVpCQ==",
        "requires": {
          "postcss": "^7.0.0"
        }
      },
      "postcss-selector-matches": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/postcss-selector-matches/-/postcss-selector-matches-4.0.0.tgz",
        "integrity": "sha512-LgsHwQR/EsRYSqlwdGzeaPKVT0Ml7LAT6E75T8W8xLJY62CE4S/l03BWIt3jT8Taq22kXP08s2SfTSzaraoPww==",
        "requires": {
          "balanced-match": "^1.0.0",
          "postcss": "^7.0.2"
        }
      },
      "postcss-selector-not": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/postcss-selector-not/-/postcss-selector-not-4.0.0.tgz",
        "integrity": "sha512-W+bkBZRhqJaYN8XAnbbZPLWMvZD1wKTu0UxtFKdhtGjWYmxhkUneoeOhRJKdAE5V7ZTlnbHfCR+6bNwK9e1dTQ==",
        "requires": {
          "balanced-match": "^1.0.0",
          "postcss": "^7.0.2"
        }
      },
      "postcss-selector-parser": {
        "version": "6.0.2",
        "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.2.tgz",
        "integrity": "sha512-36P2QR59jDTOAiIkqEprfJDsoNrvwFei3eCqKd1Y0tUsBimsq39BLp7RD+JWny3WgB1zGhJX8XVePwm9k4wdBg==",
        "requires": {
          "cssesc": "^3.0.0",
          "indexes-of": "^1.0.1",
          "uniq": "^1.0.1"
        }
      },
      "postcss-svgo": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/postcss-svgo/-/postcss-svgo-4.0.2.tgz",
        "integrity": "sha512-C6wyjo3VwFm0QgBy+Fu7gCYOkCmgmClghO+pjcxvrcBKtiKt0uCF+hvbMO1fyv5BMImRK90SMb+dwUnfbGd+jw==",
        "requires": {
          "is-svg": "^3.0.0",
          "postcss": "^7.0.0",
          "postcss-value-parser": "^3.0.0",
          "svgo": "^1.0.0"
        },
        "dependencies": {
          "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
          }
        }
      },
      "postcss-unique-selectors": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/postcss-unique-selectors/-/postcss-unique-selectors-4.0.1.tgz",
        "integrity": "sha512-+JanVaryLo9QwZjKrmJgkI4Fn8SBgRO6WXQBJi7KiAVPlmxikB5Jzc4EvXMT2H0/m0RjrVVm9rGNhZddm/8Spg==",
        "requires": {
          "alphanum-sort": "^1.0.0",
          "postcss": "^7.0.0",
          "uniqs": "^2.0.0"
        }
      },
      "postcss-value-parser": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.0.3.tgz",
        "integrity": "sha512-N7h4pG+Nnu5BEIzyeaaIYWs0LI5XC40OrRh5L60z0QjFsqGWcHcbkBvpe1WYpcIS9yQ8sOi/vIPt1ejQCrMVrg=="
      },
      "postcss-values-parser": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/postcss-values-parser/-/postcss-values-parser-2.0.1.tgz",
        "integrity": "sha512-2tLuBsA6P4rYTNKCXYG/71C7j1pU6pK503suYOmn4xYrQIzW+opD+7FAFNuGSdZC/3Qfy334QbeMu7MEb8gOxg==",
        "requires": {
          "flatten": "^1.0.2",
          "indexes-of": "^1.0.1",
          "uniq": "^1.0.1"
        }
      },
      "prelude-ls": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
        "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ="
      },
      "prepend-http": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-1.0.4.tgz",
        "integrity": "sha1-1PRWKwzjaW5BrFLQ4ALlemNdxtw="
      },
      "pretty-bytes": {
        "version": "5.3.0",
        "resolved": "https://registry.npmjs.org/pretty-bytes/-/pretty-bytes-5.3.0.tgz",
        "integrity": "sha512-hjGrh+P926p4R4WbaB6OckyRtO0F0/lQBiT+0gnxjV+5kjPBrfVBFCsCLbMqVQeydvIoouYTCmmEURiH3R1Bdg=="
      },
      "pretty-error": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/pretty-error/-/pretty-error-2.1.1.tgz",
        "integrity": "sha1-X0+HyPkeWuPzuoerTPXgOxoX8aM=",
        "requires": {
          "renderkid": "^2.0.1",
          "utila": "~0.4"
        }
      },
      "pretty-format": {
        "version": "24.9.0",
        "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
        "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
        "requires": {
          "@jest/types": "^24.9.0",
          "ansi-regex": "^4.0.0",
          "ansi-styles": "^3.2.0",
          "react-is": "^16.8.4"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
            "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
          }
        }
      },
      "private": {
        "version": "0.1.8",
        "resolved": "https://registry.npmjs.org/private/-/private-0.1.8.tgz",
        "integrity": "sha512-VvivMrbvd2nKkiG38qjULzlc+4Vx4wm/whI9pQD35YrARNnhxeiRktSOhSukRLFNlzg6Br/cJPet5J/u19r/mg=="
      },
      "process": {
        "version": "0.11.10",
        "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
        "integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI="
      },
      "process-nextick-args": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
        "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
      },
      "progress": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/progress/-/progress-2.0.3.tgz",
        "integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA=="
      },
      "promise": {
        "version": "8.1.0",
        "resolved": "https://registry.npmjs.org/promise/-/promise-8.1.0.tgz",
        "integrity": "sha512-W04AqnILOL/sPRXziNicCjSNRruLAuIHEOVBazepu0545DDNGYHz7ar9ZgZ1fMU8/MA4mVxp5rkBWRi6OXIy3Q==",
        "requires": {
          "asap": "~2.0.6"
        }
      },
      "promise-inflight": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",
        "integrity": "sha1-mEcocL8igTL8vdhoEputEsPAKeM="
      },
      "prompts": {
        "version": "2.3.2",
        "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.3.2.tgz",
        "integrity": "sha512-Q06uKs2CkNYVID0VqwfAl9mipo99zkBv/n2JtWY89Yxa3ZabWSrs0e2KTudKVa3peLUvYXMefDqIleLPVUBZMA==",
        "requires": {
          "kleur": "^3.0.3",
          "sisteransi": "^1.0.4"
        }
      },
      "prop-types": {
        "version": "15.7.2",
        "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.7.2.tgz",
        "integrity": "sha512-8QQikdH7//R2vurIJSutZ1smHYTcLpRWEOlHnzcWHmBYrOGUysKwSsrC89BCiFj3CbrfJ/nXFdJepOVrY1GCHQ==",
        "requires": {
          "loose-envify": "^1.4.0",
          "object-assign": "^4.1.1",
          "react-is": "^16.8.1"
        }
      },
      "proxy-addr": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
        "integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
        "requires": {
          "forwarded": "~0.1.2",
          "ipaddr.js": "1.9.1"
        }
      },
      "prr": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/prr/-/prr-1.0.1.tgz",
        "integrity": "sha1-0/wRS6BplaRexok/SEzrHXj19HY="
      },
      "psl": {
        "version": "1.8.0",
        "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
        "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ=="
      },
      "public-encrypt": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/public-encrypt/-/public-encrypt-4.0.3.tgz",
        "integrity": "sha512-zVpa8oKZSz5bTMTFClc1fQOnyyEzpl5ozpi1B5YcvBrdohMjH2rfsBtyXcuNuwjsDIXmBYlF2N5FlJYhR29t8Q==",
        "requires": {
          "bn.js": "^4.1.0",
          "browserify-rsa": "^4.0.0",
          "create-hash": "^1.1.0",
          "parse-asn1": "^5.0.0",
          "randombytes": "^2.0.1",
          "safe-buffer": "^5.1.2"
        }
      },
      "pump": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
        "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
        "requires": {
          "end-of-stream": "^1.1.0",
          "once": "^1.3.1"
        }
      },
      "pumpify": {
        "version": "1.5.1",
        "resolved": "https://registry.npmjs.org/pumpify/-/pumpify-1.5.1.tgz",
        "integrity": "sha512-oClZI37HvuUJJxSKKrC17bZ9Cu0ZYhEAGPsPUy9KlMUmv9dKX2o77RUmq7f3XjIxbwyGwYzbzQ1L2Ks8sIradQ==",
        "requires": {
          "duplexify": "^3.6.0",
          "inherits": "^2.0.3",
          "pump": "^2.0.0"
        },
        "dependencies": {
          "pump": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/pump/-/pump-2.0.1.tgz",
            "integrity": "sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==",
            "requires": {
              "end-of-stream": "^1.1.0",
              "once": "^1.3.1"
            }
          }
        }
      },
      "punycode": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
        "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="
      },
      "q": {
        "version": "1.5.1",
        "resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",
        "integrity": "sha1-fjL3W0E4EpHQRhHxvxQQmsAGUdc="
      },
      "qs": {
        "version": "6.5.2",
        "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
        "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA=="
      },
      "query-string": {
        "version": "4.3.4",
        "resolved": "https://registry.npmjs.org/query-string/-/query-string-4.3.4.tgz",
        "integrity": "sha1-u7aTucqRXCMlFbIosaArYJBD2+s=",
        "requires": {
          "object-assign": "^4.1.0",
          "strict-uri-encode": "^1.0.0"
        }
      },
      "querystring": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
        "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA="
      },
      "querystring-es3": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/querystring-es3/-/querystring-es3-0.2.1.tgz",
        "integrity": "sha1-nsYfeQSYdXB9aUFFlv2Qek1xHnM="
      },
      "querystringify": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/querystringify/-/querystringify-2.1.1.tgz",
        "integrity": "sha512-w7fLxIRCRT7U8Qu53jQnJyPkYZIaR4n5151KMfcJlO/A9397Wxb1amJvROTK6TOnp7PfoAmg/qXiNHI+08jRfA=="
      },
      "radium": {
        "version": "0.26.0",
        "resolved": "https://registry.npmjs.org/radium/-/radium-0.26.0.tgz",
        "integrity": "sha512-4+oqTuMmrOpuwk7ikzft5Aau24UTD/SsurgRmLlDsZZeegCCScmviCiBiLw6XyFk8BiACYfjB2Yq0gmgHQfV0Q==",
        "requires": {
          "exenv": "^1.2.1",
          "hoist-non-react-statics": "3.3.0",
          "inline-style-prefixer": "^4.0.0",
          "prop-types": "^15.5.8"
        }
      },
      "raf": {
        "version": "3.4.1",
        "resolved": "https://registry.npmjs.org/raf/-/raf-3.4.1.tgz",
        "integrity": "sha512-Sq4CW4QhwOHE8ucn6J34MqtZCeWFP2aQSmrlroYgqAV1PjStIhJXxYuTgUIfkEk7zTLjmIjLmU5q+fbD1NnOJA==",
        "requires": {
          "performance-now": "^2.1.0"
        }
      },
      "randombytes": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
        "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
        "requires": {
          "safe-buffer": "^5.1.0"
        }
      },
      "randomfill": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/randomfill/-/randomfill-1.0.4.tgz",
        "integrity": "sha512-87lcbR8+MhcWcUiQ+9e+Rwx8MyR2P7qnt15ynUlbm3TU/fjbgz4GsvfSUDTemtCCtVCqb4ZcEFlyPNTh9bBTLw==",
        "requires": {
          "randombytes": "^2.0.5",
          "safe-buffer": "^5.1.0"
        }
      },
      "range-parser": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
        "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
      },
      "raw-body": {
        "version": "2.4.0",
        "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
        "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
        "requires": {
          "bytes": "3.1.0",
          "http-errors": "1.7.2",
          "iconv-lite": "0.4.24",
          "unpipe": "1.0.0"
        },
        "dependencies": {
          "bytes": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
            "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg=="
          }
        }
      },
      "react": {
        "version": "16.13.1",
        "resolved": "https://registry.npmjs.org/react/-/react-16.13.1.tgz",
        "integrity": "sha512-YMZQQq32xHLX0bz5Mnibv1/LHb3Sqzngu7xstSM+vrkE5Kzr9xE0yMByK5kMoTK30YVJE61WfbxIFFvfeDKT1w==",
        "requires": {
          "loose-envify": "^1.1.0",
          "object-assign": "^4.1.1",
          "prop-types": "^15.6.2"
        }
      },
      "react-app-polyfill": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/react-app-polyfill/-/react-app-polyfill-1.0.6.tgz",
        "integrity": "sha512-OfBnObtnGgLGfweORmdZbyEz+3dgVePQBb3zipiaDsMHV1NpWm0rDFYIVXFV/AK+x4VIIfWHhrdMIeoTLyRr2g==",
        "requires": {
          "core-js": "^3.5.0",
          "object-assign": "^4.1.1",
          "promise": "^8.0.3",
          "raf": "^3.4.1",
          "regenerator-runtime": "^0.13.3",
          "whatwg-fetch": "^3.0.0"
        }
      },
      "react-dev-utils": {
        "version": "10.2.1",
        "resolved": "https://registry.npmjs.org/react-dev-utils/-/react-dev-utils-10.2.1.tgz",
        "integrity": "sha512-XxTbgJnYZmxuPtY3y/UV0D8/65NKkmaia4rXzViknVnZeVlklSh8u6TnaEYPfAi/Gh1TP4mEOXHI6jQOPbeakQ==",
        "requires": {
          "@babel/code-frame": "7.8.3",
          "address": "1.1.2",
          "browserslist": "4.10.0",
          "chalk": "2.4.2",
          "cross-spawn": "7.0.1",
          "detect-port-alt": "1.1.6",
          "escape-string-regexp": "2.0.0",
          "filesize": "6.0.1",
          "find-up": "4.1.0",
          "fork-ts-checker-webpack-plugin": "3.1.1",
          "global-modules": "2.0.0",
          "globby": "8.0.2",
          "gzip-size": "5.1.1",
          "immer": "1.10.0",
          "inquirer": "7.0.4",
          "is-root": "2.1.0",
          "loader-utils": "1.2.3",
          "open": "^7.0.2",
          "pkg-up": "3.1.0",
          "react-error-overlay": "^6.0.7",
          "recursive-readdir": "2.2.2",
          "shell-quote": "1.7.2",
          "strip-ansi": "6.0.0",
          "text-table": "0.2.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
            "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
          },
          "browserslist": {
            "version": "4.10.0",
            "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.10.0.tgz",
            "integrity": "sha512-TpfK0TDgv71dzuTsEAlQiHeWQ/tiPqgNZVdv046fvNtBZrjbv2O3TsWCDU0AWGJJKCF/KsjNdLzR9hXOsh/CfA==",
            "requires": {
              "caniuse-lite": "^1.0.30001035",
              "electron-to-chromium": "^1.3.378",
              "node-releases": "^1.1.52",
              "pkg-up": "^3.1.0"
            }
          },
          "cross-spawn": {
            "version": "7.0.1",
            "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.1.tgz",
            "integrity": "sha512-u7v4o84SwFpD32Z8IIcPZ6z1/ie24O6RU3RbtL5Y316l3KuHVPx9ItBgWQ6VlfAFnRnTtMUrsQ9MUUTuEZjogg==",
            "requires": {
              "path-key": "^3.1.0",
              "shebang-command": "^2.0.0",
              "which": "^2.0.1"
            }
          },
          "emojis-list": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-2.1.0.tgz",
            "integrity": "sha1-TapNnbAPmBmIDHn6RXrlsJof04k="
          },
          "escape-string-regexp": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
            "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w=="
          },
          "find-up": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
            "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
            "requires": {
              "locate-path": "^5.0.0",
              "path-exists": "^4.0.0"
            },
            "dependencies": {
              "locate-path": {
                "version": "5.0.0",
                "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
                "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
                "requires": {
                  "p-locate": "^4.1.0"
                }
              },
              "p-locate": {
                "version": "4.1.0",
                "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
                "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
                "requires": {
                  "p-limit": "^2.2.0"
                }
              },
              "path-exists": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
                "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="
              }
            }
          },
          "inquirer": {
            "version": "7.0.4",
            "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-7.0.4.tgz",
            "integrity": "sha512-Bu5Td5+j11sCkqfqmUTiwv+tWisMtP0L7Q8WrqA2C/BbBhy1YTdFrvjjlrKq8oagA/tLQBski2Gcx/Sqyi2qSQ==",
            "requires": {
              "ansi-escapes": "^4.2.1",
              "chalk": "^2.4.2",
              "cli-cursor": "^3.1.0",
              "cli-width": "^2.0.0",
              "external-editor": "^3.0.3",
              "figures": "^3.0.0",
              "lodash": "^4.17.15",
              "mute-stream": "0.0.8",
              "run-async": "^2.2.0",
              "rxjs": "^6.5.3",
              "string-width": "^4.1.0",
              "strip-ansi": "^5.1.0",
              "through": "^2.3.6"
            },
            "dependencies": {
              "strip-ansi": {
                "version": "5.2.0",
                "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                "requires": {
                  "ansi-regex": "^4.1.0"
                }
              }
            }
          },
          "json5": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
            "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
            "requires": {
              "minimist": "^1.2.0"
            }
          },
          "loader-utils": {
            "version": "1.2.3",
            "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.2.3.tgz",
            "integrity": "sha512-fkpz8ejdnEMG3s37wGL07iSBDg99O9D5yflE9RGNH3hRdx9SOwYfnGYdZOUIZitN8E+E2vkq3MUMYMvPYl5ZZA==",
            "requires": {
              "big.js": "^5.2.2",
              "emojis-list": "^2.0.0",
              "json5": "^1.0.1"
            }
          },
          "locate-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
            "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
            "requires": {
              "p-locate": "^3.0.0",
              "path-exists": "^3.0.0"
            }
          },
          "p-limit": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
            "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
            "requires": {
              "p-try": "^2.0.0"
            }
          },
          "p-locate": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
            "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
            "requires": {
              "p-limit": "^2.0.0"
            }
          },
          "p-try": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
            "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
          },
          "path-key": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
            "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q=="
          },
          "pkg-up": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/pkg-up/-/pkg-up-3.1.0.tgz",
            "integrity": "sha512-nDywThFk1i4BQK4twPQ6TA4RT8bDY96yeuCVBWL3ePARCiEKDRSrNGbFIgUJpLp+XeIR65v8ra7WuJOFUBtkMA==",
            "requires": {
              "find-up": "^3.0.0"
            },
            "dependencies": {
              "find-up": {
                "version": "3.0.0",
                "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
                "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
                "requires": {
                  "locate-path": "^3.0.0"
                }
              }
            }
          },
          "shebang-command": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
            "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
            "requires": {
              "shebang-regex": "^3.0.0"
            }
          },
          "shebang-regex": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
            "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A=="
          },
          "strip-ansi": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
            "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
            "requires": {
              "ansi-regex": "^5.0.0"
            },
            "dependencies": {
              "ansi-regex": {
                "version": "5.0.0",
                "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
                "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
              }
            }
          },
          "which": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
            "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
            "requires": {
              "isexe": "^2.0.0"
            }
          }
        }
      },
      "react-dom": {
        "version": "16.13.1",
        "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-16.13.1.tgz",
        "integrity": "sha512-81PIMmVLnCNLO/fFOQxdQkvEq/+Hfpv24XNJfpyZhTRfO0QcmQIF/PgCa1zCOj2w1hrn12MFLyaJ/G0+Mxtfag==",
        "requires": {
          "loose-envify": "^1.1.0",
          "object-assign": "^4.1.1",
          "prop-types": "^15.6.2",
          "scheduler": "^0.19.1"
        }
      },
      "react-error-overlay": {
        "version": "6.0.7",
        "resolved": "https://registry.npmjs.org/react-error-overlay/-/react-error-overlay-6.0.7.tgz",
        "integrity": "sha512-TAv1KJFh3RhqxNvhzxj6LeT5NWklP6rDr2a0jaTfsZ5wSZWHOGeqQyejUp3xxLfPt2UpyJEcVQB/zyPcmonNFA=="
      },
      "react-is": {
        "version": "16.13.1",
        "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
        "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
      },
      "react-scripts": {
        "version": "3.4.1",
        "resolved": "https://registry.npmjs.org/react-scripts/-/react-scripts-3.4.1.tgz",
        "integrity": "sha512-JpTdi/0Sfd31mZA6Ukx+lq5j1JoKItX7qqEK4OiACjVQletM1P38g49d9/D0yTxp9FrSF+xpJFStkGgKEIRjlQ==",
        "requires": {
          "@babel/core": "7.9.0",
          "@svgr/webpack": "4.3.3",
          "@typescript-eslint/eslint-plugin": "^2.10.0",
          "@typescript-eslint/parser": "^2.10.0",
          "babel-eslint": "10.1.0",
          "babel-jest": "^24.9.0",
          "babel-loader": "8.1.0",
          "babel-plugin-named-asset-import": "^0.3.6",
          "babel-preset-react-app": "^9.1.2",
          "camelcase": "^5.3.1",
          "case-sensitive-paths-webpack-plugin": "2.3.0",
          "dotenv": "8.2.0",
          "dotenv-expand": "5.1.0",
          "eslint": "^6.6.0",
          "eslint-config-react-app": "^5.2.1",
          "eslint-loader": "3.0.3",
          "eslint-plugin-flowtype": "4.6.0",
          "eslint-plugin-import": "2.20.1",
          "eslint-plugin-jsx-a11y": "6.2.3",
          "eslint-plugin-react": "7.19.0",
          "eslint-plugin-react-hooks": "^1.6.1",
          "file-loader": "4.3.0",
          "fs-extra": "^8.1.0",
          "fsevents": "2.1.2",
          "html-webpack-plugin": "4.0.0-beta.11",
          "identity-obj-proxy": "3.0.0",
          "jest": "24.9.0",
          "jest-environment-jsdom-fourteen": "1.0.1",
          "jest-resolve": "24.9.0",
          "jest-watch-typeahead": "0.4.2",
          "mini-css-extract-plugin": "0.9.0",
          "optimize-css-assets-webpack-plugin": "5.0.3",
          "pnp-webpack-plugin": "1.6.4",
          "postcss-flexbugs-fixes": "4.1.0",
          "postcss-loader": "3.0.0",
          "postcss-normalize": "8.0.1",
          "postcss-preset-env": "6.7.0",
          "postcss-safe-parser": "4.0.1",
          "react-app-polyfill": "^1.0.6",
          "react-dev-utils": "^10.2.1",
          "resolve": "1.15.0",
          "resolve-url-loader": "3.1.1",
          "sass-loader": "8.0.2",
          "semver": "6.3.0",
          "style-loader": "0.23.1",
          "terser-webpack-plugin": "2.3.5",
          "ts-pnp": "1.1.6",
          "url-loader": "2.3.0",
          "webpack": "4.42.0",
          "webpack-dev-server": "3.10.3",
          "webpack-manifest-plugin": "2.2.0",
          "workbox-webpack-plugin": "4.3.1"
        }
      },
      "read-pkg": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
        "integrity": "sha1-nLxoaXj+5l0WwA4rGcI3/Pbjg4k=",
        "requires": {
          "load-json-file": "^4.0.0",
          "normalize-package-data": "^2.3.2",
          "path-type": "^3.0.0"
        }
      },
      "read-pkg-up": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-4.0.0.tgz",
        "integrity": "sha512-6etQSH7nJGsK0RbG/2TeDzZFa8shjQ1um+SwQQ5cwKy0dhSXdOncEhb1CPpvQG4h7FyOV6EB6YlV0yJvZQNAkA==",
        "requires": {
          "find-up": "^3.0.0",
          "read-pkg": "^3.0.0"
        },
        "dependencies": {
          "find-up": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
            "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
            "requires": {
              "locate-path": "^3.0.0"
            }
          },
          "locate-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
            "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
            "requires": {
              "p-locate": "^3.0.0",
              "path-exists": "^3.0.0"
            }
          },
          "p-limit": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
            "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
            "requires": {
              "p-try": "^2.0.0"
            }
          },
          "p-locate": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
            "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
            "requires": {
              "p-limit": "^2.0.0"
            }
          },
          "p-try": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
            "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
          }
        }
      },
      "readable-stream": {
        "version": "3.6.0",
        "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
        "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
        "requires": {
          "inherits": "^2.0.3",
          "string_decoder": "^1.1.1",
          "util-deprecate": "^1.0.1"
        }
      },
      "readdirp": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.3.0.tgz",
        "integrity": "sha512-zz0pAkSPOXXm1viEwygWIPSPkcBYjW1xU5j/JBh5t9bGCJwa6f9+BJa6VaB2g+b55yVrmXzqkyLf4xaWYM0IkQ==",
        "requires": {
          "picomatch": "^2.0.7"
        }
      },
      "realpath-native": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/realpath-native/-/realpath-native-1.1.0.tgz",
        "integrity": "sha512-wlgPA6cCIIg9gKz0fgAPjnzh4yR/LnXovwuo9hvyGvx3h8nX4+/iLZplfUWasXpqD8BdnGnP5njOFjkUwPzvjA==",
        "requires": {
          "util.promisify": "^1.0.0"
        }
      },
      "recursive-readdir": {
        "version": "2.2.2",
        "resolved": "https://registry.npmjs.org/recursive-readdir/-/recursive-readdir-2.2.2.tgz",
        "integrity": "sha512-nRCcW9Sj7NuZwa2XvH9co8NPeXUBhZP7CRKJtU+cS6PW9FpCIFoI5ib0NT1ZrbNuPoRy0ylyCaUL8Gih4LSyFg==",
        "requires": {
          "minimatch": "3.0.4"
        }
      },
      "redent": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/redent/-/redent-3.0.0.tgz",
        "integrity": "sha512-6tDA8g98We0zd0GvVeMT9arEOnTw9qM03L9cJXaCjrip1OO764RDBLBfrB4cwzNGDj5OA5ioymC9GkizgWJDUg==",
        "requires": {
          "indent-string": "^4.0.0",
          "strip-indent": "^3.0.0"
        }
      },
      "regenerate": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.0.tgz",
        "integrity": "sha512-1G6jJVDWrt0rK99kBjvEtziZNCICAuvIPkSiUFIQxVP06RCVpq3dmDo2oi6ABpYaDYaTRr67BEhL8r1wgEZZKg=="
      },
      "regenerate-unicode-properties": {
        "version": "8.2.0",
        "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-8.2.0.tgz",
        "integrity": "sha512-F9DjY1vKLo/tPePDycuH3dn9H1OTPIkVD9Kz4LODu+F2C75mgjAJ7x/gwy6ZcSNRAAkhNlJSOHRe8k3p+K9WhA==",
        "requires": {
          "regenerate": "^1.4.0"
        }
      },
      "regenerator-runtime": {
        "version": "0.13.5",
        "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.5.tgz",
        "integrity": "sha512-ZS5w8CpKFinUzOwW3c83oPeVXoNsrLsaCoLtJvAClH135j/R77RuymhiSErhm2lKcwSCIpmvIWSbDkIfAqKQlA=="
      },
      "regenerator-transform": {
        "version": "0.14.4",
        "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.14.4.tgz",
        "integrity": "sha512-EaJaKPBI9GvKpvUz2mz4fhx7WPgvwRLY9v3hlNHWmAuJHI13T4nwKnNvm5RWJzEdnI5g5UwtOww+S8IdoUC2bw==",
        "requires": {
          "@babel/runtime": "^7.8.4",
          "private": "^0.1.8"
        }
      },
      "regex-not": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
        "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
        "requires": {
          "extend-shallow": "^3.0.2",
          "safe-regex": "^1.1.0"
        }
      },
      "regex-parser": {
        "version": "2.2.10",
        "resolved": "https://registry.npmjs.org/regex-parser/-/regex-parser-2.2.10.tgz",
        "integrity": "sha512-8t6074A68gHfU8Neftl0Le6KTDwfGAj7IyjPIMSfikI2wJUTHDMaIq42bUsfVnj8mhx0R+45rdUXHGpN164avA=="
      },
      "regexp.prototype.flags": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.3.0.tgz",
        "integrity": "sha512-2+Q0C5g951OlYlJz6yu5/M33IcsESLlLfsyIaLJaG4FA2r4yP8MvVMJUUP/fVBkSpbbbZlS5gynbEWLipiiXiQ==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.0-next.1"
        }
      },
      "regexpp": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/regexpp/-/regexpp-3.1.0.tgz",
        "integrity": "sha512-ZOIzd8yVsQQA7j8GCSlPGXwg5PfmA1mrq0JP4nGhh54LaKN3xdai/vHUDu74pKwV8OxseMS65u2NImosQcSD0Q=="
      },
      "regexpu-core": {
        "version": "4.7.0",
        "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-4.7.0.tgz",
        "integrity": "sha512-TQ4KXRnIn6tz6tjnrXEkD/sshygKH/j5KzK86X8MkeHyZ8qst/LZ89j3X4/8HEIfHANTFIP/AbXakeRhWIl5YQ==",
        "requires": {
          "regenerate": "^1.4.0",
          "regenerate-unicode-properties": "^8.2.0",
          "regjsgen": "^0.5.1",
          "regjsparser": "^0.6.4",
          "unicode-match-property-ecmascript": "^1.0.4",
          "unicode-match-property-value-ecmascript": "^1.2.0"
        }
      },
      "regjsgen": {
        "version": "0.5.1",
        "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.5.1.tgz",
        "integrity": "sha512-5qxzGZjDs9w4tzT3TPhCJqWdCc3RLYwy9J2NB0nm5Lz+S273lvWcpjaTGHsT1dc6Hhfq41uSEOw8wBmxrKOuyg=="
      },
      "regjsparser": {
        "version": "0.6.4",
        "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.6.4.tgz",
        "integrity": "sha512-64O87/dPDgfk8/RQqC4gkZoGyyWFIEUTTh80CU6CWuK5vkCGyekIx+oKcEIYtP/RAxSQltCZHCNu/mdd7fqlJw==",
        "requires": {
          "jsesc": "~0.5.0"
        }
      },
      "relateurl": {
        "version": "0.2.7",
        "resolved": "https://registry.npmjs.org/relateurl/-/relateurl-0.2.7.tgz",
        "integrity": "sha1-VNvzd+UUQKypCkzSdGANP/LYiKk="
      },
      "remove-trailing-separator": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
        "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8="
      },
      "renderkid": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/renderkid/-/renderkid-2.0.3.tgz",
        "integrity": "sha512-z8CLQp7EZBPCwCnncgf9C4XAi3WR0dv+uWu/PjIyhhAb5d6IJ/QZqlHFprHeKT+59//V6BNUsLbvN8+2LarxGA==",
        "requires": {
          "css-select": "^1.1.0",
          "dom-converter": "^0.2",
          "htmlparser2": "^3.3.0",
          "strip-ansi": "^3.0.0",
          "utila": "^0.4.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
            "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
          },
          "css-select": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/css-select/-/css-select-1.2.0.tgz",
            "integrity": "sha1-KzoRBTnFNV8c2NMUYj6HCxIeyFg=",
            "requires": {
              "boolbase": "~1.0.0",
              "css-what": "2.1",
              "domutils": "1.5.1",
              "nth-check": "~1.0.1"
            }
          },
          "css-what": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/css-what/-/css-what-2.1.3.tgz",
            "integrity": "sha512-a+EPoD+uZiNfh+5fxw2nO9QwFa6nJe2Or35fGY6Ipw1R3R4AGz1d1TEZrCegvw2YTmZ0jXirGYlzxxpYSHwpEg=="
          },
          "domutils": {
            "version": "1.5.1",
            "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.5.1.tgz",
            "integrity": "sha1-3NhIiib1Y9YQeeSMn3t+Mjc2gs8=",
            "requires": {
              "dom-serializer": "0",
              "domelementtype": "1"
            }
          },
          "strip-ansi": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
            "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
            "requires": {
              "ansi-regex": "^2.0.0"
            }
          }
        }
      },
      "repeat-element": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.3.tgz",
        "integrity": "sha512-ahGq0ZnV5m5XtZLMb+vP76kcAM5nkLqk0lpqAuojSKGgQtn4eRi4ZZGm2olo2zKFH+sMsWaqOCW1dqAnOru72g=="
      },
      "repeat-string": {
        "version": "1.6.1",
        "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
        "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc="
      },
      "request": {
        "version": "2.88.2",
        "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
        "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
        "requires": {
          "aws-sign2": "~0.7.0",
          "aws4": "^1.8.0",
          "caseless": "~0.12.0",
          "combined-stream": "~1.0.6",
          "extend": "~3.0.2",
          "forever-agent": "~0.6.1",
          "form-data": "~2.3.2",
          "har-validator": "~5.1.3",
          "http-signature": "~1.2.0",
          "is-typedarray": "~1.0.0",
          "isstream": "~0.1.2",
          "json-stringify-safe": "~5.0.1",
          "mime-types": "~2.1.19",
          "oauth-sign": "~0.9.0",
          "performance-now": "^2.1.0",
          "qs": "~6.5.2",
          "safe-buffer": "^5.1.2",
          "tough-cookie": "~2.5.0",
          "tunnel-agent": "^0.6.0",
          "uuid": "^3.3.2"
        }
      },
      "request-promise-core": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.3.tgz",
        "integrity": "sha512-QIs2+ArIGQVp5ZYbWD5ZLCY29D5CfWizP8eWnm8FoGD1TX61veauETVQbrV60662V0oFBkrDOuaBI8XgtuyYAQ==",
        "requires": {
          "lodash": "^4.17.15"
        }
      },
      "request-promise-native": {
        "version": "1.0.8",
        "resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.8.tgz",
        "integrity": "sha512-dapwLGqkHtwL5AEbfenuzjTYg35Jd6KPytsC2/TLkVMz8rm+tNt72MGUWT1RP/aYawMpN6HqbNGBQaRcBtjQMQ==",
        "requires": {
          "request-promise-core": "1.1.3",
          "stealthy-require": "^1.1.1",
          "tough-cookie": "^2.3.3"
        }
      },
      "require-directory": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
        "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="
      },
      "require-main-filename": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
        "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg=="
      },
      "requires-port": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
        "integrity": "sha1-kl0mAdOaxIXgkc8NpcbmlNw9yv8="
      },
      "resolve": {
        "version": "1.15.0",
        "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.15.0.tgz",
        "integrity": "sha512-+hTmAldEGE80U2wJJDC1lebb5jWqvTYAfm3YZ1ckk1gBr0MnCqUKlwK1e+anaFljIl+F5tR5IoZcm4ZDA1zMQw==",
        "requires": {
          "path-parse": "^1.0.6"
        }
      },
      "resolve-cwd": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-2.0.0.tgz",
        "integrity": "sha1-AKn3OHVW4nA46uIyyqNypqWbZlo=",
        "requires": {
          "resolve-from": "^3.0.0"
        }
      },
      "resolve-from": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
        "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g="
      },
      "resolve-url": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
        "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo="
      },
      "resolve-url-loader": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/resolve-url-loader/-/resolve-url-loader-3.1.1.tgz",
        "integrity": "sha512-K1N5xUjj7v0l2j/3Sgs5b8CjrrgtC70SmdCuZiJ8tSyb5J+uk3FoeZ4b7yTnH6j7ngI+Bc5bldHJIa8hYdu2gQ==",
        "requires": {
          "adjust-sourcemap-loader": "2.0.0",
          "camelcase": "5.3.1",
          "compose-function": "3.0.3",
          "convert-source-map": "1.7.0",
          "es6-iterator": "2.0.3",
          "loader-utils": "1.2.3",
          "postcss": "7.0.21",
          "rework": "1.0.1",
          "rework-visit": "1.0.0",
          "source-map": "0.6.1"
        },
        "dependencies": {
          "emojis-list": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-2.1.0.tgz",
            "integrity": "sha1-TapNnbAPmBmIDHn6RXrlsJof04k="
          },
          "json5": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
            "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
            "requires": {
              "minimist": "^1.2.0"
            }
          },
          "loader-utils": {
            "version": "1.2.3",
            "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.2.3.tgz",
            "integrity": "sha512-fkpz8ejdnEMG3s37wGL07iSBDg99O9D5yflE9RGNH3hRdx9SOwYfnGYdZOUIZitN8E+E2vkq3MUMYMvPYl5ZZA==",
            "requires": {
              "big.js": "^5.2.2",
              "emojis-list": "^2.0.0",
              "json5": "^1.0.1"
            }
          },
          "postcss": {
            "version": "7.0.21",
            "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.21.tgz",
            "integrity": "sha512-uIFtJElxJo29QC753JzhidoAhvp/e/Exezkdhfmt8AymWT6/5B7W1WmponYWkHk2eg6sONyTch0A3nkMPun3SQ==",
            "requires": {
              "chalk": "^2.4.2",
              "source-map": "^0.6.1",
              "supports-color": "^6.1.0"
            }
          },
          "supports-color": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
            "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
            "requires": {
              "has-flag": "^3.0.0"
            }
          }
        }
      },
      "restore-cursor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
        "integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
        "requires": {
          "onetime": "^5.1.0",
          "signal-exit": "^3.0.2"
        }
      },
      "ret": {
        "version": "0.1.15",
        "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
        "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg=="
      },
      "retry": {
        "version": "0.12.0",
        "resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",
        "integrity": "sha1-G0KmJmoh8HQh0bC1S33BZ7AcATs="
      },
      "rework": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/rework/-/rework-1.0.1.tgz",
        "integrity": "sha1-MIBqhBNCtUUQqkEQhQzUhTQUSqc=",
        "requires": {
          "convert-source-map": "^0.3.3",
          "css": "^2.0.0"
        },
        "dependencies": {
          "convert-source-map": {
            "version": "0.3.5",
            "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-0.3.5.tgz",
            "integrity": "sha1-8dgClQr33SYxof6+BZZVDIarMZA="
          }
        }
      },
      "rework-visit": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/rework-visit/-/rework-visit-1.0.0.tgz",
        "integrity": "sha1-mUWygD8hni96ygCtuLyfZA+ELJo="
      },
      "rgb-regex": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/rgb-regex/-/rgb-regex-1.0.1.tgz",
        "integrity": "sha1-wODWiC3w4jviVKR16O3UGRX+rrE="
      },
      "rgba-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/rgba-regex/-/rgba-regex-1.0.0.tgz",
        "integrity": "sha1-QzdOLiyglosO8VI0YLfXMP8i7rM="
      },
      "rimraf": {
        "version": "2.6.3",
        "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.6.3.tgz",
        "integrity": "sha512-mwqeW5XsA2qAejG46gYdENaxXjx9onRNCfn7L0duuP4hCuTIi/QO7PDK07KJfp1d+izWPrzEJDcSqBa0OZQriA==",
        "requires": {
          "glob": "^7.1.3"
        }
      },
      "ripemd160": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/ripemd160/-/ripemd160-2.0.2.tgz",
        "integrity": "sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==",
        "requires": {
          "hash-base": "^3.0.0",
          "inherits": "^2.0.1"
        }
      },
      "rsvp": {
        "version": "4.8.5",
        "resolved": "https://registry.npmjs.org/rsvp/-/rsvp-4.8.5.tgz",
        "integrity": "sha512-nfMOlASu9OnRJo1mbEk2cz0D56a1MBNrJ7orjRZQG10XDyuvwksKbuXNp6qa+kbn839HwjwhBzhFmdsaEAfauA=="
      },
      "run-async": {
        "version": "2.4.0",
        "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.4.0.tgz",
        "integrity": "sha512-xJTbh/d7Lm7SBhc1tNvTpeCHaEzoyxPrqNlvSdMfBTYwaY++UJFyXUOxAtsRUXjlqOfj8luNaR9vjCh4KeV+pg==",
        "requires": {
          "is-promise": "^2.1.0"
        }
      },
      "run-queue": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/run-queue/-/run-queue-1.0.3.tgz",
        "integrity": "sha1-6Eg5bwV9Ij8kOGkkYY4laUFh7Ec=",
        "requires": {
          "aproba": "^1.1.1"
        }
      },
      "rxjs": {
        "version": "6.5.5",
        "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.5.5.tgz",
        "integrity": "sha512-WfQI+1gohdf0Dai/Bbmk5L5ItH5tYqm3ki2c5GdWhKjalzjg93N3avFjVStyZZz+A2Em+ZxKH5bNghw9UeylGQ==",
        "requires": {
          "tslib": "^1.9.0"
        }
      },
      "safe-buffer": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
        "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
      },
      "safe-regex": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
        "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
        "requires": {
          "ret": "~0.1.10"
        }
      },
      "safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "sane": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/sane/-/sane-4.1.0.tgz",
        "integrity": "sha512-hhbzAgTIX8O7SHfp2c8/kREfEn4qO/9q8C9beyY6+tvZ87EpoZ3i1RIEvp27YBswnNbY9mWd6paKVmKbAgLfZA==",
        "requires": {
          "@cnakazawa/watch": "^1.0.3",
          "anymatch": "^2.0.0",
          "capture-exit": "^2.0.0",
          "exec-sh": "^0.3.2",
          "execa": "^1.0.0",
          "fb-watchman": "^2.0.0",
          "micromatch": "^3.1.4",
          "minimist": "^1.1.1",
          "walker": "~1.0.5"
        }
      },
      "sanitize.css": {
        "version": "10.0.0",
        "resolved": "https://registry.npmjs.org/sanitize.css/-/sanitize.css-10.0.0.tgz",
        "integrity": "sha512-vTxrZz4dX5W86M6oVWVdOVe72ZiPs41Oi7Z6Km4W5Turyz28mrXSJhhEBZoRtzJWIv3833WKVwLSDWWkEfupMg=="
      },
      "sass-loader": {
        "version": "8.0.2",
        "resolved": "https://registry.npmjs.org/sass-loader/-/sass-loader-8.0.2.tgz",
        "integrity": "sha512-7o4dbSK8/Ol2KflEmSco4jTjQoV988bM82P9CZdmo9hR3RLnvNc0ufMNdMrB0caq38JQ/FgF4/7RcbcfKzxoFQ==",
        "requires": {
          "clone-deep": "^4.0.1",
          "loader-utils": "^1.2.3",
          "neo-async": "^2.6.1",
          "schema-utils": "^2.6.1",
          "semver": "^6.3.0"
        },
        "dependencies": {
          "clone-deep": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
            "integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
            "requires": {
              "is-plain-object": "^2.0.4",
              "kind-of": "^6.0.2",
              "shallow-clone": "^3.0.0"
            }
          },
          "kind-of": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
            "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
          },
          "shallow-clone": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
            "integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
            "requires": {
              "kind-of": "^6.0.2"
            }
          }
        }
      },
      "sax": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
        "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
      },
      "saxes": {
        "version": "3.1.11",
        "resolved": "https://registry.npmjs.org/saxes/-/saxes-3.1.11.tgz",
        "integrity": "sha512-Ydydq3zC+WYDJK1+gRxRapLIED9PWeSuuS41wqyoRmzvhhh9nc+QQrVMKJYzJFULazeGhzSV0QleN2wD3boh2g==",
        "requires": {
          "xmlchars": "^2.1.1"
        }
      },
      "scheduler": {
        "version": "0.19.1",
        "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.19.1.tgz",
        "integrity": "sha512-n/zwRWRYSUj0/3g/otKDRPMh6qv2SYMWNq85IEa8iZyAv8od9zDYpGSnpBEjNgcMNq6Scbu5KfIPxNF72R/2EA==",
        "requires": {
          "loose-envify": "^1.1.0",
          "object-assign": "^4.1.1"
        }
      },
      "schema-utils": {
        "version": "2.6.5",
        "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-2.6.5.tgz",
        "integrity": "sha512-5KXuwKziQrTVHh8j/Uxz+QUbxkaLW9X/86NBlx/gnKgtsZA2GIVMUn17qWhRFwF8jdYb3Dig5hRO/W5mZqy6SQ==",
        "requires": {
          "ajv": "^6.12.0",
          "ajv-keywords": "^3.4.1"
        }
      },
      "select-hose": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/select-hose/-/select-hose-2.0.0.tgz",
        "integrity": "sha1-Yl2GWPhlr0Psliv8N2o3NZpJlMo="
      },
      "selfsigned": {
        "version": "1.10.7",
        "resolved": "https://registry.npmjs.org/selfsigned/-/selfsigned-1.10.7.tgz",
        "integrity": "sha512-8M3wBCzeWIJnQfl43IKwOmC4H/RAp50S8DF60znzjW5GVqTcSe2vWclt7hmYVPkKPlHWOu5EaWOMZ2Y6W8ZXTA==",
        "requires": {
          "node-forge": "0.9.0"
        }
      },
      "semver": {
        "version": "6.3.0",
        "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
        "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
      },
      "send": {
        "version": "0.17.1",
        "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
        "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
        "requires": {
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "destroy": "~1.0.4",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "fresh": "0.5.2",
          "http-errors": "~1.7.2",
          "mime": "1.6.0",
          "ms": "2.1.1",
          "on-finished": "~2.3.0",
          "range-parser": "~1.2.1",
          "statuses": "~1.5.0"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
              "ms": "2.0.0"
            },
            "dependencies": {
              "ms": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
              }
            }
          },
          "mime": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
            "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
          },
          "ms": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
            "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
          }
        }
      },
      "serialize-javascript": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-2.1.2.tgz",
        "integrity": "sha512-rs9OggEUF0V4jUSecXazOYsLfu7OGK2qIn3c7IPBiffz32XniEp/TX9Xmc9LQfK2nQ2QKHvZ2oygKUGU0lG4jQ=="
      },
      "serve-index": {
        "version": "1.9.1",
        "resolved": "https://registry.npmjs.org/serve-index/-/serve-index-1.9.1.tgz",
        "integrity": "sha1-03aNabHn2C5c4FD/9bRTvqEqkjk=",
        "requires": {
          "accepts": "~1.3.4",
          "batch": "0.6.1",
          "debug": "2.6.9",
          "escape-html": "~1.0.3",
          "http-errors": "~1.6.2",
          "mime-types": "~2.1.17",
          "parseurl": "~1.3.2"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
              "ms": "2.0.0"
            }
          },
          "http-errors": {
            "version": "1.6.3",
            "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",
            "integrity": "sha1-i1VoC7S+KDoLW/TqLjhYC+HZMg0=",
            "requires": {
              "depd": "~1.1.2",
              "inherits": "2.0.3",
              "setprototypeof": "1.1.0",
              "statuses": ">= 1.4.0 < 2"
            }
          },
          "inherits": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
            "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
          },
          "setprototypeof": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",
            "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ=="
          }
        }
      },
      "serve-static": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
        "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
        "requires": {
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "parseurl": "~1.3.3",
          "send": "0.17.1"
        }
      },
      "set-blocking": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
        "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
      },
      "set-value": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
        "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
        "requires": {
          "extend-shallow": "^2.0.1",
          "is-extendable": "^0.1.1",
          "is-plain-object": "^2.0.3",
          "split-string": "^3.0.1"
        },
        "dependencies": {
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "requires": {
              "is-extendable": "^0.1.0"
            }
          }
        }
      },
      "setimmediate": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
        "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU="
      },
      "setprototypeof": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
        "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
      },
      "sha.js": {
        "version": "2.4.11",
        "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
        "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
        "requires": {
          "inherits": "^2.0.1",
          "safe-buffer": "^5.0.1"
        }
      },
      "shallow-clone": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-0.1.2.tgz",
        "integrity": "sha1-WQnodLp3EG1zrEFM/sH/yofZcGA=",
        "requires": {
          "is-extendable": "^0.1.1",
          "kind-of": "^2.0.1",
          "lazy-cache": "^0.2.3",
          "mixin-object": "^2.0.1"
        },
        "dependencies": {
          "kind-of": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-2.0.1.tgz",
            "integrity": "sha1-AY7HpM5+OobLkUG+UZ0kyPqpgbU=",
            "requires": {
              "is-buffer": "^1.0.2"
            }
          },
          "lazy-cache": {
            "version": "0.2.7",
            "resolved": "https://registry.npmjs.org/lazy-cache/-/lazy-cache-0.2.7.tgz",
            "integrity": "sha1-f+3fLctu23fRHvHRF6tf/fCrG2U="
          }
        }
      },
      "shallowequal": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/shallowequal/-/shallowequal-1.1.0.tgz",
        "integrity": "sha512-y0m1JoUZSlPAjXVtPPW70aZWfIL/dSP7AFkRnniLCrK/8MDKog3TySTBmckD+RObVxH0v4Tox67+F14PdED2oQ=="
      },
      "shebang-command": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
        "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
        "requires": {
          "shebang-regex": "^1.0.0"
        }
      },
      "shebang-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
        "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM="
      },
      "shell-quote": {
        "version": "1.7.2",
        "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.7.2.tgz",
        "integrity": "sha512-mRz/m/JVscCrkMyPqHc/bczi3OQHkLTqXHEFu0zDhK/qfv3UcOA4SVmRCLmos4bhjr9ekVQubj/R7waKapmiQg=="
      },
      "shellwords": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/shellwords/-/shellwords-0.1.1.tgz",
        "integrity": "sha512-vFwSUfQvqybiICwZY5+DAWIPLKsWO31Q91JSKl3UYv+K5c2QRPzn0qzec6QPu1Qc9eHYItiP3NdJqNVqetYAww=="
      },
      "side-channel": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.2.tgz",
        "integrity": "sha512-7rL9YlPHg7Ancea1S96Pa8/QWb4BtXL/TZvS6B8XFetGBeuhAsfmUspK6DokBeZ64+Kj9TCNRD/30pVz1BvQNA==",
        "requires": {
          "es-abstract": "^1.17.0-next.1",
          "object-inspect": "^1.7.0"
        }
      },
      "signal-exit": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
        "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA=="
      },
      "simple-swizzle": {
        "version": "0.2.2",
        "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
        "integrity": "sha1-pNprY1/8zMoz9w0Xy5JZLeleVXo=",
        "requires": {
          "is-arrayish": "^0.3.1"
        },
        "dependencies": {
          "is-arrayish": {
            "version": "0.3.2",
            "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
            "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ=="
          }
        }
      },
      "sisteransi": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
        "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg=="
      },
      "slash": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
        "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A=="
      },
      "slice-ansi": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-2.1.0.tgz",
        "integrity": "sha512-Qu+VC3EwYLldKa1fCxuuvULvSJOKEgk9pi8dZeCVK7TqBfUNTH4sFkk4joj8afVSfAYgJoSOetjx9QWOJ5mYoQ==",
        "requires": {
          "ansi-styles": "^3.2.0",
          "astral-regex": "^1.0.0",
          "is-fullwidth-code-point": "^2.0.0"
        },
        "dependencies": {
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
          }
        }
      },
      "snapdragon": {
        "version": "0.8.2",
        "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
        "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
        "requires": {
          "base": "^0.11.1",
          "debug": "^2.2.0",
          "define-property": "^0.2.5",
          "extend-shallow": "^2.0.1",
          "map-cache": "^0.2.2",
          "source-map": "^0.5.6",
          "source-map-resolve": "^0.5.0",
          "use": "^3.1.0"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
              "ms": "2.0.0"
            }
          },
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          },
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "requires": {
              "is-extendable": "^0.1.0"
            }
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
          },
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
          }
        }
      },
      "snapdragon-node": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
        "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
        "requires": {
          "define-property": "^1.0.0",
          "isobject": "^3.0.0",
          "snapdragon-util": "^3.0.1"
        },
        "dependencies": {
          "define-property": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
            "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
            "requires": {
              "is-descriptor": "^1.0.0"
            }
          },
          "is-accessor-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
            "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-data-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
            "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-descriptor": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
            "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
            "requires": {
              "is-accessor-descriptor": "^1.0.0",
              "is-data-descriptor": "^1.0.0",
              "kind-of": "^6.0.2"
            }
          },
          "kind-of": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
            "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
          }
        }
      },
      "snapdragon-util": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
        "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
        "requires": {
          "kind-of": "^3.2.0"
        }
      },
      "sockjs": {
        "version": "0.3.19",
        "resolved": "https://registry.npmjs.org/sockjs/-/sockjs-0.3.19.tgz",
        "integrity": "sha512-V48klKZl8T6MzatbLlzzRNhMepEys9Y4oGFpypBFFn1gLI/QQ9HtLLyWJNbPlwGLelOVOEijUbTTJeLLI59jLw==",
        "requires": {
          "faye-websocket": "^0.10.0",
          "uuid": "^3.0.1"
        }
      },
      "sockjs-client": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/sockjs-client/-/sockjs-client-1.4.0.tgz",
        "integrity": "sha512-5zaLyO8/nri5cua0VtOrFXBPK1jbL4+1cebT/mmKA1E1ZXOvJrII75bPu0l0k843G/+iAbhEqzyKr0w/eCCj7g==",
        "requires": {
          "debug": "^3.2.5",
          "eventsource": "^1.0.7",
          "faye-websocket": "~0.11.1",
          "inherits": "^2.0.3",
          "json3": "^3.3.2",
          "url-parse": "^1.4.3"
        },
        "dependencies": {
          "debug": {
            "version": "3.2.6",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
            "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
            "requires": {
              "ms": "^2.1.1"
            }
          },
          "faye-websocket": {
            "version": "0.11.3",
            "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.11.3.tgz",
            "integrity": "sha512-D2y4bovYpzziGgbHYtGCMjlJM36vAl/y+xUyn1C+FVx8szd1E+86KwVw6XvYSzOP8iMpm1X0I4xJD+QtUb36OA==",
            "requires": {
              "websocket-driver": ">=0.5.1"
            }
          }
        }
      },
      "sort-keys": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-1.1.2.tgz",
        "integrity": "sha1-RBttTTRnmPG05J6JIK37oOVD+a0=",
        "requires": {
          "is-plain-obj": "^1.0.0"
        }
      },
      "source-list-map": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/source-list-map/-/source-list-map-2.0.1.tgz",
        "integrity": "sha512-qnQ7gVMxGNxsiL4lEuJwe/To8UnK7fAnmbGEEH8RpLouuKbeEm0lhbQVFIrNSuB+G7tVrAlVsZgETT5nljf+Iw=="
      },
      "source-map": {
        "version": "0.6.1",
        "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
        "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
      },
      "source-map-resolve": {
        "version": "0.5.3",
        "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
        "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
        "requires": {
          "atob": "^2.1.2",
          "decode-uri-component": "^0.2.0",
          "resolve-url": "^0.2.1",
          "source-map-url": "^0.4.0",
          "urix": "^0.1.0"
        }
      },
      "source-map-support": {
        "version": "0.5.16",
        "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.16.tgz",
        "integrity": "sha512-efyLRJDr68D9hBBNIPWFjhpFzURh+KJykQwvMyW5UiZzYwoF6l4YMMDIJJEyFWxWCqfyxLzz6tSfUFR+kXXsVQ==",
        "requires": {
          "buffer-from": "^1.0.0",
          "source-map": "^0.6.0"
        }
      },
      "source-map-url": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.0.tgz",
        "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM="
      },
      "spdx-correct": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.0.tgz",
        "integrity": "sha512-lr2EZCctC2BNR7j7WzJ2FpDznxky1sjfxvvYEyzxNyb6lZXHODmEoJeFu4JupYlkfha1KZpJyoqiJ7pgA1qq8Q==",
        "requires": {
          "spdx-expression-parse": "^3.0.0",
          "spdx-license-ids": "^3.0.0"
        }
      },
      "spdx-exceptions": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.2.0.tgz",
        "integrity": "sha512-2XQACfElKi9SlVb1CYadKDXvoajPgBVPn/gOQLrTvHdElaVhr7ZEbqJaRnJLVNeaI4cMEAgVCeBMKF6MWRDCRA=="
      },
      "spdx-expression-parse": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
        "integrity": "sha512-Yg6D3XpRD4kkOmTpdgbUiEJFKghJH03fiC1OPll5h/0sO6neh2jqRDVHOQ4o/LMea0tgCkbMgea5ip/e+MkWyg==",
        "requires": {
          "spdx-exceptions": "^2.1.0",
          "spdx-license-ids": "^3.0.0"
        }
      },
      "spdx-license-ids": {
        "version": "3.0.5",
        "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.5.tgz",
        "integrity": "sha512-J+FWzZoynJEXGphVIS+XEh3kFSjZX/1i9gFBaWQcB+/tmpe2qUsSBABpcxqxnAxFdiUFEgAX1bjYGQvIZmoz9Q=="
      },
      "spdy": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/spdy/-/spdy-4.0.2.tgz",
        "integrity": "sha512-r46gZQZQV+Kl9oItvl1JZZqJKGr+oEkB08A6BzkiR7593/7IbtuncXHd2YoYeTsG4157ZssMu9KYvUHLcjcDoA==",
        "requires": {
          "debug": "^4.1.0",
          "handle-thing": "^2.0.0",
          "http-deceiver": "^1.2.7",
          "select-hose": "^2.0.0",
          "spdy-transport": "^3.0.0"
        }
      },
      "spdy-transport": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/spdy-transport/-/spdy-transport-3.0.0.tgz",
        "integrity": "sha512-hsLVFE5SjA6TCisWeJXFKniGGOpBgMLmerfO2aCyCU5s7nJ/rpAepqmFifv/GCbSbueEeAJJnmSQ2rKC/g8Fcw==",
        "requires": {
          "debug": "^4.1.0",
          "detect-node": "^2.0.4",
          "hpack.js": "^2.1.6",
          "obuf": "^1.1.2",
          "readable-stream": "^3.0.6",
          "wbuf": "^1.7.3"
        }
      },
      "split-string": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
        "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
        "requires": {
          "extend-shallow": "^3.0.0"
        }
      },
      "sprintf-js": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
        "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw="
      },
      "sshpk": {
        "version": "1.16.1",
        "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
        "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
        "requires": {
          "asn1": "~0.2.3",
          "assert-plus": "^1.0.0",
          "bcrypt-pbkdf": "^1.0.0",
          "dashdash": "^1.12.0",
          "ecc-jsbn": "~0.1.1",
          "getpass": "^0.1.1",
          "jsbn": "~0.1.0",
          "safer-buffer": "^2.0.2",
          "tweetnacl": "~0.14.0"
        }
      },
      "ssri": {
        "version": "7.1.0",
        "resolved": "https://registry.npmjs.org/ssri/-/ssri-7.1.0.tgz",
        "integrity": "sha512-77/WrDZUWocK0mvA5NTRQyveUf+wsrIc6vyrxpS8tVvYBcX215QbafrJR3KtkpskIzoFLqqNuuYQvxaMjXJ/0g==",
        "requires": {
          "figgy-pudding": "^3.5.1",
          "minipass": "^3.1.1"
        }
      },
      "stable": {
        "version": "0.1.8",
        "resolved": "https://registry.npmjs.org/stable/-/stable-0.1.8.tgz",
        "integrity": "sha512-ji9qxRnOVfcuLDySj9qzhGSEFVobyt1kIOSkj1qZzYLzq7Tos/oUUWvotUPQLlrsidqsK6tBH89Bc9kL5zHA6w=="
      },
      "stack-utils": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-1.0.2.tgz",
        "integrity": "sha512-MTX+MeG5U994cazkjd/9KNAapsHnibjMLnfXodlkXw76JEea0UiNzrqidzo1emMwk7w5Qhc9jd4Bn9TBb1MFwA=="
      },
      "static-extend": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
        "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
        "requires": {
          "define-property": "^0.2.5",
          "object-copy": "^0.1.0"
        },
        "dependencies": {
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          }
        }
      },
      "statuses": {
        "version": "1.5.0",
        "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
        "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
      },
      "stealthy-require": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/stealthy-require/-/stealthy-require-1.1.1.tgz",
        "integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks="
      },
      "stream-browserify": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/stream-browserify/-/stream-browserify-2.0.2.tgz",
        "integrity": "sha512-nX6hmklHs/gr2FuxYDltq8fJA1GDlxKQCz8O/IM4atRqBH8OORmBNgfvW5gG10GT/qQ9u0CzIvr2X5Pkt6ntqg==",
        "requires": {
          "inherits": "~2.0.1",
          "readable-stream": "^2.0.2"
        },
        "dependencies": {
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "stream-each": {
        "version": "1.2.3",
        "resolved": "https://registry.npmjs.org/stream-each/-/stream-each-1.2.3.tgz",
        "integrity": "sha512-vlMC2f8I2u/bZGqkdfLQW/13Zihpej/7PmSiMQsbYddxuTsJp8vRe2x2FvVExZg7FaOds43ROAuFJwPR4MTZLw==",
        "requires": {
          "end-of-stream": "^1.1.0",
          "stream-shift": "^1.0.0"
        }
      },
      "stream-http": {
        "version": "2.8.3",
        "resolved": "https://registry.npmjs.org/stream-http/-/stream-http-2.8.3.tgz",
        "integrity": "sha512-+TSkfINHDo4J+ZobQLWiMouQYB+UVYFttRA94FpEzzJ7ZdqcL4uUUQ7WkdkI4DSozGmgBUE/a47L+38PenXhUw==",
        "requires": {
          "builtin-status-codes": "^3.0.0",
          "inherits": "^2.0.1",
          "readable-stream": "^2.3.6",
          "to-arraybuffer": "^1.0.0",
          "xtend": "^4.0.0"
        },
        "dependencies": {
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "stream-shift": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.1.tgz",
        "integrity": "sha512-AiisoFqQ0vbGcZgQPY1cdP2I76glaVA/RauYR4G4thNFgkTqr90yXTo4LYX60Jl+sIlPNHHdGSwo01AvbKUSVQ=="
      },
      "strict-uri-encode": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-1.1.0.tgz",
        "integrity": "sha1-J5siXfHVgrH1TmWt3UNS4Y+qBxM="
      },
      "string-length": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/string-length/-/string-length-2.0.0.tgz",
        "integrity": "sha1-1A27aGo6zpYMHP/KVivyxF+DY+0=",
        "requires": {
          "astral-regex": "^1.0.0",
          "strip-ansi": "^4.0.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
            "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
          },
          "strip-ansi": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
            "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
            "requires": {
              "ansi-regex": "^3.0.0"
            }
          }
        }
      },
      "string-width": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
        "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
        "requires": {
          "emoji-regex": "^8.0.0",
          "is-fullwidth-code-point": "^3.0.0",
          "strip-ansi": "^6.0.0"
        },
        "dependencies": {
          "strip-ansi": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
            "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
            "requires": {
              "ansi-regex": "^5.0.0"
            }
          }
        }
      },
      "string.prototype.matchall": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.2.tgz",
        "integrity": "sha512-N/jp6O5fMf9os0JU3E72Qhf590RSRZU/ungsL/qJUYVTNv7hTG0P/dbPjxINVN9jpscu3nzYwKESU3P3RY5tOg==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.0",
          "has-symbols": "^1.0.1",
          "internal-slot": "^1.0.2",
          "regexp.prototype.flags": "^1.3.0",
          "side-channel": "^1.0.2"
        }
      },
      "string.prototype.trimend": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.1.tgz",
        "integrity": "sha512-LRPxFUaTtpqYsTeNKaFOw3R4bxIzWOnbQ837QfBylo8jIxtcbK/A/sMV7Q+OAV/vWo+7s25pOE10KYSjaSO06g==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.5"
        }
      },
      "string.prototype.trimleft": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/string.prototype.trimleft/-/string.prototype.trimleft-2.1.2.tgz",
        "integrity": "sha512-gCA0tza1JBvqr3bfAIFJGqfdRTyPae82+KTnm3coDXkZN9wnuW3HjGgN386D7hfv5CHQYCI022/rJPVlqXyHSw==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.5",
          "string.prototype.trimstart": "^1.0.0"
        }
      },
      "string.prototype.trimright": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/string.prototype.trimright/-/string.prototype.trimright-2.1.2.tgz",
        "integrity": "sha512-ZNRQ7sY3KroTaYjRS6EbNiiHrOkjihL9aQE/8gfQ4DtAC/aEBRHFJa44OmoWxGGqXuJlfKkZW4WcXErGr+9ZFg==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.5",
          "string.prototype.trimend": "^1.0.0"
        }
      },
      "string.prototype.trimstart": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.1.tgz",
        "integrity": "sha512-XxZn+QpvrBI1FOcg6dIpxUPgWCPuNXvMD72aaRaUQv1eD4e/Qy8i/hFTe0BUmD60p/QA6bh1avmuPTfNjqVWRw==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.5"
        }
      },
      "string_decoder": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
        "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
        "requires": {
          "safe-buffer": "~5.2.0"
        },
        "dependencies": {
          "safe-buffer": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.0.tgz",
            "integrity": "sha512-fZEwUGbVl7kouZs1jCdMLdt95hdIv0ZeHg6L7qPeciMZhZ+/gdesW4wgTARkrFWEpspjEATAzUGPG8N2jJiwbg=="
          }
        }
      },
      "stringify-object": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/stringify-object/-/stringify-object-3.3.0.tgz",
        "integrity": "sha512-rHqiFh1elqCQ9WPLIC8I0Q/g/wj5J1eMkyoiD6eoQApWHP0FtlK7rqnhmabL5VUY9JQCcqwwvlOaSuutekgyrw==",
        "requires": {
          "get-own-enumerable-property-symbols": "^3.0.0",
          "is-obj": "^1.0.1",
          "is-regexp": "^1.0.0"
        },
        "dependencies": {
          "is-obj": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-1.0.1.tgz",
            "integrity": "sha1-PkcprB9f3gJc19g6iW2rn09n2w8="
          }
        }
      },
      "strip-ansi": {
        "version": "5.2.0",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
        "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
        "requires": {
          "ansi-regex": "^4.1.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
            "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
          }
        }
      },
      "strip-bom": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
        "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM="
      },
      "strip-comments": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/strip-comments/-/strip-comments-1.0.2.tgz",
        "integrity": "sha512-kL97alc47hoyIQSV165tTt9rG5dn4w1dNnBhOQ3bOU1Nc1hel09jnXANaHJ7vzHLd4Ju8kseDGzlev96pghLFw==",
        "requires": {
          "babel-extract-comments": "^1.0.0",
          "babel-plugin-transform-object-rest-spread": "^6.26.0"
        }
      },
      "strip-eof": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
        "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8="
      },
      "strip-indent": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-3.0.0.tgz",
        "integrity": "sha512-laJTa3Jb+VQpaC6DseHhF7dXVqHTfJPCRDaEbid/drOhgitgYku/letMUqOXFoWV0zIIUbjpdH2t+tYj4bQMRQ==",
        "requires": {
          "min-indent": "^1.0.0"
        }
      },
      "strip-json-comments": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.0.tgz",
        "integrity": "sha512-e6/d0eBu7gHtdCqFt0xJr642LdToM5/cN4Qb9DbHjVx1CP5RyeM+zH7pbecEmDv/lBqb0QH+6Uqq75rxFPkM0w=="
      },
      "style-component": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/style-component/-/style-component-0.0.1.tgz",
        "integrity": "sha1-UVfYk+nD3ZOwBEZxn4NXVn7xjlc="
      },
      "style-loader": {
        "version": "0.23.1",
        "resolved": "https://registry.npmjs.org/style-loader/-/style-loader-0.23.1.tgz",
        "integrity": "sha512-XK+uv9kWwhZMZ1y7mysB+zoihsEj4wneFWAS5qoiLwzW0WzSqMrrsIy+a3zkQJq0ipFtBpX5W3MqyRIBF/WFGg==",
        "requires": {
          "loader-utils": "^1.1.0",
          "schema-utils": "^1.0.0"
        },
        "dependencies": {
          "schema-utils": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
            "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
            "requires": {
              "ajv": "^6.1.0",
              "ajv-errors": "^1.0.0",
              "ajv-keywords": "^3.1.0"
            }
          }
        }
      },
      "styled-components": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/styled-components/-/styled-components-5.1.0.tgz",
        "integrity": "sha512-0Qs2wEkFBXHFlysz6CV831VG6HedcrFUwChjnWylNivsx14MtmqQsohi21rMHZxzuTba063dEyoe/SR6VGJI7Q==",
        "requires": {
          "@babel/helper-module-imports": "^7.0.0",
          "@babel/traverse": "^7.4.5",
          "@emotion/is-prop-valid": "^0.8.8",
          "@emotion/stylis": "^0.8.4",
          "@emotion/unitless": "^0.7.4",
          "babel-plugin-styled-components": ">= 1",
          "css-to-react-native": "^3.0.0",
          "hoist-non-react-statics": "^3.0.0",
          "shallowequal": "^1.1.0",
          "supports-color": "^5.5.0"
        }
      },
      "stylehacks": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/stylehacks/-/stylehacks-4.0.3.tgz",
        "integrity": "sha512-7GlLk9JwlElY4Y6a/rmbH2MhVlTyVmiJd1PfTCqFaIBEGMYNsrO/v3SeGTdhBThLg4Z+NbOk/qFMwCa+J+3p/g==",
        "requires": {
          "browserslist": "^4.0.0",
          "postcss": "^7.0.0",
          "postcss-selector-parser": "^3.0.0"
        },
        "dependencies": {
          "postcss-selector-parser": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
            "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
            "requires": {
              "dot-prop": "^5.2.0",
              "indexes-of": "^1.0.1",
              "uniq": "^1.0.1"
            }
          }
        }
      },
      "supports-color": {
        "version": "5.5.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
        "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
        "requires": {
          "has-flag": "^3.0.0"
        }
      },
      "svg-parser": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/svg-parser/-/svg-parser-2.0.4.tgz",
        "integrity": "sha512-e4hG1hRwoOdRb37cIMSgzNsxyzKfayW6VOflrwvR+/bzrkyxY/31WkbgnQpgtrNp1SdpJvpUAGTa/ZoiPNDuRQ=="
      },
      "svgo": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/svgo/-/svgo-1.3.2.tgz",
        "integrity": "sha512-yhy/sQYxR5BkC98CY7o31VGsg014AKLEPxdfhora76l36hD9Rdy5NZA/Ocn6yayNPgSamYdtX2rFJdcv07AYVw==",
        "requires": {
          "chalk": "^2.4.1",
          "coa": "^2.0.2",
          "css-select": "^2.0.0",
          "css-select-base-adapter": "^0.1.1",
          "css-tree": "1.0.0-alpha.37",
          "csso": "^4.0.2",
          "js-yaml": "^3.13.1",
          "mkdirp": "~0.5.1",
          "object.values": "^1.1.0",
          "sax": "~1.2.4",
          "stable": "^0.1.8",
          "unquote": "~1.1.1",
          "util.promisify": "~1.0.0"
        }
      },
      "symbol-tree": {
        "version": "3.2.4",
        "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
        "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw=="
      },
      "table": {
        "version": "5.4.6",
        "resolved": "https://registry.npmjs.org/table/-/table-5.4.6.tgz",
        "integrity": "sha512-wmEc8m4fjnob4gt5riFRtTu/6+4rSe12TpAELNSqHMfF3IqnA+CH37USM6/YR3qRZv7e56kAEAtd6nKZaxe0Ug==",
        "requires": {
          "ajv": "^6.10.2",
          "lodash": "^4.17.14",
          "slice-ansi": "^2.1.0",
          "string-width": "^3.0.0"
        },
        "dependencies": {
          "emoji-regex": {
            "version": "7.0.3",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
            "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
          },
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
          },
          "string-width": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
            "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
            "requires": {
              "emoji-regex": "^7.0.1",
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^5.1.0"
            }
          }
        }
      },
      "tapable": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/tapable/-/tapable-1.1.3.tgz",
        "integrity": "sha512-4WK/bYZmj8xLr+HUCODHGF1ZFzsYffasLUgEiMBY4fgtltdO6B4WJtlSbPaDTLpYTcGVwM2qLnFTICEcNxs3kA=="
      },
      "terser": {
        "version": "4.6.11",
        "resolved": "https://registry.npmjs.org/terser/-/terser-4.6.11.tgz",
        "integrity": "sha512-76Ynm7OXUG5xhOpblhytE7X58oeNSmC8xnNhjWVo8CksHit0U0kO4hfNbPrrYwowLWFgM2n9L176VNx2QaHmtA==",
        "requires": {
          "commander": "^2.20.0",
          "source-map": "~0.6.1",
          "source-map-support": "~0.5.12"
        }
      },
      "terser-webpack-plugin": {
        "version": "2.3.5",
        "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-2.3.5.tgz",
        "integrity": "sha512-WlWksUoq+E4+JlJ+h+U+QUzXpcsMSSNXkDy9lBVkSqDn1w23Gg29L/ary9GeJVYCGiNJJX7LnVc4bwL1N3/g1w==",
        "requires": {
          "cacache": "^13.0.1",
          "find-cache-dir": "^3.2.0",
          "jest-worker": "^25.1.0",
          "p-limit": "^2.2.2",
          "schema-utils": "^2.6.4",
          "serialize-javascript": "^2.1.2",
          "source-map": "^0.6.1",
          "terser": "^4.4.3",
          "webpack-sources": "^1.4.3"
        },
        "dependencies": {
          "find-cache-dir": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.1.tgz",
            "integrity": "sha512-t2GDMt3oGC/v+BMwzmllWDuJF/xcDtE5j/fCGbqDD7OLuJkj0cfh1YSA5VKPvwMeLFLNDBkwOKZ2X85jGLVftQ==",
            "requires": {
              "commondir": "^1.0.1",
              "make-dir": "^3.0.2",
              "pkg-dir": "^4.1.0"
            }
          },
          "find-up": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
            "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
            "requires": {
              "locate-path": "^5.0.0",
              "path-exists": "^4.0.0"
            }
          },
          "has-flag": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
          },
          "jest-worker": {
            "version": "25.2.6",
            "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-25.2.6.tgz",
            "integrity": "sha512-FJn9XDUSxcOR4cwDzRfL1z56rUofNTFs539FGASpd50RHdb6EVkhxQqktodW2mI49l+W3H+tFJDotCHUQF6dmA==",
            "requires": {
              "merge-stream": "^2.0.0",
              "supports-color": "^7.0.0"
            }
          },
          "locate-path": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
            "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
            "requires": {
              "p-locate": "^4.1.0"
            }
          },
          "make-dir": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.0.2.tgz",
            "integrity": "sha512-rYKABKutXa6vXTXhoV18cBE7PaewPXHe/Bdq4v+ZLMhxbWApkFFplT0LcbMW+6BbjnQXzZ/sAvSE/JdguApG5w==",
            "requires": {
              "semver": "^6.0.0"
            }
          },
          "p-limit": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
            "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
            "requires": {
              "p-try": "^2.0.0"
            }
          },
          "p-locate": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
            "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
            "requires": {
              "p-limit": "^2.2.0"
            }
          },
          "p-try": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
            "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
          },
          "path-exists": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
            "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="
          },
          "pkg-dir": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
            "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
            "requires": {
              "find-up": "^4.0.0"
            }
          },
          "supports-color": {
            "version": "7.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
            "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
            "requires": {
              "has-flag": "^4.0.0"
            }
          }
        }
      },
      "test-exclude": {
        "version": "5.2.3",
        "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-5.2.3.tgz",
        "integrity": "sha512-M+oxtseCFO3EDtAaGH7iiej3CBkzXqFMbzqYAACdzKui4eZA+pq3tZEwChvOdNfa7xxy8BfbmgJSIr43cC/+2g==",
        "requires": {
          "glob": "^7.1.3",
          "minimatch": "^3.0.4",
          "read-pkg-up": "^4.0.0",
          "require-main-filename": "^2.0.0"
        }
      },
      "text-table": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
        "integrity": "sha1-f17oI66AUgfACvLfSoTsP8+lcLQ="
      },
      "throat": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/throat/-/throat-4.1.0.tgz",
        "integrity": "sha1-iQN8vJLFarGJJua6TLsgDhVnKmo="
      },
      "through": {
        "version": "2.3.8",
        "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
        "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU="
      },
      "through2": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
        "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
        "requires": {
          "readable-stream": "~2.3.6",
          "xtend": "~4.0.1"
        },
        "dependencies": {
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "thunky": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/thunky/-/thunky-1.1.0.tgz",
        "integrity": "sha512-eHY7nBftgThBqOyHGVN+l8gF0BucP09fMo0oO/Lb0w1OF80dJv+lDVpXG60WMQvkcxAkNybKsrEIE3ZtKGmPrA=="
      },
      "timers-browserify": {
        "version": "2.0.11",
        "resolved": "https://registry.npmjs.org/timers-browserify/-/timers-browserify-2.0.11.tgz",
        "integrity": "sha512-60aV6sgJ5YEbzUdn9c8kYGIqOubPoUdqQCul3SBAsRCZ40s6Y5cMcrW4dt3/k/EsbLVJNl9n6Vz3fTc+k2GeKQ==",
        "requires": {
          "setimmediate": "^1.0.4"
        }
      },
      "timsort": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/timsort/-/timsort-0.3.0.tgz",
        "integrity": "sha1-QFQRqOfmM5/mTbmiNN4R3DHgK9Q="
      },
      "tmp": {
        "version": "0.0.33",
        "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
        "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
        "requires": {
          "os-tmpdir": "~1.0.2"
        }
      },
      "tmpl": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.4.tgz",
        "integrity": "sha1-I2QN17QtAEM5ERQIIOXPRA5SHdE="
      },
      "to-arraybuffer": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/to-arraybuffer/-/to-arraybuffer-1.0.1.tgz",
        "integrity": "sha1-fSKbH8xjfkZsoIEYCDanqr/4P0M="
      },
      "to-object-path": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
        "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
        "requires": {
          "kind-of": "^3.0.2"
        }
      },
      "to-regex": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
        "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
        "requires": {
          "define-property": "^2.0.2",
          "extend-shallow": "^3.0.2",
          "regex-not": "^1.0.2",
          "safe-regex": "^1.1.0"
        }
      },
      "to-regex-range": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
        "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
        "requires": {
          "is-number": "^3.0.0",
          "repeat-string": "^1.6.1"
        }
      },
      "toidentifier": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
        "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw=="
      },
      "tough-cookie": {
        "version": "2.5.0",
        "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
        "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
        "requires": {
          "psl": "^1.1.28",
          "punycode": "^2.1.1"
        }
      },
      "tr46": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/tr46/-/tr46-1.0.1.tgz",
        "integrity": "sha1-qLE/1r/SSJUZZ0zN5VujaTtwbQk=",
        "requires": {
          "punycode": "^2.1.0"
        }
      },
      "ts-pnp": {
        "version": "1.1.6",
        "resolved": "https://registry.npmjs.org/ts-pnp/-/ts-pnp-1.1.6.tgz",
        "integrity": "sha512-CrG5GqAAzMT7144Cl+UIFP7mz/iIhiy+xQ6GGcnjTezhALT02uPMRw7tgDSESgB5MsfKt55+GPWw4ir1kVtMIQ=="
      },
      "tslib": {
        "version": "1.11.1",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.11.1.tgz",
        "integrity": "sha512-aZW88SY8kQbU7gpV19lN24LtXh/yD4ZZg6qieAJDDg+YBsJcSmLGK9QpnUjAKVG/xefmvJGd1WUmfpT/g6AJGA=="
      },
      "tsutils": {
        "version": "3.17.1",
        "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-3.17.1.tgz",
        "integrity": "sha512-kzeQ5B8H3w60nFY2g8cJIuH7JDpsALXySGtwGJ0p2LSjLgay3NdIpqq5SoOBe46bKDW2iq25irHCr8wjomUS2g==",
        "requires": {
          "tslib": "^1.8.1"
        }
      },
      "tty-browserify": {
        "version": "0.0.0",
        "resolved": "https://registry.npmjs.org/tty-browserify/-/tty-browserify-0.0.0.tgz",
        "integrity": "sha1-oVe6QC2iTpv5V/mqadUk7tQpAaY="
      },
      "tunnel-agent": {
        "version": "0.6.0",
        "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
        "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
        "requires": {
          "safe-buffer": "^5.0.1"
        }
      },
      "tweetnacl": {
        "version": "0.14.5",
        "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
        "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q="
      },
      "type": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/type/-/type-1.2.0.tgz",
        "integrity": "sha512-+5nt5AAniqsCnu2cEQQdpzCAh33kVx8n0VoFidKpB1dVVLAN/F+bgVOqOJqOnEnrhp222clB5p3vUlD+1QAnfg=="
      },
      "type-check": {
        "version": "0.3.2",
        "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
        "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
        "requires": {
          "prelude-ls": "~1.1.2"
        }
      },
      "type-fest": {
        "version": "0.8.1",
        "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
        "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA=="
      },
      "type-is": {
        "version": "1.6.18",
        "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
        "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
        "requires": {
          "media-typer": "0.3.0",
          "mime-types": "~2.1.24"
        }
      },
      "typedarray": {
        "version": "0.0.6",
        "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
        "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c="
      },
      "unicode-canonical-property-names-ecmascript": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-1.0.4.tgz",
        "integrity": "sha512-jDrNnXWHd4oHiTZnx/ZG7gtUTVp+gCcTTKr8L0HjlwphROEW3+Him+IpvC+xcJEFegapiMZyZe02CyuOnRmbnQ=="
      },
      "unicode-match-property-ecmascript": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-1.0.4.tgz",
        "integrity": "sha512-L4Qoh15vTfntsn4P1zqnHulG0LdXgjSO035fEpdtp6YxXhMT51Q6vgM5lYdG/5X3MjS+k/Y9Xw4SFCY9IkR0rg==",
        "requires": {
          "unicode-canonical-property-names-ecmascript": "^1.0.4",
          "unicode-property-aliases-ecmascript": "^1.0.4"
        }
      },
      "unicode-match-property-value-ecmascript": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-1.2.0.tgz",
        "integrity": "sha512-wjuQHGQVofmSJv1uVISKLE5zO2rNGzM/KCYZch/QQvez7C1hUhBIuZ701fYXExuufJFMPhv2SyL8CyoIfMLbIQ=="
      },
      "unicode-property-aliases-ecmascript": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-1.1.0.tgz",
        "integrity": "sha512-PqSoPh/pWetQ2phoj5RLiaqIk4kCNwoV3CI+LfGmWLKI3rE3kl1h59XpX2BjgDrmbxD9ARtQobPGU1SguCYuQg=="
      },
      "union-value": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
        "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
        "requires": {
          "arr-union": "^3.1.0",
          "get-value": "^2.0.6",
          "is-extendable": "^0.1.1",
          "set-value": "^2.0.1"
        }
      },
      "uniq": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/uniq/-/uniq-1.0.1.tgz",
        "integrity": "sha1-sxxa6CVIRKOoKBVBzisEuGWnNP8="
      },
      "uniqs": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/uniqs/-/uniqs-2.0.0.tgz",
        "integrity": "sha1-/+3ks2slKQaW5uFl1KWe25mOawI="
      },
      "unique-filename": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-1.1.1.tgz",
        "integrity": "sha512-Vmp0jIp2ln35UTXuryvjzkjGdRyf9b2lTXuSYUiPmzRcl3FDtYqAwOnTJkAngD9SWhnoJzDbTKwaOrZ+STtxNQ==",
        "requires": {
          "unique-slug": "^2.0.0"
        }
      },
      "unique-slug": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-2.0.2.tgz",
        "integrity": "sha512-zoWr9ObaxALD3DOPfjPSqxt4fnZiWblxHIgeWqW8x7UqDzEtHEQLzji2cuJYQFCU6KmoJikOYAZlrTHHebjx2w==",
        "requires": {
          "imurmurhash": "^0.1.4"
        }
      },
      "universalify": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
        "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
      },
      "unpipe": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
        "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
      },
      "unquote": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/unquote/-/unquote-1.1.1.tgz",
        "integrity": "sha1-j97XMk7G6IoP+LkF58CYzcCG1UQ="
      },
      "unset-value": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
        "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
        "requires": {
          "has-value": "^0.3.1",
          "isobject": "^3.0.0"
        },
        "dependencies": {
          "has-value": {
            "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
            "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
            "requires": {
              "get-value": "^2.0.3",
              "has-values": "^0.1.4",
              "isobject": "^2.0.0"
            },
            "dependencies": {
              "isobject": {
                "version": "2.1.0",
                "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
                "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
                "requires": {
                  "isarray": "1.0.0"
                }
              }
            }
          },
          "has-values": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
            "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E="
          }
        }
      },
      "upath": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
        "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg=="
      },
      "uri-js": {
        "version": "4.2.2",
        "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
        "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
        "requires": {
          "punycode": "^2.1.0"
        }
      },
      "urix": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
        "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI="
      },
      "url": {
        "version": "0.11.0",
        "resolved": "https://registry.npmjs.org/url/-/url-0.11.0.tgz",
        "integrity": "sha1-ODjpfPxgUh63PFJajlW/3Z4uKPE=",
        "requires": {
          "punycode": "1.3.2",
          "querystring": "0.2.0"
        },
        "dependencies": {
          "punycode": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz",
            "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0="
          }
        }
      },
      "url-loader": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/url-loader/-/url-loader-2.3.0.tgz",
        "integrity": "sha512-goSdg8VY+7nPZKUEChZSEtW5gjbS66USIGCeSJ1OVOJ7Yfuh/36YxCwMi5HVEJh6mqUYOoy3NJ0vlOMrWsSHog==",
        "requires": {
          "loader-utils": "^1.2.3",
          "mime": "^2.4.4",
          "schema-utils": "^2.5.0"
        }
      },
      "url-parse": {
        "version": "1.4.7",
        "resolved": "https://registry.npmjs.org/url-parse/-/url-parse-1.4.7.tgz",
        "integrity": "sha512-d3uaVyzDB9tQoSXFvuSUNFibTd9zxd2bkVrDRvF5TmvWWQwqE4lgYJ5m+x1DbecWkw+LK4RNl2CU1hHuOKPVlg==",
        "requires": {
          "querystringify": "^2.1.1",
          "requires-port": "^1.0.0"
        }
      },
      "use": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
        "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ=="
      },
      "util": {
        "version": "0.10.3",
        "resolved": "https://registry.npmjs.org/util/-/util-0.10.3.tgz",
        "integrity": "sha1-evsa/lCAUkZInj23/g7TeTNqwPk=",
        "requires": {
          "inherits": "2.0.1"
        },
        "dependencies": {
          "inherits": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.1.tgz",
            "integrity": "sha1-sX0I0ya0Qj5Wjv9xn5GwscvfafE="
          }
        }
      },
      "util-deprecate": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
        "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
      },
      "util.promisify": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.0.1.tgz",
        "integrity": "sha512-g9JpC/3He3bm38zsLupWryXHoEcS22YHthuPQSJdMy6KNrzIRzWqcsHzD/WUnqe45whVou4VIsPew37DoXWNrA==",
        "requires": {
          "define-properties": "^1.1.3",
          "es-abstract": "^1.17.2",
          "has-symbols": "^1.0.1",
          "object.getownpropertydescriptors": "^2.1.0"
        }
      },
      "utila": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/utila/-/utila-0.4.0.tgz",
        "integrity": "sha1-ihagXURWV6Oupe7MWxKk+lN5dyw="
      },
      "utils-merge": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
        "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
      },
      "uuid": {
        "version": "3.4.0",
        "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
        "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A=="
      },
      "v8-compile-cache": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.1.0.tgz",
        "integrity": "sha512-usZBT3PW+LOjM25wbqIlZwPeJV+3OSz3M1k1Ws8snlW39dZyYL9lOGC5FgPVHfk0jKmjiDV8Z0mIbVQPiwFs7g=="
      },
      "validate-npm-package-license": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
        "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
        "requires": {
          "spdx-correct": "^3.0.0",
          "spdx-expression-parse": "^3.0.0"
        }
      },
      "vary": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
        "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
      },
      "vendors": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/vendors/-/vendors-1.0.4.tgz",
        "integrity": "sha512-/juG65kTL4Cy2su4P8HjtkTxk6VmJDiOPBufWniqQ6wknac6jNiXS9vU+hO3wgusiyqWlzTbVHi0dyJqRONg3w=="
      },
      "verror": {
        "version": "1.10.0",
        "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
        "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
        "requires": {
          "assert-plus": "^1.0.0",
          "core-util-is": "1.0.2",
          "extsprintf": "^1.2.0"
        }
      },
      "vm-browserify": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/vm-browserify/-/vm-browserify-1.1.2.tgz",
        "integrity": "sha512-2ham8XPWTONajOR0ohOKOHXkm3+gaBmGut3SRuu75xLd/RRaY6vqgh8NBYYk7+RW3u5AtzPQZG8F10LHkl0lAQ=="
      },
      "w3c-hr-time": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
        "integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
        "requires": {
          "browser-process-hrtime": "^1.0.0"
        }
      },
      "w3c-xmlserializer": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-1.1.2.tgz",
        "integrity": "sha512-p10l/ayESzrBMYWRID6xbuCKh2Fp77+sA0doRuGn4tTIMrrZVeqfpKjXHY+oDh3K4nLdPgNwMTVP6Vp4pvqbNg==",
        "requires": {
          "domexception": "^1.0.1",
          "webidl-conversions": "^4.0.2",
          "xml-name-validator": "^3.0.0"
        }
      },
      "wait-for-expect": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/wait-for-expect/-/wait-for-expect-3.0.2.tgz",
        "integrity": "sha512-cfS1+DZxuav1aBYbaO/kE06EOS8yRw7qOFoD3XtjTkYvCvh3zUvNST8DXK/nPaeqIzIv3P3kL3lRJn8iwOiSag=="
      },
      "walker": {
        "version": "1.0.7",
        "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.7.tgz",
        "integrity": "sha1-L3+bj9ENZ3JisYqITijRlhjgKPs=",
        "requires": {
          "makeerror": "1.0.x"
        }
      },
      "watchpack": {
        "version": "1.6.1",
        "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-1.6.1.tgz",
        "integrity": "sha512-+IF9hfUFOrYOOaKyfaI7h7dquUIOgyEMoQMLA7OP5FxegKA2+XdXThAZ9TU2kucfhDH7rfMHs1oPYziVGWRnZA==",
        "requires": {
          "chokidar": "^2.1.8",
          "graceful-fs": "^4.1.2",
          "neo-async": "^2.5.0"
        },
        "dependencies": {
          "binary-extensions": {
            "version": "1.13.1",
            "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",
            "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw=="
          },
          "chokidar": {
            "version": "2.1.8",
            "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",
            "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",
            "requires": {
              "anymatch": "^2.0.0",
              "async-each": "^1.0.1",
              "braces": "^2.3.2",
              "fsevents": "^1.2.7",
              "glob-parent": "^3.1.0",
              "inherits": "^2.0.3",
              "is-binary-path": "^1.0.0",
              "is-glob": "^4.0.0",
              "normalize-path": "^3.0.0",
              "path-is-absolute": "^1.0.0",
              "readdirp": "^2.2.1",
              "upath": "^1.1.1"
            }
          },
          "fsevents": {
            "version": "1.2.12",
            "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.12.tgz",
            "integrity": "sha512-Ggd/Ktt7E7I8pxZRbGIs7vwqAPscSESMrCSkx2FtWeqmheJgCo2R74fTsZFCifr0VTPwqRpPv17+6b8Zp7th0Q==",
            "optional": true,
            "requires": {
              "node-pre-gyp": "*"
            },
            "dependencies": {
              "abbrev": {
                "version": "1.1.1",
                "bundled": true,
                "optional": true
              },
              "ansi-regex": {
                "version": "2.1.1",
                "bundled": true,
                "optional": true
              },
              "aproba": {
                "version": "1.2.0",
                "bundled": true,
                "optional": true
              },
              "are-we-there-yet": {
                "version": "1.1.5",
                "bundled": true,
                "optional": true,
                "requires": {
                  "delegates": "^1.0.0",
                  "readable-stream": "^2.0.6"
                }
              },
              "balanced-match": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true
              },
              "brace-expansion": {
                "version": "1.1.11",
                "bundled": true,
                "optional": true,
                "requires": {
                  "balanced-match": "^1.0.0",
                  "concat-map": "0.0.1"
                }
              },
              "chownr": {
                "version": "1.1.4",
                "bundled": true,
                "optional": true
              },
              "code-point-at": {
                "version": "1.1.0",
                "bundled": true,
                "optional": true
              },
              "concat-map": {
                "version": "0.0.1",
                "bundled": true,
                "optional": true
              },
              "console-control-strings": {
                "version": "1.1.0",
                "bundled": true,
                "optional": true
              },
              "core-util-is": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "debug": {
                "version": "3.2.6",
                "bundled": true,
                "optional": true,
                "requires": {
                  "ms": "^2.1.1"
                }
              },
              "deep-extend": {
                "version": "0.6.0",
                "bundled": true,
                "optional": true
              },
              "delegates": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true
              },
              "detect-libc": {
                "version": "1.0.3",
                "bundled": true,
                "optional": true
              },
              "fs-minipass": {
                "version": "1.2.7",
                "bundled": true,
                "optional": true,
                "requires": {
                  "minipass": "^2.6.0"
                }
              },
              "fs.realpath": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true
              },
              "gauge": {
                "version": "2.7.4",
                "bundled": true,
                "optional": true,
                "requires": {
                  "aproba": "^1.0.3",
                  "console-control-strings": "^1.0.0",
                  "has-unicode": "^2.0.0",
                  "object-assign": "^4.1.0",
                  "signal-exit": "^3.0.0",
                  "string-width": "^1.0.1",
                  "strip-ansi": "^3.0.1",
                  "wide-align": "^1.1.0"
                }
              },
              "glob": {
                "version": "7.1.6",
                "bundled": true,
                "optional": true,
                "requires": {
                  "fs.realpath": "^1.0.0",
                  "inflight": "^1.0.4",
                  "inherits": "2",
                  "minimatch": "^3.0.4",
                  "once": "^1.3.0",
                  "path-is-absolute": "^1.0.0"
                }
              },
              "has-unicode": {
                "version": "2.0.1",
                "bundled": true,
                "optional": true
              },
              "iconv-lite": {
                "version": "0.4.24",
                "bundled": true,
                "optional": true,
                "requires": {
                  "safer-buffer": ">= 2.1.2 < 3"
                }
              },
              "ignore-walk": {
                "version": "3.0.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "minimatch": "^3.0.4"
                }
              },
              "inflight": {
                "version": "1.0.6",
                "bundled": true,
                "optional": true,
                "requires": {
                  "once": "^1.3.0",
                  "wrappy": "1"
                }
              },
              "inherits": {
                "version": "2.0.4",
                "bundled": true,
                "optional": true
              },
              "ini": {
                "version": "1.3.5",
                "bundled": true,
                "optional": true
              },
              "is-fullwidth-code-point": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true,
                "requires": {
                  "number-is-nan": "^1.0.0"
                }
              },
              "isarray": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true
              },
              "minimatch": {
                "version": "3.0.4",
                "bundled": true,
                "optional": true,
                "requires": {
                  "brace-expansion": "^1.1.7"
                }
              },
              "minimist": {
                "version": "1.2.5",
                "bundled": true,
                "optional": true
              },
              "minipass": {
                "version": "2.9.0",
                "bundled": true,
                "optional": true,
                "requires": {
                  "safe-buffer": "^5.1.2",
                  "yallist": "^3.0.0"
                }
              },
              "minizlib": {
                "version": "1.3.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "minipass": "^2.9.0"
                }
              },
              "mkdirp": {
                "version": "0.5.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "minimist": "^1.2.5"
                }
              },
              "ms": {
                "version": "2.1.2",
                "bundled": true,
                "optional": true
              },
              "needle": {
                "version": "2.3.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "debug": "^3.2.6",
                  "iconv-lite": "^0.4.4",
                  "sax": "^1.2.4"
                }
              },
              "node-pre-gyp": {
                "version": "0.14.0",
                "bundled": true,
                "optional": true,
                "requires": {
                  "detect-libc": "^1.0.2",
                  "mkdirp": "^0.5.1",
                  "needle": "^2.2.1",
                  "nopt": "^4.0.1",
                  "npm-packlist": "^1.1.6",
                  "npmlog": "^4.0.2",
                  "rc": "^1.2.7",
                  "rimraf": "^2.6.1",
                  "semver": "^5.3.0",
                  "tar": "^4.4.2"
                }
              },
              "nopt": {
                "version": "4.0.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "abbrev": "1",
                  "osenv": "^0.1.4"
                }
              },
              "npm-bundled": {
                "version": "1.1.1",
                "bundled": true,
                "optional": true,
                "requires": {
                  "npm-normalize-package-bin": "^1.0.1"
                }
              },
              "npm-normalize-package-bin": {
                "version": "1.0.1",
                "bundled": true,
                "optional": true
              },
              "npm-packlist": {
                "version": "1.4.8",
                "bundled": true,
                "optional": true,
                "requires": {
                  "ignore-walk": "^3.0.1",
                  "npm-bundled": "^1.0.1",
                  "npm-normalize-package-bin": "^1.0.1"
                }
              },
              "npmlog": {
                "version": "4.1.2",
                "bundled": true,
                "optional": true,
                "requires": {
                  "are-we-there-yet": "~1.1.2",
                  "console-control-strings": "~1.1.0",
                  "gauge": "~2.7.3",
                  "set-blocking": "~2.0.0"
                }
              },
              "number-is-nan": {
                "version": "1.0.1",
                "bundled": true,
                "optional": true
              },
              "object-assign": {
                "version": "4.1.1",
                "bundled": true,
                "optional": true
              },
              "once": {
                "version": "1.4.0",
                "bundled": true,
                "optional": true,
                "requires": {
                  "wrappy": "1"
                }
              },
              "os-homedir": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "os-tmpdir": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "osenv": {
                "version": "0.1.5",
                "bundled": true,
                "optional": true,
                "requires": {
                  "os-homedir": "^1.0.0",
                  "os-tmpdir": "^1.0.0"
                }
              },
              "path-is-absolute": {
                "version": "1.0.1",
                "bundled": true,
                "optional": true
              },
              "process-nextick-args": {
                "version": "2.0.1",
                "bundled": true,
                "optional": true
              },
              "rc": {
                "version": "1.2.8",
                "bundled": true,
                "optional": true,
                "requires": {
                  "deep-extend": "^0.6.0",
                  "ini": "~1.3.0",
                  "minimist": "^1.2.0",
                  "strip-json-comments": "~2.0.1"
                }
              },
              "readable-stream": {
                "version": "2.3.7",
                "bundled": true,
                "optional": true,
                "requires": {
                  "core-util-is": "~1.0.0",
                  "inherits": "~2.0.3",
                  "isarray": "~1.0.0",
                  "process-nextick-args": "~2.0.0",
                  "safe-buffer": "~5.1.1",
                  "string_decoder": "~1.1.1",
                  "util-deprecate": "~1.0.1"
                }
              },
              "rimraf": {
                "version": "2.7.1",
                "bundled": true,
                "optional": true,
                "requires": {
                  "glob": "^7.1.3"
                }
              },
              "safe-buffer": {
                "version": "5.1.2",
                "bundled": true,
                "optional": true
              },
              "safer-buffer": {
                "version": "2.1.2",
                "bundled": true,
                "optional": true
              },
              "sax": {
                "version": "1.2.4",
                "bundled": true,
                "optional": true
              },
              "semver": {
                "version": "5.7.1",
                "bundled": true,
                "optional": true
              },
              "set-blocking": {
                "version": "2.0.0",
                "bundled": true,
                "optional": true
              },
              "signal-exit": {
                "version": "3.0.2",
                "bundled": true,
                "optional": true
              },
              "string-width": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true,
                "requires": {
                  "code-point-at": "^1.0.0",
                  "is-fullwidth-code-point": "^1.0.0",
                  "strip-ansi": "^3.0.0"
                }
              },
              "string_decoder": {
                "version": "1.1.1",
                "bundled": true,
                "optional": true,
                "requires": {
                  "safe-buffer": "~5.1.0"
                }
              },
              "strip-ansi": {
                "version": "3.0.1",
                "bundled": true,
                "optional": true,
                "requires": {
                  "ansi-regex": "^2.0.0"
                }
              },
              "strip-json-comments": {
                "version": "2.0.1",
                "bundled": true,
                "optional": true
              },
              "tar": {
                "version": "4.4.13",
                "bundled": true,
                "optional": true,
                "requires": {
                  "chownr": "^1.1.1",
                  "fs-minipass": "^1.2.5",
                  "minipass": "^2.8.6",
                  "minizlib": "^1.2.1",
                  "mkdirp": "^0.5.0",
                  "safe-buffer": "^5.1.2",
                  "yallist": "^3.0.3"
                }
              },
              "util-deprecate": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "wide-align": {
                "version": "1.1.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "string-width": "^1.0.2 || 2"
                }
              },
              "wrappy": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "yallist": {
                "version": "3.1.1",
                "bundled": true,
                "optional": true
              }
            }
          },
          "glob-parent": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
            "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
            "requires": {
              "is-glob": "^3.1.0",
              "path-dirname": "^1.0.0"
            },
            "dependencies": {
              "is-glob": {
                "version": "3.1.0",
                "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
                "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
                "requires": {
                  "is-extglob": "^2.1.0"
                }
              }
            }
          },
          "is-binary-path": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
            "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
            "requires": {
              "binary-extensions": "^1.0.0"
            }
          },
          "normalize-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
            "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
          },
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "readdirp": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",
            "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
            "requires": {
              "graceful-fs": "^4.1.11",
              "micromatch": "^3.1.10",
              "readable-stream": "^2.0.2"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          }
        }
      },
      "wbuf": {
        "version": "1.7.3",
        "resolved": "https://registry.npmjs.org/wbuf/-/wbuf-1.7.3.tgz",
        "integrity": "sha512-O84QOnr0icsbFGLS0O3bI5FswxzRr8/gHwWkDlQFskhSPryQXvrTMxjxGP4+iWYoauLoBvfDpkrOauZ+0iZpDA==",
        "requires": {
          "minimalistic-assert": "^1.0.0"
        }
      },
      "webidl-conversions": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-4.0.2.tgz",
        "integrity": "sha512-YQ+BmxuTgd6UXZW3+ICGfyqRyHXVlD5GtQr5+qjiNW7bF0cqrzX500HVXPBOvgXb5YnzDd+h0zqyv61KUD7+Sg=="
      },
      "webpack": {
        "version": "4.42.0",
        "resolved": "https://registry.npmjs.org/webpack/-/webpack-4.42.0.tgz",
        "integrity": "sha512-EzJRHvwQyBiYrYqhyjW9AqM90dE4+s1/XtCfn7uWg6cS72zH+2VPFAlsnW0+W0cDi0XRjNKUMoJtpSi50+Ph6w==",
        "requires": {
          "@webassemblyjs/ast": "1.8.5",
          "@webassemblyjs/helper-module-context": "1.8.5",
          "@webassemblyjs/wasm-edit": "1.8.5",
          "@webassemblyjs/wasm-parser": "1.8.5",
          "acorn": "^6.2.1",
          "ajv": "^6.10.2",
          "ajv-keywords": "^3.4.1",
          "chrome-trace-event": "^1.0.2",
          "enhanced-resolve": "^4.1.0",
          "eslint-scope": "^4.0.3",
          "json-parse-better-errors": "^1.0.2",
          "loader-runner": "^2.4.0",
          "loader-utils": "^1.2.3",
          "memory-fs": "^0.4.1",
          "micromatch": "^3.1.10",
          "mkdirp": "^0.5.1",
          "neo-async": "^2.6.1",
          "node-libs-browser": "^2.2.1",
          "schema-utils": "^1.0.0",
          "tapable": "^1.1.3",
          "terser-webpack-plugin": "^1.4.3",
          "watchpack": "^1.6.0",
          "webpack-sources": "^1.4.1"
        },
        "dependencies": {
          "acorn": {
            "version": "6.4.1",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.1.tgz",
            "integrity": "sha512-ZVA9k326Nwrj3Cj9jlh3wGFutC2ZornPNARZwsNYqQYgN0EsV2d53w5RN/co65Ohn4sUAUtb1rSUAOD6XN9idA=="
          },
          "cacache": {
            "version": "12.0.4",
            "resolved": "https://registry.npmjs.org/cacache/-/cacache-12.0.4.tgz",
            "integrity": "sha512-a0tMB40oefvuInr4Cwb3GerbL9xTj1D5yg0T5xrjGCGyfvbxseIXX7BAO/u/hIXdafzOI5JC3wDwHyf24buOAQ==",
            "requires": {
              "bluebird": "^3.5.5",
              "chownr": "^1.1.1",
              "figgy-pudding": "^3.5.1",
              "glob": "^7.1.4",
              "graceful-fs": "^4.1.15",
              "infer-owner": "^1.0.3",
              "lru-cache": "^5.1.1",
              "mississippi": "^3.0.0",
              "mkdirp": "^0.5.1",
              "move-concurrently": "^1.0.1",
              "promise-inflight": "^1.0.1",
              "rimraf": "^2.6.3",
              "ssri": "^6.0.1",
              "unique-filename": "^1.1.1",
              "y18n": "^4.0.0"
            }
          },
          "eslint-scope": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-4.0.3.tgz",
            "integrity": "sha512-p7VutNr1O/QrxysMo3E45FjYDTeXBy0iTltPFNSqKAIfjDSXC+4dj+qfyuD8bfAXrW/y6lW3O76VaYNPKfpKrg==",
            "requires": {
              "esrecurse": "^4.1.0",
              "estraverse": "^4.1.1"
            }
          },
          "schema-utils": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
            "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
            "requires": {
              "ajv": "^6.1.0",
              "ajv-errors": "^1.0.0",
              "ajv-keywords": "^3.1.0"
            }
          },
          "ssri": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/ssri/-/ssri-6.0.1.tgz",
            "integrity": "sha512-3Wge10hNcT1Kur4PDFwEieXSCMCJs/7WvSACcrMYrNp+b8kDL1/0wJch5Ni2WrtwEa2IO8OsVfeKIciKCDx/QA==",
            "requires": {
              "figgy-pudding": "^3.5.1"
            }
          },
          "terser-webpack-plugin": {
            "version": "1.4.3",
            "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-1.4.3.tgz",
            "integrity": "sha512-QMxecFz/gHQwteWwSo5nTc6UaICqN1bMedC5sMtUc7y3Ha3Q8y6ZO0iCR8pq4RJC8Hjf0FEPEHZqcMB/+DFCrA==",
            "requires": {
              "cacache": "^12.0.2",
              "find-cache-dir": "^2.1.0",
              "is-wsl": "^1.1.0",
              "schema-utils": "^1.0.0",
              "serialize-javascript": "^2.1.2",
              "source-map": "^0.6.1",
              "terser": "^4.1.2",
              "webpack-sources": "^1.4.0",
              "worker-farm": "^1.7.0"
            }
          }
        }
      },
      "webpack-dev-middleware": {
        "version": "3.7.2",
        "resolved": "https://registry.npmjs.org/webpack-dev-middleware/-/webpack-dev-middleware-3.7.2.tgz",
        "integrity": "sha512-1xC42LxbYoqLNAhV6YzTYacicgMZQTqRd27Sim9wn5hJrX3I5nxYy1SxSd4+gjUFsz1dQFj+yEe6zEVmSkeJjw==",
        "requires": {
          "memory-fs": "^0.4.1",
          "mime": "^2.4.4",
          "mkdirp": "^0.5.1",
          "range-parser": "^1.2.1",
          "webpack-log": "^2.0.0"
        }
      },
      "webpack-dev-server": {
        "version": "3.10.3",
        "resolved": "https://registry.npmjs.org/webpack-dev-server/-/webpack-dev-server-3.10.3.tgz",
        "integrity": "sha512-e4nWev8YzEVNdOMcNzNeCN947sWJNd43E5XvsJzbAL08kGc2frm1tQ32hTJslRS+H65LCb/AaUCYU7fjHCpDeQ==",
        "requires": {
          "ansi-html": "0.0.7",
          "bonjour": "^3.5.0",
          "chokidar": "^2.1.8",
          "compression": "^1.7.4",
          "connect-history-api-fallback": "^1.6.0",
          "debug": "^4.1.1",
          "del": "^4.1.1",
          "express": "^4.17.1",
          "html-entities": "^1.2.1",
          "http-proxy-middleware": "0.19.1",
          "import-local": "^2.0.0",
          "internal-ip": "^4.3.0",
          "ip": "^1.1.5",
          "is-absolute-url": "^3.0.3",
          "killable": "^1.0.1",
          "loglevel": "^1.6.6",
          "opn": "^5.5.0",
          "p-retry": "^3.0.1",
          "portfinder": "^1.0.25",
          "schema-utils": "^1.0.0",
          "selfsigned": "^1.10.7",
          "semver": "^6.3.0",
          "serve-index": "^1.9.1",
          "sockjs": "0.3.19",
          "sockjs-client": "1.4.0",
          "spdy": "^4.0.1",
          "strip-ansi": "^3.0.1",
          "supports-color": "^6.1.0",
          "url": "^0.11.0",
          "webpack-dev-middleware": "^3.7.2",
          "webpack-log": "^2.0.0",
          "ws": "^6.2.1",
          "yargs": "12.0.5"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
            "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
          },
          "binary-extensions": {
            "version": "1.13.1",
            "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",
            "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw=="
          },
          "chokidar": {
            "version": "2.1.8",
            "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",
            "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",
            "requires": {
              "anymatch": "^2.0.0",
              "async-each": "^1.0.1",
              "braces": "^2.3.2",
              "fsevents": "^1.2.7",
              "glob-parent": "^3.1.0",
              "inherits": "^2.0.3",
              "is-binary-path": "^1.0.0",
              "is-glob": "^4.0.0",
              "normalize-path": "^3.0.0",
              "path-is-absolute": "^1.0.0",
              "readdirp": "^2.2.1",
              "upath": "^1.1.1"
            }
          },
          "cliui": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/cliui/-/cliui-4.1.0.tgz",
            "integrity": "sha512-4FG+RSG9DL7uEwRUZXZn3SS34DiDPfzP0VOiEwtUWlE+AR2EIg+hSyvrIgUUfhdgR/UkAeW2QHgeP+hWrXs7jQ==",
            "requires": {
              "string-width": "^2.1.1",
              "strip-ansi": "^4.0.0",
              "wrap-ansi": "^2.0.0"
            },
            "dependencies": {
              "ansi-regex": {
                "version": "3.0.0",
                "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
                "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
              },
              "strip-ansi": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
                "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
                "requires": {
                  "ansi-regex": "^3.0.0"
                }
              }
            }
          },
          "find-up": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
            "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
            "requires": {
              "locate-path": "^3.0.0"
            }
          },
          "fsevents": {
            "version": "1.2.12",
            "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.12.tgz",
            "integrity": "sha512-Ggd/Ktt7E7I8pxZRbGIs7vwqAPscSESMrCSkx2FtWeqmheJgCo2R74fTsZFCifr0VTPwqRpPv17+6b8Zp7th0Q==",
            "optional": true,
            "requires": {
              "node-pre-gyp": "*"
            },
            "dependencies": {
              "abbrev": {
                "version": "1.1.1",
                "bundled": true,
                "optional": true
              },
              "ansi-regex": {
                "version": "2.1.1",
                "bundled": true,
                "optional": true
              },
              "aproba": {
                "version": "1.2.0",
                "bundled": true,
                "optional": true
              },
              "are-we-there-yet": {
                "version": "1.1.5",
                "bundled": true,
                "optional": true,
                "requires": {
                  "delegates": "^1.0.0",
                  "readable-stream": "^2.0.6"
                }
              },
              "balanced-match": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true
              },
              "brace-expansion": {
                "version": "1.1.11",
                "bundled": true,
                "optional": true,
                "requires": {
                  "balanced-match": "^1.0.0",
                  "concat-map": "0.0.1"
                }
              },
              "chownr": {
                "version": "1.1.4",
                "bundled": true,
                "optional": true
              },
              "code-point-at": {
                "version": "1.1.0",
                "bundled": true,
                "optional": true
              },
              "concat-map": {
                "version": "0.0.1",
                "bundled": true,
                "optional": true
              },
              "console-control-strings": {
                "version": "1.1.0",
                "bundled": true,
                "optional": true
              },
              "core-util-is": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "debug": {
                "version": "3.2.6",
                "bundled": true,
                "optional": true,
                "requires": {
                  "ms": "^2.1.1"
                }
              },
              "deep-extend": {
                "version": "0.6.0",
                "bundled": true,
                "optional": true
              },
              "delegates": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true
              },
              "detect-libc": {
                "version": "1.0.3",
                "bundled": true,
                "optional": true
              },
              "fs-minipass": {
                "version": "1.2.7",
                "bundled": true,
                "optional": true,
                "requires": {
                  "minipass": "^2.6.0"
                }
              },
              "fs.realpath": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true
              },
              "gauge": {
                "version": "2.7.4",
                "bundled": true,
                "optional": true,
                "requires": {
                  "aproba": "^1.0.3",
                  "console-control-strings": "^1.0.0",
                  "has-unicode": "^2.0.0",
                  "object-assign": "^4.1.0",
                  "signal-exit": "^3.0.0",
                  "string-width": "^1.0.1",
                  "strip-ansi": "^3.0.1",
                  "wide-align": "^1.1.0"
                }
              },
              "glob": {
                "version": "7.1.6",
                "bundled": true,
                "optional": true,
                "requires": {
                  "fs.realpath": "^1.0.0",
                  "inflight": "^1.0.4",
                  "inherits": "2",
                  "minimatch": "^3.0.4",
                  "once": "^1.3.0",
                  "path-is-absolute": "^1.0.0"
                }
              },
              "has-unicode": {
                "version": "2.0.1",
                "bundled": true,
                "optional": true
              },
              "iconv-lite": {
                "version": "0.4.24",
                "bundled": true,
                "optional": true,
                "requires": {
                  "safer-buffer": ">= 2.1.2 < 3"
                }
              },
              "ignore-walk": {
                "version": "3.0.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "minimatch": "^3.0.4"
                }
              },
              "inflight": {
                "version": "1.0.6",
                "bundled": true,
                "optional": true,
                "requires": {
                  "once": "^1.3.0",
                  "wrappy": "1"
                }
              },
              "inherits": {
                "version": "2.0.4",
                "bundled": true,
                "optional": true
              },
              "ini": {
                "version": "1.3.5",
                "bundled": true,
                "optional": true
              },
              "is-fullwidth-code-point": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true,
                "requires": {
                  "number-is-nan": "^1.0.0"
                }
              },
              "isarray": {
                "version": "1.0.0",
                "bundled": true,
                "optional": true
              },
              "minimatch": {
                "version": "3.0.4",
                "bundled": true,
                "optional": true,
                "requires": {
                  "brace-expansion": "^1.1.7"
                }
              },
              "minimist": {
                "version": "1.2.5",
                "bundled": true,
                "optional": true
              },
              "minipass": {
                "version": "2.9.0",
                "bundled": true,
                "optional": true,
                "requires": {
                  "safe-buffer": "^5.1.2",
                  "yallist": "^3.0.0"
                }
              },
              "minizlib": {
                "version": "1.3.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "minipass": "^2.9.0"
                }
              },
              "mkdirp": {
                "version": "0.5.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "minimist": "^1.2.5"
                }
              },
              "ms": {
                "version": "2.1.2",
                "bundled": true,
                "optional": true
              },
              "needle": {
                "version": "2.3.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "debug": "^3.2.6",
                  "iconv-lite": "^0.4.4",
                  "sax": "^1.2.4"
                }
              },
              "node-pre-gyp": {
                "version": "0.14.0",
                "bundled": true,
                "optional": true,
                "requires": {
                  "detect-libc": "^1.0.2",
                  "mkdirp": "^0.5.1",
                  "needle": "^2.2.1",
                  "nopt": "^4.0.1",
                  "npm-packlist": "^1.1.6",
                  "npmlog": "^4.0.2",
                  "rc": "^1.2.7",
                  "rimraf": "^2.6.1",
                  "semver": "^5.3.0",
                  "tar": "^4.4.2"
                }
              },
              "nopt": {
                "version": "4.0.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "abbrev": "1",
                  "osenv": "^0.1.4"
                }
              },
              "npm-bundled": {
                "version": "1.1.1",
                "bundled": true,
                "optional": true,
                "requires": {
                  "npm-normalize-package-bin": "^1.0.1"
                }
              },
              "npm-normalize-package-bin": {
                "version": "1.0.1",
                "bundled": true,
                "optional": true
              },
              "npm-packlist": {
                "version": "1.4.8",
                "bundled": true,
                "optional": true,
                "requires": {
                  "ignore-walk": "^3.0.1",
                  "npm-bundled": "^1.0.1",
                  "npm-normalize-package-bin": "^1.0.1"
                }
              },
              "npmlog": {
                "version": "4.1.2",
                "bundled": true,
                "optional": true,
                "requires": {
                  "are-we-there-yet": "~1.1.2",
                  "console-control-strings": "~1.1.0",
                  "gauge": "~2.7.3",
                  "set-blocking": "~2.0.0"
                }
              },
              "number-is-nan": {
                "version": "1.0.1",
                "bundled": true,
                "optional": true
              },
              "object-assign": {
                "version": "4.1.1",
                "bundled": true,
                "optional": true
              },
              "once": {
                "version": "1.4.0",
                "bundled": true,
                "optional": true,
                "requires": {
                  "wrappy": "1"
                }
              },
              "os-homedir": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "os-tmpdir": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "osenv": {
                "version": "0.1.5",
                "bundled": true,
                "optional": true,
                "requires": {
                  "os-homedir": "^1.0.0",
                  "os-tmpdir": "^1.0.0"
                }
              },
              "path-is-absolute": {
                "version": "1.0.1",
                "bundled": true,
                "optional": true
              },
              "process-nextick-args": {
                "version": "2.0.1",
                "bundled": true,
                "optional": true
              },
              "rc": {
                "version": "1.2.8",
                "bundled": true,
                "optional": true,
                "requires": {
                  "deep-extend": "^0.6.0",
                  "ini": "~1.3.0",
                  "minimist": "^1.2.0",
                  "strip-json-comments": "~2.0.1"
                }
              },
              "readable-stream": {
                "version": "2.3.7",
                "bundled": true,
                "optional": true,
                "requires": {
                  "core-util-is": "~1.0.0",
                  "inherits": "~2.0.3",
                  "isarray": "~1.0.0",
                  "process-nextick-args": "~2.0.0",
                  "safe-buffer": "~5.1.1",
                  "string_decoder": "~1.1.1",
                  "util-deprecate": "~1.0.1"
                }
              },
              "rimraf": {
                "version": "2.7.1",
                "bundled": true,
                "optional": true,
                "requires": {
                  "glob": "^7.1.3"
                }
              },
              "safe-buffer": {
                "version": "5.1.2",
                "bundled": true,
                "optional": true
              },
              "safer-buffer": {
                "version": "2.1.2",
                "bundled": true,
                "optional": true
              },
              "sax": {
                "version": "1.2.4",
                "bundled": true,
                "optional": true
              },
              "semver": {
                "version": "5.7.1",
                "bundled": true,
                "optional": true
              },
              "set-blocking": {
                "version": "2.0.0",
                "bundled": true,
                "optional": true
              },
              "signal-exit": {
                "version": "3.0.2",
                "bundled": true,
                "optional": true
              },
              "string-width": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true,
                "requires": {
                  "code-point-at": "^1.0.0",
                  "is-fullwidth-code-point": "^1.0.0",
                  "strip-ansi": "^3.0.0"
                }
              },
              "string_decoder": {
                "version": "1.1.1",
                "bundled": true,
                "optional": true,
                "requires": {
                  "safe-buffer": "~5.1.0"
                }
              },
              "strip-ansi": {
                "version": "3.0.1",
                "bundled": true,
                "optional": true,
                "requires": {
                  "ansi-regex": "^2.0.0"
                }
              },
              "strip-json-comments": {
                "version": "2.0.1",
                "bundled": true,
                "optional": true
              },
              "tar": {
                "version": "4.4.13",
                "bundled": true,
                "optional": true,
                "requires": {
                  "chownr": "^1.1.1",
                  "fs-minipass": "^1.2.5",
                  "minipass": "^2.8.6",
                  "minizlib": "^1.2.1",
                  "mkdirp": "^0.5.0",
                  "safe-buffer": "^5.1.2",
                  "yallist": "^3.0.3"
                }
              },
              "util-deprecate": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "wide-align": {
                "version": "1.1.3",
                "bundled": true,
                "optional": true,
                "requires": {
                  "string-width": "^1.0.2 || 2"
                }
              },
              "wrappy": {
                "version": "1.0.2",
                "bundled": true,
                "optional": true
              },
              "yallist": {
                "version": "3.1.1",
                "bundled": true,
                "optional": true
              }
            }
          },
          "get-caller-file": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.3.tgz",
            "integrity": "sha512-3t6rVToeoZfYSGd8YoLFR2DJkiQrIiUrGcjvFX2mDw3bn6k2OtwHN0TNCLbBO+w8qTvimhDkv+LSscbJY1vE6w=="
          },
          "glob-parent": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
            "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
            "requires": {
              "is-glob": "^3.1.0",
              "path-dirname": "^1.0.0"
            },
            "dependencies": {
              "is-glob": {
                "version": "3.1.0",
                "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
                "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
                "requires": {
                  "is-extglob": "^2.1.0"
                }
              }
            }
          },
          "is-absolute-url": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/is-absolute-url/-/is-absolute-url-3.0.3.tgz",
            "integrity": "sha512-opmNIX7uFnS96NtPmhWQgQx6/NYFgsUXYMllcfzwWKUMwfo8kku1TvE6hkNcH+Q1ts5cMVrsY7j0bxXQDciu9Q=="
          },
          "is-binary-path": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
            "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
            "requires": {
              "binary-extensions": "^1.0.0"
            }
          },
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
          },
          "locate-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
            "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
            "requires": {
              "p-locate": "^3.0.0",
              "path-exists": "^3.0.0"
            }
          },
          "normalize-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
            "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
          },
          "p-limit": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
            "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
            "requires": {
              "p-try": "^2.0.0"
            }
          },
          "p-locate": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
            "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
            "requires": {
              "p-limit": "^2.0.0"
            }
          },
          "p-try": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
            "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
          },
          "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "readdirp": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",
            "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
            "requires": {
              "graceful-fs": "^4.1.11",
              "micromatch": "^3.1.10",
              "readable-stream": "^2.0.2"
            }
          },
          "require-main-filename": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",
            "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE="
          },
          "schema-utils": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
            "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
            "requires": {
              "ajv": "^6.1.0",
              "ajv-errors": "^1.0.0",
              "ajv-keywords": "^3.1.0"
            }
          },
          "string-width": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
            "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
            "requires": {
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^4.0.0"
            },
            "dependencies": {
              "ansi-regex": {
                "version": "3.0.0",
                "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
                "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
              },
              "strip-ansi": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
                "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
                "requires": {
                  "ansi-regex": "^3.0.0"
                }
              }
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          },
          "strip-ansi": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
            "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
            "requires": {
              "ansi-regex": "^2.0.0"
            }
          },
          "supports-color": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
            "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
            "requires": {
              "has-flag": "^3.0.0"
            }
          },
          "wrap-ansi": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
            "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
            "requires": {
              "string-width": "^1.0.1",
              "strip-ansi": "^3.0.1"
            },
            "dependencies": {
              "is-fullwidth-code-point": {
                "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
                "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
                "requires": {
                  "number-is-nan": "^1.0.0"
                }
              },
              "string-width": {
                "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
                "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
                "requires": {
                  "code-point-at": "^1.0.0",
                  "is-fullwidth-code-point": "^1.0.0",
                  "strip-ansi": "^3.0.0"
                }
              }
            }
          },
          "ws": {
            "version": "6.2.1",
            "resolved": "https://registry.npmjs.org/ws/-/ws-6.2.1.tgz",
            "integrity": "sha512-GIyAXC2cB7LjvpgMt9EKS2ldqr0MTrORaleiOno6TweZ6r3TKtoFQWay/2PceJ3RuBasOHzXNn5Lrw1X0bEjqA==",
            "requires": {
              "async-limiter": "~1.0.0"
            }
          },
          "yargs": {
            "version": "12.0.5",
            "resolved": "https://registry.npmjs.org/yargs/-/yargs-12.0.5.tgz",
            "integrity": "sha512-Lhz8TLaYnxq/2ObqHDql8dX8CJi97oHxrjUcYtzKbbykPtVW9WB+poxI+NM2UIzsMgNCZTIf0AQwsjK5yMAqZw==",
            "requires": {
              "cliui": "^4.0.0",
              "decamelize": "^1.2.0",
              "find-up": "^3.0.0",
              "get-caller-file": "^1.0.1",
              "os-locale": "^3.0.0",
              "require-directory": "^2.1.1",
              "require-main-filename": "^1.0.1",
              "set-blocking": "^2.0.0",
              "string-width": "^2.0.0",
              "which-module": "^2.0.0",
              "y18n": "^3.2.1 || ^4.0.0",
              "yargs-parser": "^11.1.1"
            }
          },
          "yargs-parser": {
            "version": "11.1.1",
            "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-11.1.1.tgz",
            "integrity": "sha512-C6kB/WJDiaxONLJQnF8ccx9SEeoTTLek8RVbaOIsrAUS8VrBEXfmeSnCZxygc+XC2sNMBIwOOnfcxiynjHsVSQ==",
            "requires": {
              "camelcase": "^5.0.0",
              "decamelize": "^1.2.0"
            }
          }
        }
      },
      "webpack-log": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/webpack-log/-/webpack-log-2.0.0.tgz",
        "integrity": "sha512-cX8G2vR/85UYG59FgkoMamwHUIkSSlV3bBMRsbxVXVUk2j6NleCKjQ/WE9eYg9WY4w25O9w8wKP4rzNZFmUcUg==",
        "requires": {
          "ansi-colors": "^3.0.0",
          "uuid": "^3.3.2"
        }
      },
      "webpack-manifest-plugin": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/webpack-manifest-plugin/-/webpack-manifest-plugin-2.2.0.tgz",
        "integrity": "sha512-9S6YyKKKh/Oz/eryM1RyLVDVmy3NSPV0JXMRhZ18fJsq+AwGxUY34X54VNwkzYcEmEkDwNxuEOboCZEebJXBAQ==",
        "requires": {
          "fs-extra": "^7.0.0",
          "lodash": ">=3.5 <5",
          "object.entries": "^1.1.0",
          "tapable": "^1.0.0"
        },
        "dependencies": {
          "fs-extra": {
            "version": "7.0.1",
            "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-7.0.1.tgz",
            "integrity": "sha512-YJDaCJZEnBmcbw13fvdAM9AwNOJwOzrE4pqMqBq5nFiEqXUqHwlK4B+3pUw6JNvfSPtX05xFHtYy/1ni01eGCw==",
            "requires": {
              "graceful-fs": "^4.1.2",
              "jsonfile": "^4.0.0",
              "universalify": "^0.1.0"
            }
          }
        }
      },
      "webpack-sources": {
        "version": "1.4.3",
        "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-1.4.3.tgz",
        "integrity": "sha512-lgTS3Xhv1lCOKo7SA5TjKXMjpSM4sBjNV5+q2bqesbSPs5FjGmU6jjtBSkX9b4qW87vDIsCIlUPOEhbZrMdjeQ==",
        "requires": {
          "source-list-map": "^2.0.0",
          "source-map": "~0.6.1"
        }
      },
      "websocket-driver": {
        "version": "0.7.3",
        "resolved": "https://registry.npmjs.org/websocket-driver/-/websocket-driver-0.7.3.tgz",
        "integrity": "sha512-bpxWlvbbB459Mlipc5GBzzZwhoZgGEZLuqPaR0INBGnPAY1vdBX6hPnoFXiw+3yWxDuHyQjO2oXTMyS8A5haFg==",
        "requires": {
          "http-parser-js": ">=0.4.0 <0.4.11",
          "safe-buffer": ">=5.1.0",
          "websocket-extensions": ">=0.1.1"
        }
      },
      "websocket-extensions": {
        "version": "0.1.3",
        "resolved": "https://registry.npmjs.org/websocket-extensions/-/websocket-extensions-0.1.3.tgz",
        "integrity": "sha512-nqHUnMXmBzT0w570r2JpJxfiSD1IzoI+HGVdd3aZ0yNi3ngvQ4jv1dtHt5VGxfI2yj5yqImPhOK4vmIh2xMbGg=="
      },
      "whatwg-encoding": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
        "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
        "requires": {
          "iconv-lite": "0.4.24"
        }
      },
      "whatwg-fetch": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/whatwg-fetch/-/whatwg-fetch-3.0.0.tgz",
        "integrity": "sha512-9GSJUgz1D4MfyKU7KRqwOjXCXTqWdFNvEr7eUBYchQiVc744mqK/MzXPNR2WsPkmkOa4ywfg8C2n8h+13Bey1Q=="
      },
      "whatwg-mimetype": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
        "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g=="
      },
      "whatwg-url": {
        "version": "6.5.0",
        "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-6.5.0.tgz",
        "integrity": "sha512-rhRZRqx/TLJQWUpQ6bmrt2UV4f0HCQ463yQuONJqC6fO2VoEb1pTYddbe59SkYq87aoM5A3bdhMZiUiVws+fzQ==",
        "requires": {
          "lodash.sortby": "^4.7.0",
          "tr46": "^1.0.1",
          "webidl-conversions": "^4.0.2"
        }
      },
      "which": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
        "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
        "requires": {
          "isexe": "^2.0.0"
        }
      },
      "which-module": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
        "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho="
      },
      "word-wrap": {
        "version": "1.2.3",
        "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
        "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ=="
      },
      "workbox-background-sync": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-background-sync/-/workbox-background-sync-4.3.1.tgz",
        "integrity": "sha512-1uFkvU8JXi7L7fCHVBEEnc3asPpiAL33kO495UMcD5+arew9IbKW2rV5lpzhoWcm/qhGB89YfO4PmB/0hQwPRg==",
        "requires": {
          "workbox-core": "^4.3.1"
        }
      },
      "workbox-broadcast-update": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-broadcast-update/-/workbox-broadcast-update-4.3.1.tgz",
        "integrity": "sha512-MTSfgzIljpKLTBPROo4IpKjESD86pPFlZwlvVG32Kb70hW+aob4Jxpblud8EhNb1/L5m43DUM4q7C+W6eQMMbA==",
        "requires": {
          "workbox-core": "^4.3.1"
        }
      },
      "workbox-build": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-build/-/workbox-build-4.3.1.tgz",
        "integrity": "sha512-UHdwrN3FrDvicM3AqJS/J07X0KXj67R8Cg0waq1MKEOqzo89ap6zh6LmaLnRAjpB+bDIz+7OlPye9iii9KBnxw==",
        "requires": {
          "@babel/runtime": "^7.3.4",
          "@hapi/joi": "^15.0.0",
          "common-tags": "^1.8.0",
          "fs-extra": "^4.0.2",
          "glob": "^7.1.3",
          "lodash.template": "^4.4.0",
          "pretty-bytes": "^5.1.0",
          "stringify-object": "^3.3.0",
          "strip-comments": "^1.0.2",
          "workbox-background-sync": "^4.3.1",
          "workbox-broadcast-update": "^4.3.1",
          "workbox-cacheable-response": "^4.3.1",
          "workbox-core": "^4.3.1",
          "workbox-expiration": "^4.3.1",
          "workbox-google-analytics": "^4.3.1",
          "workbox-navigation-preload": "^4.3.1",
          "workbox-precaching": "^4.3.1",
          "workbox-range-requests": "^4.3.1",
          "workbox-routing": "^4.3.1",
          "workbox-strategies": "^4.3.1",
          "workbox-streams": "^4.3.1",
          "workbox-sw": "^4.3.1",
          "workbox-window": "^4.3.1"
        },
        "dependencies": {
          "fs-extra": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-4.0.3.tgz",
            "integrity": "sha512-q6rbdDd1o2mAnQreO7YADIxf/Whx4AHBiRf6d+/cVT8h44ss+lHgxf1FemcqDnQt9X3ct4McHr+JMGlYSsK7Cg==",
            "requires": {
              "graceful-fs": "^4.1.2",
              "jsonfile": "^4.0.0",
              "universalify": "^0.1.0"
            }
          }
        }
      },
      "workbox-cacheable-response": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-cacheable-response/-/workbox-cacheable-response-4.3.1.tgz",
        "integrity": "sha512-Rp5qlzm6z8IOvnQNkCdO9qrDgDpoPNguovs0H8C+wswLuPgSzSp9p2afb5maUt9R1uTIwOXrVQMmPfPypv+npw==",
        "requires": {
          "workbox-core": "^4.3.1"
        }
      },
      "workbox-core": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-core/-/workbox-core-4.3.1.tgz",
        "integrity": "sha512-I3C9jlLmMKPxAC1t0ExCq+QoAMd0vAAHULEgRZ7kieCdUd919n53WC0AfvokHNwqRhGn+tIIj7vcb5duCjs2Kg=="
      },
      "workbox-expiration": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-expiration/-/workbox-expiration-4.3.1.tgz",
        "integrity": "sha512-vsJLhgQsQouv9m0rpbXubT5jw0jMQdjpkum0uT+d9tTwhXcEZks7qLfQ9dGSaufTD2eimxbUOJfWLbNQpIDMPw==",
        "requires": {
          "workbox-core": "^4.3.1"
        }
      },
      "workbox-google-analytics": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-google-analytics/-/workbox-google-analytics-4.3.1.tgz",
        "integrity": "sha512-xzCjAoKuOb55CBSwQrbyWBKqp35yg1vw9ohIlU2wTy06ZrYfJ8rKochb1MSGlnoBfXGWss3UPzxR5QL5guIFdg==",
        "requires": {
          "workbox-background-sync": "^4.3.1",
          "workbox-core": "^4.3.1",
          "workbox-routing": "^4.3.1",
          "workbox-strategies": "^4.3.1"
        }
      },
      "workbox-navigation-preload": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-navigation-preload/-/workbox-navigation-preload-4.3.1.tgz",
        "integrity": "sha512-K076n3oFHYp16/C+F8CwrRqD25GitA6Rkd6+qAmLmMv1QHPI2jfDwYqrytOfKfYq42bYtW8Pr21ejZX7GvALOw==",
        "requires": {
          "workbox-core": "^4.3.1"
        }
      },
      "workbox-precaching": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-precaching/-/workbox-precaching-4.3.1.tgz",
        "integrity": "sha512-piSg/2csPoIi/vPpp48t1q5JLYjMkmg5gsXBQkh/QYapCdVwwmKlU9mHdmy52KsDGIjVaqEUMFvEzn2LRaigqQ==",
        "requires": {
          "workbox-core": "^4.3.1"
        }
      },
      "workbox-range-requests": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-range-requests/-/workbox-range-requests-4.3.1.tgz",
        "integrity": "sha512-S+HhL9+iTFypJZ/yQSl/x2Bf5pWnbXdd3j57xnb0V60FW1LVn9LRZkPtneODklzYuFZv7qK6riZ5BNyc0R0jZA==",
        "requires": {
          "workbox-core": "^4.3.1"
        }
      },
      "workbox-routing": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-routing/-/workbox-routing-4.3.1.tgz",
        "integrity": "sha512-FkbtrODA4Imsi0p7TW9u9MXuQ5P4pVs1sWHK4dJMMChVROsbEltuE79fBoIk/BCztvOJ7yUpErMKa4z3uQLX+g==",
        "requires": {
          "workbox-core": "^4.3.1"
        }
      },
      "workbox-strategies": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-strategies/-/workbox-strategies-4.3.1.tgz",
        "integrity": "sha512-F/+E57BmVG8dX6dCCopBlkDvvhg/zj6VDs0PigYwSN23L8hseSRwljrceU2WzTvk/+BSYICsWmRq5qHS2UYzhw==",
        "requires": {
          "workbox-core": "^4.3.1"
        }
      },
      "workbox-streams": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-streams/-/workbox-streams-4.3.1.tgz",
        "integrity": "sha512-4Kisis1f/y0ihf4l3u/+ndMkJkIT4/6UOacU3A4BwZSAC9pQ9vSvJpIi/WFGQRH/uPXvuVjF5c2RfIPQFSS2uA==",
        "requires": {
          "workbox-core": "^4.3.1"
        }
      },
      "workbox-sw": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-sw/-/workbox-sw-4.3.1.tgz",
        "integrity": "sha512-0jXdusCL2uC5gM3yYFT6QMBzKfBr2XTk0g5TPAV4y8IZDyVNDyj1a8uSXy3/XrvkVTmQvLN4O5k3JawGReXr9w=="
      },
      "workbox-webpack-plugin": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-webpack-plugin/-/workbox-webpack-plugin-4.3.1.tgz",
        "integrity": "sha512-gJ9jd8Mb8wHLbRz9ZvGN57IAmknOipD3W4XNE/Lk/4lqs5Htw4WOQgakQy/o/4CoXQlMCYldaqUg+EJ35l9MEQ==",
        "requires": {
          "@babel/runtime": "^7.0.0",
          "json-stable-stringify": "^1.0.1",
          "workbox-build": "^4.3.1"
        }
      },
      "workbox-window": {
        "version": "4.3.1",
        "resolved": "https://registry.npmjs.org/workbox-window/-/workbox-window-4.3.1.tgz",
        "integrity": "sha512-C5gWKh6I58w3GeSc0wp2Ne+rqVw8qwcmZnQGpjiek8A2wpbxSJb1FdCoQVO+jDJs35bFgo/WETgl1fqgsxN0Hg==",
        "requires": {
          "workbox-core": "^4.3.1"
        }
      },
      "worker-farm": {
        "version": "1.7.0",
        "resolved": "https://registry.npmjs.org/worker-farm/-/worker-farm-1.7.0.tgz",
        "integrity": "sha512-rvw3QTZc8lAxyVrqcSGVm5yP/IJ2UcB3U0graE3LCFoZ0Yn2x4EoVSqJKdB/T5M+FLcRPjz4TDacRf3OCfNUzw==",
        "requires": {
          "errno": "~0.1.7"
        }
      },
      "worker-rpc": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/worker-rpc/-/worker-rpc-0.1.1.tgz",
        "integrity": "sha512-P1WjMrUB3qgJNI9jfmpZ/htmBEjFh//6l/5y8SD9hg1Ef5zTTVVoRjTrTEzPrNBQvmhMxkoTsjOXN10GWU7aCg==",
        "requires": {
          "microevent.ts": "~0.1.1"
        }
      },
      "wrap-ansi": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
        "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
        "requires": {
          "ansi-styles": "^3.2.0",
          "string-width": "^3.0.0",
          "strip-ansi": "^5.0.0"
        },
        "dependencies": {
          "emoji-regex": {
            "version": "7.0.3",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
            "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
          },
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
          },
          "string-width": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
            "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
            "requires": {
              "emoji-regex": "^7.0.1",
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^5.1.0"
            }
          }
        }
      },
      "wrappy": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
      },
      "write": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/write/-/write-1.0.3.tgz",
        "integrity": "sha512-/lg70HAjtkUgWPVZhZcm+T4hkL8Zbtp1nFNOn3lRrxnlv50SRBv7cR7RqR+GMsd3hUXy9hWBo4CHTbFTcOYwig==",
        "requires": {
          "mkdirp": "^0.5.1"
        }
      },
      "write-file-atomic": {
        "version": "2.4.1",
        "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.1.tgz",
        "integrity": "sha512-TGHFeZEZMnv+gBFRfjAcxL5bPHrsGKtnb4qsFAws7/vlh+QfwAaySIw4AXP9ZskTTh5GWu3FLuJhsWVdiJPGvg==",
        "requires": {
          "graceful-fs": "^4.1.11",
          "imurmurhash": "^0.1.4",
          "signal-exit": "^3.0.2"
        }
      },
      "ws": {
        "version": "5.2.2",
        "resolved": "https://registry.npmjs.org/ws/-/ws-5.2.2.tgz",
        "integrity": "sha512-jaHFD6PFv6UgoIVda6qZllptQsMlDEJkTQcybzzXDYM1XO9Y8em691FGMPmM46WGyLU4z9KMgQN+qrux/nhlHA==",
        "requires": {
          "async-limiter": "~1.0.0"
        }
      },
      "xml-name-validator": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
        "integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw=="
      },
      "xmlchars": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
        "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw=="
      },
      "xregexp": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/xregexp/-/xregexp-4.3.0.tgz",
        "integrity": "sha512-7jXDIFXh5yJ/orPn4SXjuVrWWoi4Cr8jfV1eHv9CixKSbU+jY4mxfrBwAuDvupPNKpMUY+FeIqsVw/JLT9+B8g==",
        "requires": {
          "@babel/runtime-corejs3": "^7.8.3"
        }
      },
      "xtend": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
        "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="
      },
      "y18n": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.0.tgz",
        "integrity": "sha512-r9S/ZyXu/Xu9q1tYlpsLIsa3EeLXXk0VwlxqTcFRfg9EhMW+17kbt9G0NrgCmhGb5vT2hyhJZLfDGx+7+5Uj/w=="
      },
      "yallist": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
        "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
      },
      "yaml": {
        "version": "1.8.3",
        "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.8.3.tgz",
        "integrity": "sha512-X/v7VDnK+sxbQ2Imq4Jt2PRUsRsP7UcpSl3Llg6+NRRqWLIvxkMFYtH1FmvwNGYRKKPa+EPA4qDBlI9WVG1UKw==",
        "requires": {
          "@babel/runtime": "^7.8.7"
        }
      },
      "yargs": {
        "version": "13.3.2",
        "resolved": "https://registry.npmjs.org/yargs/-/yargs-13.3.2.tgz",
        "integrity": "sha512-AX3Zw5iPruN5ie6xGRIDgqkT+ZhnRlZMLMHAs8tg7nRruy2Nb+i5o9bwghAogtM08q1dpr2LVoS8KSTMYpWXUw==",
        "requires": {
          "cliui": "^5.0.0",
          "find-up": "^3.0.0",
          "get-caller-file": "^2.0.1",
          "require-directory": "^2.1.1",
          "require-main-filename": "^2.0.0",
          "set-blocking": "^2.0.0",
          "string-width": "^3.0.0",
          "which-module": "^2.0.0",
          "y18n": "^4.0.0",
          "yargs-parser": "^13.1.2"
        },
        "dependencies": {
          "emoji-regex": {
            "version": "7.0.3",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
            "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
          },
          "find-up": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
            "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
            "requires": {
              "locate-path": "^3.0.0"
            }
          },
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
          },
          "locate-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
            "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
            "requires": {
              "p-locate": "^3.0.0",
              "path-exists": "^3.0.0"
            }
          },
          "p-limit": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
            "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
            "requires": {
              "p-try": "^2.0.0"
            }
          },
          "p-locate": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
            "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
            "requires": {
              "p-limit": "^2.0.0"
            }
          },
          "p-try": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
            "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
          },
          "string-width": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
            "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
            "requires": {
              "emoji-regex": "^7.0.1",
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^5.1.0"
            }
          }
        }
      },
      "yargs-parser": {
        "version": "13.1.2",
        "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.2.tgz",
        "integrity": "sha512-3lbsNRf/j+A4QuSZfDRA7HRSfWrzO0YjqTJd5kjAq37Zep1CEgaYmrH9Q3GwPiB9cHyd1Y1UwggGhJGoxipbzg==",
        "requires": {
          "camelcase": "^5.0.0",
          "decamelize": "^1.2.0"
        }
      }
    }
  }
  