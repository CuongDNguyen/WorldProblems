import React, { Component } from 'react';
import Problem from '../components/Problem';
import PostProblem from '../components/PostProblem';
import ProblemList from '../components/ProblemList';

export default class ProblemsPage extends Component {

    render() {

        return (
            <div>
                <Problem />
                {/* <PostProblem /> */}
                <ProblemList />
            </div>
        );
    }
}