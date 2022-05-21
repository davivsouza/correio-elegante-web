import { useEffect, useState } from "react";
import { InboxRequest } from "../..";
import { Container, MessageText, Sender } from "./styles";

interface InboxSelectedMessageProps {
  isSelect: boolean;
  messageIdx: number;
  message: InboxRequest[] | undefined;
}

export function InboxSelectedMessage({
  isSelect,
  messageIdx,
  message,
}: InboxSelectedMessageProps) {
  const [messageSelected, setMessageSelected] = useState<InboxRequest>();
  
  useEffect(() => {
    console.log(message);
    
    setMessageSelected(message?.find((m, idx) => idx === messageIdx));
    

  }, [messageIdx]);
  
  return (
    <Container>
      {isSelect && (
        <>
          <h2>{messageSelected?.message_title}</h2>
          <Sender>
            {messageSelected?.name_sender === "Anônimo" ? (
              <img
                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                alt={messageSelected?.name_sender}
              />
            ) : (
              <img
                src={messageSelected?.photoURL_sender}
                alt={messageSelected?.name_sender}
              />
            )}
            <strong>
              {messageSelected?.name_sender}{" "}
              <span>
                {messageSelected?.name_sender === "Anônimo"
                  ? "(este usuário mandou esta mensagem no anonimato)"
                  : messageSelected?.email_sender}
              </span>

            </strong>
            <p>{messageSelected?.created_at} </p>
          </Sender>
          <MessageText>{messageSelected?.message_content}</MessageText>
        </>
      )}
    </Container>
  );
}
