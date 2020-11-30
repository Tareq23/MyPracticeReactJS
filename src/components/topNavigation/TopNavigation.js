import React, { Component, Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import '../../assets/css/custom.css';
import  White from '../../assets/images/navLogo.svg';
import Blue from'../../assets/images/navLogoScroll.svg';

class TopNavigation extends Component {

    constructor(props){
        super();
        this.state = {
            navBarTitle : "navTitle",
            navBarLogo : [White],
            navBarBack : "navBackground",
            navBarItem : "navItem",
            navVariant : "dark",
            pageTitle : props.title,
        }
    }

    onScroll = () => {
        if(window.scrollY>100)
        {
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll',navBarLogo:[Blue],navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'});
        }
        else if(window.scrollY<100)
        {
            this.setState({navVariant:'dark',navBarTitle:'navTitle',navBarLogo:[White],navBarBack:'navBackground',navBarItem:'navItem'});
        }
    }

    componentDidMount()
    {
        window.addEventListener('scroll',this.onScroll);
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top"  collapseOnSelect expand="lg" >
                    <Navbar.Brand><NavLink className={this.state.navBarTitle} to="/"><img src={this.state.navBarLogo}/> MD TAREQUL ISLAM </NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/course">Cources</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/service">Services</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about">About</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/portfolio">Portfolio</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact">Contact</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;