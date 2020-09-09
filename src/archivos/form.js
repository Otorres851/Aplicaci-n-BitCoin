import React, {Component} from 'react'

export default class Form extends Component {

    handleSubmit = (e) => {
        e.preventDefault ()
        const name = this.imputName.value 
        const email = document.getElementById ("twitter").value
        console.log ({ name, email })
    }   

    handleChange = (e) => {
        console.log ("handleChange")
        console.log (e.target.checked)
    }

    render () {
        return (
            <div>
                <h4>Formularios</h4>
                <form onSubmit= {this.handleSubmit}>
                    <p>
                        <label htmlFor="name">Nombre: </label>
                        <input 
                        id= "name"
                        user="userName"
                        placeholder= "Digite su Nombre"
                        ref={ inputElement => this.imputName = inputElement }>
                        </input>  
                    </p>

                    <p>
                        <label htmlFor="twitter">Twitter: </label>
                        <input 
                        id= "twitter"
                        user="userAcount"
                        placeholder= "Digite su Twitter">
                        </input>                           
                    </p>

                    <p>
                        <label>
                          <input onChange={this.handleChange} type="checkbox"  /> 
                              Accepted terms  
                        </label>
                    </p>

                    <button>Logging</button>
                </form>
               
            </div>
        )
    }
}