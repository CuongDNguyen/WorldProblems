import React, { Component } from 'react';
import { useAuth0 } from '../react-auth0-spa';
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
        const { loading, user } = useAuth0();

        if (loading || !user) {
          return (
            <div>Loading...</div>
          );
        }
      
        return(
            <div>
                {
                    this.state.problems
                }
            </div>
        )
    }
}