import { combineReducers } from 'redux';
import paletteReducer from './palette';
import projectReducer from './project';

export default combineReducers({
  palettes: paletteReducer,
  projects: projectReducer
});