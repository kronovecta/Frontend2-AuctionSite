import React, { Component } from 'react'
import BidList from './BidList'
import { createSession, getSession, postData } from '../api';
import Moment from 'react-moment';
import CreateAuction from './CreateAuction';
import AddBid from './AddBid';

export default class SingleAuction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayAuction: true,
            allBids: []
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.fetchBids = this.fetchBids.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async fetchBids() {
        await createSession("bidList", "bud", 1/*this.props.selected.AuktionID*/);
        let bids = await getSession("bidList")
        await this.setState({
            allBids: bids
        })
    }

    componentDidMount() {
        this.fetchBids();
    }

    handleClick() {
        const newState = this.state.displayAuction === true ? false : true;
        this.setState({ displayAuction: newState });
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.setState({displayAuction: true})
    }

    handleAddBid = (e) => { // Generate new Bud into the API
        e.preventDefault();
        let data = {Summa: e.target.amount.value, AuktionID: this.props.data.AuktionID, Budgivare: e.target.name.value}
        postData(data, "bud");
    }

    render() {

        let auctionItemStyle = {
            border: '1px solid lightgrey',
            borderRadius: '0.5rem',
            margin: '1rem',
            minWidth: '300px',
        }

        let innerAuctionItemStyle = {
            flex: '2',
            marginRight: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }

        let num = typeof(1)
        console.log(num)

        const Content = (
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'nowrap', padding:'2rem' }}>
                <div style={{flex:'2', marginRight:'5vw'}}>
                    <div style={innerAuctionItemStyle}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <h3 style={{ marginBottom: '1rem', display: 'inline-block' }}>{this.props.data.Titel}</h3>
                                <p style={{ textAlign: 'right', display: 'inline-block' }}>Utgångspris: <br /><span style={{ fontWeight: '600' }}>{this.props.data.Utropspris} SEK</span></p>
                            </div>
                            <p style={{ padding: '1rem 0 1.5rem 0', borderTop: '1px solid lightgrey', borderBottom: '1px solid lightgrey' }}>{this.props.data.Beskrivning}</p>

                            <div style={{ display: 'block' }}>
                                <p style={{ display: 'inline-block' }}>Start date: </p><Moment format="LLL" date={this.props.data.StartDatum} />
                            </div>
                            <div style={{ display: 'block' }}>
                                <p style={{ display: 'inline-block' }}>End date: </p><Moment format="LLL" date={this.props.data.SluttDatum} />
                            </div>
                        </div>
                        <div style={{ background: 'rgba(255,0,0,0.1', padding: '0.5rem', display: 'flex', justifyContent: 'space-between', borderRadius: '0.3rem' }}>
                            <button style={{ margin: '0 0.5rem' }} className="btn btn-warning" onClick={this.handleClick}>Update</button>
                            <button className="btn btn-danger" onClick={() => this.props.handleDelete(this.props.data)}>Remove</button>
                        </div>
                    </div>
                </div>

                <div style={{flex:'1', minWidth:'370px'}}>
                    <AddBid handleAddBid={this.handleAddBid} auctionData={this.props.data} />
                    <BidList selected={this.props.data} bids={this.state.allBids} />
                </div>
            </div>
        )

        return (
            this.state.displayAuction === true ? Content : <CreateAuction handleCancel={this.handleCancel} data={this.props.data} />
        )
    }
}
