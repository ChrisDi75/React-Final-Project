import React, { Fragment, useEffect, useState } from 'react'
import CardsSkeleton from './CardsSkeleton'
import Skeleton from 'react-loading-skeleton'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MovieResults() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [searchId, setSearchId] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    async function renderMovies() {
      const { data } = await axios.get(`https://omdbapi.com/?apikey=38b2a9be&s=${searchId || id}`);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setMovies(data);
    }
    useEffect(() => {
      
  }, []);

  return (
    <>
    <div className="search__container">
             <div className="search__wrapper">
               <h3 className="search__header search__heading">Find your movie</h3>
               <div className="search__box">
                 <input
                   type="text"
                   className="search__input"
                   placeholder="Title, Number..." 
                   onChange={(e) => setSearchId(e.target.value)}
                   onKeyDown={(e) => {
                    if (e.code === "Enter") {
                        renderMovies();
                    }
                }}
                />
                <button className='btn__search'
                onClick={renderMovies}>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/>
                </button>
               </div>
             </div>
           </div>
    <div className="movies__section">
    <div className="container">
      <div className="row">
      <h3 className="results__header search__btn"
             >Search results for: {searchId}</h3>      
 <div className="movies__list--wrapper" >
          {movies.Search?.slice(0, 6).map((movie, index) => (
            <Fragment key={index}>
               <div className="movie__wrapper" >
                   <div className="movie__card">
                       <figure className="movie__img--wrapper">
                         {loading && <CardsSkeleton/>}
                               <img src={movie.Poster || <Skeleton/>}  alt="" className='movie__img'
                               onClick={() => navigate(`/movie/${movie.imdbID}`)}
                               />
                       </figure>
                   <div className="movie__description">
                   <div>{movie.Title}</div>
                   <div >Released in: {movie.Year}</div>
               </div>
           </div>
       </div>
       </Fragment>       
           ))
         }
       </div>             
      </div>
    </div>
  </div>
  </>
  )
}

export default MovieResults
