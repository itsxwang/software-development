import { useReducer } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import { messengerReducer } from "./messangerReducer";

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, contacts);
  const message = state.message;
  const contact = state.find((c) => c.selected);
  const selectedId = state.filter(s => s.selected)[0].id

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={state[selectedId].message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com", selected: true,message:'' },
  { id: 1, name: "Alice", email: "alice@mail.com",selected: false,message:'' },
  { id: 2, name: "Bob", email: "bob@mail.com",selected: false,message:'' },
];
