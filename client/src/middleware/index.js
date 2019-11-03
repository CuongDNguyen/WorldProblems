import { ADD_POST, FORBIDDEN_WORDS } from '../actions/action_types';

const forbiddenWords = ["middleware"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === ADD_POST) {
                const foundWord = forbiddenWords.filter(word =>
                    action.payload.title.includes(word)
                );

                console.log('Forbidden Word: ', foundWord)

                if (foundWord.length) {
                    return dispatch({ type: FORBIDDEN_WORDS })
                }
            }
            return next(action);
        }
    }
}