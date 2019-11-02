import { ADD_POST } from "../actions/action_types";

const initialState = {
    posts: []
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_POST) {
        return Object.assign({}, state, {
            posts: state.posts.concat(action.payload)
        })
    }
    return state;
}

export default rootReducer;