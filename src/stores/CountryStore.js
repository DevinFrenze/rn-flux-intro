import ActionTypes from '../constants/ActionTypes';
import CountryCities from '../constants/CountryCities';
import AppDispatcher from '../AppDispatcher';
import { ReduceStore } from 'flux/utils';

// `ReduceStore` automatically emits change events based on return of `reduce`
class CountryStore extends ReduceStore {

  // the initial state of the store is defined by you
  getInitialState() {
    return Object.freeze({
      selectedCountry: Object.keys(CountryCities)[0],
      countryOptions: Object.keys(CountryCities),
    });
  }

  // this function responds to dispatched actions and returns the new state
  reduce(state, action) {
    switch (action.actionType) {
      case ActionTypes.SELECTED_COUNTRY:
        return Object.freeze(Object.assign({}, state, {
          selectedCountry: action.selectedCountry
        })); // this will emit a change
      default:
        return state; // this will not emit a change
    }
  }
}

// this store gets registered with AppDispatcher
// this last line exports an instantiated store, thus the store is a singleton
export default new CountryStore(AppDispatcher);
