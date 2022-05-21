import { Aside, InboxMessagesContainer, Message } from "./styles";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { api } from "../../../../api/api";
import { InboxRequest } from "../..";
import { useAuth } from "../../../../hooks/useAuth";
import { InboxSelectedMessage } from "../inboxSelectedMessage";

export function InboxMessages() {
  const { user } = useAuth();
  const [inbox, setInbox] = useState<InboxRequest[]>();
  const [isSelected, setIsSelected] = useState(false);
  const [messageIdx, setMessageIdx] = useState<number>(0);

  useEffect(() => {
    async function fetch() {
      const response: AxiosResponse<InboxRequest[]> = await api.get(
        `/inbox/${user?.email}`
      );
      const result = response.data;

      setInbox(result.reverse());
    }

    fetch();
  }, [inbox, user]);

  function handleSelectedMessage(idx: number) {
    setMessageIdx(idx)
    setIsSelected(true);
        
  }
  return (
    <InboxMessagesContainer>
      <Aside>
        <h3>Mensagem recebidas</h3>
        {inbox?.map((message, idx) => (
          <Message key={idx} onClick={() => handleSelectedMessage(idx)}>
            <strong>{message.message_title}</strong>
            <p>{message.message_content}</p>
          </Message>
        ))}
      </Aside>
      <InboxSelectedMessage message={inbox} messageIdx={messageIdx} isSelect={isSelected}/>
    </InboxMessagesContainer>
  );
}
