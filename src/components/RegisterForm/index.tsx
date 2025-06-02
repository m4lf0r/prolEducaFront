import React, { useState } from "react";
import {
  Container,
  ContentWrapper,
  FormWrapper,
  ExitButton,
  Title,
  Input,
  Label,
  Button,
  Row,
  Select,
  ImageInput,
  // Adicione TextArea se não existir nos seus styled-components
  // Ex: export const TextArea = styled.textarea` ... `;
} from "./styled";
import { schoolService } from "../../services/schoolService"; // Ajuste o caminho se necessário
import type { CreateSchoolDTO, ValidationError } from "../../types/api.types"; // Ajuste o caminho
import { useNavigate } from 'react-router-dom'; // Para redirecionar

// Defina um componente TextArea estilizado ou use <textarea> diretamente
const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => <textarea {...props} style={{width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box'}} rows={3}/>;


const initialFormData: CreateSchoolDTO = {
  slug: "",
  name: "",
  description: "",
  address: {
    street: "",
    city: "",
    state: "",
    neighborhood: "", // Este é o "End" que você tinha
    number: "",
    zipCode: "",
  },
  phone: "",
  email: "",
  logoUrl: "", // Será preenchido pela URL da imagem ou após upload
  website: "",
  cnpj: "",
  type: "Privada", // Valor padrão, ou "" se quiser que o usuário selecione
  password: "",
};

const RegisterForm = () => {
  const [formData, setFormData] = useState<CreateSchoolDTO>(initialFormData);
  const [logoFile, setLogoFile] = useState<File | null>(null); // Para o arquivo da logo
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationError | null>(null);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value, // name aqui será 'street', 'city', 'neighborhood', etc.
      },
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setLogoFile(e.target.files[0]);
      // Opcional: Para preview, você pode gerar uma URL local e setar em um estado separado
      // Não sete formData.logoUrl diretamente com URL.createObjectURL se o backend espera uma URL final
    } else {
      setLogoFile(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setValidationErrors(null);

    let dataToSubmit = { ...formData };

    // Lidar com o upload da logo ou URL manual
    if (logoFile) {
      // *** LÓGICA DE UPLOAD DA IMAGEM AQUI ***
      // Se você tem um serviço de upload, chame-o:
      // try {
      //   const uploadedUrl = await uploadService.uploadImage(logoFile);
      //   dataToSubmit.logoUrl = uploadedUrl;
      // } catch (uploadError) {
      //   setError("Falha ao fazer upload da logo.");
      //   setIsSubmitting(false);
      //   return;
      // }
      //
      // SIMULAÇÃO POR AGORA (se o campo logoUrl não foi preenchido manualmente):
      if (!dataToSubmit.logoUrl) {
         dataToSubmit.logoUrl = `https://simulated.url/logo_${logoFile.name}`; // URL simulada
         console.warn("Usando URL de logo simulada:", dataToSubmit.logoUrl);
      }
    } else if (!dataToSubmit.logoUrl) {
      // Se não há arquivo selecionado E o campo logoUrl está vazio, é um erro
      // pois logoUrl é obrigatório no DTO do backend.
      setError("Por favor, forneça a URL da logo ou selecione um arquivo de imagem.");
      setValidationErrors(prev => ({...prev, logoUrl: "URL da logo ou arquivo de imagem é obrigatório"}));
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Enviando dados para cadastro:", dataToSubmit);
      const newSchool = await schoolService.createSchool(dataToSubmit);
      alert(`Escola "${newSchool.name}" cadastrada com sucesso!`);
      setFormData(initialFormData); // Limpa o formulário
      setLogoFile(null);
      navigate('/admin/schools'); // Redireciona para a lista de escolas (ajuste a rota)
    } catch (err: any) {
      console.error("Erro ao cadastrar escola:", err);
      if (err && typeof err === 'object' && !Array.isArray(err) && !(err instanceof Error)) {
        // Assume que é um objeto de ValidationError do backend
        setValidationErrors(err as ValidationError);
        setError("Erro de validação. Verifique os campos.");
      } else {
        setError(err?.message || "Ocorreu um erro desconhecido.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função para gerar slug (simples, pode ser mais robusta)
  const generateSlugFromName = (name: string) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // substitui espaços por hífens
      .replace(/[^\w-]+/g, ''); // remove caracteres não alfanuméricos exceto hífens
  };

  // Atualizar slug quando o nome da escola mudar
  const handleNameChangeAndSetSlug = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newName = value;
    const newSlug = generateSlugFromName(newName);
    setFormData((prev) => ({
      ...prev,
      name: newName,
      slug: newSlug, // Atualiza o slug automaticamente
    }));
  };


  return (
    <Container>
      <ContentWrapper>
        <ExitButton onClick={() => navigate(-1)}>Voltar</ExitButton>
        <FormWrapper onSubmit={handleSubmit}>
          <Title>Cadastro de Escola</Title>

          {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</p>}

          <Label htmlFor="name">Nome da Escola</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleNameChangeAndSetSlug} required />
          {validationErrors?.name && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors.name}</p>}

          <Label htmlFor="slug">Slug (gerado automaticamente ou edite)</Label>
          <Input id="slug" name="slug" value={formData.slug} onChange={handleChange} required />
          {validationErrors?.slug && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors.slug}</p>}

          <Label htmlFor="description">Descrição</Label>
          <TextArea id="description" name="description" value={formData.description} onChange={handleChange} />
          {validationErrors?.description && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors.description}</p>}

          <fieldset style={{border: '1px solid #ccc', padding: '10px', margin: '15px 0'}}>
            <legend>Endereço Completo</legend>
            <Label htmlFor="address.street">Rua</Label>
            <Input id="address.street" name="street" value={formData.address.street} onChange={handleAddressChange} required />
            {validationErrors?.['address.street'] && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors['address.street']}</p>}

            <Row>
                <div>
                    <Label htmlFor="address.number">Número</Label>
                    <Input id="address.number" name="number" value={formData.address.number} onChange={handleAddressChange} required />
                    {validationErrors?.['address.number'] && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors['address.number']}</p>}
                </div>
                <div>
                    {/* Usando o campo 'neighborhood' do formulário original como bairro */}
                    <Label htmlFor="address.neighborhood">Bairro (Antigo "End")</Label>
                    <Input id="address.neighborhood" name="neighborhood" value={formData.address.neighborhood} onChange={handleAddressChange} required />
                    {validationErrors?.['address.neighborhood'] && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors['address.neighborhood']}</p>}
                </div>
            </Row>
             <Row>
                <div>
                    <Label htmlFor="address.city">Cidade</Label>
                    <Input id="address.city" name="city" value={formData.address.city} onChange={handleAddressChange} required />
                    {validationErrors?.['address.city'] && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors['address.city']}</p>}
                </div>
                <div>
                    <Label htmlFor="address.state">Estado (UF)</Label>
                    <Input id="address.state" name="state" value={formData.address.state} onChange={handleAddressChange} required />
                    {validationErrors?.['address.state'] && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors['address.state']}</p>}
                </div>
            </Row>
            <Label htmlFor="address.zipCode">CEP (Ex: 00000-000)</Label>
            <Input id="address.zipCode" name="zipCode" value={formData.address.zipCode} onChange={handleAddressChange} required pattern="^[0-9]{5}-?[0-9]{3}$" title="Formato: 00000-000 ou 00000000" />
            {validationErrors?.['address.zipCode'] && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors['address.zipCode']}</p>}
          </fieldset>

          <Label htmlFor="cnpj">CNPJ</Label>
          <Input id="cnpj" name="cnpj" value={formData.cnpj} onChange={handleChange} required pattern="^\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}$" title="Formato: XX.XXX.XXX/XXXX-XX"/>
          {validationErrors?.cnpj && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors.cnpj}</p>}

          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
          {validationErrors?.email && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors.email}</p>}

          <Row>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              {validationErrors?.phone && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors.phone}</p>}
            </div>
            <div>
              <Label htmlFor="website">Website (URL)</Label>
              <Input id="website" name="website" type="url" value={formData.website} onChange={handleChange} placeholder="https://..." />
              {validationErrors?.website && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors.website}</p>}
            </div>
          </Row>

          <Label htmlFor="type">Tipo</Label>
          <Select id="type" name="type" value={formData.type} onChange={handleChange} required>
            {/* <option value="">Selecione</option> // Removido pois 'Privada' é padrão */}
            <option value="Publica">Pública</option>
            <option value="Privada">Privada</option>
          </Select>
          {validationErrors?.type && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors.type}</p>}

          <Label htmlFor="logoUrl">URL da Logo (se não for enviar arquivo)</Label>
          <Input id="logoUrl" name="logoUrl" type="url" value={formData.logoUrl} onChange={handleChange} placeholder="https://exemplo.com/logo.png"/>
          {/* Se logoUrl for preenchido E um arquivo for selecionado, você pode decidir qual usar ou mostrar um aviso */}
          {validationErrors?.logoUrl && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors.logoUrl}</p>}


          <Label htmlFor="logoFile">Ou Enviar Arquivo da Logo</Label>
          <ImageInput id="logoFile" name="logoFile" type="file" accept="image/*" onChange={handleFileChange} />
          {logoFile && <p style={{fontSize: "0.9em", marginTop: "5px"}}>Arquivo selecionado: {logoFile.name}</p>}


          <Label htmlFor="password">Senha</Label>
          <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required minLength={6} />
          {validationErrors?.password && <p style={{ color: "red", fontSize: "0.8em" }}>{validationErrors.password}</p>}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Cadastrando..." : "Cadastrar Escola"}
          </Button>
        </FormWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default RegisterForm;