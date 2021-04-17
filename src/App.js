import React from 'react';
import FetchData from '../src/components/FetchData/FetchData';
import Header from '../src/components/Header/Header';
import Theme from './components/ButonTheme/ButonTheme';



function App() {

  return (
    <div>
      <Header />
      <Theme />
      <FetchData />
    </div>
  );
}

export default App;
