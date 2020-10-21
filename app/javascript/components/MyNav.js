import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from "prop-types";

import CarouselPage from 'components/MyVideoCarousel';
import ContactPage from 'components/ContactPage';
import HomePage from 'components/HomePage';
import ProfilePage from 'components/ProfilePage';
import AllFruits from '../packs/allFruits.js.jsx';
import Notification from 'components/MyNotification.js.jsx';
import ChartsPageUp from 'components/MyChartSelfUpdate'
import DynamicPage from 'components/DynamicPage';
import EcommercePage from 'components/TestPage';

function test() {
  ReactDOM.render(<EcommercePage />, document.getElementById('test'));
}

function home() {
  ReactDOM.render(<DynamicPage name={"home"} />, document.getElementById('test'));
}

function home2() {
  ReactDOM.render(<DynamicPage name={"home2"} />, document.getElementById('test'));
}

function contact() {
  ReactDOM.render(<ChartsPageUp />, document.getElementById('test'));
}

function carousel() {
  ReactDOM.render(<CarouselPage />, document.getElementById('test'));
}

function profile() {
  ReactDOM.render(<ProfilePage />, document.getElementById('test'));
}

function fruits() {
  ReactDOM.render(<AllFruits />, document.getElementById('test'));
  ReactDOM.render(<Notification />, document.getElementById('toast'));
}

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {

  return (
    <Router>
      <MDBNavbar color="default-color" fixed="top" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">IOTeasy</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/" onClick={home} >Home1</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/" onClick={home2} >Home2</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/" onClick={test} >Test</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/" onClick={carousel}>Shop</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/" onClick={profile}>Community</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/" onClick={fruits}>Links</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/" onClick={contact}>Kontakt</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">User</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem onClick={home} href=""> Daten</MDBDropdownItem>
                  <MDBDropdownItem onClick={home} href="">Geräte</MDBDropdownItem>
                  <MDBDropdownItem onClick={contact} href="">Dashboard</MDBDropdownItem>
                  <MDBDropdownItem onClick={home} href="">Profil</MDBDropdownItem>
                  <MDBDropdownItem onClick={home} href="">Admin</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#Daten">Daten</MDBDropdownItem>
                  <MDBDropdownItem href="#Geraete">Geräte</MDBDropdownItem>
                  <MDBDropdownItem href="#Dashboard">Dashboard</MDBDropdownItem>
                  <MDBDropdownItem href="#Profil">Profil</MDBDropdownItem>
                  <MDBDropdownItem href="#Admin">Admin</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;