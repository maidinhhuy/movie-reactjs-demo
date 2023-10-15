import React from 'react';
import NavBar from './NavBar'
import { Outlet } from "react-router-dom";


function Layout(props: {}) {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
    </div>
  );
}

export default Layout;
