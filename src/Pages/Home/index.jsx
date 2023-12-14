import { Container, AdvertisingContent } from "./styles";

import { NavBar } from "../../Components/NavBar";
import { Section } from "../../Components/Section";
import { Card } from "../../Components/Card";

import advertisingImg from "../../assets/pngegg.png";
import { Footer } from "../../Components/Footer";

export const Home = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <AdvertisingContent>
          <img src={advertisingImg} alt="Espaço reservado para advertising" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </AdvertisingContent>

        <Section title={"Saladas"}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>

        <Section title={"Carnes"}>
          <Card />
          <Card />
        </Section>

        <Section title={"Lanches"}>
          <Card />
          <Card />
        </Section>

        <Footer />
      </Container>
    </div>
  );
};
