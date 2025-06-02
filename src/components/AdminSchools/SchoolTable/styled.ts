import styled from "styled-components";

export const FilterWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: flex-end;

  input {
    padding: 0.5rem 1rem;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 8px rgba(0,0,0,0.05);

    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid #eee;
    }

    th {
      background: #f9f9f9;
      font-weight: 600;
    }

    td img {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }

    button {
      background: #007bff;
      color: #fff;
      padding: 0.4rem 0.8rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;

      &:hover {
        background: #0056b3;
      }
    }
  }
`;
