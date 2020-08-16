import React, {Fragment} from 'react';
import styles from './styles.css';


const Popup = ({person})=> {

    return (
       <Fragment>
               <div className={styles.popup} key={person.id}>
                   <div>Name: {person.name}</div>
                   <div>Data: {person.date}</div>
                   <div>City:{person.city}</div>
               </div>
       </Fragment>

    )
}


export default Popup