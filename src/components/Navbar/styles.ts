import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.8rem 10% 0;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    font-family: "Poppins", sans-serif;
  }

  &.user {
    a {
      margin-top: 7px;
      transition: all 0.2s ease;
      :hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border-radius: 50%;

  &.inbox {
    cursor: pointer;

    
  }
`;
