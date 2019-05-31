
import React from 'react';
//import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
//import {BrowserRouter, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {

  render() {
    return (
        <div className="navBar">
          <ol className="jack" id="nav"><Link to="/">Jack</Link></ol>
          <ol className="software" id="nav"><Link to="/code">Software</Link></ol>
          <ol className="blogs" id="nav"><Link to="/blogs">Blogs</Link></ol>
          <ol className="myLife"id="nav"><Link to="/myLife">MyLife</Link></ol>
          <ol className ="contact"><Link to="/contact">Contact</Link></ol>
        </div>
    );
  }
}