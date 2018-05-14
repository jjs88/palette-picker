import React from 'react';
import Color from './Color/Color';
import { connect } from 'react-redux';
import { removePalette } from '../../../store//actions/project';

const palette = (props) => {
  const { name, palettes, _id:paletteId } = props.palette;
  const { projectId } = props;

  const renderColors = () => {
    return palettes.map(color => {
      return (
        <Color key={color} color={color}/>
      )
    })
  }

  const removePalette = () => {
    // console.log('remove palette', projectId, paletteId);
    props.removePalette(projectId, paletteId);
  }

  return (
    <div className="Palette">
      <p>{name}</p>
      {renderColors()}
      <span className="fas fa-trash-alt TrashPalette" onClick={removePalette}></span>
    </div>
  )
}

export default connect(null, { removePalette })(palette);