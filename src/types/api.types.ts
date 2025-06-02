// src/types/api.types.ts

export interface AddressDTO {
    street: string;
    city: string;
    state: string;
    neighborhood: string;
    number: string;
    zipCode: string;
  }
  
  export interface SchoolViewDTO {
    id: number; // Assumindo que Long é mapeado para number no JSON
    slug: string;
    name: string;
    description?: string; // Campos opcionais se puderem ser nulos/ausentes
    phone?: string;
    email?: string;
    website?: string;
    logoUrl: string;
    address: AddressDTO;
  }
  
  export interface CreateSchoolDTO {
    slug: string;
    name: string;
    description?: string;
    address: AddressDTO;
    phone?: string;
    email?: string;
    logoUrl: string;
    website?: string;
    cnpj: string;         
    type: 'Publica' | 'Privada'; 
    password: string;     
  }
  
  export interface CourseViewDTO {
    id: number;
    schoolId: number;
    name: string;
    description?: string;
    monthlyPrice: number; // BigDecimal é geralmente serializado como number no JSON
  }
  
  export interface CreateCourseDTO {
    schoolId: number;
    name: string;
    description?: string;
    monthlyPrice: number;
  }
  
  export interface SchoolImageViewDTO {
    id: number;
    url: string;
  }
  
  export interface AddSchoolImageDTO {
    schoolId: number; // No seu controller, esse ID vem do path {schoolSlug}, não do body. Verifique se o DTO precisa dele.
                     // Baseado no controller, parece que `schoolId` não é necessário no corpo do AddSchoolImageDTO.
                     // O controller já recebe schoolSlug. O `addSchoolImageDTO` SÓ TEM `url`
    url: string;
  }
  
  // Ajuste para AddSchoolImageDTO baseado no controller e DTO
  export interface AddSchoolImagePayload { // Renomeando para clareza, já que schoolId vem do path
      url: string;
  }
  
  
  export interface TestimonyViewDTO {
    id: number;
    schoolId: number;
    courseId: number;
    author: string;
    rating: number;
    date: string; // LocalDate é geralmente serializado como string ISO (ex: "2023-10-27")
    comment: string;
  }
  
  export interface CreateTestimonyDTO {
    schoolId: number;
    courseId: number;
    author: string;
    date: string; // Enviar como string no formato YYYY-MM-DD
    rating: number;
    comment: string;
  }
  
  // Interface para erros de validação do GlobalAdviceController
  export interface ValidationError {
    [field: string]: string;
  }