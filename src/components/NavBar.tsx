import React from 'react';

function NavBar(props: {}) {
  return (
    <div>
    <header className="header">
      <div className="container">
        <div className="header-actions">
          <input className={'search-input'} placeholder={'Search here...'}/>
        </div>
        <nav className="navbar">
          <div className="overlay"/>
          <ul className="navbar-list">
            <li>
              <a href="/" className="navbar-link">Now Playing</a>
            </li>
            <li>
              <a href="#" className="navbar-link">Top Rated</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  );
}

export default NavBar;
