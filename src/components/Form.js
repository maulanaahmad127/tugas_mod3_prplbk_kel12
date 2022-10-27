import React, {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./Form.css";

function Form(props){

    const [nama, setNama] = React.useState("");
    const [namaIsValid, setNamaIsValid] = React.useState(null);

    const [urlFoto, seturlFoto] = React.useState("");
    const [urlFotoIsValid, seturlFotoIsValid] = React.useState(null);

    const [description, setdescription] = React.useState("");
    const [descriptionIsValid, setdescriptionIsValid] = React.useState(null);

    const [AnimeAnimeIsValid, setAnimeIsValid] = React.useState(null);
    const [Anime, setAnime] = React.useState("");

    let uuid = uuidv4();
    
    const submitHandler = (event) => {
        event.preventDefault();
        props.onPraktikanHandler({
                nama : nama,
                Anime : Anime,
                urlFoto : urlFoto,
                description : description,
            });
    }

    

    const changeNamaHandler = (event) => {
		//* Set the value of the nama input to the valueof the input
		setNamaIsValid(event.target.value.trim().length > 0);
		setNama(event.target.value);
	};

    const changeurlFotoHandler = (event) => {
		//* Set the value of the nama input to the valueof the input
		seturlFotoIsValid(event.target.value.trim().length > 0);
		seturlFoto(event.target.value);
	};

    const changedescriptionHandler = (event) => {
		//* Set the value of the nama input to the valueof the input
		setdescriptionIsValid(event.target.value.trim().length > 0);
		setdescription(event.target.value);
	};

    const changeAnimeHandler = (event) => {
		//* Set the value of the nama input to the valueof the input
		setAnimeIsValid(event.target.value.trim().length > 0);
		setAnime(event.target.value);
	};

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="nama">Nama</label>
                <input
                type="text"
                id = "nama"
                name="nama"
                value={nama}
                onChange={changeNamaHandler}
					onBlur={changeNamaHandler}
                />

                <label htmlFor="Anime">Anime</label>
                <input
                type="text"
                id = "Anime"
                name="Anime"
                value={Anime}
                onChange={changeAnimeHandler}
				onBlur={changeAnimeHandler}
                />

                 <label htmlFor="urlFoto">urlFoto</label>
                <input
                type="text"
                id = "urlFoto"
                name="urlFoto"
                value={urlFoto}
                onChange={changeurlFotoHandler}
					onBlur={changeurlFotoHandler}
                />


                <label htmlFor="description">description</label>
                <input
                type="text"
                id = "description"
                name="description"
                value={description}
                onChange={changedescriptionHandler}
					onBlur={changedescriptionHandler}
                />
                <button type="submit">submit</button>
            </form>
            
            
        </div>
    )
}

export default Form;