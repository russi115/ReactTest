import React, { Component } from 'react';
import App from '../App';

class Navigation extends Component {
    render(){
        return(
            <nav className='mavbar navbar-dark bg-dark'>
                <a href="" className="text-white">
                    { this.props.titulo}
                </a>
            </nav>
        );
    }
}

export default App;