import axios from 'axios';
import * as actionType from './action-types';

export const generatePalette = () => {
  return async (dispatch, getState) => {
    const { data } = await axios('/api/generatePalette');
    //get the previous state
    const { palettes: prevPalettes } = getState();
    //construct new obj with isLocked property
    const obj = data.palette.map(item => {
      return {
        isLocked:false,
        color: `#${item}`
      }
    });
    //get the locked palettes and concatenate the newly generated palettes
    const newPalettes = prevPalettes.filter(item => item.isLocked === true).concat(obj);
    //only keep the first 4 (locked will come first)
    newPalettes.splice(4);
    dispatch({type: actionType.GENERATE_PALETTE, payload: newPalettes});
  }
}

export const toggleLock = (palette, color) => {
  //toggle isLocked true/false
  palette.forEach(item => item.color === color ? item.isLocked = !item.isLocked:item.isLocked);
  return {
    type: actionType.UPDATE_PALETTE,
    payload: palette
  }
}