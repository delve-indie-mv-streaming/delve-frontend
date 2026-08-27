import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Providers } from '@/app/providers';
import { SiteHeader } from '@/layouts/SiteHeader';
import '@/index.css';

export const metadata: Metadata = {
  title: {
    default: 'delve',
    template: '%s | delve',
  },
  description: '인디밴드 뮤직비디오를 발굴하고 공유하는 스트리밍 서비스',
  icons: { icon: '/favicon.svg' },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
