import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './styles.css';
import HeaderConcert from "./HeaderConcert";
import Select from "./Select";
import Card from "./Card";

const Concerts = ({people}) => {

    return (
        <Fragment>
            <div className={styles.concerts}>
                <div className={styles.concertsWrapper}>
                    <HeaderConcert/>
                    <Select/>
                    <div className={styles.topCards}>
                        { people.map(person =>
                            <Card people={people}
                                  value={person.name}
                                  src={person.image}
                                  date={ person.date.substring(0, 2)}
                                  id={person.id}/>
                            )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Concerts