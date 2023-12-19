import { Container, ContentCards, SearchContent } from "./styles";

import { CiSearch } from "react-icons/ci";

import { MenuNavBar } from "../../Components/MenuNavBar";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Footer } from "../../Components/Footer";

import { CardMenu } from "../../Components/CardMenu";
import { useNavigate } from "react-router-dom";

export const Favorites = () => {
  const navigate = useNavigate();

  function handleLinkTo(link) {
    navigate(`/${link}`);
  }
  return (
    <Container>
      <MenuNavBar title={"Favoritos"} />
      <SearchContent>
        <Input
          Icon={CiSearch}
          placeholder="Busque por pratos ou ingredientes"
        />

        <ContentCards>
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
        </ContentCards>

        <Button title={"Sair"} onClick={() => handleLinkTo("")} />
        <Button title={"Menu"} onClick={() => handleLinkTo("menu")} />
      </SearchContent>
      <Footer />
    </Container>
  );
};
