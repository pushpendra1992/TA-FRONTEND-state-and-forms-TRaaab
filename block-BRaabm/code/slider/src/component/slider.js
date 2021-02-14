import React from "react";

class Slider extends React.Component{
    constructor(props){
        super(props)
        this.state={
            display : true
        }
    }

    clickHandler = ()=>{
        this.setState((prevState)=>{
            return{
                display : !prevState.display
            }
        })
        
    }

    render(){
        return(
            <>
                <div>
                    <div>
                        <div className={this.state.display?"aside":"hidden"}>
                        <ul className="nav">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        </div>
                        <div onClick={this.clickHandler} className ="btn">
                            <h2 className="btntxt">{this.state.display?"Hide":"Show"}</h2>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>
            </>
        )
    }
}

export default Slider;