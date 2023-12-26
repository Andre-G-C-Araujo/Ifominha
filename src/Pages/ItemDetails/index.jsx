import { IoIosArrowBack } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { PiReceipt } from "react-icons/pi";

import platesPlaceholder from "../../assets/prato.png";

import {
  Container,
  Content,
  DescriptionContent,
  ButtonContent,
  TagContent,
} from "./styles";

import { NavBar } from "../../Components/NavBar";
import { ButtonText } from "../../Components/ButtonText";
import { Footer } from "../../Components/Footer";
import { Tags } from "../../Components/Tags";
import { Button } from "../../Components/Button";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

export const ItemDetails = () => {
  const [data, setData] = useState("");
  const params = useParams();
  const [counter, setCounter] = useState(1);

  const avatarUrl = data.avatar
    ? `${api.defaults.baseURL}/files/${data.avatar}`
    : platesPlaceholder;

  const priceTotalItens = data.price * counter;
  const decimalNumber = parseFloat(priceTotalItens).toFixed(2);

  function handleAddOneCounter() {
    setCounter(counter + 1);
  }
  function handleRemoveOneCounter() {
    setCounter(counter - 1);
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/pratos/${params.id}`);
      setData(response.data);
    }
    fetchPlate();
  }, []);

  return (
    <Container>
      <NavBar />
      <Content>
        <ButtonText title={"Voltar"} Icon={IoIosArrowBack} />
        <img src={avatarUrl} alt="Foto do prato" />
        <DescriptionContent>
          <h1>{data ? data.name : "Algo deu errado!"}</h1>

          <p>{data ? data.description : "Algo deu errado!"}</p>

          <TagContent>
            {data
              ? data.ingredients.map((item, index) => {
                  return <Tags key={index} name={item.name} />;
                })
              : "Algo deu errado!"}
          </TagContent>
        </DescriptionContent>

        <ButtonContent>
          <div style={{ display: "flex" }}>
            <FaMinus onClick={() => handleRemoveOneCounter()} />
            <input type="number" value={counter} />
            <FaPlus onClick={() => handleAddOneCounter()} />
          </div>
        </ButtonContent>
        <Button
          title={data ? `Preço: ${decimalNumber} ` : "Algo deu errado!"}
          Icon={PiReceipt}
        />
      </Content>

      <Footer />
    </Container>
  );
};
