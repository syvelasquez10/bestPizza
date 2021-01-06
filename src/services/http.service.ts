import axios from 'axios';
import { BackMockResponse, BackResponse } from '../components/shared/models';

export const urlBack='https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json';

const getMockJson = (): Promise<BackMockResponse> => {
  return axios.get(urlBack).then((res) => res.data.response);
};

export const login = async (email: string, password: string): Promise<BackResponse> => {
  const mockJson = await getMockJson();
  const user = mockJson.users.filter(obj => {
    return obj.email === email && obj.password === password;
  })[0];
  return user ? {user} : { message: 'La combinación de usuario y contraseña son incorrectas'};
};