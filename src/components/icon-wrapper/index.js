import React from 'react';

const IconnWrapper = ({
  title,
  childPath,
  width,
  height,
  handleOnClick,
  handleOnHover
}) => (
  <svg>
    {childPath}
  </svg>
);
