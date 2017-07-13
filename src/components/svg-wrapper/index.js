import React from 'react';

const SVGWrapper = ({width, height, viewBox, title, childPath}) => (
  <svg
    className='svg-icon'
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 22 22'
    aria-labelledby='title'>
    <title id='title'>{title}</title>
    {childPath}
  </svg>
);

export default SVGWrapper;
