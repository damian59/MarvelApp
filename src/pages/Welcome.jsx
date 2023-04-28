import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";

import Card from "../components/Card";
import "../styles/search.css";
import Comics from "./Comics";

const Welcome = () => {
  const [name, setName] = useState("");
  const [loader, setLoader] = useState(true);
  const [charName, setCharName] = useState("hulk");
  const [description, setDescription] = useState([]);
  const [Img, setImg] = useState();

  const onClickButton = (e) => {
    e.preventDefault();
    setLoader(true);
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&name=${charName}&apikey=24780ec6fe982f2b4b3d0b0035788162&hash=c59b3d65a50ec45cad1a0a1fb289e631`
    )
      .then((resp) => resp.json())
      .then((resp) => (
        <>
          {
            (setImg(resp.data.results[0].thumbnail.path),
            setName(resp.data.results[0].name),
            setDescription(resp.data.results[0].description),
            setCharName(""),
            setLoader(false))
          }
        </>
      ))
      .catch(() => {
        // console.log("error");
        toast.error("Enter correct name");
        setCharName("hulk");
        firstSearch();
      });
  };

  const firstSearch = async () => {
    setLoader(true);
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&name=hulk&apikey=24780ec6fe982f2b4b3d0b0035788162&hash=c59b3d65a50ec45cad1a0a1fb289e631`
    )
      .then((resp) => resp.json())
      .then((resp) => (
        <>
          {
            (setLoader(false),
            setImg(resp.data.results[0].thumbnail.path),
            setName(resp.data.results[0].name),
            setDescription(resp.data.results[0].description))
          }
        </>
      ))
      .catch(() => {
        toast.error("Enter correct name");
      });
  };

  useEffect(() => {
    firstSearch();
  }, []);

  return (
    <>
      {/*<Comics charName={charName} name={name}/>*/}

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search Marvel Hero"
          name="search"
          value={charName}
          onChange={(e) => setCharName(e.target.value)}
        />
        <button className="search-button" onClick={onClickButton}>
          <FaSearch />
        </button>
      </div>
      <div>
        <div>
          <Card
            Img={Img}
            name={name}
            Description={description}
            loader={loader}
          />
        </div>
        <Comics charName={charName} name={name} />
      </div>
    </>
  );
};

export default Welcome;
