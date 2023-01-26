import React from 'react';
import { useParams } from 'react-router-dom';
import { GithubUser } from './githubuser';
function ShowGithubUser({username}) {
    const { username } = useParams();
    return (
        <GithubUser username={username} />
    );
}