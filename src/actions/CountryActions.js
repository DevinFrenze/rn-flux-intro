import ActionTypes from '../constants/ActionTypes';

function selectedCountry(selectedCountry) {
  return {
    actionType: ActionTypes.SELECTED_COUNTRY,
    selectedCountry
  };
}

export default {
  selectedCountry
};
