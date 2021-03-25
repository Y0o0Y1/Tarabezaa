import React , {useState,useEffect} from 'react'
import "./Services.scss"
import Gallery from "./Sections/Gallery"
import Pagination from "./Pagination/Pagination"
import axios from 'axios';
import dummyData from "./DummyData.json"
const Services = () => {
    const [photos,setPhotos]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [photosPerPage]=useState(5)
    useEffect(() => {
          const fetchPhotos = async () => {
          const res = await axios.get('https://nofipay.net/api/v1/feeds');
          console.log(res.data.data)
          const restaurants = res.data.data.recent_restaurants
          console.log(restaurants)
          setPhotos(restaurants);
          console.log(photos)
        };
        fetchPhotos();
      }, []);
    //Get Current Photos to render them in the gallery Component
    const indexOfLastPhoto = currentPage*photosPerPage
    const indexOfFirstPhoto = indexOfLastPhoto-photosPerPage
    const currentPhotos = photos.slice(indexOfFirstPhoto,indexOfLastPhoto)
    console.log(currentPhotos)
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className="section">
          <div className="quote">
            <h1>Recent Restaurants</h1>
          </div>
        <div className="services">            
            <Gallery photos={currentPhotos}/>
          </div>
          <div className="recent-items">
          
          </div>
        </div>
    )
}
export default Services
