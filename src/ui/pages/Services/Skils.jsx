import skillImg from '../../../assets/images/2.jpg';

const Skils = () => {
  return (
    <div className='skills__container'>
      <div className='dyv__container'>
        <div className='dyv__row'>
          <div className='skills__block dyv__col-xl-4 dyv__col-lg-4 dyv__col-md-4 dyv__col-sm-4'>
            <img src={skillImg} alt='...' />
            <p>OFfice Decorate</p>
          </div>
          <div className='skills__block dyv__col-xl-4 dyv__col-lg-4 dyv__col-md-4 dyv__col-sm-4'>
            <img src={skillImg} alt='...' />
            <p>Home Decorate</p>
          </div>
          <div className='skills__block dyv__col-xl-4 dyv__col-lg-4 dyv__col-md-4 dyv__col-sm-4'>
            <img src={skillImg} alt='...' />
            <p>LIGHTING DECORATE</p>
          </div>
        </div>

        <div className='dyv__row'>
          <div className='skills__block dyv__col-xl-4 dyv__col-lg-4 dyv__col-md-4 dyv__col-sm-4'>
            <img src={skillImg} alt='...' />
            <p>Smart Kitchen Setup</p>
          </div>
          <div className='skills__block dyv__col-xl-4 dyv__col-lg-4 dyv__col-md-4 dyv__col-sm-4'>
            <img src={skillImg} alt='...' />
            <p>Kitchen Sink Design</p>
          </div>
          <div className='skills__block dyv__col-xl-4 dyv__col-lg-4 dyv__col-md-4 dyv__col-sm-4'>
            <img src={skillImg} alt='...' />
            <p>Lobby Interior Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
