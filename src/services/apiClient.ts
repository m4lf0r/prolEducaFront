// src/services/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Você pode adicionar interceptors aqui para tratamento global de erros ou tokens de autenticação
// Exemplo de interceptor de erro:
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Log detalhado do erro para depuração
    console.error('API Error:', error);
    if (error.response) {
      // A requisição foi feita e o servidor respondeu com um status code
      // que cai fora do range de 2xx
      console.error('Response Data:', error.response.data);
      console.error('Response Status:', error.response.status);
      console.error('Response Headers:', error.response.headers);
    } else if (error.request) {
      // A requisição foi feita mas nenhuma resposta foi recebida
      console.error('Request Data:', error.request);
      // Isso pode acontecer por problemas de rede, CORS não configurado corretamente no backend (se o preflight falhar),
      // ou o backend estar offline.
      if (error.message.includes('Network Error') || error.message.includes('Failed to fetch')) {
         // Tentar fornecer uma mensagem mais específica para erros de CORS/Rede
         const backendUrl = import.meta.env.VITE_API_BASE_URL;
         console.error(
           `Network error or CORS issue when trying to reach ${backendUrl}. ` +
           `Ensure the backend is running and CORS is configured correctly for origin ${window.location.origin}.`
         );
      }
    } else {
      // Algo aconteceu ao configurar a requisição que acionou um erro
      console.error('Error Message:', error.message);
    }
    return Promise.reject(error);
  }
);


export default apiClient;