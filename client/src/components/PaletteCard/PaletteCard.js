import React from 'react';
import PaletteCardItem from './PaletteCardItem/PaletteCardItem';
import { toggleLock } from '../../store/actions/palette';
import { connect } from 'react-redux';

const paletteCard = (props) => {
  const { text, isLocked } = props;
  const lock = isLocked ? <span className="fas fa-lock"></span> : <span className="fas fa-lock-open"></span>


  const clickCard = () => {
    props.toggleLock(props.palettes, text);
  }


  return (
    <div className="PaletteCard" style={{ backgroundColor: text}} onClick={clickCard}>
      <PaletteCardItem text={lock}/>
      <PaletteCardItem text={text}/>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    palettes: state.palettes
  }
}

export default connect(mapStateToProps, { toggleLock })(paletteCard);