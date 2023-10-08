import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, useMap, useMapEvents } from "react-leaflet";

export function LocationMarker() {
  const [position, setPosition] = useState<LatLng | null>(null);
  const [isLocationAllowed, setIsLocationAllowed] = useState(true);
  const [isFirstRun, setIsFirstRun] = useState(true);
  const leafletMap = useMap();
  const defaultZoom = 16;

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLocationAllowed(true);
          const latLng = new LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          setPosition(latLng);
          leafletMap.flyTo(latLng, defaultZoom);
          setIsFirstRun(false);
        },
        (_) => {
          setIsLocationAllowed(false);
        }
      );
    } else {
      setIsLocationAllowed(false);
    }
  }, [leafletMap]);

  const map = useMapEvents({
    click(e) {
      if (isLocationAllowed && isFirstRun) {
        map.locate();
        setIsFirstRun(false);
      } else {
        const coords = map.mouseEventToLatLng(e.originalEvent);
        setPosition(coords);
      }
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, defaultZoom);
    },
  });

  return position === null ? null : <Marker position={position} />;
}
