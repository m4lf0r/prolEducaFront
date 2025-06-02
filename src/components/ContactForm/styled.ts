import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 900px;
  gap: 3rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #364055;
  }

  p {
    color: #555;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const RightSide = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  input {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #bbb;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: #0d47a1;
      box-shadow: 0 0 5px rgba(13, 71, 161, 0.5);
    }
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    background-color: #0d47a1;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #083d8a;
    }
  }
`;
