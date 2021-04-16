import React, {useState, useEffect} from 'react';
import FetchData from '../src/components/FetchData/FetchData';
import Header from '../src/components/Header/Header';

function App() {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
  },[theme]);

  return (
    <div>
      <Header />
      <button onClick={toggleTheme}>THEME</button>
      <FetchData />
    </div>
  );
}

export default App;
