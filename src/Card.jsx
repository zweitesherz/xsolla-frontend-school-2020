import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.css';
// import Vector from './img/Vector.svg';
import Krest from './img/krestik.svg';

function Card({ value, src, date,id} ) {

    

    return (
        <Fragment>
            <Link to={`/link/${id}`} key={id} className={styles.topConcertsCard}>
                <div className={styles.cardPic} style={{backgroundImage: `url(${src})`}}>
                    <p className={styles.cardPicTitle}>{value}</p>
                    <div className={styles.number} >{date}</div>
                    <div className={styles.iconTop}>
                        <img className={styles.iconTopSvg} src={Krest} alt={'img'}/>
                    </div>
                </div>
            </Link>
        </Fragment>

    )
}


export default Card