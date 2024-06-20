//import React from 'react';
import PropTypes from 'prop-types';
import { MdClear } from 'react-icons/md';
import '../styles/career.css';

export default function ListData({ handleSubmit, handleOnChange, handleClose, rest }) {
  return (
    <div className="bg-[#fefefe] flex tenda w-[25rem] ml-[15rem] absolute mt-[1rem] h-[40vh]">
      <MdClear className="hover:bg-red-700 ml-[20rem]" onClick={handleClose}></MdClear>
      <form id='forms' onSubmit={handleSubmit}>
        <label id='labels' htmlFor="name">Name:</label>
        <input className='inputs' type="text" id="name" name="name" onChange={handleOnChange} value={rest.name} />

        <label id='labels' htmlFor="email">Email:</label>
        <input className='inputs' type="email" id="email" name="email" onChange={handleOnChange} value={rest.email} />

        <label id='labels' htmlFor="mobile">Mobile:</label>
        <input className='inputs' type="number" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile} /><br />

        <button type="submit" className='bg-blue-400 text-white font-serif text-xl rounded-sm mt-5 w-[15rem]'>Submit</button>
      </form>
    </div>
  );
}

ListData.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  rest: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mobile: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }).isRequired
};
