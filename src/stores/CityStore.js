import ActionTypes from '../constants/ActionTypes';
import CountryCities from '../constants/CountryCities';
import AppDispatcher from '../AppDispatcher';
import CountryStore from './CountryStore';
import { ReduceStore } from 'flux/utils';

class CityStore extends ReduceStore {
  getInitialState() {
    const selectedCountry = CountryStore.getState().selectedCountry;
    return Object.freeze({
      selectedCity: CountryCities[selectedCountry][0],
      cityOptions: CountryCities[selectedCountry],
    });
  }

  reduce(state, action) {
    console.log('city store reduce');
    switch (action.actionType) {
      case ActionTypes.SELECTED_COUNTRY:
        AppDispatcher.waitFor([CountryStore.getDispatchToken()]);
        return this.getInitialState();
      case ActionTypes.SELECTED_CITY:
        return Object.freeze(Object.assign({}, state, {
          selectedCity: action.selectedCity
        }));
      default:
        return state;
    }
  }
}

export default new CityStore(AppDispatcher);
