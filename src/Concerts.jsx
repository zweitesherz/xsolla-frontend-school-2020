import React, {Fragment} from 'react';
import Plus from "./Plus";
import styles from './styles.css';
import HeaderConcert from "./HeaderConcert";
import Select from "./Select";
import Card from "./Card";

const Concerts = ({people, addCard}) => {

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
                                  date={ person.date}
                                  id={person.id}/>
                            )}
                    </div>
                </div>
                <Plus cards={people} addCard={addCard}/>
            </div>
        </Fragment>
    )
}


export default Concerts