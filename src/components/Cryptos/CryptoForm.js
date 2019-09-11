import React from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CurrencyFormat from 'react-currency-format'

const CryptoForm = ({ crypto, handleChange, handleSubmit }) => (
  <Modal.Dialog>
    <div className="row">
      <div className="mx-auto mt-5">
        <Modal.Header>
          <Modal.Title>
            {crypto._id ? <h3>Update CryptoCurrrency</h3>
              : <h3>Add CryptoCurrrency</h3> }
          </Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="name">
              <Form.Label>Crypto Name</Form.Label>
              <Form.Control
                required
                name="name"
                value={crypto.name}
                type= "text"
                placeholder="Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="buy_date">
              <Form.Label>Buy Date</Form.Label>
              <Form.Control
                required
                name="buy_date"
                value={crypto.buy_date}
                type="date"
                placeholder="Buy Date"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group className="col" controlId="price">
                <div>
                  <Form.Label>Buy Price</Form.Label>
                </div>
                <CurrencyFormat
                  required
                  name="price"
                  prefix={'$'}
                  value= {crypto.price}
                  placeholder="Price"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="col"controlId="amount">
                <div>
                  <Form.Label>Amount</Form.Label>
                </div>
                <CurrencyFormat
                  required
                  name="amount"
                  value={crypto.amount}
                  placeholder="Amount"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" href={'#cryptos'}>Close</Button>
            {crypto._id ? <Button variant="primary" type="submit">Save Changes</Button>
              : <Button variant="primary" type="submit">Save</Button>}
          </Modal.Footer>
        </Form>
      </div>
    </div>
  </Modal.Dialog>
)

export default CryptoForm
