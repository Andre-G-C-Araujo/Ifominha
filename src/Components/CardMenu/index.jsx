import { FaRegHeart } from "react-icons/fa";

import { Container, LeftContentCard, RightContentCard } from "./styles";
import platesPlaceholder from "../../assets/prato.png";

import { Tags } from "../Tags";
import { Button } from "../Button";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const CardMenu = ({ name, avatar, price, plateId, ingredients }) => {
  // console.log(isFavorite);

  const avatarUrl = avatar
    ? `${api.defaults.baseURL}/files/${avatar}`
    : platesPlaceholder;

  const decimalNumber = parseFloat(price).toFixed(2);

  const navigate = useNavigate();

  function showDetailsItem(id) {
    navigate(`/itemdetails/${id}`);
  }

  return (
    <Container className="card">
      <LeftContentCard>
        <h1>{name}</h1>

        <img src={avatarUrl} alt="Foto do prato escolhido" />
        <p>{`Preço: ${decimalNumber}`}</p>
      </LeftContentCard>
      <RightContentCard>
        {/* {isFavorite ? <FaRegHeart className="heartIcon" /> : <FaRegHeart />} */}
        <h1>Ingredientes</h1>
        <p>
          {ingredients.map((item) => {
            return <Tags name={item.name} />;
          })}
        </p>
        <Button title={"Detalhes"} onClick={() => showDetailsItem(plateId)} />
      </RightContentCard>
    </Container>
  );
};
