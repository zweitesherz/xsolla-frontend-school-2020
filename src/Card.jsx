import React from 'react';

import styles from './styles.css';

function Card() {
    return (
        <div className={styles.topConcertsCard}>
            <div className={styles.cardPic}>
                <p className={styles.cardPicTitle}/>
                <div className={styles.number}/>
                <div className={styles.iconTop}>
                    <img className={styles.iconTopSvg}/>
                </div>
            </div>
        </div>

    )
}


export default Card