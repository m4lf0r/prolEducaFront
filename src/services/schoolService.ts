// src/services/schoolService.ts
import apiClient from './apiClient';
import type { SchoolViewDTO, CreateSchoolDTO, ValidationError } from '../types/api.types'; // Importe os tipos

const SCHOOL_BASE_PATH = '/school';

export const schoolService = {
  getAllSchools: async (): Promise<SchoolViewDTO[]> => {
    try {
      const response = await apiClient.get<SchoolViewDTO[]>(SCHOOL_BASE_PATH);
      return response.data;
    } catch (error: any) {
      console.error('Error fetching all schools:', error);
      throw error.response?.data || error; // Lança o erro para ser tratado no componente
    }
  },

  getSchoolBySlug: async (slug: string): Promise<SchoolViewDTO> => {
    try {
      const response = await apiClient.get<SchoolViewDTO>(`${SCHOOL_BASE_PATH}/${slug}`);
      return response.data;
    } catch (error: any) {
      console.error(`Error fetching school with slug ${slug}:`, error);
      throw error.response?.data || error;
    }
  },

  getSchoolById: async (id: number): Promise<SchoolViewDTO> => {
    try {
      const response = await apiClient.get<SchoolViewDTO>(`${SCHOOL_BASE_PATH}/id/${id}`);
      return response.data;
    } catch (error: any) {
      console.error(`Error fetching school with id ${id}:`, error);
      throw error.response?.data || error;
    }
  },

  createSchool: async (schoolData: CreateSchoolDTO): Promise<SchoolViewDTO> => {
    try {
      const response = await apiClient.post<SchoolViewDTO>(SCHOOL_BASE_PATH, schoolData);
      return response.data;
    } catch (error: any) {
      console.error('Error creating school:', error);
      // Se for um erro de validação (400) do GlobalAdviceController, error.response.data será o objeto ValidationError
      if (error.response && error.response.status === 400) {
        throw error.response.data as ValidationError;
      }
      throw error.response?.data || error;
    }
  },

  updateSchool: async (id: number, schoolData: CreateSchoolDTO): Promise<SchoolViewDTO> => {
    try {
      const response = await apiClient.put<SchoolViewDTO>(`${SCHOOL_BASE_PATH}/${id}`, schoolData);
      return response.data;
    } catch (error: any) {
      console.error(`Error updating school with id ${id}:`, error);
      if (error.response && error.response.status === 400) {
        throw error.response.data as ValidationError;
      }
      throw error.response?.data || error;
    }
  },

  deleteSchool: async (id: number): Promise<void> => {
    try {
      await apiClient.delete(`${SCHOOL_BASE_PATH}/${id}`);
    } catch (error: any) {
      console.error(`Error deleting school with id ${id}:`, error);
      throw error.response?.data || error;
    }
  },
};