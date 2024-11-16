export function VideoHolder({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute size-full overflow-clip flex items-center justify-center">
      {children}
    </div>
  );
}
