import React from 'react';

import styles from './styles.css';
import HeaderConcert from "./HeaderConcert";
import Select from "./Select";
import TopCards from "./TopCards";
import Card from "./TopCards";

function Concerts() {
    return (
        <div className={styles.concerts}>
            <div className={styles.concertsWrapper}>
                <HeaderConcert/>
                <Select/>
                <TopCards>
                    <Card/>
                </TopCards>
            </div>
        </div>
    )
}


export default Concerts