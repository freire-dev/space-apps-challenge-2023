import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useAppState } from "@/src/hooks/AppStateContext";
import L from "leaflet";
import { useEffect } from "react";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { CustomMarker } from "./CustomMarker";

let DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconAnchor: [12, 41],
  shadowAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const GoogleMaps = () => {
  const { globalState } = useAppState();

  useEffect(() => {}, [globalState.latitude, globalState.longitude]);
  return (
    <>
      <div style={{ width: "80vw", height: "55vh" }}>
        <MapContainer
          center={[globalState.latitude, globalState.longitude]}
          zoom={13}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <CustomMarker />
        </MapContainer>
      </div>
    </>
  );
};

export default GoogleMaps;
