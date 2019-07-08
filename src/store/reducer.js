import { combineReducers } from 'redux'
import { reducer as menuSiderbar } from '../components/menuSiderbar/'
import { reducer as loginReducer } from '../containers/login/'
import { reducer as homeReducer } from '../containers/home/'


const reducer = combineReducers({
    menuSiderbar: menuSiderbar,
    login: loginReducer,
    home: homeReducer
})

export default reducer
