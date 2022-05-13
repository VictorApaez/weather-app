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
  padding: 40px 0;
  background-color: #d7eaf3;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Location = styled.h2``;
const Temperature = styled.h1`
  margin-right: 30px;
  font-size: 6rem;
`;
const Description = styled.div``;
const Skies = styled.p``;
const FeelsLikeTemp = styled.h4``;
const Icon = styled.img`
  height: 80px;
`;
