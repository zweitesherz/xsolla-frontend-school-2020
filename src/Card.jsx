import React, {Fragment} from 'react';

import styles from './styles.css';
import Vector from './img/Vector.svg';
import {NavLink} from "react-router-dom";


function Card({ people, value, src, date} ) {

    const concert = people.map(person =>
        person
    )
    return (
        <Fragment>
            <NavLink to={`/link/${concert.id}`} key={concert.id} className={styles.topConcertsCard}>
                <a className={styles.cardPic} style={{backgroundImage: `url(${src})`}}>
                    <p className={styles.cardPicTitle}>{value}</p>
                    <div className={styles.number} >{date}</div>
                    <div className={styles.iconTop}>
                        <img className={styles.iconTopSvg} src={Vector}/>
                    </div>
                </a>
            </NavLink>
        </Fragment>

    )
}


export default Card