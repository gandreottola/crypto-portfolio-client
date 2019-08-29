import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { deleteCrypto, indexCryptos } from '../../api/cryptos'
import messages from '../AutoDismissAlert/messages'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class DeleteCrypto extends Component {
  constructor () {
    super()

    this.state = {
      cryptos: []
    }
  }
  // handleChange = event => {
  //   this.setState({
  //     crypto: {
  //       ...this.state.crypto,
  //       [event.target.name]: event.target.value
  //     }
  //   })
  // }

  async componentDidMount () {
    try {
      const { user } = this.props

      deleteCrypto(this.props.match.params.id, user)
        .then(() => {
          alert({
            heading: 'Success!!',
            message: messages.createCryptoSuccess,
            variant: 'success'
          })
          console.log('test')
        })
      this.props.history.push('/cryptos')
      const response = await indexCryptos(user)
      this.setState({ cryptos: response.data.cryptos })
      const filteredCryptos = response.filter(crypto => {
        return crypto
      })
      console.log(filteredCryptos)
    } catch (error) {
      console.error(error)
      alert({
        heading: 'Show CryptoCurrrencies Failed',
        message: messages.indexCryptosFailure,
        variant: 'danger'
      })
    }
  }

  // onUpdateCrypto = event => {
  //   event.preventDefault()
  //
  //   const { alert, user } = this.props
  //   updateCrypto(this.state.crypto._id, user, this.state.crypto)
  //     .then(response => {
  //       alert({
  //         heading: 'Success!!',
  //         message: messages.createCryptoSuccess,
  //         variant: 'success'
  //       })
  //       // Works only with path /crypto
  //       this.props.history.push(`/cryptos/${this.state.crypto._id}`)
  //     })
  //     .catch(error => {
  //       console.error(error)
  //       this.setState({ name: '', price: '', buyDate: '', amount: '' })
  //       alert({
  //         heading: 'Create Crypto Failed',
  //         message: messages.createCryptoFailure,
  //         variant: 'danger'
  //       })
  //     })
  // }

  render () {
    const cryptosJsx = this.state.cryptos.map(crypto => (
      <Fragment key={crypto._id}>
        {crypto && (
          <div>
            {(this.props.user && crypto) && this.props.user._id === crypto.owner
              ? <div>
                <Button href={`#cryptos/${crypto._id}/updateCrypto`}>Edit</Button>
                <Button variant="danger" href={`#cryptos/${crypto._id}/deleteCrypto`}>Delete</Button>
              </div>
              : ''
            }
          </div>
        )}
        <Table responsive hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Bought Price</th>
              <th>Bought Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{crypto.name}</td>
              <td>{crypto.price}</td>
              <td>{crypto.buy_date}</td>
              <td>{crypto.amount}</td>
            </tr>
          </tbody>
        </Table>
      </Fragment>
    ))
    // {this.state.cryptos.filter(crypto =>
    //   crypto.owner === this.props.user._id,
    return (
      <div>
        {this.state.cryptos.length ? cryptosJsx : <div>No CryptoCurrrencies</div>
        }
      </div>
    )
  }
}

export default withRouter(DeleteCrypto)
