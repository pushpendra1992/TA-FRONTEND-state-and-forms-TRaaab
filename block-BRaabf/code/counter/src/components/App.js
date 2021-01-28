import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            counter : 0,
            step : 1
        }
    }

    step = (x)=>{
        this.setState({
          step : x  
        })
    }

    increment = ()=>{
        this.setState({
            counter : this.state.counter + this.state.step
        })
    }

    decrement = ()=>{
        this.setState({
            counter : this.state.counter - this.state.step
        })
    }

    reset = ()=>{
        this.setState({
            counter : 0
        })
    }

    render(){
        return(
            <div>
                <h1>Step Counter</h1>
                <p>click on step button for step increment</p>
                <button onClick={()=>{this.step(5)}}>5</button>
                <button onClick={()=>{this.step(10)}}>10</button>
                <button onClick={()=>{this.step(15)}}>15</button>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export class NewApp extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            counter : 0,
            step : 1,
            max: Infinity,
        }
    }

    maxHandler = (num) => {
        this.setState({
            max: num
        })
    }

    step = (x)=>{
        this.setState({
          step : x  
        })
    }

    increment = ()=>{
        this.setState({
            counter : this.state.counter < this.state.max ? this.state.counter + this.state.step : this.state.counter,
        })
    }

    decrement = ()=>{
        this.setState({
            counter : this.state.counter - this.state.step
        })
    }

    reset = ()=>{
        this.setState({
            counter : 0
        })
    }

    render(){
        return(
            <div>
                <h1>Step Counter</h1>
                <p>click on step button for step increment</p>
                <button onClick={()=>{this.step(5)}}>5</button>
                <button onClick={()=>{this.step(10)}}>10</button>
                <button onClick={()=>{this.step(15)}}>15</button>
                <p>Max Value</p>
                <button onClick = {()=> {this.maxHandler(15)}}>15</button>
                <button onClick = {()=> {this.maxHandler(100)}}>100</button>
                <button onClick = {()=> {this.maxHandler(200)}}>200</button>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default App;