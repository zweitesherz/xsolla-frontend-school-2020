import React, {useEffect, useState} from 'react';

import styles from './styles.css';

import Concerts from "./Concerts";

import axios from 'axios';

export const App = () => {

    const [countries, setCountries] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('/cards.json')
            .then(res => {
                setCountries(res.data);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);


    if (load) {
        return (<div className={styles.wrapperFull}>
            {error ? <li>{error.message}</li>  :  <Concerts/>}
        </div>);
    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
};


export default App;