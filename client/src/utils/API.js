import axios from 'axios';

const timeout = 5000;
const localhost = `http://localhost:80`;
let currentDate = new Date();

export default {
    getAllProblems: () => {
        const allProblemsUrl = `${localhost}/api/problems`;
        return axios.get(allProblemsUrl, {
            timeout: timeout
        })
    },

    createNewProblem: (description, author) => {
        const createProblemsUrl = `${localhost}/api/problems`;
        return axios.post(createProblemsUrl, {
            author: author,
            description: description,
            createdAt: currentDate,
            updatedAt: currentDate
        })
    }
}