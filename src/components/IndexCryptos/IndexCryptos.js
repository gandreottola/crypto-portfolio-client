import React, { Component, Fragment } from 'react'
import { indexCryptos, deleteCrypto } from '../../api/cryptos'
import messages from '../AutoDismissAlert/messages'

import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

// import ReactHTMLTableToExcel from 'react-html-table-to-excel'
// import ReactExport from 'react-data-export'
// const ExcelFile = ReactExport.ExcelFile
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet

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
        heading: 'Show CryptoCurrrencies Sucess',
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

  destroy (id) {
    const { alert, user } = this.props

    deleteCrypto(id, user)

      .then((response) => {
        this.setState({
          cryptos: this.state.cryptos.filter(crypto => crypto._id !== id)
        })
        alert({
          heading: ' Delete Success',
          message: messages.indexCryptosSuccess,
          variant: 'success'
        })
      })
      .catch(error => {
        console.error(error)
        alert({
          heading: 'delete Crypto Failed',
          message: messages.createCryptoFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const cryptosJsx = this.state.cryptos.map(crypto => (
      <tr key={crypto._id}>{(this.props.user && crypto) && this.props.user._id === crypto.owner
        ? <Fragment>
          <td>{crypto.name}</td>
          <td>{crypto.price}</td>
          <td>{crypto.buy_date}</td>
          <td>{crypto.amount}</td>
          <td>  {crypto && (
            <div>
              <Button href={`#cryptos/${crypto._id}/updateCrypto`}>Edit</Button>
              <Button variant="danger"
                onClick={this.destroy.bind(this, crypto._id)}>Delete</Button>
            </div>
          )}
          </td>
        </Fragment>
        : null
      }
      </tr>
    ))
    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )
    }
    return (
      // <div>
      //   {this.state.cryptos.length
      //     ? <div>Add Some Crypto</div>
      <Fragment>
        <Button className="add-crypto" href={'#createCrypto'}>Add Crypto</Button>
        <Table id="table" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Bought Price</th>
              <th>Bought Date</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cryptosJsx}
          </tbody>
        </Table>
      </Fragment>
    )
  }
}

export default IndexCryptos
