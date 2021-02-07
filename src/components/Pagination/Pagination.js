import React from 'react'
import "./Pagination.scss"


const Pagination = ({photosPerPage,totalPhotos,paginate}) => {
    const pageNumbers = [ ];
    for(let i=1 ;i<Math.ceil(totalPhotos/photosPerPage);i++)
    {
        pageNumbers.push(i)
    }
    return (
            <ul className="pagination">
                {pageNumbers.map(number=>{
                    return <li key={number} className="page-item">
                            <button onClick={() => paginate(number)}  className='page-link'>   
                                {number}  
                            </button>
                        </li>
                })}
            </ul>
    )
}

export default Pagination
