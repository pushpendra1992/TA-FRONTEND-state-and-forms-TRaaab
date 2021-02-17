import data from "../data.json";

function Card (props){
    console.log(props);
    return(
    <div>{
        data.map((style)=>{
            return <div>
        
            <h4>font-style : {style["font-name"]}</h4>
            <h4>created By : {style["created-by"]}</h4>
            <h4>style : {style.styles} </h4>
            <h4>size : {props.size}</h4>
            <p style= {{fontSize:props.size+'px', fontFamily: style["font-name"]}}>{props.text}</p>
        
            </div>
        })
    }
    </div>
    )
}

export default Card;