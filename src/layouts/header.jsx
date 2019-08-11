import React, { Component } from 'react';
import logo from '../resource/image/icons/download.png';
import { Navbar, Button } from 'react-bootstrap';

class Header extends Component {
    render() {

        return (
            <div className="header">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <img class="resize" src={logo} alt='logo' />
                    <div className="ml-auto">
                        <span>Hii, Shatru Prakash Patel</span>
                        <Button variant="danger" className="ml-auto">Login</Button>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;