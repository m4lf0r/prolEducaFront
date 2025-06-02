// src/components/AdminSchools/EditSchoolModal/index.tsx
import React, { useState, useEffect } from "react"; // Adicionar useEffect
import {
  ModalOverlay,
  ModalContainer,
  Header,
  Form,
  FormRow,
  FormGroup,
  Actions,
} from "./styled";
import type { SchoolViewDTO, CreateSchoolDTO, AddressDTO } from '../../../types/api.types'; // Ajuste o caminho

interface EditSchoolModalProps {
  school: SchoolViewDTO; // Recebe SchoolViewDTO
  onClose: () => void;
  onSave: (updatedData: CreateSchoolDTO) => void; // Envia CreateSchoolDTO
}

// Estado inicial para o formulário baseado em CreateSchoolDTO
const getInitialFormData = (school: SchoolViewDTO): CreateSchoolDTO => {
    return {
        slug: school.slug,
        name: school.name,
        description: school.description || '',
        address: {
            street: school.address?.street || '',
            city: school.address?.city || '',
            state: school.address?.state || '',
            neighborhood: school.address?.neighborhood || '',
            number: school.address?.number || '',
            zipCode: school.address?.zipCode || '',
        },
        phone: school.phone || '',
        email: school.email || '',
        logoUrl: school.logoUrl,
        website: school.website || '',
        cnpj: school.cnpj || '', // Adicionado - pegar do SchoolViewDTO
        type: school.type || 'Privada', // Adicionado - pegar do SchoolViewDTO, com um fallback
        password: '', // Adicionado - Deixar vazio inicialmente. O usuário DEVE fornecer ao editar.
                       // Ou, se o backend permitir senha vazia para não alterar, essa lógica muda.
                       // Dada a validação @NotBlank, a senha será exigida.
    };
};


