import { IoIosArrowBack } from "react-icons/io";

import { Container, Content, Heading, ButtonBottomContent } from "./styles";

import { NavBar } from "../../Components/NavBar";
import { ButtonText } from "../../Components/ButtonText";
import { Input } from "../../Components/Input";
import { Footer } from "../../Components/Footer";
import { Select } from "../../Components/Select";
import { SectionTag } from "../../Components/SectionTag";
import { Button } from "../../Components/Button";
import { TagInput } from "../../Components/TagInput";
import { TextArea } from "../../Components/TextArea";

export const EditItem = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <ButtonText title={"Voltar"} Icon={IoIosArrowBack} />

        <Heading>
          <h1>Editar prato</h1>
          <img
            src="https://github.com/Andre-G-C-Araujo.png"
            alt="Foto do prato"
          />
        </Heading>
        <Input type="file" title={"Imagem do prato"} />
        <Input type="text" title={"Nome"} />

        <Select title={"Categoria"} />

        <SectionTag title={"Ingredientes"}>
          <TagInput value={"Cenoura"} />
          <TagInput isnew placeholder={"Adicionar"} />
        </SectionTag>
        <Input title={"Preço"} type="text" placeholder={"R$ 00,00"} />

        <TextArea
          title={"Descrição"}
          placeholder={
            "Fale brevemente sobre o prato, seus ingredientes e composição"
          }
        />
        <ButtonBottomContent>
          <Button title={"Excluir Prato"} />
          <Button title={"Salvar alterações"} linkto={"/"} />
        </ButtonBottomContent>
      </Content>

      <Footer />
    </Container>
  );
};
