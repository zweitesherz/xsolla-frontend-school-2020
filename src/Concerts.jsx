import React from 'react';

import styles from './styles.css';
import HeaderConcert from "./HeaderConcert";
import Select from "./Select";

import Card from "./Card";

function Concerts({people}) {
    return (
        <div className={styles.concerts}>
            <div className={styles.concertsWrapper}>
                <HeaderConcert/>
                <Select/>
                { people.map(person => <Card value={person.name} key={person.id} src={person.image}/>)}
            </div>
        </div>
    )
}


export default Concerts