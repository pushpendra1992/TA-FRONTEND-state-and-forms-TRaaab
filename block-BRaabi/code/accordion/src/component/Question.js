import React from 'react';
import Data from '../data.json';

class Accordion extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            question : false
        }
    }

    handleClick = (question)=>{
        this.setState({
            question: question
        })
    }

    render(){

        return (
            <div>
                <div className="box">
                    {
                        Data.map((faq)=>{
                            return (<>
                            <div className={this.state.question === faq.question ?"question active":"question"} onClick={()=>{this.handleClick(faq.question)}}>
                            <h2>{faq.question}</h2>
                            </div>

                            <div className={this.state.question === faq.question ?"answer":"answer hidden"}>
                            <h2>{faq.answer}</h2>
                            </div>
                            </>)
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Accordion;