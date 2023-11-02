import React, { useEffect, useState } from 'react'
import "../App.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import 'react-loading-skeleton/dist/skeleton.css'



function ChosenMovie() {
const {imdbID} = useParams();
const [movie, setMovie] = useState([]);



async function showMovie() {
    const { data } = await axios.get(`https://omdbapi.com/?apikey=38b2a9be&i=${ imdbID}`);
    setMovie(data);
}
useEffect(() => {
    showMovie();
}, [])
     return (
        <div>
     <section id="landing-page">
            <Nav/>
            <div className="movie__wrapper-result" >
                <h1 className='chosen__movie--title'>Chosen Movie: {movie.Title}</h1>
                
                <h1>{movie.Title}</h1>
                    <div className="movie__card-result">
                        <figure className="movie__img--wrapper-result">
                                <img src={movie.Poster} alt="" className='movie__img'
                                />
                        </figure>
                    <div className="movie__description movie__description-result">
                    <div>{movie.Title}</div>
                    <div >Released in: {movie.Year}</div>
                </div>
            </div>
        </div>
        </section>
        </div>
         

  )
}


export default ChosenMovie
