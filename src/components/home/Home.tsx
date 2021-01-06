import React from 'react';
import { useHistory } from 'react-router-dom';
import pizza from '../../assets/pizza.png';
import logo from '../../assets/logo_white.png';
import logoWhite from '../../assets/logo_all_white.png';
import logOutIcon from '../../assets/log_out.png';
import sbarro from '../../assets/sbarro.png';
import facebook from '../../assets/facebook_icon.png';
import instagram from '../../assets/instagram_icon.png';
import { logOut } from '../../services/auth.service';
import './Home.scss';

export function Home() {
  
  const history = useHistory();

  return (
    <div className="home">
      <div className="home-image-section">
          <img src={logo} id="logo" alt="logo" />
          <img src={pizza} id="home-image" alt="pizza" />
      </div>
      <div className="home-form-section">
        <div className="log-out" onClick={() => {logOut(); history.push('/login')}}>
          <img src={logOutIcon} alt="logo de Logout" /><span > Salir</span>
        </div>
        <div className="container">
            <h1>Tiendas</h1>
            <h4>Escoge tu pizzería favorita</h4>
            <div className="card-container">
              <div className="card">
                <img src={sbarro} className="store-img" alt="pizzería sbarro logo" />
              </div>
              <h3>SBarro</h3>
              <p className="store-address">Calle 79 #15 -32</p>
            </div>
        </div>
        <footer>
          <img src={facebook} className="footer-icon"  alt="Facebook" />
          <img src={instagram} className="footer-icon" alt="instagram" />
          <img src={logoWhite} id="logo-all-white" alt="logo" />
        </footer>
      </div>
    </div>
  );
}
