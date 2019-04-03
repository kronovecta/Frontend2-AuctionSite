import React, { Component } from 'react'
import { createSession, getSession } from '../api';
import './BidList.css'

export default class BidList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBids: []
    }
    this.fetchBids = this.fetchBids.bind(this);
  }

  async fetchBids() {
    await createSession("bidList", "bud", 1/*this.props.selected.AuktionID*/);
    let bids = await getSession("bidList")
    await this.setState({
      allBids: bids
    })
  }

  componentDidMount() {
    this.fetchBids();
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
