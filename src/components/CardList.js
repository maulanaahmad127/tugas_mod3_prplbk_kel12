import React from 'react';
import Detail from "./Detail"

import "./CardList.css"



function CardList(props) {
    const [isClicked, setisClicked] = React.useState(false);
    let nama = props.nama;
    let Anime = props.Anime;
    let description = props.description;
    const detailHandler = () => {

        setisClicked(!isClicked);
        console.info(isClicked);
        console.info(nama);
    }
    return (

        <div className="media-element">
            <img src={props.urlFoto} alt="Avatar" />
            <h4>{props.nama}</h4>
            <p>Anime {props.Anime}</p>
            <button onClick={detailHandler}>Detail</button>
            {isClicked &&
                (
                    <Detail description={description} />
                )}

        </div>


    )
}

export default CardList;