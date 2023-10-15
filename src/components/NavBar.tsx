import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList} from '@fortawesome/free-solid-svg-icons'

function NavBar(props: {}) {
  const [isShowMenu, setIsShowMenu] = useState(false)
  function onShowMenu() {
    setIsShowMenu(!isShowMenu)
  }
  return (
    <div>
      <header className="header">
        <div className="container">
            <div className="header-actions">
              <input className={'search-input'} placeholder={'Search here...'}/>
            </div>
            <div className={`navbar ${isShowMenu?'responsive': ''}`}>
              <NavLink onClick={onShowMenu} to="/" className="navbar-link" >Now Playing</NavLink>
              <NavLink onClick={onShowMenu} to="/top-rated" className="navbar-link">Top Rated</NavLink>
              <a className="icon" onClick={onShowMenu}>
                <FontAwesomeIcon icon={faList}/>
              </a>
            </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
