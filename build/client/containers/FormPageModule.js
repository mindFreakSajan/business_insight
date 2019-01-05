'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.save = exports.setExpDateText = exports.setCategoryText = exports.setPriceText = exports.setNameText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rxjs = require('rxjs');

require('rxjs/add/operator/mergeMap');

var _ajax = require('rxjs/observable/dom/ajax');

var _reactRouter = require('react-router');

//modules contain related action creators,store,reducers and epics
var SET_NAME_TEXT = 'SET_NAME_TEXT';
var SET_PRICE_TEXT = 'SET_PRICE_TEXT';
var SET_CATEGORY_TEXT = 'SET_CATEGORY_TEXT';
var SET_EXPDATE_TEXT = 'SET_EXPDATE_TEXT';
var SAVE = "SAVE";
var DATE = Date();
//action creator
var setNameText = exports.setNameText = function setNameText(name) {
    return {
        type: SET_NAME_TEXT,
        name: name //key and value same name use one name only
    };
};

var setPriceText = exports.setPriceText = function setPriceText(price) {
    return {
        type: SET_PRICE_TEXT,
        price: price
    };
};
var setCategoryText = exports.setCategoryText = function setCategoryText(category) {
    return {
        type: SET_CATEGORY_TEXT,
        category: category
    };
};
var setExpDateText = exports.setExpDateText = function setExpDateText(expirationdate) {
    return {
        type: SET_EXPDATE_TEXT,
        expirationdate: expirationdate
    };
};

var save = exports.save = function save(data) {
    console.log(data);
    return {
        type: SAVE,
        data: data
    };
};
//store for login
var initialState = {
    name: "",
    price: "",
    category: "",
    expirationdate: DATE
};

//reducer for login

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case SET_NAME_TEXT:
            return _extends({}, state, { name: action.name });

        case SET_PRICE_TEXT:
            return _extends({}, state, { price: action.price });

        case SET_CATEGORY_TEXT:
            return _extends({}, state, { category: action.category });

        case SET_EXPDATE_TEXT:
            return _extends({}, state, { expirationdate: action.expirationdate });
        default:
            return state;
    }
};

// const handleLoginResponse=(response)=>{
//   //  const response=JSON.parse(response1);
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

// export function loginEpic(action$){
//     return action$.ofType(LOGIN)
//     .switchMap(action=>
//         ajax({
//            url:'/login',
//            method:'POST',
//            timeout: 30000,
//            headers:{'Content-Type':'application/json'},
//            body:{data:action.data} 
//         })
//         .mergeMap(response=>handleLoginResponse(response))
//         .catch(error=>console.log("error: "+error))
//         );
// }
//# sourceMappingURL=FormPageModule.js.map