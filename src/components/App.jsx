import React, { Component } from "react"
import { Section } from "./Phonebook/Section"
import {ContactForm} from "./Phonebook/ContactForm/ContactForm"
import { ContactsList } from "./Phonebook/ContactsList/ContactsList"
import { nanoid } from 'nanoid'
import { Filter } from "./Phonebook/Filter"
import { StyledApp } from "./Phonebook/App.Styled"
export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    
  }
  deleteContacts = (contactID) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID ),
    }))
  }
  onFilter = e => {
    this.setState(
      {filter: e.currentTarget.value}
    )
  }
  formSubmitHandler = data => {
      const newContact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      }
      console.log(newContact.name)
      if (this.state.contacts.some(contact => contact.name === newContact.name) ){
        alert(`${newContact.name} is already in contacts`)
        return
      } else
        {
          this.setState(({contacts}) => ({
            contacts: [newContact, ...contacts ]
    
          })
            )
        }
      
  }

  render() {
    const normalizedFilter = this.state.filter.toLowerCase()
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    return (
      <StyledApp>
        <Section title={'Phonebook'}>
        <ContactForm onSubmit = {this.formSubmitHandler}/>
        </Section>
        <Section title={'Contacts'}>
        <Filter onChange = {this.onFilter} value={this.state.filter}/>
        <ContactsList contacts = {visibleContacts} deleteContact = {this.deleteContacts}/>
        </Section>
        
      </StyledApp>
    );
  }
};





// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}