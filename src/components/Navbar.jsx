import React from 'react'
import { Link } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav id="navbar">
        <h2>
        <Link to="/"><BiCameraMovie/>IMDB clone</Link>
        </h2>
        <Link to="/movie/1">Movie</Link>
        <Link to="/search">Search</Link>
        <form action="">
            <input type="text" placeholder='Busque um filme'/>
            <button type='submit'><BiSearchAlt2/></button>
        </form>
    </nav>
  )
}

export default Navbar