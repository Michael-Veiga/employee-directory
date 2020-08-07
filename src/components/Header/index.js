import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header mt-3">
      <h1>Employee Directory</h1>
      <p>
        Click on the name header to filter by alphabetical order, or use the
        search bar to find the employee by name.
      </p>
    </div>
  );
}

export default Header;
