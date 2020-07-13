import { applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

const createMiddleware = applyMiddleware(promiseMiddleware);

export default createMiddleware;
