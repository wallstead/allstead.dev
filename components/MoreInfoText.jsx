import styled from "styled-components";
import React from "react";

const MoreInfoTextContainer = styled.span`
  position: relative;
  display: inline-flex;
  justify-content: center;
  cursor: help;

  // underline dots
  &::before {
    position: absolute;
    top: calc(100% - 3px);
    left: 0;
    content: "";
    height: 3px;
    width: 100%;
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 250 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="gray"/></svg>');
    background-repeat: repeat-x;
    transform-origin: left;
    transition: transform 0.3s;
  }

  // tooltip
  time {
    padding: 5px 15px;
    position: absolute;
    bottom: 100%;
    max-width: 100%;
    background: white;
    transform-origin: bottom;
    transition: transform 0.3s, opacity 0.3s;
    border-radius: 10px;
    opacity: 0;
    transform: scale(0);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 700;
    box-shadow: 0 4px 0 #e7e1cb;
    pointer-events: none;
  }

  &:hover {
    time {
      opacity: 1;
      transform: scale(1);
    }
  }
`;


export default function MoreInfoText(props) {
  return (
    <MoreInfoTextContainer>{props.children}</MoreInfoTextContainer>
  );
}
