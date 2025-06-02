// src/components/AdminSchools/SchoolTable/index.tsx
import { TableWrapper, FilterWrapper } from "./styled";
import { useState } from "react";
import type { SchoolViewDTO } from '../../../types/api.types'; // Ajuste o caminho

interface SchoolTableProps {
  schools: SchoolViewDTO[]; // Recebe as escolas da API
  onEdit: (school: SchoolViewDTO) => void;
}

const SchoolTable = ({ schools, onEdit }: SchoolTableProps) => {
  const [filter, setFilter] = useState("");

  // Ajustar o filtro para os campos disponíveis em SchoolViewDTO
  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(filter.toLowerCase()) ||
    (school.address?.neighborhood && school.address.neighborhood.toLowerCase().includes(filter.toLowerCase())) ||
    school.slug.toLowerCase().includes(filter.toLowerCase())
    // Adicione outros campos de SchoolViewDTO que você queira filtrar
  );

  return (
    <>
      <FilterWrapper>
        <input
          type="text"
          placeholder="Buscar por nome, bairro ou slug..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </FilterWrapper>
      <TableWrapper>
        <table>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Nome</th>
              <th>Bairro</th>
              {/* Removendo/Comentando colunas que não estão em SchoolViewDTO */}
              {/* <th>Tipo</th>
              <th>Turno</th>
              <th>Alunos</th> */}
              <th>Email</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredSchools.length > 0 ? (
              filteredSchools.map((school) => (
                <tr key={school.id}>
                  <td>
                    {/* Usar school.logoUrl que vem da API */}
                    <img src={school.logoUrl} alt={`Logo ${school.name}`} style={{ width: '50px', height: 'auto' }}/>
                  </td>
                  <td>{school.name}</td>
                  {/* Acessar o bairro através do objeto address */}
                  <td>{school.address?.neighborhood || 'N/A'}</td>
                  {/* <td>N/A</td> Tipo
                  <td>N/A</td> Turno
                  <td>N/A</td> Alunos */}
                  <td>{school.email || 'N/A'}</td>
                  <td>{school.phone || 'N/A'}</td>
                  <td>
                    <button onClick={() => onEdit(school)}>Editar</button>
                    {/* Você pode adicionar um botão de deletar aqui depois */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6 /* Ajuste o colspan conforme o número de colunas */}>Nenhuma escola encontrada.</td>
              </tr>
            )}
          </tbody>
        </table>
      </TableWrapper>
    </>
  );
};

export default SchoolTable;