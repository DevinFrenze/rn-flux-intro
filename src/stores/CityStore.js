import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../AppDispatcher';
import { Store } from 'flux/utils';

class CityStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);
    this.city = 'Detroit';
  }

  __onDispatch(action) {
    switch (action.type) {
      case ActionTypes.SELECTED_CITY:
        this.city = action.selectedCity;
        this.__emitChange();
        break;
    }
  }

  getCity() {
    return this.city;
  }
}

// this store gets registered with AppDispatcher
export default new CityStore(AppDispatcher);
