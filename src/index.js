import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'

import Header from './components/header.js';
import NewsList from './components/news_list';
import Footer from './components/footer';
import JSON from './db.json';


class App extends Component {

    state = {
        active: false,
        news:JSON,
        footerText:'I am a happy footer'
    }

    getKeywords =(event) =>{
        /*console.log('Hey !!')*/
        console.log(event.target.value)
    }


    render(){
        return(
            <div className="hey">

                <Header
                active ={this.active} 
                keyword= {this.getKeywords}/>
                <NewsList
                    news={this.state.news}
                >
                <br/>
                <h1> I am a child  </h1> 
                </NewsList>
                <Footer
                    footerText={this.state.footerText}
                />
            </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)