import styled from 'styled-components';
function WeatherOverview({ temp, feels_like, weather }) {
  console.log(temp);
  return (
    <>
      <Location>Brooklyn, NY</Location>
      <Temperature>
        {Math.round(temp)}
        {'\u00b0'}
      </Temperature>
      <Description>
        <Skies></Skies>
        <FeelsLikeTemp>{feels_like}</FeelsLikeTemp>
      </Description>
      <Icon></Icon>
    </>
  );
}

export default WeatherOverview;

const Location = styled.h2``;
const Temperature = styled.h1``;
const Description = styled.div``;
const Skies = styled.p``;
const FeelsLikeTemp = styled.h4``;
const Icon = styled.h1``;
