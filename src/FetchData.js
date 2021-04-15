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
            {countries.length} countries
        </div>
    )
}

export default FetchData;
