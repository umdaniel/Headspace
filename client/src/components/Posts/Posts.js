import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    
    console.log(posts);
    return(
        !posts.length ? <CircularProgress /> : (
            <Grid>
                
            </Grid>
        )
    );
}

export default Posts;