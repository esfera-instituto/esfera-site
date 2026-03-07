import Link from "next/link";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/", label: "Início" },
  { href: "/ensino-fundamental", label: "Ensino Fundamental" },
  { href: "/ensino-medio", label: "Ensino Médio" },
  { href: "/ensino-superior", label: "Ensino Superior" },
  { href: "/psicopedagogia", label: "Psicopedagogia" },
  { href: "/professores", label: "Professores" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/contato", label: "Contato" }
];

export const Header = () => (
  <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
    <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
      <Link href="/" className="text-lg font-semibold tracking-tight text-marinho">
        o ESFERA Aulas Particulares
      </Link>
      <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-marinho">
            {link.label}
          </Link>
        ))}
      </nav>
    </Container>
  </header>
);
