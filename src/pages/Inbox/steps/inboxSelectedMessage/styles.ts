import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h2 {
    font-family: "Inter", sans-serif;
  }
`;

export const Sender = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
  }
  strong {
    font-family: "Inter", sans-serif;
  }
  span {
    font-family: "Inter", sans-serif;
    font-size: 0.8rem;
    color: #b6b2b2;
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 0.8rem;
  }
`;
export const MessageText = styled.p`
  font-family: "Inter", sans-serif;
  width: 90%;
  word-break: break-word;
`;
