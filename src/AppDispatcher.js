import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {
  /*
  async async_dispatch(action) {
    const payload = await action;
    super.dispatch(payload);
  */
  dispatch(action) {
    console.log('dispatching action ' + action.actionType);
    super.dispatch(action);
  }
}

export default new AppDispatcher();
