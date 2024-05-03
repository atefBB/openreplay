import React from 'react'

function ExCard({
  title,
  children,
  type,
  onCard,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  type: string;
  onCard: (card: string) => void;
}) {
  return (
    <div
      className={'rounded overflow-hidden border p-4 bg-white hover:border-gray-light hover:shadow'}
      style={{ width: 400, height: 286 }}
    >
      <div className={'font-semibold text-lg'}>{title}</div>
      <div className={'flex flex-col gap-2 mt-2 cursor-pointer'} onClick={() => onCard(type)}>{children}</div>
    </div>
  );
}

export default ExCard