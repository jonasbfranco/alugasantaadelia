import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt2, BiBuildingHouse } from "react-icons/bi";

import './Navbar.css';

const Navbar = () => {
  return (
    <nav id='navbar'>
        <h2>
            <Link to='/'>
                <BiBuildingHouse /> Home
            </Link>
        </h2>
        <form>
            <input type='text' placeholder='Pesquise' />
            <button type='submit'>
                <BiSearchAlt2 />
            </button>
        </form>
    </nav>
  )
}

export default Navbar