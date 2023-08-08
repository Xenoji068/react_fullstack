import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Styles.css'

import Header from './Components/Header';
import NewsList from './Components/NewsList';
import JSON from './db.json';


class App extends Component {

    state = {
        news: JSON
    }


    render() {
        return (
            <div className="hey">
                <Header />
                <NewsList
                    news={this.state.news}
                />
            </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)