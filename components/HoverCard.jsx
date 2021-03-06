import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";
import useMeasure from "react-use-measure";
import { clamp } from "../helpers/math";

const GridItemContainer = styled(animated.div)`
  background-color: white;
  border-radius: 25px;
  aspect-ratio: 4 / 3;
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  position: relative;
  cursor: pointer;
  width: 300px;

  &::before {
    content: "";
    background: ${(props) => props.bg ? props.bg : "#e7e1cb"};
    position: absolute;
    height: 100%;
    width: 100%;
    transform: translateZ(-30px);
    transition: transform 0.3s;
    border-radius: 25px;
  }

  &:hover {
    &::before {
      transform: translateZ(-50px);
    }
  }
`;

export default function HoverCard(props) {
  const [xy, setXY] = useState([0, 0]);
  const [isHovering, setIsHovering] = useState(false);

  const [ref, bounds] = useMeasure({ scroll: true });

  // Get x and y percentages of mouse in bounds of this component
  let xPercentage = Math.round(xy[0] - bounds.left) / bounds.width;
  let yPercentage = Math.round(xy[1] - bounds.top) / bounds.height;

  // To avoid weird effects, ignore values outside range of 0 and 1
  let xPercentageClamped = clamp(xPercentage, 0, 1);
  let yPercentageClamped = clamp(yPercentage, 0, 1);

  // Apply default rotations if not hovering
  if (!isHovering) {
    if (props.rotation) {
      if (props.rotation == "lt") {
        // top left
        xPercentageClamped = 0.2;
        yPercentageClamped = 0.2;
      } else if (props.rotation == "lr") {
        // top right
        xPercentageClamped = 0.8;
        yPercentageClamped = 0.2;
      } else if (props.rotation == "lb") {
        // bottom left
        xPercentageClamped = 0.2;
        yPercentageClamped = 0.8;
      } else if (props.rotation == "rb") {
        // bottom right
        xPercentageClamped = 0.8;
        yPercentageClamped = 0.8;
      }
    } else {
      xPercentageClamped = 0.5;
      yPercentageClamped = 0.5;
    }
  }

  const { x } = useSpring({
    from: { x: 0 },
    x: xPercentageClamped,
  });

  const { y } = useSpring({
    from: { y: 0 },
    y: yPercentageClamped,
  });

  

  // Interpolate percentages to degrees of rotation
  const xInterpolated = x.to([0, 0.5, 1], [-30, 0, 30]);
  const yInterpolated = y.to([0, 0.5, 1], [30, 0, -30]);

  return (
    <GridItemContainer
      style={{
        rotateX: yInterpolated,
        rotateY: xInterpolated,
      }}
      ref={ref}
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={({ clientX, clientY }) => setXY([clientX, clientY])}
      onMouseLeave={() => setIsHovering(false)}
      bg={props.bg}
    >
      {props.children}
    </GridItemContainer>
  );
}
