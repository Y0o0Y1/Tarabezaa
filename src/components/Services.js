import React , {useState,useEffect} from 'react'
import "./Services.scss"
import Gallery from "./Sections/Gallery"
import Pagination from "./Pagination/Pagination"
import axios from 'axios';

const Services = () => {
    const [photos,setPhotos]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [photosPerPage]=useState(5)
    useEffect(() => {
          const fetchPhotos = async () => {
          const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
          setPhotos(res.data.slice(0,30));
        };
        fetchPhotos();
      }, []);
    //Get Current Photos to render them in the gallery Component
    const indexOfLastPhoto = currentPage*photosPerPage
    const indexOfFirstPhoto = indexOfLastPhoto-photosPerPage
    const currentPhotos = photos.slice(indexOfFirstPhoto,indexOfLastPhoto)
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className="section">
          <div className="quote">
            <h1>Top Restaurants</h1>
          </div>
        <div className="services">            
            <Gallery photos={currentPhotos}/>
            <Pagination className="pagination" photosPerPage={photosPerPage} totalPhotos={photos.length} paginate={paginate}/>
            </div>
        </div>
    )
}
export default Services
