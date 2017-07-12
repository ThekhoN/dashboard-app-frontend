import React from 'react';
import './style.css';

const DashboardButtonWrapper = ({children, handleOnClick}) => (
  <div
    onClick={handleOnClick}
    role='button'
    className='dashboard-button-wrapper'>
    {children}
  </div>
);

export default DashboardButtonWrapper;
