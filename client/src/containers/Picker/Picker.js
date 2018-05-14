import React from 'react';
import Palettes from '../Palettes/Palettes';
import Button from '../../components/ui/Button/Button';
import { connect } from 'react-redux';
import { generatePalette } from '../../store/actions/palette';
import SavePaletteForm from '../../components/SavePaletteForm/SavePaletteForm';

const picker = (props) => {

  const generateClick = async () => {
    props.generatePalette();
  }

  return (
    <div className="Picker">
      <Palettes />
      <Button text="Generate New Palette!" click={() => generateClick()}/>
      <SavePaletteForm />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    palettes: state.palettes
  }
}

export default connect(mapStateToProps, { generatePalette })(picker)