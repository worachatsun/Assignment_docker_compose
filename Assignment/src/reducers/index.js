import { combineReducers } from 'redux'
import PreferenceReducer from './PreferenceReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
    preference: PreferenceReducer,
    auth: AuthReducer,
})