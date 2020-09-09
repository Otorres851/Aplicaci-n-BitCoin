import React, {Component} from 'react'

 class Aplication extends Component {

    state = { bpi: {}}
   

    componentDidMount () {
        fetch ("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then (res => res.json ())
        .then ( result => {
            const { bpi } = result
            this.setState ({ bpi })
        }) 
           
    }

    _renderCurrencies () {
      const { bpi } = this.state
      console.log(bpi)
      const currencies = Object.keys(bpi)
      
          return (
              
                 currencies.map (currency => (
                    <div key = {currency}>
                    1 BTC is {bpi[currency].rate}
                    <span>{bpi[currency].description}</span>
                    <span>{currency}</span>
                    </div>  
                 ))
                  
            )
    }

      render () {
        return (

            <div>
            <h4>Bitcoin Price Index</h4>
            {this._renderCurrencies()}
            </div>
            
        )
    }
}

export default Aplication