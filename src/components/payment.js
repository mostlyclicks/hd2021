import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';

export default class Payment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      customerID: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      customerID: event.target.value
    })
  }

  handleSubmit(event) {
    alert('Form was submitted: ' + this.state.value);
    event.preventDefault();
  }

render() {
  return (
  <Layout fullMenu>
    <Helmet
      title="Pay your bill online | Hulse Dental, Onalaska WI"
      meta={[
        {
          name: 'description',
          content:
            'Pay your bill online at Hulse Dental.',
        },
        {
          name: 'keywords',
          content: 'pay online, Hulse Dental',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <article id="main">
      <header>
        <h2>Pay Your Bill</h2>
        <p></p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h2>Pay Your Bill Online</h2>

          <form
            target="_blank"
            action="https://hosted.transactionexpress.com/Transaction/Transaction/Index"
            method="POST"
          >
            <input
              type="hidden"
              name="HostedKey"
              id="HostedKey"
              value="f774615f-789a-462e-9bac-2a757ae9d5d6"
            />
            <input
              type="hidden"
              name="Gateway_ID"
              id="Gateway_ID"
              value="9078619423"
            />
            <input
              type="hidden"
              name="IndustryCode"
              id="IndustryCode"
              value="2"
            />
            <input type="hidden" name="Amount" id="Amount" value="" />
            <input
              type="hidden"
              name="RecurringType"
              id="RecurringType"
              value="N"
            />
            <input
              type="hidden"
              name="RecurringAmount"
              id="RecurringAmount"
              value=""
            />
            <input
              type="hidden"
              name="RURL"
              id="RURL"
              value="https://www.hulsedental.com/Thank-you"
            />
            <input
              type="hidden"
              name="CURL"
              id="CURL"
              value="https://www.hulsedental.com/Canceled-payment"
            />
            <input
              type="hidden"
              name="AVSRequired"
              id="AVSRequired"
              value="Y"
            />
            <input
              type="hidden"
              name="CVV2Required"
              id="CVV2Required"
              value="Y"
            />
            <input
              type="hidden"
              name="EmailRequired"
              id="EmailRequired"
              value="N"
            />
            <input type="hidden" name="PostRspMsg" id="PostRspMsg" value="N" />
            Account Name:
            <input
              type="text"
              required
              name="custrefid"
              id="custrefid"
              value={this.state.customerID}
              onChange={this.handleChange}
            />
            <br />
            <input type="Submit" name="Submit" id="Submit" value="Pay Now" />
          </form>
        </div>
      </section>
    </article>
  </Layout>
  )}};