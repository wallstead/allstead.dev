import styled from "styled-components";
import React from "react";
import useSimulatedScroll from "../helpers/simulatedScroll";
import Image from "next/image";

const ComputerContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border: 5px solid #252525;
  border-radius: 25px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ComputerScreen = styled.div`
  color: white;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  display: block;
  overflow-y: scroll;
`;


export default function MiniPuter(props) {
    const scrollRef = useSimulatedScroll();

  return (
    <ComputerContainer>
        <ComputerScreen ref={scrollRef}>
            <Image src={`/${props.screenFileName}.jpeg`} loading="eager" alt={props.alt} width={1000} height={props.screenHeight} layout="responsive" placeholder="blur" blurDataURL={`/${props.screenFileName}-thumb.jpeg`} />
        </ComputerScreen>
    </ComputerContainer>
  );
}
