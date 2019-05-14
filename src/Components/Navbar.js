
import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Navbar extends React.Component {

  render() {
    return (
        <div className="navBar">
          <ol className="jack" id="nav"><a href="#">Jack</a></ol>
          <ol className="software" id="nav"><a href="#">Software</a></ol>
          <ol className="about" id="nav"><a href="#">About</a></ol>
          <ol className ="contact" id="nav"><a href="#">Contact</a></ol>
      </div>
    );
  }
}
