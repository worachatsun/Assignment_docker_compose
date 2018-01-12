import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

export const configureStore = () => {
    let store = createStore(reducer, applyMiddleware(thunk))

    return store
}