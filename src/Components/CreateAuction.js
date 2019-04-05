import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { postData, updateData } from '../api';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import './CreateAuction.css'

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
                Utropspris: "",
                SkapadAv: "",
                Gruppkod: 2050
            },
            validator: {valid: null, message: "", className: ""}
        }
    }

    componentDidMount() {
        if (typeof this.props.data != 'undefined') {
            this.setState({
                auction: this.props.data
            })
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
        let validator = this.validation(this.state.auction.Titel, this.state.auction.Beskrivning, this.state.auction.SkapadAv, this.state.auction.Utropspris);
        if(validator.valid === true) {
            if (typeof this.props.data != 'undefined') {
                updateData(this.state.auction, "auktion");
            } else {
                let object = this.state.auction;
                postData(object, "auktion");
            }
        }
    }

    validation(title, description, creator, price) {
        let validate = {valid: null, failure: 0, message: ""}
        let errorString = "Error posting auction: Invalid ";

        if(title === "") {
            validate.failure++;
            validate.message = errorString + "title"
        }

        if(description === "") {
            validate.failure++;
            validate.message = errorString + "description"
        }

        if(creator === "") {
            validate.failure++;
            validate.message = errorString + "creator"
        }

        if(Number(price) === 0) {
            validate.failure++;
            validate.message = errorString + "price"
        }

        if(validate.failure > 0) {
            this.setState({validator: {valid: false, message: validate.message, className: "alert alert-danger"}})
            validate.valid = false;
        } else {
            this.setState({validator: {valid: true, message: "Auction successfully created!", className: "alert alert-success"}})
            validate.valid = true;
        }

        return validate;
    }

    

    render() {
        const validate = (<div style={{width:'50%', textAlign:'center'}} className={this.state.validator.className}><span>{this.state.validator.message}</span></div>)

        const content = (
            <React.Fragment>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:'center' }}>
                    {this.state.validator.valid === false || this.state.validator.valid === true ? validate : null}
                    <form style={{ width: '50%' }}>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" placeholder="Titel" id="Titel" onChange={this.handleChange} style={{ width: '100%' }} value={this.state.auction.Titel} />
                        </div>
        
                        <div className="form-group">
                            <label>Description</label>
                            <textarea id="Beskrivning" onChange={this.handleChange} style={{ width: '100%', marginB: '1rem' }} value={this.state.auction.Beskrivning} />
                        </div>
        
                        <div style={{ 'display': 'flex', justifyContent: 'flex-start' }} className="form-group">
                            <div style={{ marginRight: '1rem', flex: '2' }}>
                                <label>Created by</label>
                                <input type="text" id="SkapadAv" onChange={this.handleChange} style={{ width: '100%' }} value={this.state.auction.SkapadAv} />
                            </div>
                            <div style={{ flex: '1' }}>
                                <label>Starting price</label>
                                <input type="number" placeholder="0" id="Utropspris" onChange={this.handleChange} style={{ width: '100%' }} value={this.state.auction.Utropspris} />
                            </div>
                        </div>
        
                        <div style={{ 'display': 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }} className="form-group">
                            <div style={{ marginRight: '1rem' }}>
                                <div style={{ display: 'inline-block', marginRight: '1rem' }}>
                                    <label style={{ display: 'block' }}>Start date:</label>
                                    <DatePicker selected={this.state.auction.StartDatum} id="StartDatum" onChange={(event) => { this.handleChange(event, "StartDatum") }} className="datePicker" />
                                </div>
                                <div style={{ display: 'inline-block' }}>
                                    <label style={{ display: 'block' }}>End date:</label>
                                    <DatePicker selected={this.state.auction.SlutDatum} id="SlutDatum" onChange={(event) => { this.handleChange(event, "SlutDatum") }} className="datePicker" />
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-warning" style={{marginRight:'1rem'}} onClick={this.props.handleCancel}>Cancel</button>
                                <button className="btn btn-primary" onClick={this.handleSubmit}>Spara</button>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
            )
        return (content)        
    }
}