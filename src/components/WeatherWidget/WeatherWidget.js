import { useState, useEffect } from 'react';
// import styled from 'styled-components';
import axios from 'axios';

const apiKey = `b17a2dddb01d7481fea6373f92c2e546`;
const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;

axios.defaults.baseURL = baseUrl;

export default function WeatherWidget() {
  const [city, setCity] = useState('Kiev');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather(city).then(data => {
      // console.log(data);
      return setWeather(data);
    });
  }, []);

  function getWeather(city) {
    return axios.get(`?q=${city}&appid=${apiKey}`).then(res => res.data);
  }

  const handleSubmit = e => {
    e.preventDefault();
    getWeather(city).then(data => {
      console.log(data);
      return setWeather(data);
    });
    e.currentTarget.reset();
  };

  return (
    <div>
      <h2>Weahther</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            autoComplete="off"
            type="text"
            name="city"
            onChange={e => {
              setCity(e.target.value);
            }}
            placeholder="city name"
          />
        </label>
        <button type="submit">Find weather</button>
      </form>

      <div>
        Temperature in {weather ? weather.name : city}:
        {weather ? Math.round(weather.main.temp - 273.15) : 0} C
      </div>
    </div>
  );
}
