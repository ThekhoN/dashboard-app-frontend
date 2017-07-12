import React from 'react';
import './style.css';

const AdminAvatar = ({imgSrc, title}) => (
  <div className='admin-avatar' title={title}>
    <img src={imgSrc} alt='admin-avatar' />
  </div>
);

export default AdminAvatar;
