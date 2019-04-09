import React, { Component } from 'react'
import BidList from './BidList'
import { createSession, getSession, postData } from '../api';
import Moment from 'react-moment';
import moment from 'moment'
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
        this.handleReturn = this.handleReturn.bind(this);
    }

    async fetchBids() {
        console.log(this.props.data.AuktionID);
        await createSession("bidList", "bud", this.props.data.AuktionID);
        let bids = await getSession("bidList")

        let sorted = bids.sort((a, b) => {
            return parseInt(a.Summa) - parseInt((b.Summa));
        }).reverse()

        console.log(bids)
        console.log(sorted)

        await this.setState({
            allBids: sorted
        })
        // this.forceUpdate();
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
        this.setState({ displayAuction: true })
    }
    
    handleReturn = () => {

    }

    handleAddBid = (e) => {
        e.preventDefault();
        let price = false;
        let name = false;

        if (e.target.amount.value >= this.props.data.Utropspris) {
            price = true;
        }

        if (e.target.name.value != "") {
            name = true;
        }

        if (price === true && name === true) {

            this.postBid(this.props.data, e.target.name.value, e.target.amount.value)
        } else {
            // this.postError(price, name)
        }
    }

    async postBid(data, name, amount) {
        let object = { Budgivare: name, Summa: amount, AuktionID: data.AuktionID }
        this.setState({
            allBids: [...this.state.allBids, object]
        })
        await postData(object, "bud")
        await this.fetchBids()
        console.log(this.state.allBids)

        // console.log(object)
        
        
        if(object.Summa > this.state.allBids[0].Summa) {
            this.setState({
                allBids: [...this.state.allBids, object]
            }, () => { console.log(this.state.allBids) })
            postData(object, "bud");
        } else {
            console.log("Bid too small");
        }
    }

    render() {
        let innerAuctionItemStyle = {
            flex: '2',
            marginRight: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }
        
        const addBid = (
            <AddBid handleAddBid={this.handleAddBid} auctionData={this.props.data} update={this.fetchBids} />
        )

        const Content = (
            <React.Fragment>
                <div style={{ padding: '0.5rem', display: 'flex', justifyContent: 'flex-end', borderRadius: '0.3rem' }}>
                    <form><button className="btn btn-primary" onClick={this.handleReturn}>Return</button></form>
                    <button style={{ margin: '0 0.5rem' }} className="btn btn-warning" onClick={this.handleClick}>Update</button>
                    <button className="btn btn-danger" onClick={() => this.props.handleDelete(this.props.data)}>Remove</button>
                </div>
            
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'nowrap', padding: '2rem' }}>
                    <div style={{ flex: '2', marginRight: '5vw' }}>
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
                                    <p style={{ display: 'inline-block' }}>End date: </p><Moment format="LLL" date={this.props.data.SlutDatum} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: '1', minWidth: '370px' }}>
                        {moment(this.props.data.SlutDatum).diff(Date.now()) >= 0 ? addBid : null}
                        <BidList selected={this.props.data} bids={this.state.allBids} update={this.fetchBids} />
                    </div>
                </div>
            </React.Fragment>

        )

        return (
            this.state.displayAuction === true ? Content : <CreateAuction handleCancel={this.handleCancel} data={this.props.data} />
        )
    }
}
