import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
            {isLoading ? (<h1 className="Loading">Loading...</h1>) : (
                <section>
                    {countries.map(country => {
                        const {ID, Country, CountryCode, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date} = country;

                        return (
                            <article key={ID}>
                                <h2>{Country}, {CountryCode}</h2>
                                <ul>
                                    <li>Ultimos casos confirmados: {NewConfirmed}</li>
                                    <li>Total de casos confirmados: {TotalConfirmed}</li>
                                    <li>Ultimas muertes: {NewDeaths}</li>
                                    <li>Total de casos de muerte: {TotalDeaths}</li>
                                    <li>Nuevos recuperados: {NewRecovered}</li>
                                    <li>Total de recuperados: {TotalRecovered}</li>
                                    <li>Fecha actual: {Date}</li>
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
