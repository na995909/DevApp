/*
* Utility page used by site admin.
* This page used to load new progects into mongoDB
*/
import React, { Component } from "react";
import API from "../utils/api";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';



class UpdateProjects extends Component {

  constructor(props) {
    super(props);
    this.state = { saved: 0, updated:false };

  }

  componentDidMount() {
    this.update()
  }

  update = () => {
    return API.update().then((res) => {
        this.setState({ saved: res.data.count, updated:true });
      });
  }

  

  render() {
    const isUpdated = this.state.updated;
    let label;

    if (isUpdated) {
      label = <div>Loaded {this.state.saved} projects</div>;
    } else {
      label = "Updaiting..."
    }
    return (
      <div className="main-container">
        <Navbar color="light" light expand="md">
          <NavbarBrand>DevUp</NavbarBrand>
          <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/ProBono">ProBono Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Projects">Open Projects</NavLink>
              </NavItem>
               <NavItem>
                <NavLink href="/About/">About Us</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        {label}
          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>
      </div>

    );
  }

}

export default UpdateProjects;
