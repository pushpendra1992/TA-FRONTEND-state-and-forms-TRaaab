function Menu(props){
    return(
        <div >
            {
                props.menu.map((data)=> {
                    return (
                        <div key ={data.id}> 
                            <img src={data.img} alt={data.title}/>
                            <div>
                                <h3>{data.title}</h3>
                                <h3>{data.price}</h3>
                            </div>
                            <p>{data.desc}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Menu;