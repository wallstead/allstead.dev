import Head from "next/head";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import breakpoints from "../helpers/breakpoints";

const Grid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;

  ${breakpoints.medium} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    padding: 40px;
  }

  ${breakpoints.large} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const GridItem = styled(animated.div)`
  background-color: white;
  border-radius: 27px;
  aspect-ratio: 4 / 3;
  display: flex;
  justify-content: center;
  grid-column: ${(props) => (props.columnStart ? props.columnStart : "auto")} /
    ${(props) => (props.columnEnd ? props.columnEnd : "auto")};
  grid-row: ${(props) => (props.rowStart ? props.rowStart : "auto")} /
    ${(props) => (props.rowEnd ? props.rowEnd : "auto")};
  transform-style: preserve-3d;
  position: relative;

  &::before {
    content: '';
    background: #e7e1cb;
    position: absolute;
    height: 100%;

    width: 100%;
    transform: translateZ(-30px);
    border-radius: 27px;
  }
`;

export default function Home() {
  const [xy, setXY] = useState([0, 0]);

  const [ref, bounds] = useMeasure();

  const xPercentage = Math.round(xy[0] - bounds.left) / bounds.width
  const yPercentage = Math.round(xy[1] - bounds.top) / bounds.height
  console.log(xPercentage)

  const { x } = useSpring({
    from: { x: 0 },
    x: xPercentage,
  });

  const { y } = useSpring({
    from: { y: 0 },
    y: yPercentage,

  });

  const xInterpolated = x.to([0, 0.5, 1], [-20, 0, 20]);
  const yInterpolated = y.to([0, 0.5, 1], [20, 0, -20]);

  return (
    <>
      <Head>
        <title>Willis Allstead</title>
        <meta name="description" content="Web Developer from Reno, NV." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid>
        <GridItem
          style={{
            rotateX: yInterpolated,
            rotateY: xInterpolated
          }}
          ref={ref}
          onMouseMove={({ clientX, clientY }) => setXY([clientX, clientY])}
          onMouseLeave={() => setXY([])}
        >
          x: {Math.round(xy[0] - bounds.left)}px
          <br></br>
          Y: {Math.round(xy[1] - bounds.top)}px
          <br></br>
          percentageX: {Math.round(xy[0] - bounds.left) / bounds.width}
          <br></br>
          percentageY: {Math.round(xy[1] - bounds.top) / bounds.height}
        </GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>

        <GridItem></GridItem>
      </Grid>

      <footer></footer>
    </>
  );
}
