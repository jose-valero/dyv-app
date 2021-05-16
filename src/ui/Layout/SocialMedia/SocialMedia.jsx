import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram, TiSocialPinterest } from 'react-icons/ti';
import './SocialMedia.scss';

const SocialMedia = () => {
  const [isSocialMediaVisible, setIsSocialMediaVisible] = useState(true);

  const toggleSocialMedia = () => {
    setIsSocialMediaVisible(!isSocialMediaVisible);
    // console.log(isSocialMediaVisible);
  };

  return (
    <>
      <div className='banner__social-media'>
        <div className={`social__wrapper ${isSocialMediaVisible ? 'show' : 'hide'}`}>
          <li>
            <a id='social_link' href='https://twitter.com' target='_blank' rel='noreferrer'>
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
        <div className={`banner__social--showHide ${isSocialMediaVisible ? 'withBorder' : 'noBorder'}`}>
          {isSocialMediaVisible ? (
            <span onClick={toggleSocialMedia}>
              <FaAngleLeft />
            </span>
          ) : (
            <span onClick={toggleSocialMedia}>
              <FaAngleRight />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
