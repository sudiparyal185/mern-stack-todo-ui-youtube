import { styled } from "@mui/system";

const StyledTodoContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  margin: 16px;
  padding: 8px;
  p {
    color: #cdb4db;
    font-weight: 800;
  }
`;

const StyledTodoActionContainer = styled(`div`)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h1 {
    flex: 0.9;
    color: #283618;
  }
`;

const StyledActionTodo = styled("div")``;

export { StyledTodoContainer, StyledTodoActionContainer, StyledActionTodo };
