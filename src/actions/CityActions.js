import ActionTypes from '../constants/ActionTypes';

// the function `selectedCity` is the action-creator
// the object with `actionType: ActionTypes.SELECTED_CITY` is the action
function selectedCity(selectedCity) {
  return {
    actionType: ActionTypes.SELECTED_CITY,
    selectedCity
  };
}

export default {
  selectedCity
};
