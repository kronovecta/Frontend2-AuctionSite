import React, { Component } from 'react'
import BidList from './BidList'

export default class SingleAuction extends Component {
    constructor(props) {
        super(props)
    
        this.state = {  }
    }
    
    render() {
        return (
            <React.Fragment>
                <div style={auctionItemStyle} className="auctionItemStyle">
                    <div style={innerAuctionItemStyle}>
                        <div style={{display:'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                            <h3 style={{marginBottom: '1rem', display:'inline-block'}}>{data.Titel}</h3>
                            <p style={{textAlign:'right', display:'inline-block'}}>Utgångspris: <br/><span style={{fontWeight: '600'}}>{data.Utropspris} SEK</span></p>
                        </div>
                        <p style={{padding:'1rem 0 1.5rem 0', borderTop:'1px solid lightgrey', borderBottom:'1px solid lightgrey'}}>{data.Beskrivning}</p>
                        <p style={{margin:'0'}}>Start: {data.StartDatum.substring(0,10)}</p>
                        <p style={{margin:'0'}}>Slut: {data.SlutDatum.substring(0,10)}</p>
                        <div style={{marginTop: '2rem'}}>
                        <div style={{display:'flex', flexDirection: 'row'}}>
                            <form onSubmit={handleAddBid}>
                                <div style={{display:'flex', verticalAlign: 'middle'}}>
                                    <input style={{flex:'2', marginRight: '1rem'}} className="form-control" type="text" placeholder="100" name="amount" />
                                    <button className="btn btn-success">Bid</button>
                                </div>
                            </form>
                            <button onClick={() => handleToggle(data)} className="btn btn-primary">Show details</button>
                        </div>
                    </div>
                    </div>
                    <div style={{background:'rgba(255,0,0,0.1', padding: '0.5rem', display:'flex', justifyContent: 'space-between', borderRadius: '0.3rem'}}>
                        <button style={{margin:'0 0.5rem'}} className="btn btn-warning">Update</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(data)}>Remove</button>
                    </div>
                </div>
                <BidList />
            </React.Fragment>
        )
    }
}
