import styles from "./LeafletMap.module.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LocationMarker } from "./LocationMarker";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconAnchor: [12, 41],
  shadowAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function LeafletMap() {
  return (
    <div className={styles.map}>
      <MapContainer
        center={[-22.896998, -43.106464]}
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
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
