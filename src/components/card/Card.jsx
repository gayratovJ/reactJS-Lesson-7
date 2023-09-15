import "./Card.module.css";
import { propTypes } from "react-bootstrap/esm/Image";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Card = ({ name, price, description, id, image }) => {
  return (
    <div className="col-3">
      {id}
      {/* <div className="head"> */}
      <LazyLoadImage
        alt={image.alt}
        height={image.height}
        src={image} // use normal <img> attributes as props
        width={image.width}
        effect="blur"
      />
      {/* </div> */}
      <div className="footer">
        <p className="what">{name}</p>
        <p className="text">{description}</p>
        <div className="btn">
          <button>Выбрать</button>
          <span className="price">{price}₽</span>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line no-undef
Card.propTypes = {
  name: propTypes.string,
  price: propTypes.number,
  description: propTypes.string,
  id: propTypes.string,
  image: propTypes.string,
};

export default Card;
