import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="py-20 text-center">
      <p className="text-sm font-medium text-brand-600">404</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight">페이지를 찾을 수 없습니다</h1>
      <Link to="/" className="mt-6 inline-block text-sm text-brand-600 hover:underline">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
