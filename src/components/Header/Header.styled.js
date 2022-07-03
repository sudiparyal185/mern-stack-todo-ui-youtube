import { styled } from "@mui/system";

const StyledContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #bde0fe;
  margin: 8px;
  padding: 8px;
`;
const StyledDashboardDiv = styled("div")`
  flex: 0.8;
  font-weight: 800;
  font-size: 1rem;
  a {
    text-decoration: none;
    color: #283618;
  }
`;

const StyledUserContainer = styled("div")`
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1rem;
    padding: 16px;
    text-decoration: none;
    color: #283618;
  }
`;
const StyledButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #283618;
  background: none;
  border: none;
  cursor: pointer;
  h5 {
    font-weight: 600;
    font-size: 1rem;
  }
`;
export {
  StyledContainer,
  StyledDashboardDiv,
  StyledUserContainer,
  StyledButton,
};
