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
  },
  show: true
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

    const { alert, user } = this.props
    createCrypto(this.state.crypto, user)
      .then(response => {
        alert({
          heading: messages.createCryptoSuccess,
          variant: 'success'
        })

        this.props.history.push('/cryptos')
      })
      .catch(error => {
        console.error(error)
        this.setState({ name: '', price: '', buyDate: '', amount: '' })
        alert({
          heading: messages.createCryptoFailure,
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
        show={this.state.show}
      />
    )
  }
}

export default withRouter(CreateCrypto)
