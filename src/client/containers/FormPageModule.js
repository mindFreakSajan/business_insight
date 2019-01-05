import { Observable } from "rxjs";
import 'rxjs/add/operator/mergeMap';
import {ajax} from 'rxjs/observable/dom/ajax';
import {browserHistory} from 'react-router';

//modules contain related action creators,store,reducers and epics
const SET_NAME_TEXT = 'SET_NAME_TEXT';
const SET_PRICE_TEXT = 'SET_PRICE_TEXT';
const SET_CATEGORY_TEXT = 'SET_CATEGORY_TEXT';
const SET_EXPDATE_TEXT='SET_EXPDATE_TEXT';
const SAVE = "SAVE";
const DATE=Date();
//action creator
export const setNameText = name => {
    return {
        type: SET_NAME_TEXT,
        name//key and value same name use one name only
    };
};

export const setPriceText = price => {
    return {
        type: SET_PRICE_TEXT,
        price
    };
};
export const setCategoryText = category => {
    return {
        type: SET_CATEGORY_TEXT,
        category
    };
};
export const setExpDateText = expirationdate => {
    return {
        type: SET_EXPDATE_TEXT,
        expirationdate
    };
};

export const save = data => {
    console.log(data);
    return {
        type: SAVE,
        data: data
    };
};
//store for login
const initialState = {
    name: "",
    price: "",
    category:"",
    expirationdate:DATE
};

//reducer for login
export default ((state = initialState, action) => {
    switch (action.type) {
        case SET_NAME_TEXT:
            return { ...state, name: action.name };

        case SET_PRICE_TEXT:
            return { ...state, price: action.price };

        case SET_CATEGORY_TEXT:
            return { ...state, category: action.category };

        case SET_EXPDATE_TEXT:
            return { ...state, expirationdate: action.expirationdate };
        default:
            return state;
    }
});

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
