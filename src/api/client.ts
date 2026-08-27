import axios from 'axios';
import type { AxiosError } from 'axios';
import { toApiError } from '@/api/errors';
import type { ApiErrorBody } from '@/api/errors';

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  withCredentials: true,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

client.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorBody>) => Promise.reject(toApiError(error)),
);
