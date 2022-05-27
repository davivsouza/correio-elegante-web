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
import { handleDate } from "../../services/handleData";

export function Home() {
  const { user } = useAuth();

  const [message, setMessage] = useState("");
  const [addressee, setAddressee] = useState("");
  const [assunto, setAssunto] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [hasMessageSent, setHasMessageSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    api.post("/message", {
      name_sender: isAnonymous ? "Anônimo" : user?.name,
      photoURL_sender: user?.avatar,
      email_sender: user?.email,
      message_content: message,
      email_addresse: addressee,
      message_title: assunto,
      created_at: handleDate(),
    });

    setIsAnonymous(false);
    setMessage("");
    setAddressee("");
    setAssunto("");
  }


  function handleMessageResend() {
    if (hasMessageSent) {
      setHasMessageSent(false);
    } else {
      setHasMessageSent(true);
    }
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
            value={assunto}
            onChange={(e) => {
              setAssunto(e.currentTarget.value);
            }}
          />
          <Label htmlFor="addressee">Destinatário: </Label>
          <Input
            type="text"
            placeholder="coloque o email do destinatário"
            id="addressee"
            name="addressee"
            value={addressee}
            onChange={(e) => {
              setAddressee(e.currentTarget.value);
            }}
          />
          <AnonymousCheckbox>
            <Label className="anonymousLabel" htmlFor="isAnonymous">
              Enviar como anônimo?
              <Check
                type="checkbox"
                id="isAnonymous"
                name="isAnonymous"
                checked={isAnonymous}
                onChange={(e) => {
                  setIsAnonymous(e.currentTarget.checked);
                }}
              />
              <span className="checkMark"></span>
            </Label>
          </AnonymousCheckbox>
          <Label htmlFor="message">Escreva sua linda mensagem: </Label>
          <MessageTxtArea
            id="message"
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.currentTarget.value);
            }}
          />
          <SubmitMessage
            type="submit"
            onClick={() => {
              handleMessageResend();
            }}
            messageSent={hasMessageSent}
          >
            {hasMessageSent ? (
              <>
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.5 34C38.5 36.209 36.709 38 34.5 38H6.5C4.291 38 2.5 36.209 2.5 34V6C2.5 3.791 4.291 2 6.5 2H34.5C36.709 2 38.5 3.791 38.5 6V34Z"
                    fill="#77B255"
                  />
                  <path
                    d="M31.78 8.36202C30.624 7.61102 29.076 7.94002 28.322 9.09802L17.436 25.877L12.407 21.227C11.393 20.289 9.81103 20.352 8.87403 21.365C7.93703 22.379 7.99903 23.961 9.01303 24.898L16.222 31.564C16.702 32.009 17.312 32.229 17.918 32.229C18.591 32.229 19.452 31.947 20.017 31.09C20.349 30.584 32.517 11.82 32.517 11.82C33.268 10.661 32.938 9.11302 31.78 8.36202Z"
                    fill="white"
                  />
                </svg>{" "}
                Enviar outra mensagem
              </>
            ) : (
              "Enviar Mensagem"
            )}
          </SubmitMessage>
        </FormContainer>
      </Container>
      {/* )} */}
    </>
  );
}
