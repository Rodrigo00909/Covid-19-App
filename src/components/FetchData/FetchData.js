import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Article from '../Article/Article';

import logo from '../../logo.svg';

import './FetchData.css';

const url = `https://api.covid19api.com/summary`;

const FetchData = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoagind] = useState(true);

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await axios.get(url);
            setCountries(response.data.Countries);
            setIsLoagind(false)
        }

        fetchCountryData()
    }, []);

    return (
        <div>
            {isLoading ? (<div className="App-logo"><img src={logo} className="Logo" alt="logo" /></div>) : (
                <section className="data grid grid-cols-1 gap-10 p-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" >
                    {countries.map(country => {
                        const {ID, Country, CountryCode, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date} = country;
                        return (
                            <Article 
                                ID={ID}
                                Country={Country}
                                CountryCode={CountryCode}
                                NewConfirmed={NewConfirmed}
                                TotalConfirmed={TotalConfirmed}
                                NewDeaths={NewDeaths}
                                TotalDeaths={TotalDeaths}
                                NewRecovered={NewRecovered}
                                TotalRecovered={TotalRecovered}
                                Date={Date}
                            />
                        )
                    })}
                </section>
            
            )}
        </div>
    )
}

export default FetchData;
