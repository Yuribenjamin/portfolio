import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

class BurgerMenu extends Component {
    render(){
        return(
            <Menu pageWrapId={ "page-wrap" }>
                <Link id="home" className="menu-item" to="/portfolio">Home</Link>
                <Link id="work" className="menu-item" to="/work">Projects : 2018</Link>
            </Menu>
        );
    }
}

export default BurgerMenu