import React, {Fragment} from 'react';
import styles from './styles.css';


const Popup = ({people})=> {

    return (
       <Fragment>
               <div className={styles.popup} key={people.map(person => person).id}>
                   <div>Name: {people.map(person => person).name}</div>
                   <div>Data: {people.map(person => person).date}</div>
                   <div>City:{people.map(person => person).city}</div>
               </div>
       </Fragment>

    )
}


export default Popup