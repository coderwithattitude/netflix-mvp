/**
 * Created by CODERWITHATTITUDE on 7/10/2017.
 */

import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

class Callback extends Component {

    componentDidMount() {
        setAccessToken();
        setIdToken();
        window.location.href ="/"
    }

    render() {
        return null;
    }
}

export default Callback