import { ReactNode } from "react";

interface CartLayoutProps {
  children: ReactNode;
}

export default function CartLayout({ children }: CartLayoutProps) {
  return (
    <div>
      <p className="title_sub">현대카드 무이자 이벤트 중</p>
      {children}
    </div>
  );
}
