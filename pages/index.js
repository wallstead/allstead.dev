import Head from "next/head";

import styled from "styled-components";
import GridItem from "../components/GridItem";
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



export default function Home() {
  

  return (
    <>
      <Head>
        <title>Willis Allstead</title>
        <meta name="description" content="Web Developer from Reno, NV." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid>
        

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
    </>
  );
}
