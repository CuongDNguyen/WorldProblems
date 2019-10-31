import React, { Component } from 'react';
import Problem from '../components/Problem';
import PostProblem from '../components/PostProblem';
import { List, ListItem } from '@material-ui/core';
import API from '../utils/API';

export default class ProblemsPage extends Component {

    state = {
        problems: []
    }

    componentDidMount() {
        API.getAllProblems()
            .then((response) => {
                console.log('response: ', response)
                this.setState({
                    problems: response.data
                }, () => {
                    console.log('state: ', this.state);
                })
            })
            .catch((err) => {
                console.log('errors: ', err)
            })
    }

    render() {

        return (
            <div>
                <List component="ul">
                    {
                        this.state.problems.map((problem, key) => {
                            return (
                                <ListItem key={key}>
                                    <Problem problemTitle={problem.title} />
                                </ListItem>
                            )
                        })
                    }
                </List>
                <PostProblem />
            </div>
        );
    }
}