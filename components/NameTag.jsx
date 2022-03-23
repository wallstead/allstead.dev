import styled from "styled-components";
import React from "react";

const NameTagContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border: 5px solid #de311a;
  border-radius: 25px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const NameTagTop = styled.div`
  color: white;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #de311a;
  padding: 10px 15px;
  flex-direction: column;
  align-items: center;
`;

const NameTagBottom = styled.div`
  color: white;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const NameTagHello = styled.span`
  font-family: "Work Sans", sans-serif;
  line-height: 1.7rem;
  letter-spacing: 0.1rem;
  display: block;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 900;
`;

const NameTagIntroText = styled.span`
  display: block;
`;


const MyName = styled.span`
  color: #1789e4;
  font-family: "Permanent Marker", cursive;
  font-size: 4.5rem;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;


export default function NameTag(props) {
  return (
    <NameTagContainer>
            <NameTagTop>
              <NameTagHello>Hello</NameTagHello>
              <NameTagIntroText>my name is</NameTagIntroText>
            </NameTagTop>
            <NameTagBottom>
              <MyName>Willis</MyName>
            </NameTagBottom>
          </NameTagContainer>   
  );
}
