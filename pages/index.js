import Head from 'next/head'
import React from 'react'
import styled from 'styled-components';
import breakpoints from '../helpers/breakpoints';

const Grid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 40px;

  ${breakpoints.medium} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${breakpoints.large} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const GridItem = styled.div`
  background-color: white;
  border-radius: 27px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;

  grid-column-start: ${props => props.columnStart};
  grid-column-end: ${props => props.columnEnd};
  grid-row-start: ${props => props.rowStart};
  grid-row-end: ${props => props.rowEnd};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Willis Allstead</title>
        <meta name="description" content="Web Developer from Reno, NV." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid>

        <GridItem columnStart={1} columnEnd={3} rowStart={1} rowEnd={2}>yo</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>

        <GridItem>hey</GridItem>


      </Grid>

      <footer>
      </footer>
    </>
  )
}
