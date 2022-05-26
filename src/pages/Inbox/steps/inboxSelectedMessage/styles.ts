import styled from "styled-components";

interface IsSelectedMessage{
  isSelect:boolean
}



export const Container = styled.div<IsSelectedMessage>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-family: "Inter", sans-serif;

    @media screen and (max-width: 1024px) {
      font-size: 1.125rem;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (max-width: 425px){
    width: 100%;
    padding: 1rem 1.2rem;
    display: ${props => props.isSelect ? "flex" : "none"};
  }

  .arrowBack{
    width: 20px;
    height: 20px;
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

    @media screen and (max-width: 1024px) {
      width: 30px;
      height: 30px;
    }
  }
  strong {
    font-family: "Inter", sans-serif;
    @media screen and (max-width: 1024px) {
      font-size: 0.938rem;
    }
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

  @media screen and (max-width: 1024px) {
      font-size: 0.8rem;
    }
`;
