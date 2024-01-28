import { Container } from "./styles";

import { FiX, FiPlus } from "react-icons/fi";

export const TagInput = ({ isnew = false, value, onClick, ...rest }) => {
  return (
    <Container isnew={isnew}>
      <input type="text" {...rest} value={value} readOnly={!isnew} {...rest} />
      <button type="button" onClick={onClick}>
        {isnew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
};
