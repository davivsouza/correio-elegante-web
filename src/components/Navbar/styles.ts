import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.8rem 10% 0;

  @media screen and (max-width: 425px) {
    padding: 10px 0;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    font-family: "Poppins", sans-serif;
    @media screen and (max-width: 425px) {
      font-size: 0.938rem;
    }
    @media screen and (max-width: 425px) {
      font-size: 0.8rem;
    }
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

  @media screen and (max-width: 425px) {
    gap: 10px;
    padding-right: 10px;
  }
`;

export const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border-radius: 50%;

  &.logo {
    @media screen and (max-width: 425px) {
      width: 200px;
    }
    @media screen and (max-width: 320px) {
      width: 150px;
    }
  }

  &.userAvatar {
    @media screen and (max-width: 425px) {
      width: 35px;
      height: 35px;
    }
  }
  &.inbox {
    cursor: pointer;
  }
`;
