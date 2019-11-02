import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { posts: state.posts };
};

const ConnectedProblemList = ({ posts }) => (
    <ul>
        {posts.map(post => (
            <li key={post.id}>
                <h4>Title: {post.title}</h4>
                <p>Description: {post.description}</p>
            </li>
            
        ))}
    </ul>
)

const ProblemList = connect(mapStateToProps) (ConnectedProblemList);

export default ProblemList;