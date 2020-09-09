import React, {Component} from 'react'

export default class Event extends Component {
   constructor () {
       super ()
       this.state = {mouseX: 0, mouseY: 0}
   }

   handleMouseMove = (e) => {
    const {clientX, clientY} = e
    this.setState ({mouseX:clientX, mouseY:clientY})  
   }
    

    handleClick (e) {
        console.log (e)
        alert ("Hi here!")
    }

   render() {
       return (
           <div>
            <h4>Eventos</h4>
            <button onClick= {this.handleClick}>Hi There</button>
            <div className = "ufo"
            onMouseMove={this.handleMouseMove}> 
            <p>Esto es un evento</p>
            <p>{this.state.mouseX},{this.state.mouseY}</p>   
            </div>        
           </div>  
        )
   }
}