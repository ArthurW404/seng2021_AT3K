import React from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
} from "react-google-maps";
import mapStyles from './JobMap.module.scss';

const BasicMap = withScriptjs(
    withGoogleMap(() => (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{
                lat: parseFloat(-37.813179),
                lng: parseFloat(144.950259),
            }}
        >
            <Marker position={{ lat: -37.813179, lng: 144.950259 }} />
        </GoogleMap>
    )),
);

export default function Maps() {
    return (
        <div className={mapStyles.mapContainer}>
            <BasicMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
                loadingElement={<div style={{ height: "inherit", width: "inherit" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    );
};