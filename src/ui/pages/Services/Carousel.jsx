const Carousel = () => {
  return (
    <>
      <div className='carousel__headline'>
        <h1>HOLA CAROUSEL</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          voluptates nulla pariatur perspiciatis ipsum vero quibusdam eveniet
          omnis in distinctio debitis ipsa quisquam ut placeat, earum excepturi!
          Et, ipsa nulla.
        </p>
      </div>
      <div className='carousel__container'>
        <div className='carousel my-carousel carousel--translate'>
          <input
            className='carousel__activator'
            type='radio'
            name='carousel'
            id='item-1'
            defaultChecked
          />
          <input
            className='carousel__activator'
            type='radio'
            name='carousel'
            id='item-2'
          />
          <input
            className='carousel__activator'
            type='radio'
            name='carousel'
            id='item-3'
          />
          <input
            className='carousel__activator'
            type='radio'
            name='carousel'
            id='item-4'
          />
          <input
            className='carousel__activator'
            type='radio'
            name='carousel'
            id='item-5'
          />
          <div className='carousel__controls'>
            <label
              className='carousel__control carousel__control--backward'
              htmlFor='item-5'
            ></label>
            <label
              className='carousel__control carousel__control--forward'
              htmlFor='item-2'
            ></label>
          </div>
          <div className='carousel__controls'>
            <label
              className='carousel__control carousel__control--backward'
              htmlFor='item-1'
            ></label>
            <label
              className='carousel__control carousel__control--forward'
              htmlFor='item-3'
            ></label>
          </div>
          <div className='carousel__controls'>
            <label
              className='carousel__control carousel__control--backward'
              htmlFor='item-2'
            ></label>
            <label
              className='carousel__control carousel__control--forward'
              htmlFor='item-4'
            ></label>
          </div>
          <div className='carousel__controls'>
            <label
              className='carousel__control carousel__control--backward'
              htmlFor='item-3'
            ></label>
            <label
              className='carousel__control carousel__control--forward'
              htmlFor='item-5'
            ></label>
          </div>
          <div className='carousel__controls'>
            <label
              className='carousel__control carousel__control--backward'
              htmlFor='item-4'
            ></label>
            <label
              className='carousel__control carousel__control--forward'
              htmlFor='item-1'
            ></label>
          </div>
          <div className='carousel__track'>
            <li className='carousel__slide'>
              <p className='carousel__slide--description'>PERFECTLY DESIGN</p>
            </li>
            <li className='carousel__slide'>
              <p className='carousel__slide--description'>CAREFULLY PLANNED</p>
            </li>
            <li className='carousel__slide'>
              <p className='carousel__slide--description'>SMARTLY EXECUTE</p>
            </li>
            <li className='carousel__slide'>
              <p className='carousel__slide--description'>LOREM IPSU</p>
            </li>
            <li className='carousel__slide'>
              <p className='carousel__slide--description'>LOREM IPSU</p>
            </li>
          </div>
          <div className='carousel__indicators'>
            <label className='carousel__indicator' htmlFor='item-1'></label>
            <label className='carousel__indicator' htmlFor='item-2'></label>
            <label className='carousel__indicator' htmlFor='item-3'></label>
            <label className='carousel__indicator' htmlFor='item-4'></label>
            <label className='carousel__indicator' htmlFor='item-5'></label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
