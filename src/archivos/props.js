import React, {Component} from 'react'

   /*function Hello (props) {
  return (
    <h1>{props.title}</h1>
  )
}*/

/*const Hello = (props) => <h1>{props.title}</h1>*/

export default class Hello extends Component {

    render () {
      const {
        boolean,
        multipli, 
        number,
        obj, 
        oper,
        text, 
        title } = this.props
  
      const Condition = boolean ? "Si es Cierto" : "No es Cierto"
      const Operation = oper.map (multipli)
      return(
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
          <p>{number}</p>
          <p>{Condition}</p>
          <p>{Operation.join (",")}</p>
          <em>{obj.key2}</em>
        </div>
        
      )
    }
  }

