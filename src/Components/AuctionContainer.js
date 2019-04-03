import React, { Component } from 'react'
import AuctionList from './AuctionList'
import { createSession } from '../api';

export default class AuctionContainer extends Component {

  componentDidMount() {
    createSession("auctionList", "auktion");
  }

  handleAddBid = (e) => { // Generate new Bud into the API
    e.preventDefault();
    console.log(e.target.amount.value)
  }

  handleToggle = (data) => {
    console.log(data)
  }

  render() {
    return (
      <React.Fragment>
        <AuctionList handleAddBid={this.handleAddBid} searchString={this.props.searchString} handleToggle={this.handleToggle} />
      </React.Fragment>
    )
  }
}
