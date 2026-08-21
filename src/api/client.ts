import axios from 'axios';
import type { AxiosError } from 'axios';
import { queryClient } from '@/api/queryClient';
import { toApiError } from '@/api/errors';
import type { ApiErrorBody } from '@/api/errors';
import { authKeys } from '@/features/auth/keys';

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  withCredentials: true,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

client.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorBody>) => {
    if (error.response?.status === 401) {
      queryClient.setQueryData(authKeys.me(), null);
    }
    return Promise.reject(toApiError(error));
  },
);
