import { Observable } from "rxjs";
import 'rxjs/add/operator/mergeMap';
import {ajax} from 'rxjs/observable/dom/ajax';
import {browserHistory} from 'react-router';

//modules contain related action creators,store,reducers and epics
const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
const SEARCH = "SEARCH";
//action creator
export const setSearchText = searchtext => {
    return {
        type: SET_SEARCH_TEXT,
        searchtext//key and value same name use one name only
    };
};

export const search = data => {
    console.log(data);
    return {
        type: search,
        data: data
    };
};
//store for login
const initialState = {
    searchtext: "",
}

//reducer for login
export default ((state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return { ...state, searchtext: action.searchtext };

        default:
            return state;
    }
});

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