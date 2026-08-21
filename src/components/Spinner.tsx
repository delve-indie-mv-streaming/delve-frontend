interface SpinnerProps {
  label?: string;
}

export function Spinner({ label = '불러오는 중...' }: SpinnerProps) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center gap-3 text-slate-500">
      <span
        className="size-6 animate-spin rounded-full border-2 border-slate-300 border-t-brand-600"
        role="status"
        aria-label={label}
      />
      <span className="text-sm">{label}</span>
    </div>
  );
}
