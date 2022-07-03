import { styled } from "@mui/system";

const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const StyledFormHeader = styled("section")`
  color: #283618;
  h1 {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 2rem;
    svg {
      font-size: 3rem;
    }
  }
  p {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 16px;
    margin-top: 16px;
  }
`;

const StyledFormContainer = styled("section")`
  background: #f1faee;
  min-width: 400px;
  min-height: 300px;
  border: 1px dotted #cdb4db;
  border-radius: 8px;
`;

const StyledInputContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
  padding: 16px;
  input {
    height: 48px;
    flex: 1;
    border: 1px solid #bde0fe;
    border-radius: 8px;
  }
`;

const StyledButtonContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
  padding: 16px;
  button {
    height: 48px;
    flex: 1;
    border-radius: 8px;
  }
`;

export {
  StyledContainer,
  StyledFormHeader,
  StyledFormContainer,
  StyledInputContainer,
  StyledButtonContainer,
};
