import { useEffect, useState } from "react";

import { Container, ContentCards, SearchContent } from "./styles";

import { CiSearch } from "react-icons/ci";

import { MenuNavBar } from "../../Components/MenuNavBar";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Footer } from "../../Components/Footer";

import { CardMenu } from "../../Components/CardMenu";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const Favorites = () => {
  const navigate = useNavigate();

  const [pratos, setPratos] = useState([]);
  const [favoritesIds, setFavoritesIds] = useState([]);

  function handleLinkTo(link) {
    navigate(`/${link}`);
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/pratos?name&category&ingredients`);
      setPratos(response.data);
      const arrayLocalStorage = localStorage.getItem("@ifoominha:favorites");
      setFavoritesIds(JSON.parse(arrayLocalStorage));
    }
    fetchPlate();
  }, []);

  return (
    <Container>
      <MenuNavBar title={"Favoritos"} />
      <SearchContent>
        <ContentCards>
          {pratos
            .filter((item) => favoritesIds.includes(item.id))
            .map((item, index) => {
              return (
                <CardMenu
                  key={index}
                  plateId={item.id}
                  name={item.name}
                  avatar={item.avatar}
                  price={item.price}
                  ingredients={item.ingredients}
                />
              );
            })}
        </ContentCards>

        <Button title={"Sair"} onClick={() => handleLinkTo("")} />
        <Button title={"Menu"} onClick={() => handleLinkTo("menu")} />
      </SearchContent>
      <Footer />
    </Container>
  );
};
