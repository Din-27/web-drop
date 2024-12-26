import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import styleReducer from './styleSlice'
import sidebarReducer from './sidebarSlice'
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';



const sidebarPersistConfig = {
    key: "sidebar",
    storage,
};

const rootReducer = combineReducers({
    style: styleReducer,
    sidebar: persistReducer(sidebarPersistConfig, sidebarReducer),
});

const store = configureStore({
    reducer: rootReducer
})

const persistor = persistStore(store);

export { store, persistor };