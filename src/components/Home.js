import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherOverview from './WeatherOverview';
import styled from 'styled-components';
import DailyForecast from './DailyForecast';
import HourlyForecast from './HourlyForecast';
import Loading from './Loading';

function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(async function (position) {
        const lat = position.coords.latitude.toString();
        const lng = position.coords.longitude.toString();
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=alerts,minutely&units=imperial&appid=139edaafd95b1d819995dd2efdbb7198`
        );
        setPosts(response.data);
        setLoading(false);
        console.log(response.data);
      });
    };
    loadPost();
  }, []);
  if (loading) {
    // console.log('loading component');
    return <Loading />;
  } else
    return (
      <Wrapper>
        <WeatherOverview {...posts.current} />
        <HourlyForecast {...posts.hourly} />
        <DailyForecast {...posts.daily} />
      </Wrapper>
    );
}

export default Home;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: #14397d;
  min-height: 100vh;

  & > div {
    width: 100%;
    max-width: 400px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 10px;
    margin: 20px;
  }
`;
