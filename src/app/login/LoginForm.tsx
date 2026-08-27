'use client';

import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLogin } from '@/features/auth/queries';
import type { LoginRequest } from '@/features/auth/types';

function safeRedirect(target: string | null): string {
  if (!target) return '/';
  if (!target.startsWith('/') || target.startsWith('//')) return '/';
  return target;
}

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const login = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    defaultValues: { email: '', password: '' },
  });

  const redirectTo = safeRedirect(searchParams.get('next'));

  const onSubmit = handleSubmit((values) => {
    login.mutate(values, {
      onSuccess: () => router.replace(redirectTo),
    });
  });

  return (
    <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          이메일
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900"
          {...register('email', {
            required: '이메일을 입력해 주세요.',
            pattern: { value: /^\S+@\S+\.\S+$/, message: '이메일 형식이 올바르지 않습니다.' },
          })}
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm font-medium">
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900"
          {...register('password', {
            required: '비밀번호를 입력해 주세요.',
            minLength: { value: 8, message: '8자 이상 입력해 주세요.' },
          })}
        />
        {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
      </div>

      {login.isError && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40">
          {login.error.message}
        </p>
      )}

      <button
        type="submit"
        disabled={login.isPending}
        className="mt-2 rounded-md bg-brand-600 px-4 py-2.5 font-medium text-white hover:bg-brand-700 disabled:opacity-50"
      >
        {login.isPending ? '로그인 중...' : '로그인'}
      </button>
    </form>
  );
}
