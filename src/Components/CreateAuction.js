import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { postData } from '../api';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class CreateAuction extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind();
        this.handleSubmit = this.handleSubmit.bind();

        this.state = {
            auction: {
                Titel: "",
                Beskrivning: "",
                StartDatum: new Date(),
                SlutDatum: new Date(),
                Utropspris: 0,
                SkapadAv: "",
                Gruppkod: 2050
            }
        }
    }

    handleChange = (date, id) => {
        if (typeof date.target !== 'undefined') {
            this.setState({
                auction: {
                    ...this.state.auction,
                    [date.target.id]: date.target.value
                }
            })
        }
        else {
            this.setState({
                auction: {
                    ...this.state.auction,
                    [id]: date
                }
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let object = this.state.auction;
        postData(object, "auktion");
        //TODO api create auction, call method postData()
    }


    render() {
        return (
            <div style={{display:'flex', justifyContent:'center'}}>
                <form onSubmit={this.handleSubmit} style={{width:'50%'}}>
                    <div className="form-group">
                   
                        <label>Title</label>
                        <input type="text" placeholder="Titel" id="Titel" onChange={this.handleChange} style={{width:'100%'}} />
                    </div>
                    
                    <div className="form-group">
                        <label>Description</label>
                       
                        <textarea id="Beskrivning" onChange={this.handleChange} style={{width:'100%', marginB: '1rem'}} />
                    </div>

                    <div style={{'display':'flex', justifyContent:'flex-start'}} className="form-group">
                        <div style={{marginRight:'1rem', flex:'2'}}>
                            <label>Created by</label>
                            <input type="text" id="SkapadAv" onChange={this.handleChange} style={{width:'100%'}} />
                        </div>
                        <div style={{flex:'1'}}>
                            <label>Starting price</label>
                            <input type="number" placeholder="0" id="Utropspris" onChange={this.handleChange} style={{width:'100%'}} />
                        </div>
                    </div>

                    <div style={{'display':'flex', justifyContent:'space-between'}} className="form-group">
                        <div style={{marginRight:'1rem'}}>
                            <div style={{display:'inline-block', marginRight: '1rem'}}>
                                <label style={{display:'block'}}>Start date:</label>
                              
                                <DatePicker selected={this.state.auction.StartDatum} id="StartDatum" onChange={(event) =>{this.handleChange(event, "StartDatum")}} className="datePicker"/>
                            </div>
                            <div style={{display:'inline-block'}}>
                                <label style={{display:'block'}}>End date:</label>
                              
                                <DatePicker selected={this.state.auction.SlutDatum} id="SlutDatum" onChange={(event) => {this.handleChange(event, "SlutDatum")}}  className="datePicker"/>
                            </div>
                        </div>
                    
                        <button className="btn btn-primary">Spara</button>
                    </div>

                </form>
            </div>);
    }

}