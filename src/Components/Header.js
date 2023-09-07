import React, { Component } from "react";

class Header extends Component {

    state = {
        active: 'active',
        /*active: false*/ 
        keywords: ''
    }


    inputChange = (event) => {
        {/*let value = event.target.value === '' ? false : true;*/}
        this.setState({
            /*active: true*/
            active: 'active',
            keywords: event.target.value
        })
    }

    changeColor = () => {
        this.setState({
            active: this.state.active === 'active' ? 'not-active' : 'active'
            /*            active: this.state.active ? 'false' : 'true'*/
        })
    }


    render() {
        return (
            <>
                {/*<header style ={{background: `${this.state.active ? 'red' : 'blue'}`}}>*/}
                    <header className={this.state.active} style ={{background: `${this.state.active === 'active' ? 'red' : 'blue'}`}}>
                    {/*<header className={this.state.active ? 'active' : 'non-active'}>*/}
                    <div className="logo">Code news</div>
                    <input onChange={(e) => this.inputChange(e)} />
                    <button onClick={()=> this.changeColor()}>Change it</button>
                </header>
            </>
        )
    }

}

export default Header;