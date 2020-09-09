import React, {Component} from 'react';
import './App.css';
import Hello from './archivos/props';
import Contador from './archivos/state'
import Conditional from './archivos/conditional'
import One from './archivos/list'
import Event from './archivos/eventos'
import Form from './archivos/form'
import Aplication from './archivos/aplication'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello 
        number = {25} boolean
        oper = {[2,3,6]}
        title = "Hola Mundo" 
        text= "Esta es una propiedad creada con una clase"
        obj={{key:"Car one", key2:"Car Two"}}
        multipli = { ( number => number*3 ) }  
        />
        <div className="App-header"> 
        <Conditional />
        <One />
        <Event />
        </div>
        <p className= "App-Intro"></p>
        <Contador contInicial= {3}/>
        <Form />
        <Aplication />
      </div>
      
    );  
  }
      
}

export default App;
