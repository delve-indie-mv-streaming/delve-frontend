'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLogout, useMe } from '@/features/auth/queries';

export function SiteHeader() {
  const { data: user } = useMe();
  const logout = useLogout();
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-6 px-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-brand-600">
          delve
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/"
            className={
              pathname === '/' ? 'font-medium text-slate-900 dark:text-slate-100' : 'text-slate-500'
            }
          >
            홈
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-3 text-sm">
          {user ? (
            <>
              <span className="text-slate-500">{user.nickname}</span>
              <button
                type="button"
                onClick={() => logout.mutate()}
                disabled={logout.isPending}
                className="rounded-md px-3 py-1.5 text-slate-600 hover:bg-slate-100 disabled:opacity-50 dark:hover:bg-slate-800"
              >
                로그아웃
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-md bg-brand-600 px-3 py-1.5 font-medium text-white hover:bg-brand-700"
            >
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
