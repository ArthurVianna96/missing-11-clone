import React from "react";

import './header.css';

const Header = ({ children, style }) => {
  return (
    <header style={style}>
      {children}
    </header>
  );
}

export default Header;