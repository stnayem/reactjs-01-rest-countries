import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [contries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(resp => resp.json())
            .then(data => setCountries(data))
    }, []);

    const handleVisitedCountry = (country) => {
        visitedCountries.includes(country) ?
            setVisitedCountries(visitedCountries.filter(vCountry => vCountry != country)) :
            setVisitedCountries([...visitedCountries, country]);
    }


    return (
        <div>
            <h1>World Awesome Tour!!!</h1>
            <div>
                <h3>Total visited countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map((vCountry, idx) => <li key={idx}>{vCountry?.name?.common}</li>)
                    }
                </ul>
            </div>
            <h3>Total countries: {contries.length}</h3>
            <div className="countries-grid">
                {
                    contries.map(country =>
                        <Country key={country.cca3}
                            handleVisitedCountry={handleVisitedCountry}
                            country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;