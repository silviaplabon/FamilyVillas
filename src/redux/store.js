import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import apartmentReducer from './reducers/appartmentReducer';

const combinedReducer = combineReducers({
    apartments: apartmentReducer
})

export const store = createStore(combinedReducer, composeWithDevTools())