import React, { Component } from 'react'
import Auction from './Auction';
import { createSession, getSession, deleteData, getData } from '../api';

export default class AuctionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            auctions: [],
            auctionList: []
        }
        this.createAuctions = this.createAuctions.bind(this);
    }

    async createAuctions() {
        await createSession("auctionList", "auktion");
        let auctions = await getSession("auctionList");
        await this.setState({
            auctions: auctions
        })
    }

    componentDidMount() {
        // let url = `http://nackowskis.azurewebsites.net/api/auktion/2050`;

        // let json = "";
        // await fetch(url).then(function (response) {
        //     return response.json();
        // }).then(function (myJson) {
        //     json = myJson;
        // })
        // let json = getData("auktion");
        // console.log(json);

        this.createAuctions();
        // console.log(object);

        // createSession("auctionList", "auktion").then(
        //     this.setState({
        //         auctions: getSession("auctionList")
        //     })
        // );
    }

    handleDelete = (data) => {
        let res = window.confirm("Click a button")

        if (res === true) {
            deleteData(data, "Auktion");

            let filtered = this.state.auctionList.filter(function (auction) {
                if (auction.props.data.AuktionID !== data.AuktionID) {
                    return auction
                }
            })

            let newAuctionList = filtered.map(auction => {
                return auction.props.data
            })

            this.setState({ auctionList: filtered })
            sessionStorage.setItem("auctionList", JSON.stringify(newAuctionList));

        } else {
            console.log("Cancel")
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if ((this.props.searchString !== prevProps.searchString || this.state.auctions !== prevState.auctions) && this.state.auctions != null) {

            console.log(this.state.auctions);
            let filteredAuctions = this.state.auctions.filter(auction => auction.Titel.toLowerCase().includes(this.props.searchString.toLowerCase()));
            filteredAuctions.sort((a, b) => {
                return a.Titel.localeCompare(b.Titel);
            })
            let auctionList = filteredAuctions.map((item) => {
                return <Auction handleAddBid={this.props.handleAddBid} /*handleDelete={this.handleDelete}*/ data={item} key={item.AuktionID} handleToggle={this.props.handleToggle} />
            });

            this.setState({
                auctionList: auctionList
            });
        }
        // console.log(this.state.auctions);

    }

    render() {
        let auctionItemStyle = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
        }
        // console.log(this.state.auctions);


        return (
            <div style={auctionItemStyle}>
                {this.state.auctionList}
            </div>
        )
    }
}