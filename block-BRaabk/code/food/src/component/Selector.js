import React from "react";
import data from "../data.json";
import Menu from "./menu";

class Selector extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            category : "all"
        } 
    }


    clickHandler = (select)=>{
       this.setState({
           category: select
       })
    }

    filterFn (cat) {
        if(cat==="all")
        return data.map((menu)=>{return menu})
        else if (cat==="breakfast")
        return data.filter((menu)=>{return menu.category === "breakfast"})
        else if (cat==="lunch")
        return data.filter((menu)=>{return menu.category === "lunch"})
        else
        return data.filter((menu)=>{return menu.category === "dinner"})
    }

    render(){
        {let cat = null;}
        return(
            <>
            <h1>Menu</h1>
            <ul>
                <li onClick={()=>{return this.clickHandler("all")}}>All</li>
                <li onClick={()=>{return this.clickHandler("breakfast")}}>Breakfast</li>
                <li onClick={()=>{return this.clickHandler("lunch")}}>Lunch</li>
                <li onClick={()=>{return this.clickHandler("dinner")}}>Dinner</li>
            </ul>
            <Menu menu={this.filterFn(this.state.category)}/>
            </>
        )
    }

    
}
export default Selector;