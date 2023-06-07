import "./Slide.scss";

interface IProps {
  banner: IBanner;
}

const Slide: React.FC<IProps> = ({ banner }) => {
  return (
    <div className="slide">
      {banner.type === "image" ? <img src={banner._links.download.href} alt={banner.name} /> : null}
      {banner.type === "video" ? (
        <video autoPlay muted>
          <source src={banner._links.download.href} />
        </video>
      ) : null}
    </div>
  );
};
export default Slide;
