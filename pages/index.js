import Head from "next/head";
import styled from "styled-components";
import GridItemCard from "../components/GridItemCard";
import breakpoints from "../helpers/breakpoints";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'




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

const GridItem = styled.div`
  grid-column: ${(props) => (props.columnStart ? props.columnStart : "auto")} /
    ${(props) => (props.columnEnd ? props.columnEnd : "auto")};
  grid-row: ${(props) => (props.rowStart ? props.rowStart : "auto")} /
    ${(props) => (props.rowEnd ? props.rowEnd : "auto")};
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

const LargeText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
`;

const NameTagIntroText = styled.span`
  display: block;
`;

const Link = styled.a`
  --link-color: ${(props) => {
    if (props.brand == "siteally") {
      return "rgb(89, 125, 227)";
    } else if (props.brand == "noble") {
      return "rgb(220, 58, 38)";
    } else if (props.brand == "unr") {
      return "#041e42";
    } else {
      return "#1789e4"
    }
  }};

  color: var(--link-color);
  text-decoration: none;
  position: relative;
  display: inline-flex;

  &::after {
    position: absolute;
    top: 100%;
    left: 0;
    content: "";
    height: 2px;
    width: 100%;
    background-color: var(--link-color);
    transform-origin: left;
    transition: transform 0.3s;
    transform: scaleX(0);
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
    /* text-decoration: underline; */
  }

  svg {
    width: 0.95em;
    margin-left: 0.3em;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Willis Allstead</title>
        <meta name="description" content="Web Developer from Reno, NV." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&amp;family=Permanent+Marker&amp;family=Work+Sans:wght@300;900&amp;display=swap"
          rel="stylesheet"
        />
      </Head>

      <Grid>
        <GridItemCard>
          <NameTagContainer>
            <NameTagTop>
              <NameTagHello>Hello</NameTagHello>
              <NameTagIntroText>my name is</NameTagIntroText>
            </NameTagTop>
            <NameTagBottom>
              <MyName>Willis</MyName>
            </NameTagBottom>
          </NameTagContainer>
        </GridItemCard>
        <GridItem columnStart={2} columnEnd={4} rowStart={1} rowEnd={2}>
          <LargeText>
            I like coding and creating things. Check out my{" "}
            <Link href="https://github.com/wallstead">Personal GitHub <FontAwesomeIcon icon={faSquareArrowUpRight} /></Link> to
            see some of my work.
          </LargeText>
        </GridItem>
        <GridItem columnStart={2} columnEnd={4}>
          <LargeText>
            I&lsquo;ve been working as a Web Developer at <Link href="https://noblestudios.com/" brand="noble">Noble Studios <FontAwesomeIcon icon={faSquareArrowUpRight} /></Link> in Reno, NV
            since May of 2018. I get to work on some really cool websites. I
            graduated in May of 2019 with a bachelors in Computer Science &
            Engineering from the <Link href="https://noblestudios.com/" brand="unr">University of Nevada, Reno <FontAwesomeIcon icon={faSquareArrowUpRight} /></Link>.
          </LargeText>
        </GridItem>
        <GridItem columnStart={2} columnEnd={4}>
          <LargeText>
            My passion is creating things that people use and love. I'm
            currently working on an accessibility testing service called{" "}
            <Link href="https://siteally.com/" brand="siteally">
              Siteally <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </Link>
            .
          </LargeText>
        </GridItem>
        
      </Grid>
    </>
  );
}
