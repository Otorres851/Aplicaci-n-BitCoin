import React, {Component} from 'react'

class LoggingButton extends Component{
    render () {
        return (
            <button onClick = {() => alert ("Welcome!") }>Iniciar sesión</button>
        )
    }
}

class LogoutButton extends Component{
    render () {
        return (
            <div>
            <p>God Bye!</p>
            <button>Cerrar sesión</button>
            </div>  
        )
    }
}
export default class Conditional extends Component {
    constructor () {
        super () 
        this.state = { Logged: true }
    }
    render () {
        return (
            <div>
            <h4>Conditional Rendering</h4>
            {this.state.Logged 
            ? <LoggingButton /> 
            : <LogoutButton />}
            </div>
        )
    }
}