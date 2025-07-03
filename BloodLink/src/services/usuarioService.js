import axios from 'axios';

const API_URL = 'https://localhost:5287/api/Usuario'; // ajuste se necessário

export const getUsuarioById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const getUsuarioByCPF = async (cpf) => {
  const response = await axios.get(`${API_URL}/cpf/${cpf}`);
  return response.data;
};

export async function getVitalinkByUsuarioId(id) {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/vitalink/usuario/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}