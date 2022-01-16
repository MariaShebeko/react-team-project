import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsCloudSunFill } from 'react-icons/bs';
import axios from 'axios';
import Section from '../base/Section';
import Container from '../base/Container';

const apiKey = `b17a2dddb01d7481fea6373f92c2e546`;
const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;

axios.defaults.baseURL = baseUrl;

const WeatherForm = styled.form`
  display: flex;
`;
const Widget = styled.div`
  display: flex;
  height: 200px;
  width: 450px;
  flex-wrap: wrap;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3),
    0 17px 17px 0 rgba(0, 0, 0, 0.15);
`;
const WeatherIcon = styled.div`
  flex: 1 100%;
  height: 60%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: #fafafa;
  font-family: weathericons;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 100px;
`;
const WeatherInfo = styled.div`
  flex: 0 0 70%;
  height: 40%;
  background: #080705;
  border-bottom-left-radius: 20px;
  display: flex;
  align-items: center;
  color: white;
`;
const WeatherTemperature = styled.div`
  flex: 0 0 40%;
  width: 100%;
  font-size: 65px;
  display: flex;
  justify-content: space-around;
`;
const WeatherDescription = styled.div`
  flex: 0 60%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
const WeatherCondition = styled.div`
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 100;
`;
const WeatherPlace = styled.div`
  font-size: 15px;
`;
const WeatherDate = styled.div`
  flex: 0 0 30%;
  height: 40%;
  background: #70c1b3;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 30px;
  font-weight: 800;
`;

export default function WeatherWidget() {
  const [city, setCity] = useState('Moscow');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather(city).then(data => {
      console.log(data);
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
    <>
      <Section>
        <Container>
          <div>
            <h2>Find weather in your city</h2>
            <WeatherForm onSubmit={handleSubmit}>
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
              <button type="submit">
                <BiSearchAlt2 />
              </button>
            </WeatherForm>

            <Widget>
              <WeatherIcon>
                {/* {weather ? weather.weather.find(w => w).icon : 'Weather Icon'} */}
                <BsCloudSunFill />
              </WeatherIcon>
              <WeatherInfo>
                <WeatherTemperature>
                  {weather ? Math.round(weather.main.temp - 273.15) : 0}&deg;C
                </WeatherTemperature>
                <WeatherDescription>
                  <WeatherCondition>
                    {weather ? weather.weather.find(w => w).main : 'Cloudy'}
                  </WeatherCondition>
                  <WeatherPlace>{weather ? weather.name : city}</WeatherPlace>
                </WeatherDescription>
              </WeatherInfo>
              <WeatherDate>{new Date().toLocaleDateString()}</WeatherDate>
            </Widget>
          </div>
        </Container>
      </Section>
    </>
  );
}
