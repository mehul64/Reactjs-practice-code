import cakeReducer from './cakes/cakeReducer'
import icecreamReducer from './icecream/iceCreamReducer'
import {combineReducers} from 'redux'
import userReducer from './user/userReducer'


export const rootReducer = combineReducers({
  cake     : cakeReducer,
  iceCream : icecreamReducer,
  user     : userReducer
})