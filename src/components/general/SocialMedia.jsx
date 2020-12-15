import React, { useState } from 'react';
import '../../assets/styles/components/general/SocialMedia.scss';

import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialPinterest,
} from 'react-icons/ti';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const SocialMedia = () => {
  const [isSocialMediaVisible, setIsSocialMediaVisible] = useState(true);
  
  const toggleSocialMedia = () => {
    setIsSocialMediaVisible(!isSocialMediaVisible);
    console.log(isSocialMediaVisible);
  }

  return (
    <>
      <div className='banner__social-media'>
        <div className={`social__wrapper ${isSocialMediaVisible ? "show" : "hide"}`}>
          <li>
            <a
              id='social_link'
              href='https://twitter.com'
              target='_blank'
              rel='noreferrer'
            >
              <TiSocialTwitter id='twitter' className='banner__sm-item' />
            </a>
          </li>

          <li>
            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
              <TiSocialFacebook id='facebook' className='banner__sm-item' />
            </a>
          </li>

          <li>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <TiSocialInstagram id='instagram' className='banner__sm-item' />
            </a>
          </li>

          <li>
            <a href='https://pinterest.com' target='_blank' rel='noreferrer'>
              <TiSocialPinterest id='pinterest' className='banner__sm-item' />
            </a>
          </li>
        </div>
        <div className={`banner__social--showHide ${isSocialMediaVisible ? "withBorder" : "noBorder"}`}>
          {
            isSocialMediaVisible ?
            <button onClick={toggleSocialMedia}>
              <FaAngleLeft />
            </button>
            :
            <button onClick={toggleSocialMedia}>
              <FaAngleRight />
            </button>
          }
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
