import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import logoimg from '../images/logo.svg';
import '../styles/pages/landing.css'

const Landing = () => (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoimg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>Santo André</span>
        </div>
        <Link to="/app" className="enter-app"> 
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" /> 
        </Link>
      </div>
    </div>
);

export default Landing;
