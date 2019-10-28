import axios from 'axios';

const timeout = 5000;

export default {
    getAllProblems: () => {
        const allProblemsUrl = `/api/problems`;
        return axios.get(allProblemsUrl, {
            timeout: timeout
        })
    },

    createNewProblem: (description, author) => {
        const createProblemsUrl = `/api/problems`;
        return axios.post(createProblemsUrl, {
            author: author,
            description: description
        })
    }
}