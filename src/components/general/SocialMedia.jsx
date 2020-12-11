import React from 'react';
import '../../assets/styles/components/general/SocialMedia.scss';

import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialPinterest,
} from 'react-icons/ti';

const SocialMedia = () => {
  return (
    <>
      <div className='banner__social-media'>
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
    </>
  );
};

export default SocialMedia;
