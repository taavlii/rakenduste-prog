import React from "react";
import { Link } from "react-router-dom";




const ItemList= (props) => {
    return(
        
        <div className={"content"}>
            {
            props.items.map(item=>{
                return <Item 
                    imgSrc={item.imgSrc} 
                    price={item.price}
                    title={item.title}
                />
            })
            }
        </div>
    )
}


const Item =(props) =>{
    return (
        <Link to={"./item"}>
            <div className={"item"}>
            <img src={props.imgSrc}/>
            <div className="item__title">{props.title}></div>
            <div className="item__price">{props.price}></div>
        </div>
        </Link>
        
    )
};

export default ItemList;