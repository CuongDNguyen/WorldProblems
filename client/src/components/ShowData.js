import List from '@material-ui/core/List';
import { Component } from 'react';

export default class ShowData extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <List primary={this.props.data}/>
        )
    }
}