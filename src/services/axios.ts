import axios, { AxiosInstance } from 'axios';

import { BACKEND_BASE_URL } from '@config/api';

export const instance: AxiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
