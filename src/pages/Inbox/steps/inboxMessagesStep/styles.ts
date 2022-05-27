import styled from "styled-components";

export interface SelectedMessageProps {
  isSelected?: boolean;
}

export const InboxMessagesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
`;

export const Aside = styled.aside<SelectedMessageProps>`
  width: 30%;
  
  display: flex;
  flex-direction: column;
  gap: 12px;

 

  margin-top: 20px;
  padding: 2.5rem 1.2rem 2.5rem 11.375rem;

  border-right: 1px solid #b6b2b2;

  h3 {
    font-family: "Poppins", sans-serif;
    color: #f87d92;
    font-weight: 400;
    padding-left: 0.5rem;

    @media screen and (max-width: 1024px) {
      font-size: 0.938rem;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 30%;
    padding: 0.5rem;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    display: ${(props)=> props.isSelected ? "none" : "flex"};
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  border-bottom: 1px solid #b6b2b2;

  padding: 0.5rem;

  cursor: pointer;

  :hover {
    background: #b6b2b225;
    background-clip: padding-box;
  }
  strong,
  p {
    font-size: clamp(0.75rem, 1vw, 0.8rem);
    font-family: "Inter", sans-serif;
  }

  p {
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 1024px) {
    padding: 0.5rem 0.8rem;
  }
`;

export const ThereNoMessages = styled.div`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-family: "Poppins", sans-serif;

    text-align: center;
  }
`;
