import React, { Component } from 'react'
import AuctionList from './AuctionList'

export default class AuctionContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = { auctions: [
        {"AuktionID":3316,"Titel":"Tavla","Beskrivning":"Fin tavla målad av Picasso","StartDatum":"2019-03-14T23:00:00","SlutDatum":"2019-09-14T22:00:00","Gruppkod":2050,"Utropspris":1000,"SkapadAv":"Grupp6"},
        {"AuktionID":3317,"Titel":"Cykel","Beskrivning":"Gedigen cykel i metall","StartDatum":"2019-03-14T23:00:00","SlutDatum":"2019-09-14T22:00:00","Gruppkod":2050,"Utropspris":2500,"SkapadAv":"Grupp6"},
        {"AuktionID":3318,"Titel":"Vas","Beskrivning":"Vas gjord i  lera","StartDatum":"2019-03-14T23:00:00","SlutDatum":"2019-09-14T22:00:00","Gruppkod":2050,"Utropspris":350,"SkapadAv":"Grupp6"}
      ]}
    }
    
  render() {
    return (
      <div>
        <AuctionList auctions={this.state.auctions} />
      </div>
    )
  }
}
