import Axios from "axios";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { InnerPageContainer } from "../../components/pageContainer";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { Button } from "../../components/button";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";
import { Link } from "react-router-dom";
// import { OurEvent } from "../../components/ourEvent/";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { fade, makeStyles } from "@material-ui/core/styles";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: 0px 150px;
  background-size: cover;
  background: rgb(119, 204, 137);
  background: linear-gradient(
    90deg,
    rgba(119, 204, 137, 1) 35%,
    rgba(124, 103, 25, 1) 65%
  );
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100;
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 800;
  font-size: 30px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 50%;

  img {
    width: 50%;
    height: 50%;
  }
`;


const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: fade(theme.palette.common.white, 0.3),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.3),
    },
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    alignSelf: "left",
  },
  grid: {
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
  },
}));

export function EventDetail(props) {
  const { children } = props;
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const { id } = useParams();
  const classes = useStyles();

  console.log("id:" + id);
  //Hoan Load Event Details
  const [offeredEvent, setEvent] = useState([]);

  const isEventEmpty =
    !offeredEvent || (offeredEvent && offeredEvent.length === 0);

  const fetchEvent = async () => {
    const response = await Axios.get(
      "http://localhost:8000/events/" + id || 'https://atex.org/events/' + id
    ).catch((err) => {
      console.log("Error: ", err);
    });

    if (response) {
      setEvent(response.data);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);
  const {
    title,
    thumbnailUrl,
    eventname,
    rating,
    date_time,
    location,
  } = offeredEvent;

  console.log(offeredEvent);
  // Hoan Load Event Details
  return (
    <TopSectionContainer>
      <Navbar />
      <InnerPageContainer>
        <React.Fragment>
          <BackgroundFilter>
          <StyledInnerContainer alignItems="left">
            <Grid
              container
              alignItems="center"
              className={classes.grid}
            >
              <Grid item xs={1}>
                {/* <Paper className={classes.paper}>xs=3</Paper> */}
              </Grid>

              <Grid item xs={10} alignItems="center">
             
                <Paper className={classes.paper} alignItems="left" elevation={3}>
                  <card>
                    <ServiceThumbnail>
                      <img src={thumbnailUrl} alt={title} />
                    </ServiceThumbnail>
              
                    <BrandLogo
                          logoSize={isMobile ? 40 : 65}
                          textSize={isMobile ? 35 : 55}
                        />
                        <h1>{id}</h1>
                        <Marginer direction="vertical" margin={8} />
                        <SloganText>The Mads: </SloganText>
                        <SloganText>{title}</SloganText>
                        <Marginer direction="vertical" margin={15} />
                        <Link to="/customer/access/signup">
                          <Button>Join Now</Button>
                        </Link>
                   
                    {/* <TopSectionInnerContainer  */}
                      {/* style={ {width: "50%"}} */}
                    {/* > */}
                      {/* <LogoContainer> */}
                        
                      {/* </LogoContainer> */}
                    {/* </TopSectionInnerContainer> */}
                  
                  </card>
                </Paper>
                
                <col span={5}>
                </col>
                
              </Grid>
              <Grid item xs={1}>
                {/* <Paper className={classes.paper}>xs=3</Paper> */}
              </Grid>
            </Grid>
          </StyledInnerContainer>
          </BackgroundFilter>
        </React.Fragment>
      </InnerPageContainer>
      <Footer />
    </TopSectionContainer>
    
  );
}
const BlurredImageContainer = styled.div`
  display: block;
  padding: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
