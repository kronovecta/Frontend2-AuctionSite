import React, { Component } from 'react'
import { createSession, getSession } from '../api';
import './BidList.css'

export default class BidList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBids: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.bids !== prevProps.bids) {
      this.setState({
        allBids: this.props.bids
      })
    }
  }

  render() {
    this.state.allBids.sort((a, b) => {
      return parseInt(a.Summa) - parseInt((b.Summa));
    }).reverse();

    let allTheBids = this.state.allBids.map((item) => {
      return (
        <tr key={item.BudID}>
          <td>{item.Budgivare}</td>
          <td><span style={{ fontWeight: '600' }}>{item.Summa}</span> SEK</td>
        </tr>)
    });

    return (
      <div className="bidList">
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
