import React, { useState, useEffect } from "react";
import ComicsCard from "../components/ComicsCard";
import "../styles/comicsText.css";

const Comics = ({ charName, name }) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/comics?ts=1&title=${charName}&apikey=24780ec6fe982f2b4b3d0b0035788162&hash=c59b3d65a50ec45cad1a0a1fb289e631`
    )
      .then((resp) => resp.json())
      .then((resp) => <>{(setLoader(false), setData(resp.data.results))}</>);
  }, [name]);

  return (
    <div >
      <div className="text-comics">
        
        <h2>

          Marvel Comics of {name}
        </h2>
       
        <p >
          Marvel Comics is the brand name and primary imprint of Marvel
          Worldwide Inc., formerly Marvel Publishing, Inc. and Marvel Comics
          Group, a publisher of American comic books and related media. In 2009,
          The Walt Disney Company acquired Marvel Entertainment, Marvel
          Worldwide's parent company.
        </p>
      </div>
      
        <div  className='container-comics'>
        {data.map((item) => {
            return (
              <ComicsCard 
                key={item.id}
                title={item.title}
                description={item.description}
                More_info={item.urls[0].url}
                imageUrl={item.thumbnail.path}
                publishDate={item.dates[0].date}
                loader={loader}
                // data={data}
              />
            );
          })}
        
        </div>
        
      
    </div>
  );
};

export default Comics;
