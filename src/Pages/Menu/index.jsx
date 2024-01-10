import { Container, ContentCards, SearchContent } from "./styles";

import { CiSearch } from "react-icons/ci";

import { MenuNavBar } from "../../Components/MenuNavBar";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Footer } from "../../Components/Footer";

import { CardMenu } from "../../Components/CardMenu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Menu = () => {
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [pratos, setPratos] = useState([]);

  const navigate = useNavigate();

  function handleLinkTo(link) {
    navigate(`/${link}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/pratos?name=${search}&category`);
      console.log(response.data);
      setPratos(response.data);
    }
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <MenuNavBar title={"Menu"} />
      <SearchContent>
        <Input
          Icon={CiSearch}
          placeholder="Busque por pratos ou ingredientes"
        />

        <ContentCards>
          {pratos.map((item, index) => {
            return (
              <CardMenu
                key={index}
                name={item.name}
                price={item.price}
                avatar={item.avatar}
                plateId={item.id}
                ingredients={item.ingredients}
              />
            );
          })}
        </ContentCards>

        <Button title={"Sair"} onClick={() => handleLinkTo("")} />
        <Button title={"Favoritos"} onClick={() => handleLinkTo("favorites")} />
      </SearchContent>
      <Footer />
    </Container>
  );
};
