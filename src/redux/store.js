import { createStore, combineReducers } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

import tokenReducer from './reducers/tokenReducer'

const rootReducer = combineReducers({
    token: tokenReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReduce = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReduce)
    let persistor = persistStore(store)

    return{
        store,
        persistor
    }
}