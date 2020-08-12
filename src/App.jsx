import React, {Fragment} from 'react';

import styles from './styles.css';

import Concerts from "./Concerts";

import axios from 'axios';



// export const App = () => {
//
//     const [countries, setCountries] = useState([]);
//     const [load, setLoad] = useState(false);
//
//     useEffect(() => {
//         axios.get('/cards.json')
//             .then(res => {
//                 setCountries(res.data);
//                 setLoad(true);
//             })
//
//     }, []);
//
//     if (load) {
//         return (
//             <div className={styles.wrapperFull}>
//                 <Concerts/>
//             </div>
//         )
//
//     } else {
//         return (
//             <div>
//                 Loading...
//             </div>
//         );
//     }
// };

export default class PersonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { people: []};
    }

    componentDidMount() {
        axios.get('/cards.json')
            .then(res => {
                const people= res.data;
                this.setState({ people});
            })
    }

    render() {
        return (
            <div className={styles.wrapperFull}>
              <Concerts people={this.state.people}/>
            </div>
        )
    }
}


// export default App;