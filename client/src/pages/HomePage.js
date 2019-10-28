import React, { Component } from 'react';
import { useAuth0 } from "../react-auth0-spa";

export default class HomePage extends Component {
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