import React, { Component } from 'react'
import { bubble as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

class Menubar extends Component {
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

      toggleMenu () {
        this.setState({menuOpen: !this.state.menuOpen})
      }

    render() {
        return(
            <div id="outer-container">
            <Menu
            pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            >
                <Link onClick={() => this.closeMenu()} to="/">Home</Link>
                <Link onClick={() => this.closeMenu()} to="/resume">Resume</Link>
                <Link onClick={() => this.closeMenu()} to="/fendprojects">FEND Projects</Link>
            </Menu>
            </div>
        );
    }
}

export default Menubar