import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { Section } from "@/components/ui/Section";
import { professores } from "@/data/professores";

export default function ProfessoresPage() {
  return (
    <Section
      title="Professores"
      description="Equipe docente com atuação em diferentes disciplinas e níveis de ensino, em alinhamento com a proposta pedagógica do ESFERA."
    >
      <Grid>
        {professores.map((professor) => (
          <Card key={professor.id} title={professor.nome} meta={professor.area} description={professor.descricao} />
        ))}
      </Grid>
    </Section>
  );
}
