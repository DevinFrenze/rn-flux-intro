import ActionTypes from '../constants/ActionTypes';

// this function is an action creator
function selectedCountry(selectedCountry) {

  // here is where one could do other work like fetching data from a server
  // note: function has to be async to make asyncronous calls

  // the object returned is the action itself
  return {

    // every action needs an actionType
    actionType: ActionTypes.SELECTED_COUNTRY,

    // you can put as much or as little data in your action as you want
    selectedCountry
  };
}

export default {
  selectedCountry
};
