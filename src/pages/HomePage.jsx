import { Fragment, useContext } from "react";
import Menu from "../components/menu/Menu";
import Card from "../components/card/Card";
import { products } from "../data/products";
import { Container } from "react-bootstrap";
import Combo from "../components/combo/Combo";
import { combo } from "../data/combo";
import Sushi from "../components/sushi/Sushi";
import { sushi } from "../data/sushi";
import { Snack } from "../components/snacks/Snack";
import { snack } from "../data/snack";
import { Desert } from "../components/desert/Desert";
import { desert } from "../data/deserts";
import { drink } from "../data/drink";
import { Drink } from "../components/drink/Drink";
import { languageContext } from "../main";

const HomePage = () => {
  const state = useContext(languageContext);
  console.log(state);
  return (
    <Fragment>
      <Menu />
      <section className="pizaa">
        <h1>Пицца</h1>
        <Container>
          {products.map((pr) => (
            <Card key={pr.id} {...pr} />
          ))}
        </Container>
      </section>
      <section className="pizaa">
        <h1>Суши</h1>
        <Container>
          {sushi.map((cm) => (
            <Sushi key={cm.id} {...cm} />
          ))}
        </Container>
      </section>
      <section className="pizaa">
        <h1>Комбо</h1>
        <Container>
          {snack.map((cm) => (
            <Snack key={cm.id} {...cm} />
          ))}
        </Container>
      </section>
      <section className="pizaa">
        <h1></h1>
        <Container>
          {snack.map((cm) => (
            <Snack key={cm.id} {...cm} />
          ))}
        </Container>
      </section>
      <section className="pizaa">
        <h1>Десерты</h1>
        <Container>
          {desert.map((cm) => (
            <Desert key={cm.id} {...cm} />
          ))}
        </Container>
      </section>
      <section className="pizaa">
        <h1>Напитки</h1>
        <Container>
          {drink.map((cm) => (
            <Drink key={cm.id} {...cm} />
          ))}
        </Container>
      </section>
      <section className="pizaa">
        <h1>Комбо</h1>
        <Container>
          {combo.map((cm) => (
            <Combo key={cm.id} {...cm} />
          ))}
        </Container>
      </section>
    </Fragment>
  );
};

export default HomePage;
