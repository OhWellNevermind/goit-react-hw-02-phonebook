export const ContactsList = ({ onDelete, contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <p>Name: {contact.name}</p>
              <p>Number: {contact.number}</p>
              <button
                value={contact.id}
                onClick={evt => {
                  onDelete(evt.target.value);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
