import React from "react" ;
import Card from "./Card";

class Fonttester extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text : "text",
            size : "11"
        }
    }

    handleChange =(event)=>{
        event.preventDefault();
        this.setState({
            text : event.target.value
        })
        //console.log(this.state.text)
    }
    handleSize =(event)=>{
        event.preventDefault();
        this.setState({
            size : event.target.value
        })
        //console.log(this.state.size)
    }

    render(){
        return(
            <>
            <input onChange={this.handleChange} type="text" placeholder="Type Text"></input>
            <span>Size {this.state.size}</span>
            <input onChange={this.handleSize} type = "range" min="11" max ="50"></input>
            <Card text={this.state.text} size={this.state.size}/>
            </>
        )
    }

}

export default Fonttester;
