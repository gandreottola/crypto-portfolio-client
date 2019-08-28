import apiUrl from '../apiConfig'
import axios from 'axios'

export const createCrypto = (crypto, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/cryptos',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      crypto: {
        name: crypto.name,
        price: crypto.price,
        buy_date: crypto.buyDate,
        amount: crypto.amount
      }
    }
  })
}

export const indexCryptos = user => {
  return axios({
    url: apiUrl + '/cryptos',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const showCrypto = (id, user) => {
  return axios({
    url: apiUrl + `/cryptos/${id}`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const updateCrypto = (id, user, crypto) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/cryptos/${id}`,
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      crypto: {
        name: crypto.name,
        price: crypto.price,
        buy_date: crypto.buyDate,
        amount: crypto.amount
      }
    }
  })
}
