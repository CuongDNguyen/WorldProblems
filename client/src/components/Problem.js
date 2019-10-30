import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'

class Problem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container>
                <Grid direction="column" container>
                    <Grid direction="row" container>
                        <Paper component="div">
                            <Typography component="h3">
                                    {this.props.problemTitle}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

export default Problem;