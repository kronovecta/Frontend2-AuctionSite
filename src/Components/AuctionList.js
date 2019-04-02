import React, { Component } from 'react'
import Auction from './Auction';
import { getSession } from '../api';

export default class AuctionList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let auctionItemStyle = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }

        let auctions = getSession("auctionList");
        let auctionList;
        if(auctions != null) {
            auctionList = auctions.map((item) => {
                return <Auction handleAddBid={this.props.handleAddBid} handleDelete={this.props.handleDelete} data={item} key={item.AuktionID} />
            })
        } else {
            // auctionList = []; // Error handling
        }

        return (
            <div style={auctionItemStyle}>
                {auctionList}
            </div>
        )
    }
}
