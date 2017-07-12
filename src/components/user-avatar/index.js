import React from 'react';
import './style.css';

const UserAvatar = ({imgSrc, title}) => (
  <div className='user-avatar' title={title}>
    <img src={imgSrc} alt='admin-avatar' />
  </div>
);

export default UserAvatar;
