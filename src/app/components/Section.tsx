import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: Props) {
  return (
    <>
      <h2 id={title} className="pt-nav-height text-4xl font-bold">
        {title}
      </h2>
      <section className="p-11 min-h-[calc(100vh_-_theme(spacing[nav-height])*2)]">
        {children}
      </section>
    </>
  );
}
