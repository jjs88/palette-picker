import React from 'react';

const color = (props) => {
  const { color } = props;
  return (
    <div className="Color" style={{backgroundColor: color}}></div>
  )
}

export default color;