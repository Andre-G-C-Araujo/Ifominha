import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";

import { Container, LeftContentCard, RightContentCard } from "./styles";
import platesPlaceholder from "../../assets/prato.png";

import { Tags } from "../Tags";
import { Button } from "../Button";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/auth";

export const CardMenu = ({
  name,
  avatar,
  price,
  plateId,
  ingredients,
  icon,
}) => {
  const [counter, setCounter] = useState(1);
  const [favIconColor, setFavIconColor] = useState("");

  const { handleStateFavorites, handleDeleteStateFavorite } = useAuth();

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
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      toast.error("Já atingiu o minimo de itens");
    }
  }

  async function handleIndexFavorites(id) {
    if (favIconColor === "heartIcon") {
      handleDeleteStateFavorite({ id });
      setFavIconColor("");
    } else {
      setFavIconColor("heartIcon");
      handleStateFavorites({ id });
    }
  }

  useEffect(() => {
    async function getFavoritesArrayFromLocalStore() {
      const getArrayFavFromLocalStorage = localStorage.getItem(
        "@ifoominha:favorites"
      );
      console.log(getArrayFavFromLocalStorage);
      const newArrayFav = JSON.parse(getArrayFavFromLocalStorage);

      if (newArrayFav) {
        newArrayFav
          .filter((item) => plateId === item)
          .map(() => setFavIconColor("heartIcon"));
      }
    }
    getFavoritesArrayFromLocalStore();
  }, []);

  return (
    <Container className={`card`}>
      <LeftContentCard>
        <h1>{name}</h1>
        <img
          src={avatarUrl}
          alt="Foto do prato escolhido"
          onClick={() => showDetailsItem(plateId)}
        />
        <p>{`Preço: ${decimalNumber}`}</p>
        <Button title={"Detalhes"} onClick={() => showDetailsItem(plateId)} />
      </LeftContentCard>
      <RightContentCard>
        <FaRegHeart
          className={`icon ${icon ? "heartIcon" : favIconColor}`}
          onClick={() => handleIndexFavorites(plateId)}
        />
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
