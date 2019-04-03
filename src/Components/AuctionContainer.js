import React, { Component } from 'react'
import AuctionList from './AuctionList'
import { createSession } from '../api';
import SingleAuction from './SingleAuction';
import { handleDelete } from './AuctionList'

export default class AuctionContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: false,
      auctionData: null
    }
  }

  handleAddBid = (e) => { // Generate new Bud into the API
    e.preventDefault();
    console.log(e.target.amount.value)

  }

  handleToggle = (data) => {
    console.log(data)
    const newState = this.state.toggle === true ? false : true;
    this.setState({
      auctionData: data,
      toggle: newState
    })
  }

  render() {
    return (
      <div style={{width:'80%', margin:'0 auto'}}>
        {this.state.toggle === true ? <SingleAuction data={this.state.auctionData} /> :
          <AuctionList handleAddBid={this.handleAddBid} searchString={this.props.searchString} handleToggle={this.handleToggle} />
        }
        </div>
    )
  }
}