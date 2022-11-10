<<<<<<< HEAD
import { legacy_createStore as createStore } from "redux";
import UserReducer from "../Reducers/UserReducer";

let Store = createStore(UserReducer);

export default Store;
=======
import { legacy_createStore as createStore , combineReducers} from "redux";
import UserReducer from "../Reducers/UserReducer";
import AuthReducer from "../Reducers/AuthReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 


const persistConfig = {
    key: 'root',
    storage,
  }

let reducers = combineReducers({
    UserReducer: UserReducer,
    AuthReducer: AuthReducer
});
  const persistedReducer=persistReducer(persistConfig, reducers)
    let Store = createStore(persistedReducer);
    let persistor=persistStore(Store);

   export { Store, persistor }
  
>>>>>>> changes



















