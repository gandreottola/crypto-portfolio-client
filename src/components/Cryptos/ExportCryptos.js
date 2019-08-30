// import React, { Fragment } from 'react'
// import ReactExport from 'react-data-export'
// import { indexCryptos } from '../../api/cryptos'
// import messages from '../AutoDismissAlert/messages'
//
// const ExcelFile = ReactExport.ExcelFile
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
// const ExcelColumn = ReactExport.ExcelFile
//
// class Download extends React.Component {
// state = {
//   cryptos: []
// }
//
// async componentDidMount () {
//   try {
//     const { alert, user } = this.props
//
//     const response = await indexCryptos(user)
//     this.setState({ cryptos: response.data.cryptos })
//     console.log(response.data)
//     alert({
//       heading: 'Sucess',
//       message: messages.exportCryptosSuccess,
//       variant: 'success'
//     })
//   } catch (error) {
//     console.error(error)
//     alert({
//       heading: 'Failed',
//       message: messages.exportCryptosFailure,
//       variant: 'danger'
//     })
//   }
// }
//
// render () {
//   this.state.cryptos.map(crypto => (
//     <Fragment key={crypto._id}>
//       {(this.props.user && crypto) && this.props.user._id === crypto.owner
//         ? <div>
//           <ExcelColumn label="Name" type="text" value={crypto.name}/>
//           <ExcelColumn label="Wallet Money" value="amount"/>
//           <ExcelColumn label="Gender" value="sex"/>
//           <ExcelColumn label="Marital Status"/>
//         </div>
//         : null
//       }
//     </Fragment>
//   ))
//
//   return (
//     <ExcelFile>
//       <ExcelSheet state={this.state.cryptos} name="Cryptos">
//       </ExcelSheet>
//     </ExcelFile>
//   )
// }
// }
//
// export default Download
