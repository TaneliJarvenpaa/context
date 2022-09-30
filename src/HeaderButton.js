import React from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const tyyli=React.useContext(ThemeContext)
  return (
    <div>
      <button style={tyyli}>Press me</button>
    </div>
  );
}

export default HeaderButton;
