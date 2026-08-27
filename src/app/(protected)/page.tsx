'use client';

import { useMe } from '@/features/auth/queries';

export default function HomePage() {
  const { data: user } = useMe();

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">{user?.nickname}님, 환영합니다 👋</h1>
      <p className="mt-2 text-slate-500">여기부터 delve 화면을 만들어 나가면 됩니다.</p>
    </div>
  );
}
