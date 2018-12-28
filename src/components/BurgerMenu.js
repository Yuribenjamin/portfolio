import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

class BurgerMenu extends Component {
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
      }
        
      handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }

      closeMenu () {
        this.setState({menuOpen: false})
      }
    render(){
        return(
            <Menu 
            pageWrapId={ "page-wrap" } 
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            >
                <Link onClick={() => this.closeMenu()} id="home" className="menu-item" to="/">Home</Link>
                <Link onClick={() => this.closeMenu()} id="work" className="menu-item" to="/work">Projects : 2018</Link>
            </Menu>
        );
    }
}

export default BurgerMenu