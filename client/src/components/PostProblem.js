import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { addPost } from '../actions/index';
import { Button, TextField, Input } from '@material-ui/core';
import API from '../utils/API';

function mapDispatchToProps(dispatch) {
    return {
        // addPost: post => dispatch(addPost(post))
    }
}

class PostProblem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        API.createNewProblem("Cuong", problemTitle, problemDescription).then((res) => {
            console.log("Response: ", res)
        }).catch();
    }

    handleSubmit(event) {
        // const title = document.querySelector("#title").value || "No title provided";
        // const description = document.querySelector("#description").value || "No description provided";
        // event.preventDefault();
        // this.props.addPost({ title: title, description: description });
    }

    render() {
        return (
            <Fragment>
                <TextField placeholder="Problem title" id="problemTitle" />
                <Input fullWidth id="problemDescription" />
                <Button size="small" onClick={this.handleClick}>
                    Post
                </Button>
                <h3>New Redux Form Test</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" id="title" placeholder="Post title"></input>
                        <label>Description</label>
                        <input type="text" id="description" placeholder="Post description"></input>
                    </div>
                    <button type="submit">Save Post</button>
                </form>
            </Fragment>
        )
    }
}

const ConnectedPostProblem = connect(null, mapDispatchToProps)(PostProblem)

export default ConnectedPostProblem;