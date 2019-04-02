import React, { Component } from 'react'
import AuctionList from './AuctionList'
import { createSession, deleteData } from '../api';

export default class AuctionContainer extends Component {
  constructor(props) {
    super(props)
    createSession("auctionList", "auktion");
  }

  handleAddBid = (e) => { // Generate new Bud into the API
      e.preventDefault();
      console.log(e.target.amount.value)
  }

  handleDelete = (id) => {
    let res = window.confirm("Click a button")
    if(res == true) {
      deleteData(id)
    } else {
      console.log("Cancel")
    }
  }

  render() {
    return (
      <React.Fragment>
        <AuctionList handleAddBid={this.handleAddBid} handleDelete={this.handleDelete} />
      </React.Fragment>
    )
  }
}
