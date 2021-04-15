import React, {useState, useEffect} from 'react';
import axios from 'axios';
const url = `https://api.covid19api.com/summary`;

const FetchData = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await axios.get(url);
            setCountries(response.data.Countries);
            console.log(response.data.Countries);
        }

        fetchCountryData()
    }, []);

    return (
        <div>
            <section>
                {countries.map(country => {
                    const {ID, Country, CountryCode, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date} = country

                    return (
                        <article key={ID}>
                            <h2>{Country}, {CountryCode}</h2>
                            <ul>
                                <li>{NewConfirmed}</li>
                                <li>{TotalConfirmed}</li>
                                <li>{NewDeaths}</li>
                                <li>{TotalDeaths}</li>
                                <li>{NewRecovered}</li>
                                <li>{TotalRecovered}</li>
                                <li>{Date}</li>
                            </ul>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default FetchData;
