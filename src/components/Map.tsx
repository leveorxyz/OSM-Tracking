import { lazy, Suspense } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

import { DEFAULT_LAT_LNG, DEFAULT_ZOOM } from "~/constants";

const Markers = lazy(() => import("~/components/Markers"));

const Map = () => {
  return (
    <MapContainer
      center={DEFAULT_LAT_LNG}
      zoom={DEFAULT_ZOOM}
      className="w-screen h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        attribution='Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
        url="https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"
      />

      <Suspense fallback={<></>}>
        <Markers />
      </Suspense>
    </MapContainer>
  );
};

export default Map;
