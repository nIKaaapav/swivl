import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import redusers from './reducers'

export default createStore(
    redusers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
