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
  width: 100%;
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`;
