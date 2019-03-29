import React, { Component } from 'react'
import Auction from './Auction';

export default class AuctionList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let auctionList = this.props.auctions.map((item) => {
            return <Auction data={item} key={item.AuktionID} />
        })

        return (
            <React.Fragment>
                {auctionList}
            </React.Fragment>
        )
    }
}