const EditSchoolModal = ({ school, onClose, onSave }: EditSchoolModalProps) => {
  const [formData, setFormData] = useState<CreateSchoolDTO>(getInitialFormData(school));
  const [logoFile, setLogoFile] = useState<File | null>(null);
  // Adicionar estado para erros de validação no modal, se desejar
  const [modalValidationErrors, setModalValidationErrors] = useState<ValidationError | null>(null);

  useEffect(() => {
    setFormData(getInitialFormData(school));
    setLogoFile(null);
    setModalValidationErrors(null); // Limpar erros ao abrir o modal
  }, [school]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpar erro específico do campo ao mudar
    if (modalValidationErrors && modalValidationErrors[name]) {
        setModalValidationErrors(prev => {
            const newState = {...prev};
            delete newState[name];
            return Object.keys(newState).length > 0 ? newState : null;
        });
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const addressFieldName = `address.${name}`;
    setFormData(prev => ({
        ...prev,
        address: {
            ...prev.address,
            [name]: value,
        }
    }));
    if (modalValidationErrors && modalValidationErrors[addressFieldName]) {
        setModalValidationErrors(prev => {
            const newState = {...prev};
            delete newState[addressFieldName];
            return Object.keys(newState).length > 0 ? newState : null;
        });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setLogoFile(e.target.files[0]);
    } else {
      setLogoFile(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalValidationErrors(null); // Limpar erros antes de nova submissão

    let dataToSave = { ...formData };

    // Validação de senha no frontend antes de enviar, já que é obrigatória
    if (!dataToSave.password || dataToSave.password.length < 6) {
        setModalValidationErrors(prev => ({...prev, password: "A senha é obrigatória e deve ter no mínimo 6 caracteres."}));
        // alert("A senha é obrigatória e deve ter no mínimo 6 caracteres.");
        return;
    }

    if (logoFile) {
        // ... (sua lógica de upload de logo, como no RegisterForm) ...
        // Exemplo simplificado:
        // dataToSave.logoUrl = `https://newsimulated.url/logo_${logoFile.name}`;
        // Lembre-se que o backend espera uma URL válida para logoUrl
        if (!dataToSave.logoUrl) { // Se o campo de URL manual estiver vazio, simule/use upload
            dataToSave.logoUrl = `https://via.placeholder.com/150/00FF00/FFFFFF?Text=Updated+${dataToSave.name.replace(/\s+/g, '+')}`;
            console.warn("Simulando upload de nova logo no EditModal. URL gerada:", dataToSave.logoUrl);
        }
    }
    // Não é necessário `else if (!dataToSave.logoUrl)` aqui como no create,
    // pois a escola já tem uma logoUrl. Se nenhuma nova for fornecida, a existente é mantida (ou atualizada se o campo for editado).

    // Chamada para o onSave (que no DashboardSchools chama o schoolService.updateSchool)
    // O onSave já trata os erros de API e fecha o modal
    try {
        await onSave(dataToSave); // onSave já está preparado para receber CreateSchoolDTO
    } catch (errorFromSave: any) {
        if (typeof errorFromSave === 'object' && errorFromSave !== null && !Array.isArray(errorFromSave) && !(errorFromSave instanceof Error)) {
            setModalValidationErrors(errorFromSave as ValidationError);
        } else {
            // Exibir um erro genérico no modal se necessário
            alert(`Erro ao salvar: ${errorFromSave?.message || "Erro desconhecido"}`);
        }
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <Header>
          <h2>Editar Escola: {school.name}</h2>
          <button onClick={onClose}>×</button>
        </Header>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Slug (não editável aqui, geralmente)</label>
            <input name="slug" value={formData.slug} onChange={handleChange} readOnly disabled />
          </FormGroup>
          <FormGroup>
            <label>Nome da escola</label>
            <input name="name" value={formData.name} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <label>Descrição</label>
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </FormGroup>

          <p><strong>Endereço:</strong></p>
          <FormGroup>
            <label>Rua</label>
            <input name="street" value={formData.address.street} onChange={handleAddressChange} required />
          </FormGroup>
          <FormRow>
            <FormGroup>
                <label>Número</label>
                <input name="number" value={formData.address.number} onChange={handleAddressChange} required />
            </FormGroup>
            <FormGroup>
                <label>Bairro</label>
                <input name="neighborhood" value={formData.address.neighborhood} onChange={handleAddressChange} required />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
                <label>Cidade</label>
                <input name="city" value={formData.address.city} onChange={handleAddressChange} required />
            </FormGroup>
            <FormGroup>
                <label>Estado</label>
                <input name="state" value={formData.address.state} onChange={handleAddressChange} required />
            </FormGroup>
          </FormRow>
          <FormGroup>
            <label>CEP</label>
            <input name="zipCode" value={formData.address.zipCode} onChange={handleAddressChange} required pattern="^[0-9]{5}-?[0-9]{3}$" title="CEP no formato 00000-000 ou 00000000"/>
          </FormGroup>

          <p><strong>Contato:</strong></p>
          <FormRow>
            <FormGroup>
                <label>Telefone</label>
                <input name="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <label>Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} />
            </FormGroup>
          </FormRow>
          <FormGroup>
            <label>Website</label>
            <input name="website" type="url" value={formData.website} onChange={handleChange} />
          </FormGroup>

          <p><strong>Logo:</strong></p>
          {formData.logoUrl && <img src={formData.logoUrl} alt="Logo atual" style={{maxWidth: '100px', marginBottom: '10px'}} />}
          <FormGroup>
            <label>Nova Logo URL (ou upload abaixo)</label>
            <input name="logoUrl" type="url" value={formData.logoUrl} onChange={handleChange} placeholder="https://exemplo.com/logo.png" required/>
          </FormGroup>
          <FormGroup>
            <label>Ou Enviar nova logo (arquivo)</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {logoFile && <p>Arquivo selecionado: {logoFile.name}</p>}
          </FormGroup>

          <p><strong>Informações Adicionais e Segurança:</strong></p>
          <FormGroup>
            <label htmlFor="edit-cnpj">CNPJ</label>
            <input id="edit-cnpj" name="cnpj" value={formData.cnpj} onChange={handleChange} required pattern="^\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}$" title="Formato: XX.XXX.XXX/XXXX-XX"/>
            {modalValidationErrors?.cnpj && <p style={{ color: "red", fontSize: "0.8em" }}>{modalValidationErrors.cnpj}</p>}
          </FormGroup>

          <FormGroup>
            <label htmlFor="edit-type">Tipo</label>
            <select id="edit-type" name="type" value={formData.type} onChange={handleChange} required>
              <option value="Publica">Pública</option>
              <option value="Privada">Privada</option>
            </select>
            {modalValidationErrors?.type && <p style={{ color: "red", fontSize: "0.8em" }}>{modalValidationErrors.type}</p>}
          </FormGroup>

          <FormGroup>
            <label htmlFor="edit-password">Nova Senha (ou redigite a atual)</label>
            <input id="edit-password" name="password" type="password" value={formData.password} onChange={handleChange} required minLength={6} placeholder="Mínimo 6 caracteres"/>
            {modalValidationErrors?.password && <p style={{ color: "red", fontSize: "0.8em" }}>{modalValidationErrors.password}</p>}
            <small style={{fontSize: "0.75em", display: "block", marginTop: "3px"}}>Se não desejar alterar a senha, redigite a senha atual. Campo obrigatório para salvar.</small>
          </FormGroup>

          {/* CAMPOS FALTANTES (type, shift, students) - Adicionar se forem incluídos nos DTOs */}
          {/*
          <FormGroup>
              <label>Tipo</label>
              <select name="type" value={formData.type} onChange={handleChange}>
              <option value="Pública">Pública</option>
              <option value="Particular">Particular</option>
              </select>
          </FormGroup>
          ... etc para shift e students
          */}

          <Actions>
            <button type="button" onClick={onClose} className="cancel">Cancelar</button>
            <button type="submit">Salvar Alterações</button>
          </Actions>
        </Form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default EditSchoolModal;