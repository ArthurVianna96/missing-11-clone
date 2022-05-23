import React from "react";

import './header.css';

const HeaderSlot = ({ children }) => {
  return (
    <header className="header" >
      {children}
    </header>
  );
}

export default HeaderSlot;