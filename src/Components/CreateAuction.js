import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { postData } from '../api';

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
                SkapadAv: ""
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            auction: {
                ...this.state.auction,
                [e.target.id]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let object = this.state.auction;
        // postData(object, "auktion");
        //TODO api create auction, call method postData()
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Titel" id="Titel" onChange={this.handleChange} /> <br />
            <input type="text" placeholder="Beskrivning" id="Beskrivning" onChange={this.handleChange} /><br />
            <DatePicker selected={this.state.auction.StartDatum} id="StartDatum" onSelected={this.handleSelected} />
            <DatePicker selected={this.state.auction.SlutDatum} id="SlutDatum" onSelected={this.handleSelected} /><br />
            <input type="text" placeholder="Utropspris" id="Utropspris" onChange={this.handleChange} /><br />
            <input type="text" placeholder="Skapad av" id="SkapadAv" onChange={this.handleChange} />
            <button>Spara</button>
        </form>);
    }
}