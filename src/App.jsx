import React, {Fragment} from 'react';
import styles from './styles.css';
import {BrowserRouter, Route} from 'react-router-dom';
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
                const people = res.data.cards;
                this.setState({people});
            })
    }

    render() {

        return (

            <BrowserRouter>
                <div className={styles.wrapperFull}>
                    {this.state.people.map(person => (
                    <Route exact path={`/link/${person.id}`}  key={person.id}>
                       <Popup people={this.state.people} id={person.id} name={person.name} city={person.city} date={person.date}/>
                    </Route>
                        ))}
                    <Concerts people={this.state.people}/>
                </div>
            </BrowserRouter>
        )
    }
}
