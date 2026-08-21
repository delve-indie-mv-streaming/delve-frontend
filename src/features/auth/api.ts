import { client } from '@/api/client';
import { ApiError } from '@/api/errors';
import type { LoginRequest, User } from './types';

export async function login(body: LoginRequest): Promise<User> {
  const { data } = await client.post<User>('/auth/login', body);
  return data;
}

export async function logout(): Promise<void> {
  await client.post('/auth/logout');
}

export async function getMe(): Promise<User | null> {
  try {
    const { data } = await client.get<User>('/auth/me');
    return data;
  } catch (error) {
    if (error instanceof ApiError && error.status === 401) return null;
    throw error;
  }
}
