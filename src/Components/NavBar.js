import React from "react";
import { Component } from "react";
import AuctionContainer from "./AuctionContainer";
import CreateAuction from './CreateAuction';
import Icon from '../img/icon.svg'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { showAuctions: true }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        const newState = this.state.showAuctions === true ? false : true;
        this.setState({ showAuctions: newState });
    }

    render() {
        let navBarStyle = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',    
            height:'8vhv',
            width:'100%',
            padding: '2rem',
            background:'rgb(245, 245, 245)',
            marginBottom: '1git arem'
        }

        const viewAuctions = (
            <React.Fragment>
                <AuctionContainer />
            </React.Fragment>
        );

        const createAuctions = (
            <React.Fragment>
                <CreateAuction/> 
            </React.Fragment>
        );

        const container = (
            <React.Fragment>
                <div style={navBarStyle}>
                    <div>
                        <img style={{width:'2rem', display: 'inline-block', verticalAlign:'middle', marginRight: '1rem'}} src={Icon} />
                        <h3 style={{margin:'0', display: 'inline-block', verticalAlign:'middle'}}>Auction Site</h3>
                    </div>
                    <button className="btn btn-primary" onClick={this.handleOnClick}>{this.state.showAuctions === true ? "Skapa ny auktion" : "Visa auktioner"}</button>
                </div>
                {this.state.showAuctions === true ? viewAuctions : createAuctions}
            </React.Fragment>
        );

        return (container);
    }
}