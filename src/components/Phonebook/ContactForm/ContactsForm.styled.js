import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: right;
  gap: 8px;
`;
export const FormButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledFormButton = styled.button`
  width: 150px;
  margin-top: 16px;
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
  :hover {
    background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
    background-color: #0061a7;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
export const StyledInput = styled.input`
  box-sizing: box;
  width: 100%;
  :focus {
    outline-color: #0061a7;
  }
`;
