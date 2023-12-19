import { useState } from "react";

import { FaBars } from "react-icons/fa";

import { Container } from "./styles";
import { Button } from "../Button";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export const MenuBar = () => {
  const [openClose, setOpenClose] = useState("");
  const { signOut, admin } = useAuth();
  const navigate = useNavigate();

  function handleLinkTo(link) {
    navigate(`/${link}`);
  }

  function handleSignOut() {
    // window.confirm("Deseja realmente sair?");
    if (window.confirm("Deseja realmente sair?")) {
      signOut();
      navigate("/");
    }
  }

  function OpenMenuBar() {
    if (openClose === "") {
      setOpenClose("show");
    } else {
      setOpenClose("");
    }
  }

  return (
    <Container>
      <FaBars onClick={OpenMenuBar} />
      <div className={`menubar ${openClose}`}>
        <Button title={"Menu"} onClick={() => handleLinkTo("menu")} />
        <Button
          title={"Editar Dados"}
          onClick={() => handleLinkTo("profile")}
        />
        <Button title={"Favoritos"} onClick={() => handleLinkTo("favorites")} />
        {admin ? (
          <Button
            title={"Cadastrar prato"}
            onClick={() => handleLinkTo("registerItem")}
          />
        ) : (
          ""
        )}
        {admin ? (
          <Button
            title={"Editar Prato"}
            onClick={() => handleLinkTo("edititem")}
          />
        ) : (
          ""
        )}

        <Button
          title={"Sair (Logout)"}
          style={{ color: "red", position: "absolute", bottom: "0" }}
          onClick={handleSignOut}
        />

        {/* <Link to="menu">Menu</Link>
        <Link to="profile">Editar Dados</Link>
        <Link to="registerItem">Cadastrar prato</Link> */}
        {/*Link para carrinhos / pedidos */}
      </div>
    </Container>
  );
};
