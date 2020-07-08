/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 yasmine (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by yasmine

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import History from "views/History.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";

import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Analysis",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Compare",
    icon: "pe-7s-display1",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/history",
    name: "History",
    icon: "pe-7s-news-paper",
    component: History,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  /*
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  }
*/
];

export default dashboardRoutes;
