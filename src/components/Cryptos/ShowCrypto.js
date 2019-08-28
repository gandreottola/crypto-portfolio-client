// import React, { Component, Fragment } from 'react'
// import { withRouter } from 'react-router-dom'
// // import { showCrypto } from '../../api/cryptos'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
// // import messages from '../AutoDismissAlert/messages'
//
// // import Table from 'react-bootstrap/Table'
// import Button from 'react-bootstrap/Button'
//
// class ShowCrypto extends Component {
//   state = {
//     crypto: null
//   }
//
//   async componentDidMount () {
//     console.log(this.props.user)
//     // console.log(this.props.data.crypto)
//     try {
//       const response = await axios(`${apiUrl}/cryptos/${this.props.match.params.id}`)
//
//       this.setState({ crypto: response.data.crypto })
//     } catch (error) {
//       console.error(error)
//     }
//   }
//
//   // render () {
//   //   return (
//   // }
// }
//
// export default withRouter(ShowCrypto)
