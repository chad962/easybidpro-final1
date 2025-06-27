import React from "react";

export function Tabs({ children, value, onValueChange }) {
  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, onValueChange })
      )}
    </div>
  );
}

export function TabsList({ children }) {
  return <div className="flex space-x-2 border-b pb-2 mb-2">{children}</div>;
}

export function TabsTrigger({ value, children, onValueChange }) {
  return (
    <button
      onClick={() => onValueChange(value)}
      className="px-3 py-1 rounded hover:bg-gray-200 transition"
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }) {
  return <div className="mt-4">{children}</div>;
}
