import { useEffect } from "react";
import { useZones } from "./hooks/useZones";
import SlidesPage from "./pages/SlidesPage";
import ZonesPage from "./pages/ZonesPage";
import { useCurrentZone } from "./hooks/useCurrentZone";
import Loading from "./components/Loading";

const App: React.FC = () => {
  const { data, isLoading } = useZones();
  const { currentZoneId, handleSetCurrentZoneId } = useCurrentZone();

  const currentZone: IZone | undefined = data ? data.items.find((z) => z.id === currentZoneId) : undefined;

  // A biztonság kedvéért megnézem, hogy a mentett zona id még szerepel-e a zónák között,
  // ha nem akkor vissza a választó felületre.
  useEffect(() => {
    if (currentZoneId !== null && !currentZone && data && data?.items.length > 0) {
      handleSetCurrentZoneId(null);
    }
  }, [currentZoneId, currentZone, data]);

  return (
    <div className="App">
      {isLoading ? <Loading /> : null}
      {currentZoneId === null ? <ZonesPage zones={data?.items ?? []} handleSetCurrentZoneId={handleSetCurrentZoneId} /> : <>{currentZone ? <SlidesPage currentZone={currentZone} handleSetCurrentZoneId={handleSetCurrentZoneId} /> : null}</>}
    </div>
  );
};
export default App;
