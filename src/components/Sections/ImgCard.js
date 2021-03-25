import React from 'react'
import "./ImgCard.scss"
import {Link} from "react-router-dom"

const ImgCard = ({imgSrc,imgTitle ,imgId,imgContent}) => {

    return (
        <div className="card">
        <span className="img-title">{imgTitle}</span>
         <Link to={`#`} >
            <img className="img-card" src={imgSrc} alt=" "></img>
        </Link>
        <p className="img-description">{imgContent}</p>
        </div>
    )
}

export default ImgCard
