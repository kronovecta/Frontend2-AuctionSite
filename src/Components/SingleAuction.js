import React, { Component } from 'react'
import BidList from './BidList'
import { deleteData } from '../api';
import Moment from 'react-moment';
import CreateAuction from './CreateAuction';

export default class SingleAuction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayAuction: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleClick() {
        const newState = this.state.displayAuction === true ? false : true;
        this.setState({ displayAuction: newState });
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.setState({displayAuction: true})
    }

    render() {

        let auctionItemStyle = {
            border: '1px solid lightgrey',
            borderRadius: '0.5rem',
            margin: '1rem',
            minWidth: '300px',
        }

        let auctionItemStyleHover = {
            background: 'red'
        }

        let innerAuctionItemStyle = {
            padding: '1.5rem 2rem',
            flex: '2',
            marginRight: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }

        const Content = (
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
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

                        <div style={{ marginTop: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <form onSubmit={this.props.handleAddBid} style={{ width: '100%' }}>
                                    <div style={{ display: 'flex', verticalAlign: 'middle', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                        <div style={{ display: 'block' }}>
                                            <label style={{ paddingLeft: '0.5rem' }}>Name</label>
                                            <input style={{ flex: '1', marginRight: '1rem' }} className="form-control" type="text" placeholder="John Andres" name="name" />
                                        </div>
                                        <div style={{ display: 'block' }}>
                                            <label style={{ paddingLeft: '0.5rem' }}>Amount</label>
                                            <input style={{ flex: '1', marginRight: '1rem' }} className="form-control" type="number" placeholder="100" name="amount" />
                                        </div>
                                        <div style={{ display: 'block', textAlign: 'end' }}>
                                            <button style={{ display: 'block', verticalAlign: 'bottom' }} className="btn btn-success">Bid</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: 'rgba(255,0,0,0.1', padding: '0.5rem', display: 'flex', justifyContent: 'space-between', borderRadius: '0.3rem' }}>
                        <button style={{ margin: '0 0.5rem' }} className="btn btn-warning" onClick={this.handleClick}>Update</button>
                        <button className="btn btn-danger" onClick={() => this.props.handleDelete(this.props.data)}>Remove</button>
                    </div>
                </div>

                <div>
                    <BidList selected={this.props.data} />
                </div>
            </div>)

        return (
            this.state.displayAuction === true ? Content : <CreateAuction handleCancel={this.handleCancel} data={this.props.data} />
        )
    }
}
