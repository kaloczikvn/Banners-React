import LocalStorage from "../helpers/LocalStorage";
import { useState } from "react";

export const useCurrentZone = () => {
  const storedZoneId = LocalStorage.get("zoneId");
  const [currentZoneId, setCurrentZoneId] = useState<number | null>(storedZoneId ? parseInt(storedZoneId) : null);

  const handleSetCurrentZoneId = (zoneId: number | null) => {
    if (zoneId) {
      LocalStorage.set("zoneId", zoneId.toString());
    } else {
      LocalStorage.set("zoneId", null);
    }

    setCurrentZoneId(zoneId);
  };

  return {
    currentZoneId,
    handleSetCurrentZoneId,
  };
};
