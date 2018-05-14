import React from 'react';
import PaletteCard from '../../components/PaletteCard/PaletteCard';
import { connect } from 'react-redux';

const palettes = (props) => {
  const { palettes } = props;

  const renderPalettes = () => {
    if(palettes.length === 0) return <div>no palettes</div>
    return palettes.map( ({color, isLocked}) => <PaletteCard key={color} text={color} isLocked={isLocked}/>)
  }

  return (
    <div className="Palettes">
      {renderPalettes()}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    palettes: state.palettes
  }
}

export default connect(mapStateToProps)(palettes)