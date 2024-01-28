import { Container, Content, Heading, ButtonBottomContent } from "./styles";

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import { NavBar } from "../../Components/NavBar";
import { ButtonText } from "../../Components/ButtonText";
import { Input } from "../../Components/Input";
import { Footer } from "../../Components/Footer";
import { Select } from "../../Components/Select";
import { SectionTag } from "../../Components/SectionTag";
import { Button } from "../../Components/Button";
import { TagInput } from "../../Components/TagInput";
import { TextArea } from "../../Components/TextArea";

import { IoIosArrowBack } from "react-icons/io";
import platesPlaceholder from "../../assets/prato.png";
import { toast } from "react-toastify";

export const EditItem = () => {
  const navigate = useNavigate("");
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [pratoId, setPratoId] = useState();

  const [oldIngredients, setOldIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");

  const params = useParams();
  const avatarUrl = data.avatar
    ? `${api.defaults.baseURL}/files/${data.avatar}`
    : platesPlaceholder;

  function handleAddIngrendient() {
    if (!newIngredients) {
      return alert("Ingrediente nao pode estar vazio");
    }

    setIngredients((prevState) => [...prevState, newIngredients]);
    setNewIngredients("");
  }
  function handleDeleteIngrendient(deleted) {
    setOldIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function updatedPrate() {
    console.log(ingredients);
    console.log(oldIngredients);

    if (newIngredients) {
      return toast.warn("Campo preenchido, mas não Confirmado. Revise!");
    }

    navigate("/");

    await api.put("/pratos", {
      name,
      category,
      price,
      description,
      ingredients,
      // oldIngredients,
      prato_id: pratoId,
    });
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/pratos/${params.id}`);
      setData(response.data);
      setName(response.data.name);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setPratoId(response.data.id);

      setOldIngredients(response.data.ingredients);
    }
    fetchPlate();
  }, []);

  return (
    <Container>
      <NavBar />
      <Content>
        <ButtonText title={"Voltar"} Icon={IoIosArrowBack} />

        <Heading>
          <h1>Editar prato</h1>
          <img src={avatarUrl} alt="Foto do prato" />
        </Heading>
        <Input type="file" title={"Imagem do prato"} />
        <Input
          type="text"
          title={"Nome"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Select
          title={"Categoria"}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <SectionTag title={"Ingredientes"}>
          {oldIngredients.map((ingredient, index) => (
            <TagInput
              key={String(index)}
              value={ingredient.name}
              onClick={() => handleDeleteIngrendient(ingredient)}
            />
          ))}
          {ingredients.length > 0
            ? ingredients.map((ingredient, index) => (
                <TagInput
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleDeleteIngrendient(ingredient)}
                />
              ))
            : ""}
          <TagInput
            isnew
            placeholder={"Adicionar"}
            value={newIngredients}
            onChange={(e) => setNewIngredients(e.target.value)}
            onClick={handleAddIngrendient}
          />
        </SectionTag>
        <Input
          title={"Preço"}
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder={"R$ 00,00"}
        />

        <TextArea
          title={"Descrição"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={
            "Fale brevemente sobre o prato, seus ingredientes e composição"
          }
        />
        <ButtonBottomContent>
          <Button title={"Excluir Prato"} />
          <Button
            title={"Salvar alterações"}
            linkto={"/"}
            onClick={updatedPrate}
          />
        </ButtonBottomContent>
      </Content>

      <Footer />
    </Container>
  );
};
