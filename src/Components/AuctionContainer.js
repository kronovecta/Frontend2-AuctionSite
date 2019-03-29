import React, { Component } from 'react'
import AuctionList from './AuctionList'
import { createSession } from '../api';

export default class AuctionContainer extends Component {
  constructor(props) {
    super(props)
    createSession("auctionList", "auktion");
  }

  handleAddBid(id) {
      console.log("Bid added from ID:" + id)
  }

  render() {
    return (
      <React.Fragment>
        <AuctionList handleAddBid={this.handleAddBid} />
      </React.Fragment>
    )
  }
}
