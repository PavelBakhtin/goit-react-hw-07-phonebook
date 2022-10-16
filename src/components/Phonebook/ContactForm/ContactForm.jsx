import PropTypes from 'prop-types';
import React, { Component } from "react";
import { nanoid } from 'nanoid'
import { StyledForm, StyledFormButton } from "./ContactsForm.styled";

export class ContactForm extends Component {
   
    state = {
        name: '',
        number: '', 
        
      }
      handleInputChange = e => {
       this.setState({
         [e.target.name]:  e.target.value
        })
      }
      reset = () => {
        this.setState({name: '', number: '', filter: '',})
      }
      
      handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.reset()
      }
      
      nameInputId = nanoid()
      numberIputId = nanoid()
      filterInputId = nanoid()
      render() {
        
       return (
        <StyledForm onSubmit={this.handleSubmit} >
          <label htmlFor={this.nameInputId}>Name </label>
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
            autoComplete="off"
            />
           
            <label htmlFor={this.numberInputId}>Number</label>
          <input
          id={this.numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
            autoComplete="off"
          />
            
            < StyledFormButton type="submit" >Add contact</ StyledFormButton>
          </StyledForm>
       )
      }
}


ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}