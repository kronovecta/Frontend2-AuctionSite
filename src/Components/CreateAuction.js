import React,{Component} from 'react';


export default class CreateAuction extends Component{
    constructor(props){
        super(props)
    }

    handleSubmit(){


    }
render(){

    return(<form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Titel"/><br/>
        <input type="text" placeholder="Beskrivning"/><br/>
        <input type="text" placeholder="Utropspris"/><br/>
        <input type="text" placeholder="Skapad av"/>
        <button>Spara</button>
    </form>); 
}
}