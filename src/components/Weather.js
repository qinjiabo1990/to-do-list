import React, { useState, useEffect } from "react";
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import classes from './Weather.module.css';

const Weather = () => {
    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState('tamilnadu');
    const [state, setState] = useState('tamilnadu');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('')

    const API = 'fc7bad7f2b3d44a5fcfcb097beea3a05'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`;

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setApiData(data));
    }, [apiUrl]);

    useEffect(() => {
        getLocation();
    })

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
    }

    const inputHandler = (event) => {
        setGetState(event.target.value);
    };

    const submitHandler = () => {
        setState(getState);
    };

    const kelvinToFarenheit = (k) => {
        return (k - 273.15).toFixed(2);
    };

    return (
        <div className='app'>
            <div className='container'>
                <div className={classes.location}>
                    {apiData.main ? (
                        <div className="card-body text-center">
                            <img
                                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                                alt="weather status icon"
                                className="weather-icon"
                            />

                            <p className="h2">
                                {kelvinToFarenheit(apiData.main.temp)}&deg; C
            </p>

                            <p className="h5">
                                <i className="fas fa-map-marker-alt"></i>{' '}
                                <strong>{apiData.name}</strong>
                            </p>

                            {/* <div className="row mt-4">
                                <div className="col-md-6">
                                    <p>
                                        <i className="fas fa-temperature-low "></i>{' '}
                                        <strong>
                                            {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                  </strong>
                                    </p>
                                    <p>
                                        <i classNameName="fas fa-temperature-high"></i>{' '}
                                        <strong>
                                            {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                  </strong>
                                    </p>
                                </div>
                                <div classNameName="col-md-6">
                                    <p>
                                        {' '}
                                        <strong>{apiData.weather[0].main}</strong>
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    ) : (
                        <h1>Loading</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Weather