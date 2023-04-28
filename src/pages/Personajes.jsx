// apikeys public 24780ec6fe982f2b4b3d0b0035788162
// apikeys private 328fa38310f3a5fdb6bfdf9acd874bf82934dc74

import { useFetch } from "../customsHooks/useFetch";
import '../styles/personajes.css'

//ts:1
// 18bec25e5b2df0d8b4e3016d560cea609acf557344bad166a9f589e84f06deef71ad2b0bb

//url https://gateway.marvel.com:443/v1/public/characters?apikey=24780ec6fe982f2b4b3d0b0035788162

const Personajes = () => {
  const URL =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=24780ec6fe982f2b4b3d0b0035788162&hash=c59b3d65a50ec45cad1a0a1fb289e631";

  const { data } = useFetch(URL);

  return (
    <div className="container-personajes">
      
        {data
          ? data.map((value) => {
              return (
                <div key={value.id} className="card-personajes">

                
                  
                    <img
                      src={`${value.thumbnail.path}.${value.thumbnail.extension}`}
                      alt=""/>
                  <h3>{value.name}</h3>
                  
                  
                </div>
                 
                
              );
            })
          : "Not found"}
      
    </div>
  );
};

export default Personajes;
