import { Dispatcher } from 'flux';

/*
class AppDispatcher extends Dispatcher {
  async async_dispatch(action) {
    const payload = await action;
    super.dispatch(payload);
}
*/

export default new Dispatcher();
