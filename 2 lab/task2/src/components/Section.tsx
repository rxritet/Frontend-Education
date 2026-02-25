import type { ReactNode } from "react";

// Task 3: Fragment-based Section с типизированными props
interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: Readonly<SectionProps>) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}

export default Section;
