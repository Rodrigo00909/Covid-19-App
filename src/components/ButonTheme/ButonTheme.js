import React, {useState, useEffect} from 'react';
import Switch from '@material-ui/core/Switch';

import './ButonTheme.css';


const getStorageTheme = () => {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

const Theme = () => {
    // Theme
    const [theme, setTheme] = useState(getStorageTheme());

    const toggleTheme = () => {
        if(theme === 'light-theme'){
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    }

    useEffect(() => {
        document.documentElement.className = theme
        localStorage.setItem('theme', theme)
    },[theme]);

    // Switch Button
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.checked });
    };

    return (
        <div className="Theme">
        <Switch
            color="success"
            onClick={toggleTheme}
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <p className="Theme-text font-bold">Cambia el tema!</p>
        </div>
    )
}

export default Theme
