import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;

  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.colors.base["gray-800"]};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    input {
      padding: 1rem;

      color: ${(props) => props.theme.colors.base["gray-100"]};
      background-color: ${(props) => props.theme.colors.base["gray-900"]};

      border-radius: 6px;
      border: 0;

      &::placeholder {
        font-weight: 500;
        color: ${(props) => props.theme.colors.base["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      margin-top: 1.5rem;

      padding: 0 1.25rem;
      border: none;
      border-radius: 6px;

      font-weight: bold;

      cursor: pointer;

      color: ${(props) => props.theme.colors.base["white"]};
      background-color: ${(props) => props.theme.colors.product["green-500"]};

      transition: background-color 0.2s;

      &:hover {
        background-color: ${(props) => props.theme.colors.product["green-700"]};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  border: 0;

  line-height: 0;

  background: transparent;
  color: ${(props) => props.theme.colors.base["gray-500"]};

  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.product["red-300"]};
  }
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButton {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;

  cursor: pointer;

  border: 0;
  border-radius: 6px;

  background-color: ${(props) => props.theme.colors.base["gray-700"]};
  color: ${(props) => props.theme.colors.base["gray-300"]};

  &[data-state="checked"] { // Estilizando o Hover do RadixUI para o estado selecionado
    color: ${(props) => props.theme.colors.base["white"]};
    background-color: ${(props) =>
    props.variant === "income"
        ? props.theme.colors.product["green-300"]
        : props.theme.colors.product["red-300"]};

        svg{
          color: ${(props) => props.theme.colors.base["white"]}
        }
  }
  
  &[data-state="unchecked"]:hover { // Estilizando o Hover do RadixUI para o estado não selecionado
    transition: background-color 0.2s;
    background-color: ${(props) => props.theme.colors.base["gray-600"]};
  }

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme.colors.product["green-300"]
        : props.theme.colors.product["red-300"]};
  }
`;
