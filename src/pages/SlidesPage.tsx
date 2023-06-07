import { useEffect, useState } from "react";
import Slide from "../components/Slide";
import { ReactComponent as CloseIcon } from "../assets/images/close.svg";

import "./SlidesPage.scss";

interface IProps {
  currentZone: IZone;
  handleSetCurrentZoneId: (zoneId: number | null) => void;
}

let timeout: number;
const SlidesPage: React.FC<IProps> = ({ currentZone, handleSetCurrentZoneId }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const bannersLength = currentZone.banners.length;
  const currentBanner = currentZone.banners[currentSlideIndex].banner;

  const handleTimeOutAndNextSlide = () => {
    const displayTime = currentZone.banners[currentSlideIndex].display_time * 1000; // másodperc?
    timeout = setTimeout(() => {
      setCurrentSlideIndex((prevState) => {
        const added = prevState + 1;
        if (added === bannersLength) {
          return 0;
        }
        return added;
      });
    }, displayTime);
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleSetCurrentZoneId(null);
    }
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [currentZone]);

  useEffect(() => {
    handleTimeOutAndNextSlide();
  }, [currentSlideIndex]);

  useEffect(() => {
    document.addEventListener("keydown", handleEsc, false);
    return () => {
      document.removeEventListener("keydown", handleEsc, false);
    };
  }, []);

  return (
    <>
      {/* Ez a gomb szerintem a végleges rendszerben nem fog kelleni, de most a demo idejére beleraktam */}
      <div className="close-button" onClick={() => handleSetCurrentZoneId(null)}>
        <CloseIcon />
      </div>
      <div className="slider">
        <Slide banner={currentBanner} />
      </div>
    </>
  );
};
export default SlidesPage;
