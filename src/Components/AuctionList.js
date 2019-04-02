import React, { Component } from 'react'
import Auction from './Auction';
import { createSession, getSession, deleteData } from '../api';

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

    handleDelete = (data) => {
        let res = window.confirm("Click a button")

        if(res == true) {
            deleteData(data, "Auktion");
            
            let filtered = this.state.auctionList.filter(function(auction) {
                if(auction.props.data.AuktionID !== data.AuktionID) {
                    return auction
                }
            })

            let newAuctionList = filtered.map(auction => {
                return auction.props.data
            })

            this.setState({auctionList: filtered})
            sessionStorage.setItem("auctionList", JSON.stringify(newAuctionList));

        } else {
          console.log("Cancel")
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.auctions !== prevState.auctions) {
            let auctions = this.state.auctions;
            let auctionList = auctions.map((item) => {
                return <Auction handleAddBid={this.props.handleAddBid} handleDelete={this.props.handleDelete}  data={item} key={item.AuktionID} handleDelete={this.handleDelete} />
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
