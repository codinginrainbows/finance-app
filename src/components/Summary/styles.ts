import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -6rem;
`;

export const Card = styled.div`
  background: var(--shape);
  width: 334px;
  padding: 1.5rem 2rem;

  border-radius: 5px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);

  header {
    color: var(--text-title);
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: var(--text-title);
    }
  }

  div {
    margin-top: 1rem;

    strong {
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 3rem;
      color: var(--text-title);
    }
  }

  transition: transform 0.6s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  // alternative styling for special card
  &.balanceCard {
    background: var(--green);

    strong {
      color: #fff;
    }

    header {
    color: #fff;

      p {
        color: #fff;
      }
    }
  }
  // end of alternative styling for special card
`;
