import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';

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
                            <article className="Cards px-5 py-4 rounded-lg" key={ID}>
                                <h2 className="Card-title text-4xl font-bold">{Country}, {CountryCode}</h2>
                                <ul className="Card">
                                    <li className="my-3 flex items-center justify-between"><span className="font-bold">Ultimos casos confirmados:</span> {NewConfirmed}</li>
                                    <li className="my-3 flex items-center justify-between"><span className="font-bold">Total de casos confirmados:</span> {TotalConfirmed}</li>
                                    <li className="my-3 flex items-center justify-between"><span className="font-bold">Ultimas muertes:</span> {NewDeaths}</li>
                                    <li className="my-3 flex items-center justify-between"><span className="font-bold">Total de casos de muerte:</span> {TotalDeaths}</li>
                                    <li className="my-3 flex items-center justify-between"><span className="font-bold">Nuevos recuperados:</span> {NewRecovered}</li>
                                    <li className="my-3 flex items-center justify-between"><span className="font-bold">Total de recuperados:</span> {TotalRecovered}</li>
                                    <li className="my-3 flex items-center justify-between"><span className="font-bold">Fecha actual:</span> {moment(`${Date}`).format("MM/DD/YYYY")}</li>
                                </ul>
                            </article>
                        )
                    })}
                </section>
            
            )}
        </div>
    )
}

export default FetchData;
