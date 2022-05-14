import React from 'react';
import styled, { keyframes } from 'styled-components';

function Loading() {
  return (
    <Wrapper>
      <Header>Loading Geolocation...</Header>
      <Container>
        <Animation></Animation>
      </Container>
    </Wrapper>
  );
}

export default Loading;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 19, 40);
  color: white;
`;

const Header = styled.h1`
  font-size: 2rem;
`;

const rippleAnimation = keyframes`
    0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  &:nth-child(2) {
    animation-delay: -0.5s;
  }
`;
const Animation = styled.div`
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: ${rippleAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;
