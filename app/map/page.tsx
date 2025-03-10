"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import DrawControl from "@/components/controls/DrawControl";
import GeocoderControl from "@/components/controls/GeocoderControl";
import Map from "react-map-gl/mapbox";
import drawOptions from "@/constants/drawOptions";

const TOKEN =
  "pk.eyJ1IjoiaHlvcmlib2dvIiwiYSI6ImNtN2UyNnluZzBhbHAyaXIwcnp2Z20zamIifQ.RHqv-yu6nlFY2aFIHLHh3Q";

export default function Page() {
  return (
    <Map
      initialViewState={{
        longitude: 126.978,
        latitude: 37.5665,
        zoom: 10,
        bearing: 0,
        pitch: 0,
      }}
      mapboxAccessToken={TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      projection="globe"
    >
      <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" />
      <DrawControl position="bottom-left" {...drawOptions} />
    </Map>
  );
}
