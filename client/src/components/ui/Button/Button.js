import React from 'react';

const button = (props) => {

  const { text, click, type, styles } = props;
  return (
    <button className="Button" type={type} onClick={click} style={{styles}}>{text}</button>
  )
}

export default button;