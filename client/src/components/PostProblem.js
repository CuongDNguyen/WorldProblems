import React, { Component } from 'react';
import { Button, TextField, Input, Grid } from '@material-ui/core';
import API from '../utils/API';

class PostProblem extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            title: "",
            description: ""
        }
    }

    handleClick() {
        const problemTitle = document.querySelector("#problemTitle").value || "No title provided";
        const problemDescription = document.querySelector("#problemDescription").value || "No description provided"
        this.setState({
            title: problemTitle,
            description: problemDescription
        }, () => {
            console.log("state: ", this.state);
        })
        API.createNewProblem("Cuong", problemTitle, problemDescription).then( (res) => {
            console.log("Response: ", res)
        }).catch();
    }

    render() {
        return (
                <Grid container direction="column">
                    <Grid item xs={4}>
                        <TextField placeholder="Problem title" id="problemTitle" />
                    </Grid>
                    <Grid item xs={4}>
                    <Input fullWidth id="problemDescription" />
                    <Button size="small" onClick={this.handleClick}>
                        Post
                    </Button>
                    </Grid>
                </Grid>
        )
    }
}

export default PostProblem;