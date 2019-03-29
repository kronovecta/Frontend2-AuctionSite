import React from 'react'

const Auction = ({data}) => {
    let auctionItemStyle = {
        border: '1px solid lightgrey',
        padding: '1rem',
        margin: '1rem'
    }
    return (
        <div style={auctionItemStyle}>
            <h3>{data.Titel}</h3>
            <p>{data.Beskrivning}</p>
            <p>Startdatum: {data.StartDatum}</p>
            <p>Slutdatum: {data.SlutDatum}</p>
            <p>Startpris: {data.Utropspris}</p>
        </div>
    )
}

export default Auction