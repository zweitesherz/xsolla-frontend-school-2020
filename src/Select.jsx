import React from 'react';

import styles from './styles.css';

function Select() {
    return (
        <div className={styles.select}>
            <div className={styles.selectCity}>
                <p className={styles.selectH + ' ' + styles.hMobile}>City:</p>
                <select className={styles.selectList}>
                    <option>All</option>
                    <option>Amsterdam</option>
                    <option>Sr.Petersburg</option>
                    <option>Berlin</option>
                    <option>Rim</option>
                </select>
            </div>

            <div className={styles.selectMoth}>
                <p className={styles.selectH}>Month:</p>
                <select className={styles.selectList}>
                    <option>All</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
            </div>
        </div>
    )
}


export default Select