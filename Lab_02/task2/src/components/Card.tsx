import type { ReactNode } from "react";

// Типизируем props через interface
interface CardProps {
  title: string;
  children: ReactNode;
  className?: string; // опциональный prop
}

// Task 1: Reusable Card component
function Card({ title, children, className }: Readonly<CardProps>) {
  const combinedClass: string = className ? `card ${className}` : "card";

  return (
    <article className={combinedClass}>
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </article>
  );
}

export default Card;
export type { CardProps };
