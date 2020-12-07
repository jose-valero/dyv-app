import React from 'react';
import { connect } from 'react-redux';
import { lanSelect } from '../../actions';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { TiHome } from 'react-icons/ti';
import LogoImg from '../../assets/statics/images/mini-logo.png';
import spainFlag from '../../assets/statics/images/spainFlag.png';
import usaFlag from '../../assets/statics/images/usaFlag.png';

import '../../assets/styles/components/general/Header.scss';

class Header extends React.Component {
  render() {
    const langReducer = this.props.langReducer;

    if (langReducer === 'ES') {
      return (
        <header className='menu__container'>
          <Link to='/'>
            <img className='brand' src={LogoImg} alt='Logo' />
          </Link>

          <nav className='menu'>
            <input type='checkbox' id='menuToggle' />
            <label htmlFor='menuToggle' className='menu-icon'>
              <HiMenuAlt3 className='menu__icon-bars' />
            </label>
            <ul className='menu__list-container'>
              <Link className='menu__links' to='/about'>
                <li className='menu__names'>Conocenos</li>
              </Link>
              <Link className='menu__links' to='/services'>
                <li className='menu__names'>Servicios</li>
              </Link>
              <Link className='menu__links' to='/portafolio'>
                <li className='menu__names'>Portafolio</li>
              </Link>
              <Link className='menu__links' to='/clients'>
                <li className='menu__names'>Clientes</li>
              </Link>
              <Link className='menu__links' to='/contact'>
                <li className='menu__names'>Contacto</li>
              </Link>
            </ul>
            <div className='menu__language'>
              <Link
                className='menu__language--esp'
                to='#'
                onClick={() => this.props.lanSelect('ES')}
              >
                <img src={spainFlag} alt='' />
              </Link>
              <Link
                className='menu__language--eng'
                to='#'
                onClick={() => this.props.lanSelect('EN')}
              >
                <img src={usaFlag} alt='' />
              </Link>
            </div>
          </nav>
        </header>
      );
    } else {
      return (
        <header className='menu__container'>
          <Link to='/'>
            <img className='brand' src={LogoImg} alt='Logo' />
          </Link>

          <nav className='menu'>
            <input type='checkbox' id='menuToggle' />
            <label htmlFor='menuToggle' className='menu-icon'>
              <HiMenuAlt3 className='menu__icon-bars' />
            </label>
            <ul className='menu__list-container'>
              <Link className='menu__links' to='/about'>
                <li className='menu__names'>About</li>
              </Link>
              <Link className='menu__links' to='/services'>
                <li className='menu__names'>Services</li>
              </Link>
              <Link className='menu__links' to='/portafolio'>
                <li className='menu__names'>Portafolio</li>
              </Link>
              <Link className='menu__links' to='/clients'>
                <li className='menu__names'>Clients</li>
              </Link>
              <Link className='menu__links' to='/contact'>
                <li className='menu__names'>Contact</li>
              </Link>
              <Link className='menu__links' to='/'>
                <TiHome className='menu__home-icon' />
              </Link>
            </ul>
            <div className='menu__language'>
              <Link
                className='menu__language--esp'
                to='#'
                onClick={() => this.props.lanSelect('ES')}
              >
                <img src={spainFlag} alt='' />
              </Link>
              <Link
                className='menu__language--eng'
                to='#'
                onClick={() => this.props.lanSelect('EN')}
              >
                <img src={usaFlag} alt='' />
              </Link>
            </div>
          </nav>
        </header>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, { lanSelect })(Header);
