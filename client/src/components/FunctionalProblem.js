import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1
    }
}))

function FunctionalProblem() {
    const style = useStyles();

    return (
        <div className={style.root}>
            <Grid container direction="row">
                <Grid container xs={4}>
                </Grid>
                <Grid container xs={4}>
                </Grid>
                <Grid container xs={4}>
                </Grid>
            </Grid>
        </div>
    );
}

export default FunctionalProblem;