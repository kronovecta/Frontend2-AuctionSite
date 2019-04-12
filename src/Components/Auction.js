import React from 'react'
import moment from 'moment'
import Moment from 'react-moment'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Auction = ({ data, handleAddBid, handleDelete, handleToggle }) => {
    let auctionItemStyle;

    let innerAuctionItemStyle = {
        padding: '1.5rem 2rem',
    }

    if(moment(data.SlutDatum).diff(Date.now()) >= 0) {
        auctionItemStyle = {
            border: '1px solid lightgrey',
            borderRadius: '0.5rem',
            margin: '1rem',
            width: '400px'
        }
    } else {
        auctionItemStyle = {
            border: '1px solid lightgrey',
            borderRadius: '0.5rem',
            margin: '1rem',
            width: '400px',
            opacity:'0.6'
        }
    }

    const auctionStatusOpen = (
            <React.Fragment>
            <div style={{ display: 'flex', justifyContent:'space-between' }}>            
                <p style={{ display: 'inline-block', marginBottom:'0' }}>Start date: </p>
                <Moment format="LL" date={data.StartDatum} />
            </div>
            <div style={{ display: 'flex', justifyContent:'space-between' }}>
                <p style={{ display: 'inline-block', marginBottom:'0' }}>End date: </p>
                <Moment format="LL" date={data.SlutDatum} />
            </div>
        </React.Fragment>
    )

    const auctionStatusClosed = (
        <div style={{width:'100%', padding:'0.7rem', background:'red', color:'white'}}>
            <span>Auction closed</span>
        </div>
    )

    return (
        <div style={auctionItemStyle} className="auctionItemStyle">
            <div style={innerAuctionItemStyle}>
                <div style={{display:'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid lightgrey'}}>
                    <h3 style={{marginBottom: '1rem', display:'inline-block'}}>{data.Titel}</h3>
                    <p style={{textAlign:'right', display:'inline-block'}}>Utgångspris: <br/><span style={{fontWeight: '600'}}>{data.Utropspris} SEK</span></p>
                </div>
                
                {moment(data.SlutDatum).diff(Date.now()) >= 0 ? auctionStatusOpen : auctionStatusClosed}

                <div style={{marginTop: '2rem'}}>
                <div style={{display:'flex', flexDirection: 'row'}}>
                    <button onClick={() => handleToggle(data)} className="btn btn-primary">Show details</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Auction