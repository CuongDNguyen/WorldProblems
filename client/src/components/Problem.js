import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllProblems } from '../actions/index';

class Problem extends Component {
    
    componentDidMount() {
        this.getProblems();
    }

    getProblems() {
         this.props.getAllProblems();
         console.log('posts: ', this.props.posts[0])
    }
    render() {    
        return this.props.posts.length ? (
            <Fragment>
                <ul>
                {
                    this.props.posts.map( postData => ( 
                        postData.data.map(post => {
                            console.log('real post: ', post)
                            return (
                                <li key={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                </li>
                        )
                        })
                    ))
                }
                </ul>
            </Fragment>
        ) : <h1>Loading...</h1>
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps, { getAllProblems })(Problem);