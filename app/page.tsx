import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Section } from "@/components/ui/Section";
import { CTABox } from "@/components/ui/CTABox";
import { niveisEnsino } from "@/data/niveis";
import { professores } from "@/data/professores";
import { getMateriaisDestaque } from "@/data/materiais";

export default function HomePage() {
  const materiaisDestaque = getMateriaisDestaque(6);

  return (
    <>
      <section className="bg-white py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold text-marinho sm:text-4xl">
              Aulas particulares com acompanhamento individualizado para Ensino Fundamental, Médio e Superior
            </h1>
            <p className="mt-4 text-slate-600">
              O ESFERA oferece apoio acadêmico com linguagem clara, organização pedagógica por disciplina e flexibilidade para cada aluno ou aluna.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contato" className="rounded-lg bg-marinho px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
                Falar com a equipe do ESFERA
              </Link>
              <Link href="/ensino-medio" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                Ver disciplinas
              </Link>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
              alt="Professor ou professora estudando junto com um aluno ou uma aluna"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <Section title="Níveis de ensino">
        <Grid>
          {niveisEnsino.map((nivel) => (
            <Card key={nivel.slug} title={nivel.nome} description={nivel.descricao} href={`/${nivel.slug}`} actionLabel="Ver disciplinas" />
          ))}
        </Grid>
      </Section>

      <Section title="Como funciona o atendimento" className="bg-white">
        <Grid>
          <Card title="1. Solicitação de atendimento" description="A família ou o aluno ou a aluna informa objetivo, disciplina e disponibilidade." />
          <Card title="2. Análise do caso" description="A equipe organiza o encaminhamento pedagógico considerando nível e necessidade acadêmica." />
          <Card title="3. Início das aulas" description="As aulas começam com plano de estudos e acompanhamento contínuo." />
        </Grid>
      </Section>

      <Section title="Diferenciais do ESFERA">
        <Grid>
          <Card title="Materiais de apoio gratuitos" description="Resumos e listas disponíveis nas páginas de cada disciplina." />
          <Card title="Flexibilidade de atendimento" description="Formatos e horários ajustáveis conforme a rotina acadêmica." />
          <Card title="Apoio acadêmico em diferentes níveis" description="Atuação do ensino fundamental ao ensino superior." />
          <Card title="Organização pedagógica dos conteúdos" description="Estruturação por nível de ensino e disciplina para facilitar o estudo." />
        </Grid>
      </Section>

      <Section title="Psicopedagogia" className="bg-white">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-slate-700">
            O ESFERA também oferece suporte psicopedagógico para apoiar processos de aprendizagem e rotina de estudos do aluno ou da aluna.
          </p>
          <Link href="/psicopedagogia" className="mt-4 inline-flex rounded-lg bg-marinho px-4 py-2 text-sm font-medium text-white">
            Conhecer psicopedagogia
          </Link>
        </div>
      </Section>

      <Section title="Professores">
        <Grid>
          {professores.map((professor) => (
            <Card key={professor.id} title={professor.nome} meta={professor.area} description={professor.descricao} href="/professores" actionLabel="Ver equipe" />
          ))}
        </Grid>
      </Section>

      <Section title="Materiais de apoio gratuitos" className="bg-white">
        <Grid>
          {materiaisDestaque.map((material) => (
            <Card key={material.id} title={material.titulo} meta={material.tipo === "resumo" ? "Resumo teórico" : "Lista de exercícios"} href={material.pdfUrl} actionLabel="Abrir PDF" />
          ))}
        </Grid>
        <p className="mt-6 text-sm text-slate-600">
          Os materiais estão disponíveis nas páginas de cada disciplina.
        </p>
      </Section>

      <Section>
        <CTABox
          title="Inicie seu plano de estudos"
          description="A equipe do ESFERA está disponível para orientar os próximos passos do atendimento."
          href="/contato"
          buttonLabel="Falar com a equipe"
        />
      </Section>
    </>
  );
}
