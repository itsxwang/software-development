export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return state.map((contact) => {
        if (contact.id === action.contactId) {
          return {
            ...contact,
            selected: true,
          };
        } else {
          return {
            ...contact,
            selected: false,
          };
        }
      });
    }
    case "edited_message": {
      return state.map((contact) => {
        if (contact.id === action.id) {
          return {
            ...contact,
            message: action.message,
          };
        } else {
          return contact;
        }
      });
    }
    case "sent_message": {
      return state.map((contact) => {
        if (contact.selected) {
          return {
            ...contact,
            message: "",
          };
        } else {
          return contact;
        }
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
