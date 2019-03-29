import React, { Component } from 'react'
import Auction from './Auction';
import { getSession } from '../api';

export default class AuctionList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let auctions = getSession("auctionList");
        let auctionList = auctions.map((item) => {
            return <Auction data={item} key={item.AuktionID} />
        })

        return (
            <React.Fragment>
                {auctionList}
            </React.Fragment>
        )
    }
}
