import React from "react";
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import './Styles/Styles.css'
const App = () => {
    return (
        <div className="hey">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

















































