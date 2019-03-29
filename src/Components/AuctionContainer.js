import React, { Component } from 'react'
import AuctionList from './AuctionList'
import { createSession } from '../api';

export default class AuctionContainer extends Component {
  constructor(props) {
    super(props)
    createSession("auctionList", "auktion");
  }

  render() {
    return (
      <React.Fragment>
        <AuctionList />
      </React.Fragment>
    )
  }
}
