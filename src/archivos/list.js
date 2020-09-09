import React, {Component} from 'react'

export default class One extends Component {
    render () {
        const numbers = [1,1,2,3,4,5]
        return (
            <div>
           {numbers.map((num,repeat) => {
             return <p key = {repeat}>Soy el Número {num}</p>})}
            </div>
        )
    }
}