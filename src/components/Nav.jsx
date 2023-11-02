import React from 'react'
import Panda from"../logos/Popcorn-Panda.jpeg"
import { useNavigate } from 'react-router-dom'


function Nav() {

  const navigate = useNavigate();
  return (
    <div>
       <nav>
             <figure>
               <img className="logo" src={Panda} alt="" onClick={() => navigate("/Home")} />
             </figure>
             <ul className="nav__link--list">
               <li className="nav__link nav__link-home" onClick={() => navigate("/Home")}>Home</li>
               <li className="nav__link"><h1>Find your movie</h1>
               </li>
               <button className="btn"><a target="_blank" rel="noopener noreferrer" href="https://github.com/ChrisDi75">Contact</a></button>
             </ul>
           </nav>
    </div>
  )
}

export default Nav
