import type { AxiosError } from 'axios';

export interface ApiErrorBody {
  message?: string;
  error?: string;
  code?: string;
}

export class ApiError extends Error {
  readonly status: number;
  readonly code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

export function toApiError(error: AxiosError<ApiErrorBody>): ApiError {
  if (!error.response) {
    return new ApiError('서버에 연결할 수 없습니다. 네트워크를 확인해 주세요.', 0);
  }
  const { status, data } = error.response;
  const message = data?.message || data?.error || '요청을 처리하지 못했습니다.';
  return new ApiError(message, status, data?.code);
}
