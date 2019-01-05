import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import searchReducer from '../components/SearchBoxModule';
import loginReducer from '../containers/LoginPageModule';
import formReducer from '../containers/FormPageModule';
const appReducer = combineReducers({
    routing: routerReducer,
    search:searchReducer,
    login:loginReducer,
    form:formReducer,
});

export default (state, action) => appReducer(state, action);