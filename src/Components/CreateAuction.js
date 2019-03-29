import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class CreateAuction extends Component {
    constructor(props) {
        super(props)
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
        // const{id,value} = e.target.;
        this.setState({
            [e.target.id]: e.target.value

        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let object = this.state.auction;
        //TODO api create auction, call method createPost()
    }
    render() {

        return (<form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Titel" id="Titel" onChange={this.handleChange} /> <br />
            <input type="text" placeholder="Beskrivning" id="Beskrivning" onChange={this.handleChange} /><br />
            <DatePicker selected={this.state.auction.StartDatum} id="StartDatum" onChange={this.handleChange} />
            <DatePicker selected={this.state.auction.SlutDatum} id="SlutDatum" onChange={this.handleChange} />
            <input type="text" placeholder="Utropspris" id="Utropspris" onChange={this.handleChange} /><br />
            <input type="text" placeholder="Skapad av" id="SkapadAv" onChange={this.handleChange} />
            <button>Spara</button>
        </form>);
    }
}