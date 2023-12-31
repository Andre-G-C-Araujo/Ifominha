import { Container, AdvertisingContent } from "./styles";

import { NavBar } from "../../Components/NavBar";
import { Section } from "../../Components/Section";
import { Card } from "../../Components/Card";

import { api } from "../../services/api";

import advertisingImg from "../../assets/pngegg.png";
import { Footer } from "../../Components/Footer";
import { useEffect, useState } from "react";

export const Home = () => {
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/pratos?name&category`);
      setPlates(response.data);
    }
    fetchPlate();
  }, []);

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
          {plates.map((item, index) => {
            if (item.category === "Salada") {
              return (
                <Card
                  key={index}
                  plateId={item.id}
                  name={item.name}
                  avatar={item.avatar}
                  price={item.price}
                />
              );
            }
            return null;
          })}
        </Section>

        <Section title={"Bebidas"}>
          {plates.map((item, index) => {
            if (item.category === "Bebidas") {
              return (
                <Card
                  key={index}
                  plateId={item.id}
                  name={item.name}
                  avatar={item.avatar}
                  price={item.price}
                />
              );
            }
            return null;
          })}
        </Section>

        <Section title={"Refeiçoes"}>
          {plates.map((item, index) => {
            if (item.category === "Refeição") {
              return (
                <Card
                  key={index}
                  plateId={item.id}
                  name={item.name}
                  avatar={item.avatar}
                  price={item.price}
                />
              );
            }
            return null;
          })}
        </Section>

        <Footer />
      </Container>
    </div>
  );
};
