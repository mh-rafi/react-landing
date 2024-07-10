import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const ContactMap1 = props => {
  return (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 24.9328, lng: 91.8739 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 24.9328, lng: 91.8739 }} />
      )}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(ContactMap1));
