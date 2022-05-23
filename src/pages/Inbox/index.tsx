import { useAuth } from "../../hooks/useAuth";
import { NavbarContainer } from "../../components/Navbar";
import { InboxMessages } from "./steps/inboxMessages";
import { Loading } from "../../components/Loading";

export interface InboxRequest {
  email_sender: string;
  message_content: string;
  email_addresse: string;
  message_title: string;
  name_sender: string;
  photoURL_sender: string;
  created_at: string;
}

export function Inbox() {
  const {user} = useAuth()

  if(!user){
    return(
      <Loading/>
    )}else{
      return (
        <div>
          <NavbarContainer />
          <InboxMessages />
        </div>
      );
    }
  }

