import React from 'react';

import styles from './styles.css';


function Card({ value, key, src} ) {
    return (
        <div className={styles.topConcertsCard}>
            <div className={styles.cardPic} key={key} style={{backgroundImage: `url(${src})`}}>
                <p className={styles.cardPicTitle} key={key}>{value}</p>
                <div className={styles.number}/>
                <div className={styles.iconTop}>
                    <img className={styles.iconTopSvg}/>
                </div>
            </div>
        </div>

    )
}


export default Card