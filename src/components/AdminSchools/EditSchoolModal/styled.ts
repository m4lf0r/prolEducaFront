import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    margin: 0;
  }

  button {
    background: none;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  margin-top: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;

  label {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }

  input,
  select {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 1rem;

  ${FormGroup} {
    flex: 1;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;

  .cancel {
    background: #eee;
    color: #333;
  }

  button {
    padding: 0.6rem 1.4rem;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;

    &:not(.cancel) {
      background: #007bff;
      color: #fff;

      &:hover {
        background: #0056b3;
      }
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;
