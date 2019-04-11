import React, { Component } from 'react'
import { postData } from '../api';

export default class AddBid extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        let formGroupStyle = {
            width:'100%',
            display:'block',
            marginBottom:'0.5rem'
        }

        let labelStyle = {
            width:'100%',
            paddingLeft:'0.5rem',
            textAlign:'left'
        }

        let inputStyle = {
            width:'100%',
        }

        return (
            <div style={{borderBottom:'1px solid lightgrey'}}>
                <form onSubmit={this.props.handleAddBid} style={{ width: '100%', marginBottom:'1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyItems:'flex-end', flexWrap: 'wrap'}}>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Name</label>
                            <input style={inputStyle} className="form-control" type="text" placeholder="John Andres" name="name" />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Amount</label>
                            <input style={inputStyle} className="form-control" type="number" placeholder="100" name="amount" />
                        </div>
                        <div style={formGroupStyle}>
                            <button style={{ display: 'block', verticalAlign: 'bottom', width:'100%', marginTop:'0.7rem' }} className="btn btn-success">Bid</button>
                        </div>
                        <div style={formGroupStyle}>
                            <span style={{color:'red'}} ref="validation"></span>
                        </div>                      
                    </div>
                </form>
            </div>
        )
    }
}
