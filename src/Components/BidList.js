import React, { Component } from 'react'
import { createSession, getSession,deleteData } from '../api';
import './BidList.css'

export default class BidList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // allBids: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log("uppdaterade!")
    if (this.props.bids !== prevProps.bids) {
      this.setState({
        allBids: this.props.bids
      })
    }
  }

  async handleClick(event, item){
    console.log(item.BudID, item.Summa, item.Budgivare, item.AuktionID);
    let isToBeGone = window.confirm("Säker på att du vill ta bort?");

    if(isToBeGone === true){
      console.log("Nu tas det bort");
      // this.setState({
      //   allBids: await getSession("budList")
      // })
      await deleteData(item,"bud");
      this.props.update();
      // let id = item.AuktionID; 
    }
  }

  render() {
    let allTheBids;
    if (typeof this.state.allBids !== "undefined") {
      this.state.allBids.sort((a, b) => {
        return parseInt(a.Summa) - parseInt((b.Summa));
      }).reverse()

      allTheBids = this.state.allBids.map((item) => {
        return (
          <tr key={item.BudID}>
            <td>{item.Budgivare}</td>
            <td><span style={{ fontWeight: '600' }}>{item.Summa}</span> SEK</td>
            <td><button style={{fontSize: '1rem',marginLeft: '1rem', color: 'red',padding:'0 0.4rem', fontWeight: 'bold'}} onClick={(event)=> {this.handleClick(event,item)}}>X</button> </td>
          </tr>)
      });

      if (new Date(this.props.selected.SlutDatum).getTime() < new Date().getTime()) {
        allTheBids = allTheBids[0];
      }
    }

    return (
      <div className="bidList" style={{ marginTop: '1.5rem' }}>
        <table>
          <thead>
            <tr>
              <th>Budgivare</th>
              <th>Bud</th>
            </tr>
          </thead>
          <tbody>
            {allTheBids}
          </tbody>
        </table>
      </div>
    )
  }
}
