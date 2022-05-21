import { useAuth } from "../../hooks/useAuth";
import { NavbarContainer } from "../../components/Navbar";
import { InboxMessages } from "./steps/inboxMessages";

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
  return (
    <div>
      <NavbarContainer />
      <InboxMessages />
    </div>
  );
}