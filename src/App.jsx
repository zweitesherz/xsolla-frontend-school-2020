import React, {Fragment} from 'react';
import styles from './styles.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Concerts from "./Concerts";
import axios from 'axios';
import Popup from "./Popup";
import Plus from "./Plus";
export default class PersonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { people: []};
    }

    addCard(a) {
        this.setState({
            people: a
        });
    }

    deleteCard(e) {
        const axios = require('axios');
        const id = Number(e.currentTarget.dataset.id)
        const newAr = this.state.people.filter(function (card) {
            return card.id !== id;
        })
        this.setState({
            people: newAr
        });

        axios.delete('http://localhost:3000/cards/'+id)
            .then(resp => {
                console.log(resp.data)
            }).catch(error => {
            console.log(error);
        });

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
                    <Concerts people={this.state.people} addCard={this.addCard.bind(this)} deleteCard={this.deleteCard.bind(this)}/>
                </div>
            </BrowserRouter>
        )
    }
}
