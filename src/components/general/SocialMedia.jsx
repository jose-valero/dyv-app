import React from 'react';
import "../../assets/styles/SocialMedia.scss"
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaPinterestP,
} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <nav className='social'>
      <ul>
        <li className='twitter'>
          <a
            href='https://www.instagram.com/dvanguardiavzla/'
            target='_blank'
            
            rel='noreferrer'
          >
            <span className='rrss__name'>Twitter</span>
            <FaTwitter className='icon' />
          </a>
        </li>
        <li className='facebook'>
          <a
            href='https://www.instagram.com/dvanguardiavzla/'
            target='_blank'
            
            rel='noreferrer'
          >
            <span className='rrss__name'>Facebook</span>
            <FaFacebookF className='icon' />
          </a>
        </li>
        <li className='google-plus'>
          <a
            href='https://www.instagram.com/dvanguardiavzla/'
            target='_blank'
            
            rel='noreferrer'
          >
            <span className='rrss__name'>Google plus</span>
            <FaGooglePlusG className='icon' />
          </a>
        </li>
        <li className='instagram'>
          <a
            href='https://www.instagram.com/dvanguardiavzla/'
            target='_blank'
            
            rel='noreferrer'
          >
            <span className='rrss__name'>Instagram</span>
            <FaInstagram className='icon' />
          </a>
        </li>
        <li className='pinterest'>
          <a
            href='https://www.instagram.com/dvanguardiavzla/'
            target='_blank'
            
            rel='noreferrer'
          >
            <span className='rrss__name'>Pinterest</span>
            <FaPinterestP className='icon' />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialMedia;
