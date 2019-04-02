import React, { Component } from 'react'
import Auction from './Auction';
import { createSession, getSession } from '../api';

export default class AuctionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            auctions: [],
            auctionList: []
        }
    }

    componentDidMount() {
        createSession("auctionList", "auktion").then(
            this.setState({
                auctions: getSession("auctionList")
            })
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.auctions !== prevState.auctions) {
            let auctions = this.state.auctions;
            let auctionList = auctions.map((item) => {
                return <Auction handleAddBid={this.props.handleAddBid} handleDelete={this.props.handleDelete}  data={item} key={item.AuktionID} />
            });

            this.setState({
                auctionList: auctionList
            });
        }
    }

    render() {
        let auctionItemStyle = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }

        return (
            <div style={auctionItemStyle}>
                {this.state.auctionList}
            </div>
        )
    }
}
