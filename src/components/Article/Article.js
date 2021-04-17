import React from 'react';
import moment from 'moment';

const Article = ({ID, Country, CountryCode, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date}) => {
    return (
        <div>
            <article className="Cards px-5 py-4 rounded-lg" key={ID}>
                <h2 className="Card-title text-4xl font-bold mb-5">{Country}, {CountryCode}</h2>
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
        </div>
    )
}

export default Article
