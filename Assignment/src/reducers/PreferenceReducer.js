import { Map } from 'immutable'
import { STORE_PREFERENCE, DELETE_PREFERENCE } from '../actions/types'

const INITIAL_STATE = Map({
    preference: {
        language: 'English',
        timezone: '(UTC+00:00) El Aaiun',
        currency: 'USD ($)',
        profileVisibility: 'Everyone',
        message: 'Everyone',
        category: 'Enable',
    },
    havePreference: false
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORE_PREFERENCE:
            return state.set('preference', action.payload).set('havePreference', true)
        case DELETE_PREFERENCE:
            return state = INITIAL_STATE
        default:
            return state
    }
}