import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  gap: 20px;
  justify-content: center;

  button {
    border: 0;
    background: #706ee1;
    color: #fff;
    width: 80px;
    height: 46px;
    border-radius: 4px;
    margin: 8px 0;
    text-transform: capitalize;
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s linear;

    &:disabled {
      background: #ddd;
      cursor: not-allowed;
      &:hover {
        background: #ddd;
      }
    }

    &:hover {
      background: #2f2dbf;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
  }

  input[type="text"],
  input[type="number"],
  select {
    width: 200px;
    display: flex;
    padding: 10px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;

    &::placeholder {
      color: #ddd;
    }
  }
`;
