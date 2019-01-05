
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';//chrome extension
import { routerMiddleware } from 'react-router-redux';
import Reducers from '../Reducers';
import rootEpic from '../Epics';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/dom/ajax';


const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = (browserHistory, data) => {
  const finalCreateStore = composeWithDevTools(
        applyMiddleware(epicMiddleware, routerMiddleware(browserHistory)))(createStore);
  const store = finalCreateStore(Reducers, data);
  return store;
};

export default configureStore;
