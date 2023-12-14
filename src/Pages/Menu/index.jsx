import { Container, SearchContent } from "./styles";

import { CiSearch } from "react-icons/ci";

import { MenuNavBar } from "../../Components/MenuNavBar";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Footer } from "../../Components/Footer";

import { CardMenu } from "../../Components/CardMenu";

export const Menu = () => {
  return (
    <Container>
      <MenuNavBar />
      <SearchContent>
        <Input
          Icon={CiSearch}
          placeholder="Busque por pratos ou ingredientes"
        />

        <div
          style={{
            // border: "red solid 1px",
            display: "flex",
            flexWrap: "wrap",

            maxHeight: "340px", // quase esse tamanho...
            marginBottom: "1rem",

            overflowX: "auto",
          }}
        >
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
        </div>

        <Button title={"Sair"} />
        <Button title={"Favoritos"} />
      </SearchContent>
      <Footer />
    </Container>
  );
};
