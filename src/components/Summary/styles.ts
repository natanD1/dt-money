import styled from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

interface SummaryCardProps {
  $variant?: "total";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  border-radius: 6px;
  padding: 2rem;

  background: ${(props) =>
    props.$variant === "total"
      ? props.theme.colors.product["green-700"]
      : props.theme.colors.base["gray-600"]};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme.colors.base["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;

    font-size: 2rem;
    font-weight: bold;
  }
`;
