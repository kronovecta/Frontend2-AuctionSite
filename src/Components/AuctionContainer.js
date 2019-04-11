import React, { Component } from 'react'
import AuctionList from './AuctionList'
import { createSession, deleteData, getSession } from '../api';
import SingleAuction from './SingleAuction';

export default class AuctionContainer extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
    this.fetchAuctions = this.fetchAuctions.bind(this);

    this.state = {
      toggle: false,
      auctionData: null,
      test: false
    }
  }

  async handleDelete(data) {
    console.log("handleDelete")
    await deleteData(data, "Auktion");
    await this.fetchAuctions();
    await this.handleToggle(data);
  }

  async fetchAuctions() {
    await createSession("auctionList", "auktion");
    // this.handleToggle(null);
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
        {this.state.toggle === true ? <SingleAuction handleDelete={this.handleDelete} data={this.state.auctionData} handleAddBid={this.handleAddBid} fetchAuctions={this.fetchAuctions} /> :
          <AuctionList handleAddBid={this.handleAddBid} searchString={this.props.searchString} handleToggle={this.handleToggle} viewExpired={this.props.viewExpired} />
        }
      </div>
    )
  }
}