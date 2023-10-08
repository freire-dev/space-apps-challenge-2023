import { useAppState } from "@/src/hooks/AppStateContext";
import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";

export function CustomMarker() {
  const { globalState } = useAppState();
  const map = useMap();

  useEffect(() => {
    map.flyTo([globalState.latitude, globalState.longitude]);
  }, [globalState.latitude, globalState.longitude, map]);

  return <Marker position={[globalState.latitude, globalState.longitude]} />;
}
