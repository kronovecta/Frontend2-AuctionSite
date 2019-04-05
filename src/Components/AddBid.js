import React, { Component } from 'react'
import { postData } from '../api';

export default class AddBid extends Component {
    constructor(props) {
      super(props)
    }

    handleAddBid = (e) => {
        e.preventDefault();
        let price = false;
        let name = false;

        if(e.target.amount.value >= this.props.auctionData.Utropspris) {
            price = true;
        }
        
        if(e.target.name.value != "") {
            name = true;
        }

        console.log(price)
        console.log(name)

        if(price === true && name === true) {
            // this.postBid(this.props.auctionData, e.target.name.value, e.target.amount.value)
        } else {
            this.postError(price, name)
        }
    }

    postBid(data, name, amount) {
        let object = {Budgivare: name, Summa: amount, AuktionID: data.AuktionID}
        postData(object, "bud");
        // console.log(object)
    }

    postError(price, name) {
        let error = 'Error posting bid';
        if(price === false && name === false) {
            error = error + ': Invalid name and amount'
        } else if(name === false) {
            error = error + ': Invalid name'
        } else if(price === false) {
            error = error + ': Invalid amount'
        }

        this.refs.validation.innerHTML = error
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
                <form onSubmit={this.handleAddBid} style={{ width: '100%', marginBottom:'1rem' }}>
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
