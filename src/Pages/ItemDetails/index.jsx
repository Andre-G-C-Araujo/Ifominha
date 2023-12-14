import { IoIosArrowBack } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { PiReceipt } from "react-icons/pi";

import {
  Container,
  Content,
  DescriptionContent,
  ButtonContent,
} from "./styles";

import { NavBar } from "../../Components/NavBar";
import { ButtonText } from "../../Components/ButtonText";
import { Footer } from "../../Components/Footer";
import { Tags } from "../../Components/Tags";
import { Button } from "../../Components/Button";

export const ItemDetails = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <ButtonText title={"Voltar"} Icon={IoIosArrowBack} />
        <img
          src="https://github.com/Andre-G-C-Araujo.png"
          alt="Foto do prato"
        />
        <DescriptionContent>
          <h1>Salada Ravanello</h1>

          <p>
            {/* Futuamente recebe description. */}
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <Tags />
        </DescriptionContent>

        <ButtonContent>
          <div style={{ display: "flex" }}>
            <FaMinus />
            <input type="number" value={"01"} />
            <FaPlus />
          </div>
        </ButtonContent>
        <Button title={`pedir - ${"25:00"}`} Icon={PiReceipt} />
      </Content>

      <Footer />
    </Container>
  );
};
