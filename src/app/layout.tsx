import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Providers } from '@/app/providers';
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
