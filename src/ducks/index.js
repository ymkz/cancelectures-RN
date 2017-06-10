import { combineReducers } from 'redux'
import routes from './routes'
import lectures from './lectures'
import setting from './setting'

export default combineReducers({
  routes,
  lectures,
  setting
})
