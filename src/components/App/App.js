import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Particles from 'react-particles-js'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import CreateCrypto from '../CreateCrypto/CreateCrypto'
import IndexCryptos from '../IndexCryptos/IndexCryptos'
import UpdateCrypto from '../UpdateCrypto/UpdateCrypto'
import ShowCrypto from '../Cryptos/ShowCrypto'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state
    const particles = { particles: {
      number: {
        value: 100
      },
      size: {
        value: 5
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        }
      }
    } }
    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <Particles canvasClassName="particles-canvas" params={particles} />
        <Route exact path='/' render={() => (
          <h2 className="homepage">
        Come And Create A Crypto Portfolio To Stay On Top Of Your Investments!</h2>
        )} />
        <main className="container">
          <Route path='/sign-up' render={() => (
            <div>
              <SignUp alert={this.alert} setUser={this.setUser} />
            </div>
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} exact path='/cryptos' render={() => (
            <div>
              <IndexCryptos alert={this.alert} user={user}/>
            </div>
          )} />
          <AuthenticatedRoute user={user} exact path='/cryptos/:id' render={() => (
            <ShowCrypto alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/createCrypto' render={() => (
            <CreateCrypto alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/cryptos/:id/updateCrypto'
            render={() => (
              <UpdateCrypto alert={this.alert} user={user} />
            )} />
        </main>
      </Fragment>
    )
  }
}

export default App
