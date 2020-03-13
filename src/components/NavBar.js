import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import { NavLink as Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Navbar color="primary" dark expand="lg">
        <NavbarBrand>
          {/* <link
            className="nav-link text-White"
            exact={true}
            to="/"
            activeClassName="active"
          > */}
          สั่งอาหารออนไลน์
          {/* </link> */}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" exact to="/" activeClassName="active">
                หน้าแรก
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/about" activeClassName="active">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                to="/register"
                activeClassName="active"
              >
                Register
              </Link>
            </NavItem>
            {/* <NavItem>
              <Link
                className="nav-link"
                to="/shop"
                activeClassName="active"
              >
                Shop
              </Link>
            </NavItem> */}

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    );
  }
}
