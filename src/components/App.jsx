import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { NewContactForm } from './NewContactForm/NewContactForm';
import { nanoid } from 'nanoid';
import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = newContact => {
    const isInContacts = this.state.contacts.filter(contact => {
      return newContact.number === contact.number;
    }).length;

    if (isInContacts) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  onSearch = value => {
    this.setState({ filter: value });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contacts => contacts.id !== contactId
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1>PhoneBook</h1>
        <NewContactForm
          addNew={this.addNewContact}
          setName={this.setName}
          setNumber={this.setNumber}
        ></NewContactForm>
        <h2>Contacts</h2>
        <ContactsList
          onDelete={this.onDeleteContact}
          contacts={visibleContacts}
        ></ContactsList>
        {!visibleContacts.length ? (
          <p>There is no contacts</p>
        ) : (
          <SearchBar onSearch={this.onSearch}></SearchBar>
        )}
      </>
    );
  }
}
