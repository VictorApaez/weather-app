import styled from 'styled-components';
function WeatherOverview({ temp, feels_like, weather }) {
  let weatherIcon =
    'http://openweathermap.org/img/w/' + weather[0].icon + '.png';
  return (
    <Wrapper>
      <Location>Brooklyn, NY</Location>
      <Container>
        <Description>
          <Temperature>
            {Math.round(temp)}
            {'\u00b0'}
          </Temperature>
          <Skies>{weather[0].description}</Skies>
          <FeelsLikeTemp>
            Feels like {Math.round(feels_like)}
            {'\u00b0 '}
          </FeelsLikeTemp>
        </Description>
        <Icon src={weatherIcon}></Icon>
      </Container>
    </Wrapper>
  );
}

//weather[0].icon >>> "01n"

export default WeatherOverview;

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Location = styled.h2``;
const Temperature = styled.h1`
  font-size: 3.5rem;
`;
const Description = styled.div``;
const Skies = styled.p``;
const FeelsLikeTemp = styled.h4``;
const Icon = styled.img`
  height: 80px;
`;
