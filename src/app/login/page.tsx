import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Spinner } from '@/components/Spinner';
import { LoginForm } from '@/app/login/LoginForm';

export const metadata: Metadata = {
  title: '로그인',
};

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-sm py-12">
      <h1 className="text-2xl font-bold tracking-tight">로그인</h1>
      <p className="mt-2 text-sm text-slate-500">delve 계정으로 로그인하세요.</p>

      <Suspense fallback={<Spinner />}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
