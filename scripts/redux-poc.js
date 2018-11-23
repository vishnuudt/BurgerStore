const redux = require('redux');

const initialState = {
    count: 0
}
// reducer
const myReducer = (state = initialState, action) => {
    if (action.type === 'STORE_DATA'){
        return {
            ...state,
            count: state.count + action.payload.item
        };
    }
    return state;
}

// setup store
const store = redux.createStore(myReducer);
console.log(store.getState());

//subscriptions
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// actions
store.dispatch({type:'STORE_DATA', payload:{item:2}});
console.log(store.getState());

