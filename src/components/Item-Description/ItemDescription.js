import React from 'react'
import "./ItemDescription.scss"
import data from "../DummyData.json"
import {useRouteMatch} from "react-router-dom"
const ItemDescription = () => {
  const arrayOFpics = data.slice(0,100)
  let {url}=useRouteMatch()
  const currentImg = arrayOFpics[url.slice(1)-1]
  return (
        <div className = "container itemDescription">
        <img className="img" src={currentImg.url} alt = ".. "/>
        <section className="description">
          <h1 className="image-title">{currentImg.title}</h1>
          <h4 className="img-description">
          In quis iaculis est, eu fermentum turpis. Quisque interdum non mi eget convallis. Etiam consectetur ullamcorper ligula, et hendrerit mauris volutpat ut. Phasellus pretium purus orci, ac ultricies quam consectetur non. Phasellus pretium turpis dolor, vitae luctus libero ullamcorper nec. Mauris accumsan velit tellus, nec scelerisque nisi pulvinar vel. Suspendisse nec dignissim eros. Integer nec odio ut lorem malesuada mattis. Mauris vitae ex tortor. Sed lacinia efficitur ante sed dapibus.
          </h4>
        </section>
        </div>
    )
}
export default ItemDescription
