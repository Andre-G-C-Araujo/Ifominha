import { Container, AdvertisingContent } from "./styles";

import { NavBar } from "../../Components/NavBar";
import { Section } from "../../Components/Section";
import { Card } from "../../Components/Card";

import { api } from "../../services/api";

import advertisingImg from "../../assets/pngegg.png";
import { Footer } from "../../Components/Footer";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";

export const Home = () => {
  const { client } = useAuth();

  const [plates, setPlates] = useState([]);
  const [arrayFav, setArrayFav] = useState([]);

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/pratos?name&category`);
      setPlates(response.data);
    }
    fetchPlate();
  }, []);

  useEffect(() => {
    async function fecthFavorites() {
      const arrayFavClient = client.favorites;
      console.log(typeof arrayFavClient);

      if (typeof arrayFavClient === "string") {
        console.log("String para converter");
        localStorage.setItem("@ifoominha:favorites", arrayFavClient);
      } else {
        console.log("Object para converter");
        localStorage.setItem(
          "@ifoominha:favorites",
          JSON.stringify(arrayFavClient)
        );
      }
    }
    fecthFavorites();
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
          {plates
            .filter((plate) => plate.category === "Salada")
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  plateId={item.id}
                  name={item.name}
                  avatar={item.avatar}
                  price={item.price}
                  arrayFav={arrayFav}
                />
              );
            })}
        </Section>

        <Section title={"Bebidas"}>
          {plates
            .filter((plate) => plate.category === "Bebidas")
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  plateId={item.id}
                  name={item.name}
                  avatar={item.avatar}
                  price={item.price}
                />
              );
            })}
        </Section>

        <Section title={"Refeição"}>
          {plates
            .filter((plate) => plate.category === "Refeição")
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  plateId={item.id}
                  name={item.name}
                  avatar={item.avatar}
                  price={item.price}
                />
              );
            })}
        </Section>

        <Footer />
      </Container>
    </div>
  );
};
