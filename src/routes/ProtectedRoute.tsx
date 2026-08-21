import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Spinner } from '@/components/Spinner';
import { useMe } from '@/features/auth/queries';

export function ProtectedRoute() {
  const { data: user, isPending } = useMe();
  const location = useLocation();

  if (isPending) return <Spinner label="로그인 상태를 확인하는 중..." />;

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
