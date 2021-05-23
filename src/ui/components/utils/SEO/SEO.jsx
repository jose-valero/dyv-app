import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ description, image, image_alt, keywords, title }) => {
  return (
    <Helmet>
      {/* --General tags-- */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='image' content={image} />
      <meta name='keywords' content={keywords} />
      {/* --OpenGraph/facebook tags-- */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:alt' content={image_alt} />
      {/* --Twitter Card tags-- */}
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={image_alt} />
    </Helmet>
  );
};
