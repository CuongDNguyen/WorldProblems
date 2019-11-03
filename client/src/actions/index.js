import { POSTS_LOADED } from './action_types';
import axios from 'axios';
const timeout = 5000;
let localhost;
const env = process.env.NODE_ENV || "development";
if (env === "development") {
    localhost = `http://localhost:8080`;
} else {
    localhost = "";
}

let currentDate = new Date();

// export function addPost(payload) {
//     return { type: ADD_POST, payload }
// }

export function getAllProblems() {
    return function (dispatch) {
        const allProblemsUrl = `${localhost}/api/problems`;
        return axios.get(allProblemsUrl, {
            timeout: timeout
        }).then(res => dispatch({ type: POSTS_LOADED, payload: res }))
    }
}

export function createNewProblem(author, title, description) {
    const createProblemsUrl = `${localhost}/api/problems`;
    return axios.post(createProblemsUrl, {
        author: author,
        title: title,
        description: description,
        createdAt: currentDate,
        updatedAt: currentDate
    })
}