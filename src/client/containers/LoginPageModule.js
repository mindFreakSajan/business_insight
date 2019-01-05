import { Observable } from "rxjs";
import 'rxjs/add/operator/mergeMap';
import {ajax} from 'rxjs/observable/dom/ajax';
import {browserHistory} from 'react-router';

//modules contain related action creators,store,reducers and epics
const SET_EMAIL_TEXT = 'SET_EMAIL_TEXT';
const SET_PASSOWRD_TEXT = 'SET_PASSWORD_TEXT';
const LOGIN = "LOGIN";
//action creator
export const setEmailText = email => {
    return {
        type: SET_EMAIL_TEXT,
        email: email//key and value same name use one name only
    };
};

export const setPasswordText = password => {
    return {
        type: SET_PASSOWRD_TEXT,
        password: password
    };
};

export const login = data => {
    console.log(data);
    return {
        type: LOGIN,
        data: data
    };
};
//store for login
const initialState = {
    email: "",
    password: ""
};

//reducer for login
export default ((state = initialState, action) => {
    switch (action.type) {
        case SET_EMAIL_TEXT:
            return { ...state, email: action.email };

        case SET_PASSOWRD_TEXT:
            return { ...state, password: action.password };

        default:
            return state;
    }
});

const handleLoginResponse=(response)=>{
    const resp=response.response;
    console.log("response from server: "+JSON.stringify(response));
    if(resp.success==true){
        browserHistory.push('/');
    }else{
        console.log("not matched");
        alert("username/password not matched");
      //  browserHistory.push('/login');
    }
    return Observable.of({type:''});//for mergeMap
    //return {type:""}; for switchMap
}

export function loginEpic(action$){
    return action$.ofType(LOGIN)
    .switchMap(action=>
        ajax({
           url:'/login',
           method:'POST',
           timeout: 30000,
           headers:{'Content-Type':'application/json'},
           body:{data:action.data} 
        })
        .mergeMap(response=>handleLoginResponse(response))
        .catch(error=>console.log("error: "+error))
        );
}
