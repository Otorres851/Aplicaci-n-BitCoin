import React, {Component} from 'react'

export default class Contador extends Component {
    constructor (props) {
      super (props)
      this.state = { cont: this.props.contInicial }        
    }
  
    componentDidMount() {
      setInterval(() => {
       this.setState ({cont: this.state.cont + 1})
      }, 1000 )
    }
  
    render () {
      return (
        <span>{this.state.cont}</span>
      )
    }
  }
  
  Contador.defaultProps = {
    contInicial: 0
  }
  