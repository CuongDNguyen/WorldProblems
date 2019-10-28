import React, { Component } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import API from '../utils/API';

export default class ProblemsPage extends Component {

    componentDidMount() {
        API.getAllProblems()
        .then( (response) => {
            console.log('response: ', response)
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
            <div></div>
        )
    }
}