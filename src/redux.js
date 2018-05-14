function createStore (reducer){
    let state;//默认是undefined
    let listeners = [];
    let getState = ()=>state;
    //订阅
    let subscribe = (listener)=>{
        listeners.push(listener)
        return ()=>{
            listeners.filter(v=>listener!==v);
        }
    }
    //发送action
    let dispatch = (action)=>{
        state = reducer(state,action);
        listeners.forEach(item=>item())
    }
    dispatch()
    return {
        getState,
        subscribe,
        dispatch
    }
}
export {createStore}