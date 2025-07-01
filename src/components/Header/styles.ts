import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;

  background: ${(props) => props.theme.colors.base["gray-900"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  height: 50px;

  border: 0;
  border-radius: 6px;
  padding: 0 1.25rem;

  background: ${(props) => props.theme.colors.product["green-700"]};
  color: ${(props) => props.theme.colors.base["white"]};

  font-weight: bold;

  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.product["green-500"]};
  }
`;
