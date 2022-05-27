import styled from "styled-components";
interface HomeProps {
  messageSent: boolean;
}
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 20px;
`;

export const FormContainer = styled.form`
  width: 50%;
  margin: auto 0;
  padding: 0.8rem 1.2rem;

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const Strong = styled.strong`
  font-family: "Poppins", sans-serif;
  font-size: clamp(0.938rem, 1.5vw, 1.2rem);

  margin-top: 50px;
  text-align: center;
  @media screen and (max-width: 425px) {
    padding: 10px;
  }
`;
export const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  position: relative;

  display: flex;
  align-items: center;

  cursor: pointer;

  &.anonymousLabel {
    padding-left: 25px;
  }

  @media screen and (max-width: 425px) {
    font-size: 0.938rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;

  background: none;
  outline: none;
  border: 1px solid #b6b2b2;

  ::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    color: #b6b2b2;
    @media screen and (max-width: 425px) {
      font-size: 0.938rem;
    }
  }
`;

export const AnonymousCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .checkMark {
    position: absolute;
    top: 50%;
    left: 0;

    height: 20px;
    width: 20px;

    background-color: none;
    border-radius: 50%;
    border: 2px solid #d2339e;

    transform: translateY(-50%);

    ::after {
      content: "";
      position: absolute;
      display: none;
      left: 50%;
      top: 32%;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: translate(-50%, -40%) rotate(45deg);
    }
  }
`;

export const Check = styled.input`
  display: none;

  :checked ~ .checkMark {
    background-color: #d2339e;
  }

  :checked ~ .checkMark::after {
    display: block;
  }
`;

export const MessageTxtArea = styled.textarea`
  resize: none;
  outline: none;

  width: 100%;
  height: 50vh;

  border: 1px solid #b6b2b2;
  background: none;

  padding: 0.8rem 1rem;

  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
`;

export const SubmitMessage = styled.button<HomeProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  border: 1px solid ${(props) => (props.messageSent ? "#38b000" : "#f87d92")};
  color: ${(props) => (props.messageSent ? "#fff" : "#f87d92")};

  font-family: "Poppins", sans-serif;
  font-size: 1rem;

  background: ${(props) => (props.messageSent ? "#38b000" : "none")};

  padding: 0.563rem 1.875rem;
  cursor: pointer;

  transition: all 0.2s ease;

  :hover {
    background: ${(props) => (props.messageSent ? "#38b000" : "#f87d92")};
    color: #fff;
  }

  svg{
    width:30px ;
    height: 30px;
  }
`;


