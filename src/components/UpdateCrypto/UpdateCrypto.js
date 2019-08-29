import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { updateCrypto, showCrypto } from '../../api/cryptos'
import messages from '../AutoDismissAlert/messages'

import CryptoForm from '../Cryptos/CryptoForm'

class UpdateCrypto extends Component {
  state = {
    crypto: {
      name: '',
      price: '',
      buy_date: '',
      amount: ''
    }
  }

  componentDidMount () {
    const { user } = this.props

    showCrypto(this.props.match.params.id, user)
      .then((response) => {
        this.setState({ crypto: response.data.crypto })
      })
      .catch((error) => {
        console.error(error)
        alert({
          heading: 'Error',
          message: 'Cant retrieve data',
          variant: 'danger'
        })
      })
  }

  handleChange = event => {
    this.setState({
      crypto: {
        ...this.state.crypto,
        [event.target.name]: event.target.value
      }
    })
  }

    onUpdateCrypto = event => {
      event.preventDefault()

      const { alert, user } = this.props
      updateCrypto(this.state.crypto._id, user, this.state.crypto)
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
      if (!this.state.crypto) {
        return (
          <h1>Loading...</h1>
        )
      }
      return (
        <CryptoForm
          crypto={this.state.crypto}
          handleChange={this.handleChange}
          handleSubmit={this.onUpdateCrypto}
        />
      )
    }
}

export default withRouter(UpdateCrypto)
