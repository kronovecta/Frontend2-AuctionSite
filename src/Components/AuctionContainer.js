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
      // console.log(e)
      console.log(e.target.amount.value)
  }

  handleDelete = (data) => {
    let res = window.confirm("Click a button")
    if(res == true) {
      // let auctionList = JSON.parse(sessionStorage.getItem("auctionList"));
      // let auction = auctionList.filter(a => a.AuktionID == data.AuktionID);

      deleteData(data, "Auktion")
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
