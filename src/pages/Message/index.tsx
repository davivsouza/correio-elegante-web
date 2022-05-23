import { Loading } from "../../components/Loading";
import { FormEvent, useState } from "react";
import { api } from "../../api/api";
import { AxiosResponse } from "axios";
import { NavbarContainer } from "../../components/Navbar";
import { useAuth } from "../../hooks/useAuth";
import {
  Container,
  FormContainer,
  Strong,
  Label,
  Input,
  AnonymousCheckbox,
  Check,
  MessageTxtArea,
  SubmitMessage,
} from "./styles";

export function Message() {
  const { user } = useAuth();

  const [message, setMessage] = useState("");
  const [addressee, setAddressee] = useState("");
  const [assunto, setAssunto] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    api.post("/message", {
      name_sender: isAnonymous ? "Anônimo" : user?.name,
      photoURL_sender: user?.avatar,
      email_sender: user?.email,
      message_content: message,
      email_addresse: addressee,
      message_title: assunto,
      created_at: '12/12/2005'
    });
  }

  function handleCheckAnonymous(e: FormEvent<HTMLInputElement>) {
    setIsAnonymous(e.currentTarget.checked);
  }
  function handleMessageTxt(e: FormEvent<HTMLTextAreaElement>) {
    setMessage(e.currentTarget.value);
  }
  function handleAddressee(e: FormEvent<HTMLInputElement>) {
    setAddressee(e.currentTarget.value);
  }
  function handleAssunto(e: FormEvent<HTMLInputElement>) {
    setAssunto(e.currentTarget.value);
  }


    return (
      <>
        <NavbarContainer />
        <Container>
          <Strong>Declare seu amor e respeito pra quem você quiser!</Strong>
          <FormContainer onSubmit={handleSubmit}>
            <Label htmlFor="assunto">Assunto: </Label>
            <Input
              type="text"
              placeholder="coloque o assunto da mensagem"
              id="assunto"
              name="assunto"
              onChange={handleAssunto}
            />
            <Label htmlFor="addressee">Destinatário: </Label>
            <Input
              type="text"
              placeholder="coloque o email do destinatário"
              id="addressee"
              name="addressee"
              onChange={handleAddressee}
            />
            <AnonymousCheckbox>
              <Label className="anonymousLabel" htmlFor="isAnonymous">
                Enviar como anônimo?
                <Check
                  type="checkbox"
                  id="isAnonymous"
                  name="isAnonymous"
                  onChange={handleCheckAnonymous}
                />
                <span className="checkMark"></span>
              </Label>
            </AnonymousCheckbox>
            <Label htmlFor="message">Escreva sua linda mensagem: </Label>
            <MessageTxtArea
              id="message"
              name="message"
              onChange={handleMessageTxt}
            />
            <SubmitMessage type="submit">Enviar mensagem</SubmitMessage>
          </FormContainer>
        </Container>
      </>
    );
  }
