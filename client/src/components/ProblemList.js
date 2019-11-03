import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { posts: state.posts };
};

const ConnectedProblemList = ({ posts }) => {
    console.log("connectedProblemList: posts: ", posts)
    return (
    <ul>
        {
            posts.map(postData => {
                postData.data.map(post => (
                    <li key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.description}</p>
                    </li>
                ))
            })
        }
    </ul>
)}

const ProblemList = connect(mapStateToProps) (ConnectedProblemList);

export default ProblemList;