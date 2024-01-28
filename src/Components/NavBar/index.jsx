import { PiReceipt } from "react-icons/pi";

import imageBranch from "../../assets/Polygono.png";

import { Container, Branch } from "./styles";
import { MenuBar } from "../MenuBar";
import { useAuth } from "../../hooks/auth";

export const NavBar = () => {
  const { admin } = useAuth();
  return (
    <Container>
      <MenuBar />
      {/* <CartBar /> */}
      <Branch>
        <img src={imageBranch} alt="Logo da marca" />
        <h1>I Fóo minha</h1>
        {admin ? <p>admin</p> : ""}
      </Branch>

      <PiReceipt className="icon" />
      <span>0</span>
    </Container>
  );
};
