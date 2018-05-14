import * as actionType from '../actions/action-types';

const reducer = (state = [], action) => {
  switch(action.type) {
    case actionType.RETRIEVE_PROJECTS:
      return [
        ...action.payload
      ]
    case actionType.ADD_PROJECT:
      return [
        ...state,
        action.payload
      ]
    case actionType.REMOVE_PALETTE:
      const copy = [...state];
      const newList = copy.filter(project => project._id !== action.payload._id);
      return [
        ...newList,
        action.payload
      ]
    default:
      return state;
  }
}

export default reducer;