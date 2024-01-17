import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";

import { Container, LeftContentCard, RightContentCard } from "./styles";
import platesPlaceholder from "../../assets/prato.png";

import { Tags } from "../Tags";
import { Button } from "../Button";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export const CardMenu = ({ name, avatar, price, plateId, ingredients }) => {
  const [counter, setCounter] = useState(1);
  const avatarUrl = avatar
    ? `${api.defaults.baseURL}/files/${avatar}`
    : platesPlaceholder;

  const decimalNumber = parseFloat(price).toFixed(2);

  const navigate = useNavigate();

  function showDetailsItem(id) {
    navigate(`/itemdetails/${id}`);
  }
  function handleAddOneCounter() {
    setCounter(counter + 1);
  }
  function handleRemoveOneCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      toast.error("Já atingiu o minimo de itens");
    }
  }

  return (
    <Container className="card">
      <LeftContentCard>
        <h1>{name}</h1>

        <img src={avatarUrl} alt="Foto do prato escolhido" />
        <p>{`Preço: ${decimalNumber}`}</p>
        <Button title={"Detalhes"} onClick={() => showDetailsItem(plateId)} />
      </LeftContentCard>
      <RightContentCard>
        <FaRegHeart className="heartIcon" />
        <h1>Ingredientes</h1>
        <p>
          {ingredients.map((item) => {
            return <Tags name={item.name} />;
          })}
        </p>
        <div>
          <FaMinus onClick={() => handleRemoveOneCounter()} />
          <input type="number" value={counter} />
          <FaPlus onClick={() => handleAddOneCounter()} />
        </div>
        <Button title={"Incluir"} />
      </RightContentCard>
    </Container>
  );
};
