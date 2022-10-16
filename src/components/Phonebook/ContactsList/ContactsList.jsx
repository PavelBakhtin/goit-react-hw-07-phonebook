import PropTypes,{ object} from 'prop-types';
import React from "react"
import { StyledContactsList, StyledContactsListButton, StyledContactsLi } from "./ContactsList.styled"

export const ContactsList = ({contacts, deleteContact}) => {
    return <StyledContactsList>
        {
            contacts.map(({id, name, number}) => (
                <StyledContactsLi key={id}>
                    <span>{name}: </span><span>{number}</span>
                    <StyledContactsListButton type="button" onClick={() => deleteContact(id)}> Delete</StyledContactsListButton>
                </StyledContactsLi>
            ) )
        }
    </StyledContactsList>
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(object),
    deleteContact: PropTypes.func,
}
