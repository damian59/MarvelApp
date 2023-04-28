import React from 'react'
import '../styles/comicsCard.css'

const ComicsCard = ({title, description, More_info, imageUrl,publishDate,loader}) => {

    const stringDate= new Date(publishDate).toLocaleDateString(); 

  return (
    

    <div className="card-comics ">
      
        <img src={`${imageUrl}/portrait_uncanny.jpg`} alt={`${title}-Pic`} />
      
      <div className="card-body-comics">
        <p className="card-title">{title}</p>
        <p className="text-justify">{description || "No Data Available"}</p> <br />
        <p className="text-left">Published <span className="text-primary">{stringDate}</span> </p>
        <div className="card-actions">
          <a
            className="btn "
            href={More_info}
            target="_blank"
            rel="noreferrer"
          >
            know more
          </a>
        
        </div>
      </div>
    </div>
    

    
  )
}

export default ComicsCard