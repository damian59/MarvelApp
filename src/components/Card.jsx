import React, { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import "../styles/card.css";


const Card = ({Img, name, Description,loader}) => {
  
 
  return (
    <div>

    <div 
      className="item"
      style={{
        backgroundImage: `url('https://source.unsplash.com/daily?${name}')`,
      }}
    > 
      <div className="card ">
        <figure className="figure">
          <img
            src={`${Img}/portrait_uncanny.jpg`}
       
            alt={`${name}-Pic`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text">{Description || "No Data Available"}</p>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
