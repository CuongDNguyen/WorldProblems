import { ADD_POST } from './action_types';

export function addPost(payload) {
    return { type: ADD_POST, payload}
}