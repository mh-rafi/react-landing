import React from "react";
import { Grid, Card, Avatar } from "@mui/material";
import FacebookIcon from "../common/icons/FacebookIcon";
import TwitterIcon from "../common/icons/TwitterIcon";
import InstagramIcon from "../common/icons/InstagramIcon";
import LinkedinIcon from "../common/icons/LinkedinIcon";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  border: "1px solid transparent",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    border: "1px solid rgba(var(--primary), 1)",
    color: theme.palette.primary.main,
    "& $iconContainer": {
      opacity: 1,
    },
    "& .description": {
      color: theme.palette.primary.main,
    },
  },
  "& .iconContainer": {
    position: "absolute",
    top: "calc(50% - 10px)",
    left: "50%",
    transform: "translate(-50%)",
    opacity: 0,
    transition: "opacity 250ms ease",
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      marginTop: "calc(-50% - 4px)",
      height: 128,
      width: 128,
      background: "rgba(0,0,0, 0.67)",
      borderRadius: 300,
      overflow: "hidden",
      zIndex: -1,
    },
  },
  "& .iconWrapper": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderRadius: 4,
    marginRight: 4,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    cursor: "pointer",
  },
}));

const Speakers1 = () => {
  const speakerList = [
    {
      name: "John Doe",
      imgUrl: "/assets/images/face-1.jpg",
    },
    {
      name: "Samantha",
      imgUrl: "/assets/images/face-4.jpg",
    },
    {
      name: "Kelly Brown",
      imgUrl: "/assets/images/face-5.jpg",
    },
    {
      name: "John Smith",
      imgUrl: "/assets/images/face-2.jpg",
    },
  ];

  return (
    <section className="section section-bg-light-primary">
      <div className="container text-center">
        <h1 className="mt-0 font-normal text-44">Our Speakers</h1>
        <p className="max-w-400 mx-auto mb-16">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua
        </p>

        <Grid container spacing={3}>
          {speakerList.map((item, ind) => (
            <Grid key={ind} item sm={3} xs={12}>
              <StyledCard
                elevation={3}
                className="border-radius-12 px-6 pt-8 pb-4 text-center"
              >
                <div className="mb-6 relative">
                  <Avatar
                    src={item.imgUrl}
                    className="h-128 w-128 inline-block"
                  ></Avatar>
                  <div className="flex flex-wrap justify-center iconContainer">
                    <div className="iconWrapper">
                      <FacebookIcon
                        className="text-13 text-white"
                        fontSize="small"
                      />
                    </div>
                    <div className="iconWrapper">
                      <TwitterIcon
                        className="text-13 text-white"
                        fontSize="small"
                      />
                    </div>
                    <div className="iconWrapper">
                      <InstagramIcon
                        className="text-13 text-white"
                        fontSize="small"
                      />
                    </div>
                    <div className="iconWrapper">
                      <LinkedinIcon
                        className="text-13 text-white"
                        fontSize="small"
                      />
                    </div>
                  </div>
                </div>
                <h5 className="m-0 font-medium text-18">{item.name}</h5>
                <p className="description">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitrr
                </p>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Speakers1;
