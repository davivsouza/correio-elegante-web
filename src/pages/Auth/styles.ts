import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  height: 70vh;

  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  gap: 0.75rem;

  p {
    width: 50%;
    color: #f87d92;
    font-size: clamp(1rem, 1vw, 1.25rem);
    font-family: "Poppins", sans-serif;

    @media screen and (max-width:425px){
      width:70%;
    }
  }
`;

export const Logo = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  transform: translateX(-30px);
`;


