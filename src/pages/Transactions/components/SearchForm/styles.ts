import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    padding: 1rem;
    border-radius: 6px;
    border: 0;

    background: ${(props) => props.theme.colors.base["gray-900"]};
    color: ${(props) => props.theme.colors.base["gray-100"]};

    &::placeholder {
      font-weight: 500;
      color: ${(props) => props.theme.colors.base["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-weight: bold;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.colors.product["green-300"]};
    padding: 1rem 2rem;

    background: transparent;
    color: ${(props) => props.theme.colors.product["green-300"]};

    transition: color 0.2s, border-color 0.2s, background-color 0.2s;

    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.product["green-500"]};
      border-color: ${(props) => props.theme.colors.product["green-500"]};
      color: ${(props) => props.theme.colors.base["white"]};
    }
  }
`;
