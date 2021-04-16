import React from 'react';
import logoCorona from '../../images/Coronavirus app.svg';

import './Header.css';

const Header = () => {
    return (
        <div className="text-center pt-10 px-2">
            <div className="Header-title"><img src={logoCorona} className="Corona-logo" alt="Coronavirus App"/></div>
            <h2 className="Header-sub-title text-2xl font-bold">Api consumida: Covid 19 Api</h2>
            <p className="Header-dev text-1xl font-bold mb-5">Desarrollador: Dario Rodrigo Torres</p>
        </div>
    )
}

export default Header;
