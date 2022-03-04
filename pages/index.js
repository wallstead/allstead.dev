import Head from "next/head";
import styled from "styled-components";
import GridItemCard from "../components/GridItemCard";
import { useSpring, animated } from "react-spring";
import breakpoints from "../helpers/breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import TimeAgo from 'react-timeago'
import useSimulatedScroll from "../helpers/simulatedScroll";

const Grid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;

  ${breakpoints.medium} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    padding: 40px;
  }

  ${breakpoints.large} {
    grid-template-columns: 1fr 2fr 1fr;
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
  color: #252525;
  margin-bottom: 50px;
  
  &::selection, *::selection {
    background-color: #e7e1cb;
  }
`;

const NameTagIntroText = styled.span`
  display: block;
`;

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

const Link = styled.a`
  --link-color: ${(props) => {
    if (props.brand == "siteally") {
      return "rgb(89, 125, 227)";
    } else if (props.brand == "noble") {
      return "rgb(220, 58, 38)";
    } else if (props.brand == "unr") {
      return "#041e42";
    } else if (props.brand == "github") {
      return "black";
    } else {
      return "#1789e4";
    }
  }};

  color: var(--link-color);
  text-decoration: none;
  position: relative;
  display: inline-flex;
  font-weight: 700;

  &::after {
    position: absolute;
    top: calc(100% - 3px);
    left: 0;
    content: "";
    height: 3px;
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
  }

  svg {
    width: 0.95em;
    margin-left: 0.3em;
    margin-right: 0.1em;
  }
`;

const MoreInfoText = styled.span`
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

export default function Home() {

  const tnRef = useSimulatedScroll();
  const ltvaRef = useSimulatedScroll();
  const dcRef = useSimulatedScroll();

  return (
    <>
      <Head>
        <title>Willis Allstead</title>
        <meta name="description" content="Web Developer from Reno, NV." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&amp;family=Permanent+Marker&amp;family=Work+Sans:wght@300;900&amp;display=swap"
          rel="stylesheet"
        />
      </Head>

      <Grid>
        <GridItemCard rotation="rb">
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
        <GridItem columnStart={2} columnEnd={3}>
          <LargeText>
            I like coding and creating things. Check out my{" "}
            <Link href="https://github.com/wallstead" brand="github">
              GitHub <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </Link>{" "}
            to see some of my work.
          </LargeText>
          <LargeText>
            I&lsquo;ve been working as a 🧑‍💻 <em>Web Developer</em> at{" "}
            <Link href="https://noblestudios.com/" brand="noble">
              Noble Studios <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </Link>{" "}
            in Reno, NV since <MoreInfoText><TimeAgo date='May 1, 2018' />May of 2018</MoreInfoText>. While at Noble, I&lsquo;ve <strong>led frontend development</strong> for some seriously cool websites.
          </LargeText>
          <LargeText>
            I graduated in <MoreInfoText><TimeAgo date='May 1, 2019' />May of 2019</MoreInfoText> with a{" "}
            <em>B.S. in Computer Science &amp; Engineering</em> from the{" "}
            <Link href="https://www.unr.edu/cse" brand="unr">
              University of Nevada, Reno{" "}
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </Link>
            .
          </LargeText>
          <LargeText>
            My passion is creating things that people use and love. I'm
            currently working on an accessibility testing service called{" "}
            <Link href="https://siteally.com/" brand="siteally">
              Siteally <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </Link>
            .
          </LargeText>
        </GridItem>
        
        <div>
          <GridItemCard rotation="lb">
            <ComputerContainer>
              <ComputerScreen ref={tnRef}>
                <img src="tn.jpg" />
              </ComputerScreen>
            </ComputerContainer>
          </GridItemCard>
          <GridItemCard rotation="lb">
            <ComputerContainer>
              <ComputerScreen ref={ltvaRef}>
                <img src="ltva.jpg" />
              </ComputerScreen>
            </ComputerContainer>
          </GridItemCard>
          <GridItemCard rotation="lb">
            <ComputerContainer>
              <ComputerScreen ref={dcRef}>
                <img src="dc.jpg" />
              </ComputerScreen>
            </ComputerContainer>
          </GridItemCard>
        </div>
        
      </Grid>
    </>
  );
}
