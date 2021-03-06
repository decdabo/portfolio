import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { alertReducer } from "../reducers/alertReducer";

import { authReducer } from "../reducers/authReducers";
import { backgroundReducer } from "../reducers/backgroundReducer";

const composeEnhancers = typeof window === 'object' 
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const reducers = combineReducers({
    auth: authReducer,
    bg: backgroundReducer,
    alert: alertReducer,
})

const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(
    reducers,
    enhancer
);
