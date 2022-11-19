import styled from 'styled-components';
export const StyledContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 12px;
`;
export const StyledContactsListButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #54a3f7;
  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
  background-color: #007dc1;
  border-radius: 3px;
  border: 1px solid #124d77;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 12px;
  padding: 5px 14px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #154682;
  margin-left: auto;
  :hover {
    background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
    background-color: #0061a7;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
export const StyledContactsLi = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid #007dc1;
`;
