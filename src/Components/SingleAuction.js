import React, { Component } from 'react'
import BidList from './BidList'
import { deleteData } from '../api';

export default class SingleAuction extends Component {
    constructor(props) {
        super(props)
    
        this.state = {  }
    }

    handleDelete() {
        deleteData(this.props.data, "Auktion");
    }
    
    render() {
        
        let auctionItemStyle = {
            border: '1px solid lightgrey',
            borderRadius: '0.5rem',
            margin: '1rem',
            minWidth: '300px',
            flex:'2',
            marginRight:'2rem'
        }

        let auctionItemStyleHover = {
            background:'red'
        }

        let innerAuctionItemStyle = {
            padding: '1.5rem 2rem',
        }

        return (
            <div style={{display:'flex', justifyContent:'space-between', flexDirection:'row', flexWrap:'wrap'}}>
                    <div style={innerAuctionItemStyle}>
                        <div style={{display:'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                            <h3 style={{marginBottom: '1rem', display:'inline-block'}}>{this.props.data.Titel}</h3>
                            <p style={{textAlign:'right', display:'inline-block'}}>Utgångspris: <br/><span style={{fontWeight: '600'}}>{this.props.data.Utropspris} SEK</span></p>
                        </div>
                        <p style={{padding:'1rem 0 1.5rem 0', borderTop:'1px solid lightgrey', borderBottom:'1px solid lightgrey'}}>{this.props.data.Beskrivning}</p>
                        <p style={{margin:'0'}}>Start: {this.props.data.StartDatum.substring(0,10)}</p>
                        <p style={{margin:'0'}}>Slut: {this.props.data.SlutDatum.substring(0,10)}</p>
                        <div style={{marginTop: '2rem'}}>
                        <div style={{display:'flex', flexDirection: 'row'}}>
                            <form onSubmit={this.props.handleAddBid}>
                                <div style={{display:'flex', verticalAlign: 'middle'}}>
                                    <input style={{flex:'2', marginRight: '1rem'}} className="form-control" type="text" placeholder="100" name="amount" />
                                    <button className="btn btn-success">Bid</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style={{background:'rgba(255,0,0,0.1', padding: '0.5rem', display:'flex', justifyContent: 'space-between', borderRadius: '0.3rem', alignItems:'bottom'}}>
                        <button style={{margin:'0 0.5rem'}} className="btn btn-warning">Update</button>
                        <button className="btn btn-danger" onClick={this.handleDelete}>Remove</button>
                    </div>
                </div>

                <div>
                    <BidList selected={this.props.data}/>
                </div>
            </div>
        )
    }
}
