import Head from "next/head";
import styled from "styled-components";
import HoverCard from "../components/HoverCard";
import breakpoints from "../helpers/breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import TimeAgo from "react-timeago";
import NameTag from "../components/NameTag";
import MiniPuter from "../components/MiniPuter";
import MoreInfoText from "../components/MoreInfoText";
import WorkSlider from "../components/WorkSlider";

const Container = styled.main`
  display: flex;
  flex-direction: column;

  ${breakpoints.small} {
    flex-direction: row;
  }
`;

const IntroArea = styled.div`
  padding: 40px 20px 0 20px;

  ${breakpoints.small} {
    padding: 40px;
  }
`;

const StickyContainer = styled.div`
  display: flex;
  justify-content: center;

  ${breakpoints.small} {
    position: sticky;
    top: 40px;
  }
`;

const ContentArea = styled.div`
  padding: 40px 20px 20px;
  max-width: 1100px;

  ${breakpoints.small} {
    padding: 40px 40px 40px 0;
  }

  & > * {
    margin-bottom: 30px;

    ${breakpoints.small} {
      margin-bottom: 35px;
    }

    ${breakpoints.medium} {
      margin-bottom: 40px;
    }
  }
`;

const LargeText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1.35rem;
  color: #252525;

  ${breakpoints.small} {
    font-size: 1.5rem;
  }

  ${breakpoints.medium} {
    font-size: 1.75rem;
  }

  &::selection,
  *::selection {
    background-color: #e7e1cb;
  }
`;

const SiteName = styled.p`
  font-family: "Work Sans", sans-serif;
  font-size: 1.35rem;
  color: #252525;
  user-select: none;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;

  ${breakpoints.small} {
    font-size: 1.5rem;
  }

  ${breakpoints.medium} {
    font-size: 1.75rem;
  }
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
    } else if (props.brand == "characterstrong") {
      return "#3bd36d";
    } else {
      return "#1789e4";
    }
  }};

  color: var(--link-color);
  text-decoration: none;
  position: relative;
  display: inline-flex;
  font-weight: 700;
  align-items: center;

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Willis Allstead</title>
        <meta name="description" content="Web Developer from Reno, NV." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <IntroArea>
          <StickyContainer>
            <HoverCard rotation="rb">
              <NameTag />
            </HoverCard>
          </StickyContainer>
        </IntroArea>

        <ContentArea>
          <LargeText>
            I like coding and creating things. Check out my{" "}
            <Link href="https://github.com/wallstead" brand="github">
              GitHub <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </Link>{" "}
            to see some of my work.
          </LargeText>
          <LargeText>
            I&lsquo;m currently a 🧑‍💻 <em>Full Stack Web Developer</em> at{" "}
            <Link href="https://characterstrong.com/" brand="characterstrong">
              CharacterStrong <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </Link>{" "}
            working to make the world a better place through education. I
            started at CharacterStrong in{" "}
            <MoreInfoText>
              <TimeAgo date="April 1, 2022" />
              April of 2022
            </MoreInfoText>.
          </LargeText>
          <LargeText>
            Previously, I worked as a <em>Senior Web Developer</em> at{" "}
            <Link href="https://noblestudios.com/" brand="noble">
              Noble Studios <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </Link>{" "}
            in Reno, NV, where I started in{" "}
            <MoreInfoText>
              <TimeAgo date="May 1, 2018" />
              May of 2018
            </MoreInfoText>
            . While at Noble, I <strong>led frontend development</strong> on
            some really cool websites, a few of which are shown below.
          </LargeText>
          <WorkSlider>
            <div>
              <SiteName>Tahoe South</SiteName>
              <HoverCard bgColor="#00a99d">
                <MiniPuter
                  screenFileName="ltva"
                  screenHeight={3608}
                  alt="Tahoe South Site"
                  link="https://tahoesouth.com"
                />
              </HoverCard>
            </div>

            <div>
              <SiteName>Travel Nevada</SiteName>
              <HoverCard bgColor="#357387">
                <MiniPuter
                  screenFileName="tn"
                  screenHeight={4088}
                  alt="Travel Nevada Site"
                  link="https://travelnevada.com"
                />
              </HoverCard>
            </div>

            <div>
              <SiteName>Duncan Channon</SiteName>
              <HoverCard bgColor="#f05050">
                <MiniPuter
                  screenFileName="dc"
                  screenHeight={6919}
                  alt="Duncan Channon Site"
                  link="https://duncanchannon.com"
                />
              </HoverCard>
            </div>
          </WorkSlider>
          <LargeText>
            I graduated in{" "}
            <MoreInfoText>
              <TimeAgo date="May 1, 2019" />
              May of 2019
            </MoreInfoText>{" "}
            with a <em>B.S. in Computer Science &amp; Engineering</em> from the{" "}
            <Link href="https://www.unr.edu/cse" brand="unr">
              University of Nevada, Reno{" "}
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </Link>
            .
          </LargeText>
          <LargeText>
            My passion is creating things that people use and love. I&lsquo;m
            currently working on an accessibility testing service called{" "}
            <Link href="https://siteally.com/" brand="siteally">
              Siteally <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </Link>
            .
          </LargeText>
        </ContentArea>

        {/* <div>
          
          
        </div> */}
      </Container>
    </>
  );
}
