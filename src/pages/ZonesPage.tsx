import "./ZonesPage.scss";

interface IProps {
  zones: IZone[];
  handleSetCurrentZoneId: (zoneId: number | null) => void;
}

const ZonesPage: React.FC<IProps> = ({ zones, handleSetCurrentZoneId }) => {
  return (
    <div className="zones-page">
      {zones.length === 0 ? (
        <h1>No zone found...</h1>
      ) : (
        <div className="zones">
          {zones.map((zone) => (
            <button className="zone" key={zone.id} onClick={() => handleSetCurrentZoneId(zone.id)}>
              {zone.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default ZonesPage;
