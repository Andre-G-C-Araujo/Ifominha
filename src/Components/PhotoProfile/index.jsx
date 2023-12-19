import { FiCamera } from "react-icons/fi";
import { Container } from "./styles";

export const PhotoProfileComponent = () => {
  return (
    <Container>
      <img src="https://github.com/Andre-G-C-Araujo.png" alt="Foto do prato" />
      <label htmlFor="avatar">
        <FiCamera />
        <input type="file" id="avatar" />
        {/* onChange={handleAvatarUpload} */}
      </label>
    </Container>
  );
};
