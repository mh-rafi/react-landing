import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactMap1 = (props) => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "4px",
  };

  const center = {
    lat: 24.9328,
    lng: 91.8739,
  };

  const markerPosition = {
    lat: 24.9328,
    lng: 91.8739,
  };

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBb6wjKD210p0ORAaFyC1EBxF1yJrpLuzk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {props.isMarkerShown && (
          <Marker onLoad={onLoad} position={markerPosition} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default ContactMap1;
