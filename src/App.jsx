import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [wgt, setWgt] = useState();
  const [number, setNumber] = useState(1);
  URL = `https://pokeapi.co/api/v2/pokemon/${number}`;
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setName(response.data.name);
        setWgt(response.data.weight);
        setImg(response.data.sprites.other.dream_world.front_default);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [URL]);

  return (
    <div className="App">
      <h1>Pokemon App</h1>
      <input
        type={"number"}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button>SHOW</button>

      <h2>Name: {name}</h2>
      <img src={img} />
      <h3>{wgt}</h3>
    </div>
  );
}

export default App;
