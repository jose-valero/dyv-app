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
          <a id='social_link' href='https://twitter.com'>
            <TiSocialTwitter id='twitter' className='banner__sm-item' />
          </a>
        </li>

        <li>
          <a href='https://www.facebook.com/'>
            <TiSocialFacebook id='facebook' className='banner__sm-item' />
          </a>
        </li>

        <li>
          <a href='https://instagram.com'>
            <TiSocialInstagram id='instagram' className='banner__sm-item' />
          </a>
        </li>

        <li>
          <a href='https://pinterest.com'>
            <TiSocialPinterest id='pinterest' className='banner__sm-item' />
          </a>
        </li>
      </div>
    </>
  );
};

export default SocialMedia;
