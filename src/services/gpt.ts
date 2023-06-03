import { instance } from './axios';

export const fetchContext = () => instance({ url: '/api/v1/medical-chat' });

export const clearContext = () =>
  instance({ url: '/api/v1/medical-chat', method: 'PUT' });

export const sendPrompt = (prompt: string) =>
  instance({ url: '/api/v1/medical-chat', method: 'POST', data: { prompt } });
