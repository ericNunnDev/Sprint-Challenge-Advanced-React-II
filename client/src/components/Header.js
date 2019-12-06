import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
    const [theme, setTheme] = useDarkMode();
    return (
        <div style={{background: theme === 'dark' ? '#000' : '#fff', color: theme === 'dark' ? '#fff' : '#000'}}>
          <button type='button' onClick={setTheme}>Dark Mode</button>
        </div>
    )
}

export default Header;