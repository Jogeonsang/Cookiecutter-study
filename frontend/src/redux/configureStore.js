import { createStore } from 'redux';
import users from './modules/users';

const reducer = combineReucers({
  users
});


let store = initialState => createStore(reducer);

export default store();
