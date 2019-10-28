import axios from 'axios';

const timeout = 5000;

export default {
    getAllProblems: (id) => {
        const allProblemsUrl = `/api/problems`;
        return axios.get(allProblemsUrl, {
            timeout: timeout
        })
    }
}