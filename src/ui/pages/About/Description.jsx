const Description = ({ title, text }) => {
  return (
    <div className='about__banner-desc-content'>
      <h2 className='about__banner-desc-content--title'>{title}</h2>
      <p className='about__banner-desc-content--text'>{text}</p>
    </div>
  );
};

export default Description;
