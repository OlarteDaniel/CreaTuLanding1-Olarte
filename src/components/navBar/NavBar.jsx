import React from 'react'
import './NavBar.css';
import Logotipo from '../../assets/img/Logotipo.png';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to={'/'}><img src={Logotipo} alt="" className='logo'/></Link>
            <nav className='nav'>
                <ul className="nav-list">
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Nosotros</li>
                </ul>
            </nav>
            <Link to={'/cart'} className='cart'><CartWidget/></Link>
        </header>
    )
}

export default NavBar
