import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherOverview from './WeatherOverview';
import styled from 'styled-components';

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
  if (loading == true) {
    return <h1>The data is loading</h1>;
  } else
    return (
      <Wrapper>
        <WeatherOverview {...posts.current} />
        <WeatherOverview {...posts.current} />
        <WeatherOverview {...posts.current} />
      </Wrapper>
    );
}

export default Home;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(94, 187, 226);
  padding: 50px;
  height: 100%;
`;
