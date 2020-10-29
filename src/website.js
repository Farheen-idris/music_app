import React, { Component } from 'react';

import Header from './Header';
import Footer from './footer';
import HomePage from './HomePage';
import './styling.css'
// import Example from './aaa';

export default class Audio extends Component {
    render(){
        return(
            <div classname="rhythm">
            <Header/>
            <HomePage />
            <Footer />
            
            </div>
        )
    }
}
