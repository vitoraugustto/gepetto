import { instance } from './axios';

export const fetchContext = () => instance({ url: '/api/v1/triage' });

export const clearContext = () =>
  instance({ url: '/api/v1/triage', method: 'PUT' });

export const sendPrompt = (prompt: string) =>
  instance({ url: '/api/v1/triage', method: 'POST', data: { prompt } });
