'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = exports.setPasswordText = exports.setEmailText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.loginEpic = loginEpic;

var _rxjs = require('rxjs');

require('rxjs/add/operator/mergeMap');

var _ajax = require('rxjs/observable/dom/ajax');

var _reactRouter = require('react-router');

//modules contain related action creators,store,reducers and epics
var SET_EMAIL_TEXT = 'SET_EMAIL_TEXT';
var SET_PASSOWRD_TEXT = 'SET_PASSWORD_TEXT';
var LOGIN = "LOGIN";
//action creator
var setEmailText = exports.setEmailText = function setEmailText(email) {
    return {
        type: SET_EMAIL_TEXT,
        email: email //key and value same name use one name only
    };
};

var setPasswordText = exports.setPasswordText = function setPasswordText(password) {
    return {
        type: SET_PASSOWRD_TEXT,
        password: password
    };
};

var login = exports.login = function login(data) {
    console.log(data);
    return {
        type: LOGIN,
        data: data
    };
};
//store for login
var initialState = {
    email: "",
    password: ""
};

//reducer for login

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case SET_EMAIL_TEXT:
            return _extends({}, state, { email: action.email });

        case SET_PASSOWRD_TEXT:
            return _extends({}, state, { password: action.password });

        default:
            return state;
    }
};

var handleLoginResponse = function handleLoginResponse(response) {
    var resp = response.response;
    console.log("response from server: " + JSON.stringify(response));
    if (resp.success == true) {
        _reactRouter.browserHistory.push('/');
    } else {
        console.log("not matched");
        alert("username/password not matched");
        //  browserHistory.push('/login');
    }
    return _rxjs.Observable.of({ type: '' }); //for mergeMap
    //return {type:""}; for switchMap
};

function loginEpic(action$) {
    return action$.ofType(LOGIN).switchMap(function (action) {
        return (0, _ajax.ajax)({
            url: '/login',
            method: 'POST',
            timeout: 30000,
            headers: { 'Content-Type': 'application/json' },
            body: { data: action.data }
        }).mergeMap(function (response) {
            return handleLoginResponse(response);
        }).catch(function (error) {
            return console.log("error: " + error);
        });
    });
}
//# sourceMappingURL=LoginPageModule.js.map