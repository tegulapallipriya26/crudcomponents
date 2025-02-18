import {applyMiddleware, createStore} from "redux";
import cakeReducer from "./cake/cakeReducer";
import logger from "redux-logger";
//import { applyMiddleware } from "redux";
const store=createStore(cakeReducer,applyMiddleware(logger));
export default store;