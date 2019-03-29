import React from 'react'

const Auction = ({ data, handleAddBid }) => {
    let auctionItemStyle = {
        border: '1px solid lightgrey',
        padding: '2rem',
        margin: '1rem'
    }
    return (
        <div style={auctionItemStyle}>
            <div style={{display:'flex', justifyContent: 'space-between'}}>
                <h3 style={{marginBottom: '1rem', display:'inline-block'}}>{data.Titel}</h3>
                <p style={{display:'inline-block'}}>Startpris: {data.Utropspris}</p>
            </div>
            <p style={{padding:'1rem 0 2rem 0'}}>{data.Beskrivning}</p>
            <p>Startdatum: {data.StartDatum.substring(0,10)}</p>
            <p>Slutdatum: {data.SlutDatum.substring(0,10)}</p>
            <div style={{marginTop: '1rem'}}>
                <button onClick={() => handleAddBid(data.AuktionID)}>Lägg bud</button>
            </div>
        </div>
    )
}

export default Auction