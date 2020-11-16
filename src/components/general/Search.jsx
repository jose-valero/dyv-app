import React, { useState } from 'react';
import '../../assets/styles/Search.scss';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const handleChange = (val) => {
    setSearchInput(val);
  };
  return (
    <div className='container'>
      <div className='search-box'>
        <input
          type='text'
          className='search__input'
          value={searchInput}
          onChange={(e) => handleChange(e.target.value)}
        />
        <span></span>
      </div>
    </div>

    // <div classNameName='search'>
    //   <input type='checkbox' id='trigger' classNameName='search__checkbox' />
    //   <label classNameName='search__label-init' htmlFor='trigger'></label>
    //   <label className='search__label-active' htmlFor='trigger'></label>
    //   <div className='search__border'></div>
    //   <input
    //     type='text'

    //   />
    //   <div className='search__close'></div>
    // </div>
  );
};

export default Search;
