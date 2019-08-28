import React, { Component, Fragment } from 'react'
import { indexCryptos } from '../../api/cryptos'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'
// import UpdateCrypto from '../UpdateCrypto/UpdateCrypto'

import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class IndexCryptos extends Component {
  constructor () {
    super()

    this.state = {
      cryptos: [],
      isLoading: true
    }
  }

  async componentDidMount () {
    try {
      const { alert, user } = this.props

      const response = await indexCryptos(user)
      this.setState({ cryptos: response.data.cryptos, isLoading: false })
      alert({
        heading: 'Show CryptoCurrrencies Success',
        message: messages.indexCryptosSuccess,
        variant: 'success'
      })
    } catch (error) {
      console.error(error)
      alert({
        heading: 'Show CryptoCurrrencies Failed',
        message: messages.indexCryptosFailure,
        variant: 'danger'
      })
    }
  }

  render () {
    const cryptosJsx = this.state.cryptos.map(crypto => (
      <Fragment key={crypto._id}>
        {crypto && (
          <div>
            {(this.props.user && crypto) && this.props.user._id === crypto.owner
              ? <Button href={`#cryptos/${crypto._id}/updateCrypto`}>Edit</Button>
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
    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )
    }

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

export default IndexCryptos
