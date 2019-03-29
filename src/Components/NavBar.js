import React from "react";
import { Component } from "react";
import AuctionContainer from "./AuctionContainer";

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
        const viewAuctions = (
            <React.Fragment>
                <AuctionContainer />
            </React.Fragment>
        );

        const createAuctions = (
            <React.Fragment>
                <p>test med createAuctions!</p> {/* Component instead */}
            </React.Fragment>
        );

        const container = (
            <React.Fragment>
                <button onClick={this.handleOnClick}>{this.state.showAuctions === true ? "Skapa ny auktion" : "Visa auktioner"}</button>
                {this.state.showAuctions === true ? viewAuctions : createAuctions}
            </React.Fragment>
        );

        return (container);
    }
}