import { combineEpics } from 'redux-observable';
import {loginEpic} from '../containers/LoginPageModule';

export default combineEpics(loginEpic);
