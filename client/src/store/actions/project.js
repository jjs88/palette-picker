import axios from 'axios';
import * as actionType from './action-types';

export const getProjects = () => {
  return async (dispatch) => {
    const { data } = await axios('/api/projects');
    dispatch({ type: actionType.RETRIEVE_PROJECTS, payload: data });
  }
}

export const addPalette = (obj) => {
  return async (dispatch) => {
    //save the palette and add palette to the project
    await axios.post('/api/addPalette', obj);
    //get the projects again with updates palettes
    dispatch(getProjects());
  }
}

export const addProject = (obj) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/addProject', obj);
    dispatch({type: actionType.ADD_PROJECT, payload: data});
  }
}

//palette removal is here because we return a project for the response
export const removePalette = (projectId, paletteId) => {
  return async (dispatch) => {
      await axios.delete(`api/remove/${projectId}/${paletteId}`);
      dispatch(getProjects());
  }
}