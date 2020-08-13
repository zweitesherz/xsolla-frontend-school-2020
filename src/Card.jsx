import React from 'react';

import styles from './styles.css';
import Vector from './img/Vector.svg'



function Card({ value, src, date} ) {
    return (
            <div className={styles.topConcertsCard}>
                <div className={styles.cardPic} style={{backgroundImage: `url(${src})`}}>
                    <p className={styles.cardPicTitle}>{value}</p>
                    <div className={styles.number} >{date}</div>
                    <div className={styles.iconTop}>
                        <img className={styles.iconTopSvg} src={Vector}/>
                    </div>
                </div>
            </div>
    )
}


export default Card