import React, {Fragment} from 'react';
import faker from 'Faker';


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
        // axios.get('/cards.json')
        //     .then(res => {
        //         const people= res.data;
        //         this.setState({ people});
        //     })


        const generate = Array(12).fill().map(( a,i) => ({

            "id": i,
            "name": faker.Lorem.words(1).toString(),
            "date": "11",
            "city": faker.Address.city(),
            "genre": faker.Lorem.words(1).toString(),
            "image": `${faker.Image.abstractImage()}?random=${Date.now()}`
        }))
        //console.log(generate)
       //const people = JSON.stringify(generate,null,' ')

        const people = generate;

        this.setState({ people});
        //this.state.people = generate;

    }

    render() {
        // const concert =   this.state.people.map(person =>
        //     person
        // )
        console.log( this.state.people)
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
