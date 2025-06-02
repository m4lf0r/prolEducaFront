import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
`;

export const ExitButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #9e9e9e;
  border: 2px solid #ccc;
  color: #fff;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #757575;
    border-color: #999;
  }
`;

export const ContentWrapper = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  background-color:rgb(250, 250, 250);
`;

export const ImageInput = styled.input.attrs({ type: "file" })`
  width: 100%;
  padding: 0.6rem;
  background-color: rgb(250, 250, 250);
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  color: #000;
  font-size: 0.95rem;

  &::file-selector-button {
    padding: 0.5rem 1rem;
    background-color: #0D47A1;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 0.75rem;
    transition: background-color 0.2s ease;
  }

  &::file-selector-button:hover {
    background-color: rgb(9, 62, 143);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  background-color: rgb(250, 250, 250);
`;

export const Button = styled.button`
  padding: 0.75rem;
  background-color: #0D47A1;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color:rgb(9, 62, 143);
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;

  div {
    flex: 1;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;