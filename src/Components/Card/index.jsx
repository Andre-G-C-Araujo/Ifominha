import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

import { Container } from "./styles";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Button } from "../Button";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/auth";

export const Card = ({ name, avatar, price, plateId }) => {
  const { handleStateFavorites, handleDeleteStateFavorite } = useAuth();

  const avatarUrl = avatar
    ? `${api.defaults.baseURL}/files/${avatar}`
    : avatarPlaceholder;
  const [counter, setCounter] = useState(1);
  const [favIconColor, setFavIconColor] = useState("");

  const [getFavLocalStore, setGetFavLocalStore] = useState();

  const priceTotalItens = price * counter;
  const decimalNumber = parseFloat(priceTotalItens).toFixed(2);

  const navigate = useNavigate();

  function handleAddOneCounter() {
    setCounter(counter + 1);
  }
  function handleRemoveOneCounter() {
    if (counter === 0) {
      setCounter(counter - 1);
    } else {
      toast.error("Já atingiu o minimo de itens");
    }
  }
  function showDetailsItem(id) {
    navigate(`/itemdetails/${id}`);
  }

  async function handleIndexFavorites(id) {
    if (favIconColor === "") {
      setFavIconColor("heartIcon");
      handleStateFavorites({ id });
    } else {
      setFavIconColor("");
      handleDeleteStateFavorite({ id });
    }
  }

  useEffect(() => {
    async function getFavoritesArrayFromLocalStore() {
      const arrayFavString = localStorage.getItem("@ifoominha:favorites");
      const arrayFav = JSON.parse(arrayFavString);

      arrayFav
        .filter((item) => plateId === item)
        .map(() => setFavIconColor("heartIcon"));
    }
    getFavoritesArrayFromLocalStore();
  }, []);

  return (
    <Container className="card">
      <FaRegHeart
        className={favIconColor}
        onClick={() => handleIndexFavorites(plateId)}
      />
      <img
        src={avatarUrl}
        alt="Foto do prato escolhido"
        onClick={() => showDetailsItem(plateId)}
      />

      <h1 className="card-title">{name}</h1>
      <p>Preço:{decimalNumber}</p>

      <div className="counterInput">
        <FaMinus onClick={() => handleRemoveOneCounter()} />
        <input type="number" value={counter} />
        <FaPlus onClick={() => handleAddOneCounter()} />
      </div>

      <Button title={"Incluir"} />
    </Container>
  );
};
