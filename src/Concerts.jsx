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
                <div className={styles.topCards}>
                    { people.map(person => <Card value={person.name} key={person.id} src={person.image} date={ person.date.substring(0, 2) } />)}
                </div>
            </div>
        </div>
    )
}


export default Concerts