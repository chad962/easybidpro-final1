export function Card({ children, ...props }) {
  return (
    <div className="rounded-lg border p-4 shadow-sm bg-white" {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, ...props }) {
  return (
    <div className="mt-2 text-sm text-gray-700" {...props}>
      {children}
    </div>
  );
}
