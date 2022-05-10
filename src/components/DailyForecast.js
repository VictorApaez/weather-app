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
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Temp = styled.div`
  display: flex;
`;
const WeekDay = styled.div`
  /* margin: 5px;
  padding: 5px; */
  display: flex;
  justify-content: space-between;
`;
