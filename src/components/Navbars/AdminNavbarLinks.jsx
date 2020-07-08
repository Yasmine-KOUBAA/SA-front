/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Yasmine (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Yasmine

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import UserProfile from "views/UserProfile.jsx";
import avatar from "assets/img/faces/face-1.jpg";
import { Redirect } from "react-router";
const dashboardRoutes = [
  {
    path: "/user",
    name: "Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  }
];
class AdminNavbarLinks extends Component {
  
  render() {
    const handleProfile = (event) => {
      window.location = 'user';
    };
    const handleChangePass = (event) => {
      alert("change password here " );
      
    };
    
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
      <Nav pullRight>
        <NavDropdown
          eventKey={2}
          title={
            <div className="pull-left">                
              <img 
                src={avatar} 
                alt="user"
                width="50" height="50"
              />                 
            </div>
           }           
        >
          <MenuItem eventKey={2.1} onClick={handleProfile}>
            <i className="pe-7s-config" ></i> 
            &nbsp; &nbsp;Profile 
          </MenuItem>
          <MenuItem eventKey={2.2} onClick={handleChangePass}> 
            <i className="pe-7s-unlock"></i> &nbsp; Change Password
          </MenuItem>
          <MenuItem divider />
          <MenuItem ><i className="fa fa-sign-out fa-fw">
            </i> <a href="http://localhost:3002/"> &nbsp; Log Out</a>
          </MenuItem>
        </NavDropdown>
          
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
