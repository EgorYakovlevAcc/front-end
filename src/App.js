import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar />
            <MainContent/>
            <Footer/>
        </div>

    );
}

export default App;
