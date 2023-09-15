import { Container } from "react-bootstrap";
import "./Menu.module.css";
const Menu = () => {
  return (
    <main>
      <section>
        <Container>
          <ul>
            <li>
              <img src="/public/categories/pizza.svg" alt="" />
              <a>Пицца</a>
            </li>
            <li>
              <img src="/public/categories/sushi.svg" alt="" />
              <a>Суши</a>
            </li>
            <li>
              <img src="/public/categories/drink.svg" alt="" />
              <a>Напитки</a>
            </li>
            <li>
              <img src="/public/categories/desert.svg" alt="" />
              <a>Закуски</a>
            </li>
            <li>
              <img src="/public/categories/sauce.svg" alt="" />
              <a>Соусы</a>
            </li>
          </ul>
        </Container>
      </section>
    </main>
  );
};

export default Menu;
