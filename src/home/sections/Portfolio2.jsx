import React from "react";

import { Icon, Card, Divider, IconButton } from "@mui/material";

import Carousel from "../common/Carousel";

const Portfolio2 = () => {
  const portfoioList = [
    {
      imageUrl: "./assets/images/sq-12.jpg",
      name: "Project One",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
    {
      imageUrl: "./assets/images/sq-10.jpg",
      name: "Project Two",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
    {
      imageUrl: "./assets/images/sq-9.jpg",
      name: "Project Three",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
    {
      imageUrl: "./assets/images/sq-11.jpg",
      name: "Project Four",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
    {
      imageUrl: "./assets/images/sq-13.jpg",
      name: "Project Five",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
  ];

  return (
    <section className="section" id="portfoli2">
      <div className="container">
        <div className="section__header">
          <h2>Our Works</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            unde inventore molestias ab adipisci eius nisi placeat at.
          </p>
        </div>

        <Carousel carouselId="portfolio-2">
          {portfoioList.map((portfolio, index) => (
            <Card className="relative h-full card" key={index}>
              <img
                className="w-full"
                src={portfolio.imageUrl}
                alt="portfolio"
              />
              <div className="flex-column justify-between">
                <div className="px-4 pt-4">
                  <h5 className="m-0 text-16 font-bold">{portfolio.name}</h5>
                  <p className="mb-4">{portfolio.description}</p>
                  <Divider />
                </div>
                <div className="px-4 py-2">
                  <IconButton>
                    <Icon>link</Icon>
                  </IconButton>
                  <IconButton>
                    <Icon>share</Icon>
                  </IconButton>
                </div>
              </div>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio2;
