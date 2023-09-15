// import "./Card.module.css";
import { propTypes } from "react-bootstrap/esm/Image";
const Combo = ({ name, price, description, id, image }) => {
  return (
    <div className="col-3">
      {id}
      <div className="head">
        <img src={image} alt="" />
      </div>
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
Combo.propTypes = {
  name: propTypes.string,
  price: propTypes.number,
  description: propTypes.string,
  id: propTypes.string,
  image: propTypes.string,
};

export default Combo;
