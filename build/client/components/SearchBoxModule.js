'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.search = exports.setSearchText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rxjs = require('rxjs');

require('rxjs/add/operator/mergeMap');

var _ajax = require('rxjs/observable/dom/ajax');

var _reactRouter = require('react-router');

//modules contain related action creators,store,reducers and epics
var SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
var SEARCH = "SEARCH";
//action creator
var setSearchText = exports.setSearchText = function setSearchText(searchtext) {
    return {
        type: SET_SEARCH_TEXT,
        searchtext: searchtext //key and value same name use one name only
    };
};

var search = exports.search = function search(data) {
    console.log(data);
    return {
        type: search,
        data: data
    };
};
//store for login
var initialState = {
    searchtext: ""

    //reducer for login
};
exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case SET_SEARCH_TEXT:
            return _extends({}, state, { searchtext: action.searchtext });

        default:
            return state;
    }
};

// const handleLoginResponse=(response)=>{
//     const resp=response.response;
//     console.log("response from server: "+JSON.stringify(response));
//     if(resp.success==true){
//         browserHistory.push('/');
//     }else{
//         console.log("not matched");
//         alert("username/password not matched");
//       //  browserHistory.push('/login');
//     }
//     return Observable.of({type:''});//for mergeMap
//     //return {type:""}; for switchMap
// }
//epics
// export function searchEpic(action$){
//     return action$.ofType(LOGIN)
//     .switchMap(action=>
//         ajax({
//            url:'/search',
//            method:'POST',
//            timeout: 30000,
//            headers:{'Content-Type':'application/json'},
//            body:{data:action.data} 
//         })
//         .mergeMap(response=>handleLoginResponse(response))
//         .catch(error=>console.log("error: "+error))
//         );
// }
//# sourceMappingURL=SearchBoxModule.js.map