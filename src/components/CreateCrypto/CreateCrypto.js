import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createCrypto } from '../../api/cryptos'
import messages from '../AutoDismissAlert/messages'

import CryptoForm from '../Cryptos/CryptoForm'

class CreateCrypto extends Component {
state = {
  crypto: {
    name: '',
    price: '',
    buy_date: '',
    amount: ''
  }
}

  handleChange = event => {
    this.setState({
      crypto: {
        ...this.state.crypto,
        [event.target.name]: event.target.value
      }
    })
  }

  onCreateCrypto = event => {
    event.preventDefault()
    console.log(this.state.crypto.buy_date)
    const { alert, user } = this.props
    createCrypto(this.state.crypto, user)
      .then(response => {
        alert({
          heading: 'Success!!',
          message: messages.createCryptoSuccess,
          variant: 'success'
        })

        this.props.history.push('/cryptos')
      })
      .catch(error => {
        console.error(error)
        this.setState({ name: '', price: '', buyDate: '', amount: '' })
        alert({
          heading: 'Create Crypto Failed',
          message: messages.createCryptoFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <CryptoForm
        crypto={this.state.crypto}
        handleChange={this.handleChange}
        handleSubmit={this.onCreateCrypto}
      />
    )
  }
}

export default withRouter(CreateCrypto)
