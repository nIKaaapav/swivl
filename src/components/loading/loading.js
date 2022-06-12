import React from 'react';
import styled from "styled-components";

const LoadingContainer = styled.div`
  position:relative;
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width:100%
`

const LoadingWrapper = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
   div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: a 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
   div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes a {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
      background-color:#203060
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
  }
`

const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingWrapper className="a">
                <div/>
                <div/>
            </LoadingWrapper>
        </LoadingContainer>
    );
};

export default Loading;