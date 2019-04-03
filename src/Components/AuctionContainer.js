import React, { Component } from 'react'
import AuctionList from './AuctionList'
import { createSession, deleteData } from '../api';
import SingleAuction from './SingleAuction';

export default class AuctionContainer extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      toggle: false,
      auctionData: null
    }
  }

  handleDelete(data) {
    deleteData(data, "Auktion");
    this.fetchAuctions();
    this.handleToggle(data);
  }

  async fetchAuctions() {
    await createSession("auctionList", "auktion");
  }

  handleAddBid = (e) => { // Generate new Bud into the API
    e.preventDefault();
    console.log(e.target.amount.value)

  }

  handleToggle = (data) => {
    const newState = this.state.toggle === true ? false : true;
    this.setState({
      auctionData: data,
      toggle: newState
    })
  }

  render() {
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
        {this.state.toggle === true ? <SingleAuction handleDelete={this.handleDelete} data={this.state.auctionData} /> :
          <AuctionList handleAddBid={this.handleAddBid} searchString={this.props.searchString} handleToggle={this.handleToggle} />
        }
      </div>
    )
  }
}