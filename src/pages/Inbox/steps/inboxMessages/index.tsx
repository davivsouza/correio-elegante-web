import { api } from "../../../../api/api";
import { AxiosResponse } from "axios";
import { Aside, InboxMessagesContainer, Message, ThereNoMessages } from "./styles";
import { useEffect, useState } from "react";
import { InboxRequest } from "../..";
import { useAuth } from "../../../../hooks/useAuth";
import { InboxSelectedMessage } from "../inboxSelectedMessage";

export function InboxMessages() {
  const { user } = useAuth();
  const [inbox, setInbox] = useState<InboxRequest[]>();
  const [isSelected, setIsSelected] = useState(false);
  const [messageIdx, setMessageIdx] = useState<number>(0);
  const [isThereMessages, setIsThereMessages] = useState(false);

  useEffect(() => {
    async function fetch() {
      const response: AxiosResponse<InboxRequest[]> = await api.get(
        `/inbox/${user?.email}`
      );
      const result = response.data;
      if (result.length == 0) {
        setIsThereMessages(false);
      } else {
        setIsThereMessages(true);

      }

      setInbox(result.reverse());
    }

    fetch();
  }, [inbox, user]);

  function handleSelectedMessage(idx: number) {
    setMessageIdx(idx);
    setIsSelected(true);
  }
  return (
    <>
      {isThereMessages ? (
        <InboxMessagesContainer>
          <Aside isSelected={isSelected}>
            <h3>Mensagem recebidas</h3>
            {inbox?.map((message, idx) => (
              <Message key={idx} onClick={() => handleSelectedMessage(idx)}>
                <strong>{message.message_title}</strong>
                <p>{message.message_content}</p>
              </Message>
            ))}
          </Aside>
          <InboxSelectedMessage
            message={inbox}
            messageIdx={messageIdx}
            isSelect={isSelected}
            onSelect={setIsSelected}
          />
        </InboxMessagesContainer>
      ) : (
        <ThereNoMessages>
          <h3>Nenhuma mensagem recebida!</h3>
        </ThereNoMessages>
      )}
    </>
  );
}
