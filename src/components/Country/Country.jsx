import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, capital, area, altSpellings } = country
    // console.log(country);
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h4>Name: {name?.common}</h4>
            <img src={flags?.png}></img>
            <p>
                <small>Capital: {capital}</small>&nbsp; &nbsp;
                <small>Area: {area}</small><br></br>
                <small>Spellings: {`${altSpellings[0]} ${altSpellings[1] || ''}`}</small><br></br>
                <button onClick={() => {
                    handleVisited();
                    handleVisitedCountry(country);
                }}>{visited ? 'Visited' : 'Going'}</button>
            </p>
        </div>
    );
};

export default Country;