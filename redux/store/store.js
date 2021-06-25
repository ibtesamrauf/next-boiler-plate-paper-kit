import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk'; 
// reducers list
import userData from "../reducer/userData";
import coursesReducer from "../reducer/coursesReducer";
import rootReducer from "../reducer/rootReducer";

function configureStore(initialState = {}) {
  const reducer = combineReducers({
    auth: () => ({ mock: true }),
    form: persistReducer(
      {
        key: "TrainingHub", // key for localStorage key, will be: "persist:form"
        storage,
        debug: true,
        blacklist: ['foo'],
      },
      rootReducer
      ),
  });

  const store = createStore(persistReducer({
    key: "TrainingHubAuth",
    debug: true,
    storage,
    whitelist: ['auth'],
  }, reducer), initialState, compose(applyMiddleware(thunk)));

  console.log("initialState", store.getState());

  const persistor = persistStore(store, null, () => {
    // if you want to get restoredState
    console.log("restoredState", store.getState());
    return store.getState();
  });

  return { store, persistor };
}

export default configureStore;
