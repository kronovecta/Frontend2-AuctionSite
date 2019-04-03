import React, { Component } from 'react'
import AuctionList from './AuctionList'
import { createSession } from '../api';
import SingleAuction from './SingleAuction';

export default class AuctionContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: false,
      auctionData: null
    }
  }

  componentDidMount() {
    createSession("auctionList", "auktion");
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
      <React.Fragment>
        {this.state.toggle === true ? <SingleAuction data = {this.state.auktionData} /> :
          <AuctionList handleAddBid={this.handleAddBid} searchString={this.props.searchString} handleToggle={this.handleToggle} />
        }
      </React.Fragment>
    )
  }
}