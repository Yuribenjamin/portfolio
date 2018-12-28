import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'

class BurgerMenu extends Component {
    render(){
        return(
            <Menu pageWrapId={ "page-wrap" }>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="work" className="menu-item" href="/work">Projects : 2018</a>
            </Menu>
        );
    }
}

export default BurgerMenu