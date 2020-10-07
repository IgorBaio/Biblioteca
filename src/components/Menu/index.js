/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/BaioBioinformatics2.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="BaioBioinformatics2" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">Ver meus Livros</Button>
    </nav>
  );
}

export default Menu;
