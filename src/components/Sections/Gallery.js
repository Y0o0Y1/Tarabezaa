import React  from 'react'
import "./gallery.scss"
import ImgCard from "./ImgCard"

const Gallery = ({photos}) => {
   console.log(photos[1])
    return (
      <section className="gallery ">
                {photos.map((photo,index)=>{
                    const source = photos[index].thumbnailUrl
                    const title  = photos[index].title
                    const id     = photos[index].id
                    return <ImgCard imgSrc={source} imgTitle={title} imgId={id} />

                })}
         </section>
    )
}

export default Gallery
