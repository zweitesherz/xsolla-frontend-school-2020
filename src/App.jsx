import React, {Fragment} from 'react';

import styles from './styles.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Concerts from "./Concerts";

import axios from 'axios';
import Popup from "./Popup";

export default class PersonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { people: []};
    }



    componentDidMount() {
        axios.get('/cards.json')
            .then(res => {
                const people= res.data;
                this.setState({ people});
            })
    }

    render() {
        const concert =   this.state.people.map(person =>
            person
        )
        return (

            <BrowserRouter>
                <div className={styles.wrapperFull}>

                    <Route path={`/link/${concert.id}`}>
                       <Popup people={this.state.people} person={concert}/>
                    </Route>
                    <Concerts people={this.state.people} person={concert}/>
                </div>
            </BrowserRouter>

        )
    }
}
