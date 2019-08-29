import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CryptoForm = ({ crypto, handleChange, handleSubmit }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>Add CryptoCurrrency</h3>
      <Form onSubmit={handleSubmit}>
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
        <Form.Group controlId="price">
          <Form.Label>Buy Price</Form.Label>
          <Form.Control
            required
            name="price"
            value={crypto.price}
            type="text"
            placeholder="Price"
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
        <Form.Group controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            required
            name="amount"
            value={crypto.amount}
            type="text"
            placeholder="Amount"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
        Submit
        </Button>
        <Button href={'#cryptos'}>cancel</Button>
      </Form>
    </div>
  </div>
)

export default CryptoForm
