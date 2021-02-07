import React from 'react'
import "./ImgCard.scss"
import {Link} from "react-router-dom"

const ImgCard = ({imgSrc,imgTitle ,imgId}) => {

    return (
        <div className="card">
         <Link to={`/${imgId}`} >
            <img className="img-card" src={imgSrc} alt=" "></img>
            <h3>Image Number {imgId}</h3>

        </Link>
        </div>
    )
}

export default ImgCard
