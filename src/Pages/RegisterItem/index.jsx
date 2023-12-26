import { Container, Content, Heading } from "./styles";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import platesPlaceholder from "../../assets/prato.png";

import { NavBar } from "../../Components/NavBar";
import { ButtonText } from "../../Components/ButtonText";
import { Input } from "../../Components/Input";
import { Footer } from "../../Components/Footer";
import { Select } from "../../Components/Select";
import { SectionTag } from "../../Components/SectionTag";
import { Button } from "../../Components/Button";
import { TagInput } from "../../Components/TagInput";
import { TextArea } from "../../Components/TextArea";
import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/auth";

export const RegisterItem = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");

  const [avatar, setAvatar] = useState(platesPlaceholder);
  const [avatarFile, setAvatarFile] = useState(null);

  const { handleFormAvatarReferencePlate } = useAuth();
  const navigate = useNavigate();

  function handleAddIngrendient() {
    setIngredients((prevState) => [...prevState, newIngredients]);
    setNewIngredients("");
  }

  function handleDeleteIngrendient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleNewPlate() {
    if (!name || !category || !ingredients || !price) {
      return toast.warn("Nenhum campo pode estar em branco");
    }

    if (newIngredients) {
      return toast.warn("Campo preenchido, mas não Confirmado. Revise!");
    }

    const newPlate = await api.post("/pratos", {
      name,
      category,
      description,
      price,
      ingredients,
    });

    await handleFormAvatarReferencePlate({ prato: newPlate, avatarFile });
    toast.success("Prato registrado com suceeeso!");
    navigate("/");
  }

  async function handleChangePlatePhoto(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    if (file) {
      const imagePreview = URL.createObjectURL(file);

      setAvatar(imagePreview);
    }
  }

  return (
    <Container>
      <NavBar />
      <Content action="/" method="post" encType="multipart/form-data">
        <ButtonText title={"Voltar"} Icon={IoIosArrowBack} />
        <Heading>
          <h1>Novo Prato</h1>
          <img src={avatar} alt="Foto do prato" />
          <label htmlFor="avatar">
            <input type="file" id="avatar" onChange={handleChangePlatePhoto} />
          </label>
        </Heading>
        <Input
          type="text"
          title={"Nome"}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          title={"Categoria"}
          onChange={(e) => setCategory(e.target.value)}
        />{" "}
        <SectionTag title={"Ingredientes"}>
          {ingredients.map((ingredient, index) => (
            <TagInput
              key={String(index)}
              value={ingredient}
              onClick={() => handleDeleteIngrendient(ingredient)}
            />
          ))}
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
          placeholder={"R$ 00,00"}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextArea
          title={"Descrição"}
          placeholder={
            "Fale brevemente sobre o prato, seus ingredientes e composição"
          }
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button title={"Salvar alterações"} onClick={handleNewPlate} />
      </Content>

      <Footer />
    </Container>
  );
};
