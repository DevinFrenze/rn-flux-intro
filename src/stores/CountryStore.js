import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../AppDispatcher';
import { ReduceStore } from 'flux/utils';

// `ReduceStore` automatically emits change events based on return of `reduce`
class CountryStore extends ReduceStore {

  // the initial state of the store is defined by you
  getInitialState() {
    return '';
  }

  // this function responds to the actions relevant to this store
  // and returns the new state
  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.SELECTED_COUNTRY:
        return action.selectedCountry; // this will emit a change
      default:
        return state; // this will not emit a change
    }
  }
}

// this store gets registered with AppDispatcher
export default new CountryStore(AppDispatcher);