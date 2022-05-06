import React from 'react';
import styled from 'styled-components';

function DailyForecast(dataSet) {
  console.log(dataSet);
  const data = Object.values(dataSet);
  return (
    <Wrapper>
      {data.map((item) => {
        return (
          <WeekDay>
            <h1>
              {Math.round(item.temp.day)}
              {'\u00b0'}
            </h1>
            <img
              src={
                'http://openweathermap.org/img/w/' +
                item.weather[0].icon +
                '.png'
              }
            ></img>
          </WeekDay>
        );
      })}
    </Wrapper>
  );
}

export default DailyForecast;

const Wrapper = styled.div`
  display: flex;
  height: 200px;

  background-color: rgba(0, 0, 0, 0.1);
`;
const WeekDay = styled.div`
  margin: 5px;
  padding: 5px;
`;
