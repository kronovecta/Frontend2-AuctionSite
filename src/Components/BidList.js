import React, { Component } from 'react'
import { createSession, getSession } from '../api';

export default class BidList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBids: []
    }
  }
  componentDidMount() {
    createSession("bidList", "bud", this.props.selected.AuktionID).then(
      this.setState({
        allBids: getSession("bidList")
      })
    );

  }
  render() {
    let filteredBids = this.state.allBids.sort((a,b)=>{
      return parseInt(a.Summa) - parseInt((b.Summa)).reverse();
    });

    let allTheBids = this.state.allBids.map((item) => {
      return <div>
        <tr>
          <td>{item.Summa}</td> <td>{item.Budgivare}</td>
        </tr>
      </div>
    });
    return (
      <div>
        <h3>BidList</h3>
        <table>
          <thead>
            <tr>
              <th>Bud</th>
              <th>Budgivare</th>
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
