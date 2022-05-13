import React from 'react';
import styled from 'styled-components';

function DailyForecast(dataSet) {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const d = new Date();
  const day = d.getDay();

  const data = Object.values(dataSet);
  return (
    <Wrapper>
      {data.map((item, i) => {
        return (
          <WeekDay>
            <h1>{weekday[i % 7]}</h1>
            <Temp>
              <img
                src={
                  'http://openweathermap.org/img/w/' +
                  item.weather[0].icon +
                  '.png'
                }
              ></img>
              <h1>
                {Math.round(item.temp.day)}
                {'\u00b0'}
              </h1>
            </Temp>
          </WeekDay>
        );
      })}
    </Wrapper>
  );
}

export default DailyForecast;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #77b5d9;
  padding: 10px;
`;

const Temp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;
const WeekDay = styled.div`
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 0 10px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;
