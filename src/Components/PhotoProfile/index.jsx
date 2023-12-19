import { FiCamera } from "react-icons/fi";
import { Container } from "./styles";

export const PhotoProfileComponent = ({
  photo,
  alter = "Foto do prato",
  ...rest
}) => {
  return (
    <Container>
      <img src={photo} alt={alter} />
      <label htmlFor="avatar">
        <FiCamera />
        <input type="file" id="avatar" {...rest} />
      </label>
    </Container>
  );
};
