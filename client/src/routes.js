import React from 'react';




const finderDetailsView = React.lazy(() => import('./views/general/finderDetailsView'));

const finderView = React.lazy(() => import('./views/general/finderView'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const About = React.lazy(() => import('./views/other/about'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard  },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/tools/finder/:name', name: 'Details', component: finderDetailsView },
  { path: '/tools/finder', name: 'ID Finder', component: finderView },

  { path: '/about', name: 'About', component: About },

  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
