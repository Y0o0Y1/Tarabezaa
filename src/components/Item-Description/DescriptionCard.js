import React from 'react'
const DescriptionCard = ({imgSrc,title}) => {

    return (
        <div className="photoWrapper">
            <img src={imgSrc} alt={title}/>
        </div>
    )
}

export default DescriptionCard
