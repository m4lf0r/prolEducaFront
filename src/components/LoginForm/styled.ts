import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  position: relative;
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

export const FormWrapper = styled.form`
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  color: #000000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  color: #000;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background-color: #fff;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #0D47A1;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color:rgb(6, 62, 146);
  }
`;
