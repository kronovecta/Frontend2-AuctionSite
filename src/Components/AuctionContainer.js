import React, { Component } from 'react'
import AuctionList from './AuctionList'
import { createSession, getSession } from '../api';

export default class AuctionContainer extends Component {
  constructor(props) {
    super(props)
    createSession("auctionList", "auktion");
    this.state = { auctions: getSession("auctionList") }
  }

  render() {
    return (
      <div>
        <AuctionList auctions={this.state.auctions} />
      </div>
    )
  }
}
