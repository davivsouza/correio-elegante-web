import styled from "styled-components";
export const InboxMessagesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;
export const Aside = styled.aside`
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
    font-size: 0.8rem;
    font-family: "Inter", sans-serif;
  }

  p {
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
