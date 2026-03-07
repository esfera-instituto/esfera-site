import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const Footer = () => (
  <footer className="mt-16 border-t border-slate-200 bg-white py-10">
    <Container className="grid gap-8 md:grid-cols-3">
      <div>
        <p className="text-lg font-semibold text-marinho">o ESFERA</p>
        <p className="mt-2 text-sm text-slate-600">
          Aulas particulares e apoio acadêmico com organização pedagógica por nível de ensino e disciplina.
        </p>
      </div>
      <div>
        <p className="font-medium text-marinho">Navegação</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li><Link href="/ensino-fundamental">Ensino Fundamental</Link></li>
          <li><Link href="/ensino-medio">Ensino Médio</Link></li>
          <li><Link href="/ensino-superior">Ensino Superior</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </div>
      <div>
        <p className="font-medium text-marinho">Contato</p>
        <p className="mt-3 text-sm text-slate-600">WhatsApp: (00) 00000-0000</p>
        <p className="text-sm text-slate-600">E-mail: contato@esfera.com.br</p>
      </div>
    </Container>
  </footer>
);
