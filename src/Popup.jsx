import React, {Fragment} from 'react';
import styles from './styles.css';


const Popup = ({ id, name, city,date})=> {

    return (

       <Fragment>
               <div className={styles.popup} key={id}>
                   <div>Name: {name}</div>
                   <div>Data: {date}</div>
                   <div>City: {city}</div>
               </div>
       </Fragment>

    )
}


export default Popup