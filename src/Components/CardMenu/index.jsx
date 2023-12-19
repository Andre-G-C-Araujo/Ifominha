import { FaRegHeart } from "react-icons/fa";

import { Container, LeftContentCard, RightContentCard } from "./styles";

import { Button } from "../Button";

export const CardMenu = ({ isFavorite = false }) => {
  // console.log(isFavorite);

  return (
    <Container className="card">
      <LeftContentCard>
        <h1>Salada Ravanello Strognofe</h1>

        <img
          src="https://github.com/Andre-G-C-Araujo.png"
          alt="Foto do prato escolhido"
        />
        <p>Preço: 14,99</p>
      </LeftContentCard>
      <RightContentCard>
        {isFavorite ? <FaRegHeart className="heartIcon" /> : <FaRegHeart />}
        <h1>Ingredientes</h1>
        <p>
          Alface, Almodengona, Catupiris, Cheddar, Prato, Prado, LuisVitton,
          Carne moida
        </p>
        <Button title={"Detalhes"} />
        {/*linkto={`itemdetails/:${id}`} */}
      </RightContentCard>
    </Container>
  );
};
