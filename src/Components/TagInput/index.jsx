import { Container } from "./styles";

import { FiX, FiPlus } from "react-icons/fi";

export const TagInput = ({ isnew = false, ...rest }) => {
  console.log(isnew);

  return (
    <Container isnew={isnew}>
      <input type="text" {...rest} />
      <button>{isnew ? <FiPlus /> : <FiX />}</button>
    </Container>
  );
};
