import React from 'react';
import styled from 'styled-components';

function HourlyForecast(dataSet) {
  const data = Object.values(dataSet);
  const d = new Date();
  const h = d.getHours();

  console.log(data);
  return (
    <>
      <Wrapper>
        {data.map((item, i) => {
          const hour = h % 12;
          const pmam = (h + i) % 24 >= 12 ? 'pm' : 'am';

          if (i < 24) {
            return (
              <Container>
                <h1>
                  {(hour + i) % 12 == 0 ? 12 : (hour + i) % 12}
                  {pmam}
                </h1>
                <img
                  src={
                    'http://openweathermap.org/img/w/' +
                    item.weather[0].icon +
                    '.png'
                  }
                ></img>
                <h1>
                  {Math.round(data[i].temp)}
                  {'\u00b0'}
                </h1>
              </Container>
            );
          }
        })}
      </Wrapper>
    </>
  );
}

export default HourlyForecast;

const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  background-color: #77b5d9;
  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    background-color: #d7eaf3;
    border-radius: 0 0 10px 10px;
  }
  &::-webkit-scrollbar-thumb:horizontal {
    background-color: rgb(0, 0, 0, 0.5);
    border-radius: 5px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 5px;
  min-width: 100px;
`;

// #d7eaf3
// #77b5d9
// #14397d
