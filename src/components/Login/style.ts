import styled from "styled-components";
interface LoginButtonProps {
  bgImg: string;
}
export const LoginGoogle = styled.button<LoginButtonProps>`
  width: 30%;
  padding: 0.438rem 0.8rem 0.438rem 2rem;
  
  text-align: center;
  background: none;
  border: 1px solid #b6b2b2;

  color: #7a7777;
  font-size: 0.938rem;
  font-family: "Poppins", sans-serif;

  position: relative;
  cursor: pointer;

  transition: all 0.2s ease;

  :hover {
    border-color: #f87d92;
    color: #f87d92 ;
  }

  ::before {
    content: "";
    position: absolute;
    left: 40px;
    width: 24px;
    height: 24px;
    background-image: url(${(props) => props.bgImg});
  }

  @media screen and (max-width:768px){
    width: 40%;
  }
  @media screen and (max-width:425px){
    width: 70%;
  }
  @media screen and (max-width: 320px){
    width:90%;
  }
`;