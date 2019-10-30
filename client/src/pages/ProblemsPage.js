import React, { Component } from 'react';
import Problem from '../components/Problem';
import PostProblem from '../components/PostProblem';
import API from '../utils/API';

export default class ProblemsPage extends Component {

    state = {
        problems: []
    }

    componentDidMount() {
        API.getAllProblems()
        .then( (response) => {
            console.log('response: ', response)
            this.setState({
                problems: response
            }, () => {
                console.log('problems: ', this.state.problems);
            })
        })
        .catch( (err) => {
            console.log('errors: ', err)
        })
    }
    
    render() {

        return(
            <div>
                {
            //         this.state.problems.map( (problem) => {
            //             <Problem problemTitle={problem.text}/>
            //         })
                }
                <Problem problemTitle="Building this website"/>
                <Problem problemTitle="Learning Material UI"/>
                <PostProblem />
            </div>
        )
    }
}