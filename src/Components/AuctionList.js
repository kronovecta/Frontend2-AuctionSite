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
        this.fetchAuctions = this.fetchAuctions.bind(this);
    }

    async fetchAuctions() {
        await createSession("auctionList", "auktion");
        let auctions = await getSession("auctionList");
        await this.setState({
            auctions: auctions
        })
    }

    componentDidMount() {
        this.fetchAuctions();
    }

    componentDidUpdate(prevProps, prevState) {
        if ((this.props.searchString !== prevProps.searchString || this.state.auctions !== prevState.auctions) && this.state.auctions != null) {

            let auctionList;
            let filteredAuctions;
            if (this.props.viewExpired) {
                filteredAuctions = this.state.auctions.filter(auction => auction.Titel.toLowerCase().includes(this.props.searchString.toLowerCase()));
                filteredAuctions.sort((a, b) => {
                    return a.Titel.localeCompare(b.Titel);
                })
            } else {
                let currentDate = new Date().getTime();
                filteredAuctions = this.state.auctions.filter(auction => auction.Titel.toLowerCase().includes(this.props.searchString.toLowerCase()) && new Date(auction.SlutDatum).getTime() >= currentDate);
                filteredAuctions.sort((a, b) => {
                    return a.Titel.localeCompare(b.Titel);
                })
            }

            auctionList = filteredAuctions.map((item) => {
                return <Auction handleAddBid={this.props.handleAddBid} data={item} key={item.AuktionID} handleToggle={this.props.handleToggle} />
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
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
        }

        return (
            <div style={auctionItemStyle}>
                {this.state.auctionList}
            </div>
        )
    }
}