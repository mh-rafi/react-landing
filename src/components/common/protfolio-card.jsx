import React from "react";
import Card from "@material-ui/core";

const ProtfolioCard = ({ data }) => {
  return (
    <Card className="card">
      <img src="/assets/images/sq-12.jpg" />
      <CardContent>
        <h5>Project One</h5>
        <p>
          Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae
          dignissimos, sapiente est atque tenetur.
        </p>
        <Divider />
        <div className="card-actions">
          <IconButton>
            <Link />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProtfolioCard;
