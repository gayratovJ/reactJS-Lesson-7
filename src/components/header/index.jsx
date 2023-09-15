import { useContext } from "react";
import { Container } from "react-bootstrap";
import { languageContext } from "../../main";

const Header = () => {
  const state = useContext(languageContext);
  console.log(state);
  return (
    <header>
      <Container>
        <nav>
          <div className="logo">
            <img src="/public/Group 2.png" alt="" />
            Куда пицца
          </div>
          <div className="end">
            <div className="card-counter">
              <i className="fa fa-shopping-cart"></i>
              <span>0</span>
            </div>
            <div className="language">
              <select name="" id="">
                <option value="">ENG</option>
                <option value="">UZ</option>
              </select>
            </div>
          </div>
        </nav>
      </Container>
    </header>

  );
}

export default Header