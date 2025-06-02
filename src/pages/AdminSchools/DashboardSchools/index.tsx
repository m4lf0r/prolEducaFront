import { useState, useEffect } from "react"; // Adicionar useEffect
import GlobalStyle from '../../../styles/GlobalStyle';
import Navbar from "../../../components/Navbar";
import SchoolTable from "../../../components/AdminSchools/SchoolTable";
import EditSchoolModal from "../../../components/AdminSchools/EditSchoolModal";
import { Container, Heading, Subheading, Description } from "./styled";
import type { SchoolViewDTO, CreateSchoolDTO } from '../../../types/api.types'; // Ajuste o caminho
import { schoolService } from "../../../services/schoolService"; // Ajuste o caminho

const DashboardSchools: React.FC = () => {
  const [schools, setSchools] = useState<SchoolViewDTO[]>([]); // Estado para as escolas da API
  const [selectedSchool, setSelectedSchool] = useState<SchoolViewDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar escolas da API
  // Usamos useCallback para evitar recriações desnecessárias se passada como prop
  const fetchSchools = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await schoolService.getAllSchools();
      setSchools(data);
    } catch (err: any) {
      console.error("Falha ao buscar escolas no Dashboard:", err);
      setError(err.message || "Ocorreu um erro ao buscar os dados das escolas.");
    } finally {
      setLoading(false);
    }
  };

  // Buscar escolas quando o componente montar
  useEffect(() => {
    fetchSchools();
  }, []);

  const handleSaveSchool = async (updatedSchoolData: CreateSchoolDTO, schoolId?: number) => {
    try {
      if (schoolId) { // Se tem ID, é uma atualização
        await schoolService.updateSchool(schoolId, updatedSchoolData);
        console.log("Escola atualizada:", updatedSchoolData);
      } else { // Senão, é uma criação (vamos precisar de um botão "Nova Escola" e um modal diferente ou adaptar o existente)
        // Para este exemplo, focaremos na atualização. A criação seria similar.
        // await schoolService.createSchool(updatedSchoolData);
        // console.log("Escola criada:", updatedSchoolData);
        alert("Funcionalidade de criar nova escola ainda não implementada neste exemplo.");
        return; // Sair se não for atualização por enquanto
      }
      setSelectedSchool(null); // Fecha o modal
      fetchSchools(); // Recarrega a lista de escolas
    } catch (err: any) {
      console.error("Erro ao salvar escola:", err);
      // Aqui você pode tratar erros de validação específicos se err for ValidationError
      if (typeof err === 'object' && err !== null && !Array.isArray(err) && !(err instanceof Error)) {
         const validationErrors = Object.entries(err as ValidationError)
             .map(([field, message]) => `${field}: ${message}`)
             .join('\n');
         alert(`Erro de validação:\n${validationErrors}`);
      } else {
        alert(`Erro ao salvar: ${err.message || "Erro desconhecido"}`);
      }
    }
  }

  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: 'red' }}>Erro: {error}</p>;

  return (
    <>
      <GlobalStyle />
      <Navbar isLogged onLogout={() => console.log('logout')} />
      <Container>
        <Heading>Escolas</Heading>
        <Subheading>Gerencie os dados das escolas cadastradas no sistema</Subheading>
        <Description>
          Abaixo está a lista de escolas disponíveis na plataforma. Você pode editar os dados...
        </Description>

        {/* Passar as escolas da API para a tabela */}
        <SchoolTable schools={schools} onEdit={setSelectedSchool} />

        {selectedSchool && (
          <EditSchoolModal
            school={selectedSchool} // school é SchoolViewDTO
            onClose={() => setSelectedSchool(null)}
            onSave={(dataToSave) => { // dataToSave será CreateSchoolDTO
                if (selectedSchool?.id) {
                    handleSaveSchool(dataToSave, selectedSchool.id);
                }
            }}
          />
        )}
      </Container>
    </>
  );
};

export default DashboardSchools;