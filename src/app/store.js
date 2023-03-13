import{configureStore, MiddlewareArray}from '@reduxjs/toolkit';

import{cryptoApi}from '../services/cryptoApi';
import{cryptoNewsApi}from '../services/cryptoNewsApi';
export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
    }, 
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware).concat(cryptoNewsApi.middleware),
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(cryptoNewsApi.middleware),
    // middleware : new MiddlewareArray.concat(cryptoApi.middleware),
    // middleware : new MiddlewareArray.concat(cryptoNewsApi.middleware),
});