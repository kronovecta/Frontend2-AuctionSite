import React from "react";
import { Component } from "react";
import AuctionContainer from "./AuctionContainer";
import CreateAuction from './CreateAuction';
import Icon from '../img/icon.svg'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAuctions: true,
            searchString: "",
            viewExpired: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleClick() {
        const newState = this.state.showAuctions === true ? false : true;
        this.setState({ showAuctions: newState });
    }

    handleChange(e) {
        this.setState({ searchString: e.target.value, viewExpired: true });
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({showAuctions: true})
    }

    render() {
        let navBarStyle = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '8vhv',
            width: '100%',
            padding: '2rem',
            background: 'rgb(245, 245, 245)',
            marginBottom: '1rem'
        }

        const searchBar = (
            <React.Fragment>
                <input style={{padding:'0.5rem', border:'1px solid lightgrey', borderRadius:'0.5rem', verticalAlign: 'middle', boxSizing:'border-box'}} type="text" placeholder="Search auction" onChange={this.handleChange}></input>
            </React.Fragment>
        );

        const title = (<h1 style={{fontSize:'2rem'}}>Skapa auktion</h1>);

        const container = (
            <div>
                <div style={navBarStyle}>
                    <div>
                        <img style={{ width: '2rem', display: 'inline-block', verticalAlign: 'middle', marginRight: '1rem' }} src={Icon} />
                        <h3 style={{ margin: '0', display: 'inline-block', verticalAlign: 'middle' }}>Auktionssida</h3>
                    </div>
                    {this.state.showAuctions === true ? searchBar : title}
                    <button className="btn btn-primary" onClick={this.handleClick}>{this.state.showAuctions === true ? "Skapa ny auktion" : "Visa auktioner"}</button>
                </div>
                {this.state.showAuctions === true ? <AuctionContainer searchString={this.state.searchString} viewExpired={this.state.viewExpired} /> : <CreateAuction handleCancel={this.handleCancel} />}
            </div>
        );

        return (container);
    }
}