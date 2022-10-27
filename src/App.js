import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import CardList from './components/CardList';
import React from 'react';


function App() {
  const [KarakterArr, setKarakterArr] = React.useState([
    {
      nama: "Naruto",
      Anime: "Naruto Shippuden",
      urlFoto: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/09/boruto-naruto.jpg",
      description: "Hokage ke 7"
    },
    {
      nama: "Sasuke",
      Anime: "Naruto Shippuden",
      urlFoto: "https://cdn.kincir.com/2/hnm05PSbBMCvPAQCKesWohQBsKXyo4Dz1nabzgRUtuM/transform/rs:fill:425:239/src/production/2022-04/16by9/sasuke~a8263091-1298-495e-80a5-63dc95f0c6e7.jpg",
      description: "rival naruto"
    },
    {
      nama: "Guru Gay",
      Anime: "Naruto Shippuden",
      urlFoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO70RXcBeHzOZxCJsY82xWd-PZqmGyEf87Iw&usqp=CAU",
      description: "rival kakashi"
    },
  ]);

  const [Karakter, setKarakter] = React.useState({ nama: "" });



  let { nama } = Karakter;

  const KarakterHandler = (data) => {
    setKarakterArr(KarakterArr => [...KarakterArr, data]);

  }

  const submitHandler2 = (event) => {
    console.info(`Karakter Array Size : ${KarakterArr.length}`);
    for (let a of KarakterArr) {
      console.info(`Karakter : ${a.nama}`);
      console.info(`Anime : ${a.Anime}`);
      console.info(`Url : ${a.urlFoto}`)
      console.info(`Key : ${a.key}`)
    }

  }



  return (
    <div className="App">
      <Form onPraktikanHandler={KarakterHandler} />
      <button onClick={submitHandler2}>Check Console</button>
    <div className="media-scroller">
    {
      KarakterArr.map(
        (data, index) => {
          return(
            
            <CardList
            key = {index}
            keyIndex = {index}
            nama = {data.nama}
            Anime = {data.Anime}
            urlFoto = {data.urlFoto}
            description = {data.description}
            />
            
          )
        }
      )
    }
    </div>
    
      
    </div>
  );
}

export default App;
