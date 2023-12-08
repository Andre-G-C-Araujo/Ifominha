import { FaBars } from "react-icons/fa";
import { PiReceipt } from "react-icons/pi";

import imageBranch from "../../assets/Polygono.png";

import { Container, Branch } from "./styles";

export const NavBar = () => {
  return (
    <Container>
      <FaBars />
      <Branch>
        <img src={imageBranch} alt="Logo da marca" />
        <h1>I Fóo minha</h1>
      </Branch>

      <PiReceipt className="icon" />
      <span>0</span>
    </Container>
  );
};
