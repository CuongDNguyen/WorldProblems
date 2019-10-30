import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import API from '../utils/API';

class PostProblem extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        API.createNewProblem().then().catch();
    }

    render() {
        return (

            <Button size="small" onClick={this.handleClick}>

            </Button>
        )
    }
}

export default PostProblem;