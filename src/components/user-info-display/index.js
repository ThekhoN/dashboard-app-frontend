import React from 'react';
import './style.css';

const getStandardDate = (dateMs) => {
  let d = new Date(dateMs);
  return d.toLocaleString();
};

const UserInfoDisplay = ({data}) => (
  <div className='user-info-display'>
    <div className='user-info-row'>
      <label htmlFor='gender'>Gender:</label>
      <br />
      <span id='gender' className='user-detail'>{data.gender}</span>
    </div>
    <div className='user-info-row'>
      <label htmlFor='locale'>Locale:</label>
      <br />
      <span id='locale' className='user-detail'>{data.locale}</span>
    </div>
    <div className='user-info-row'>
      <label htmlFor='timezone'>Time zone:</label>
      <br />
      <span id='timezone' className='user-detail'>{data.timezone}</span>
    </div>
    <div className='user-info-row'>
      <label htmlFor='timezone'>Date of joining:</label>
      <br />
      <span id='timezone' className='user-detail'>{getStandardDate(Date.parse(data.timeStamp))}</span>
    </div>
    <div className='user-info-row'>
      <label htmlFor='latitude'>Latitude:</label>
      <br />
      <span id='latitude' className='user-detail'>{data.lat} ° N</span>
    </div>
    <div className='user-info-row'>
      <label htmlFor='longtitude'>Longtitude:</label>
      <br />
      <span id='longtitude' className='user-detail'>{data.long} ° E</span>
    </div>
  </div>
);

export default UserInfoDisplay;
