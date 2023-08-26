import propTypes from 'prop-types';

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

ContactsList.propTypes = {
  onDelete: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
};
