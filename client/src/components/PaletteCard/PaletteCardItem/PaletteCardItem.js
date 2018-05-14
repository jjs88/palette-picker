import React from 'react';

const paletteCardItem = (props) => {
  const { text } = props;

  return (
    <div className="PaletteCardItem">{text}</div>
  )
}

export default paletteCardItem;