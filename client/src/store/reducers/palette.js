import * as actionType from '../actions/action-types';

const reducer = (state = [], action) => {
  switch(action.type) {
    case actionType.GENERATE_PALETTE:
      return [
        ...action.payload
      ]
    case actionType.UPDATE_PALETTE:
      return [
        ...action.payload
      ]
    default:
      return state;
  }
}

export default reducer;