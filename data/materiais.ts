import { Material, MaterialTipo, NivelEnsinoSlug } from "@/lib/types";

const basePdf = "https://example.com/materiais";

export const materiais: Material[] = [
  { id: "m1", titulo: "Frações e proporções", nivel: "ensino-fundamental", disciplina: "matematica", tipo: "resumo", pdfUrl: `${basePdf}/ef-mat-resumo-1.pdf` },
  { id: "m2", titulo: "Lista de equações básicas", nivel: "ensino-fundamental", disciplina: "matematica", tipo: "lista", pdfUrl: `${basePdf}/ef-mat-lista-1.pdf` },
  { id: "m3", titulo: "Interpretação textual introdutória", nivel: "ensino-fundamental", disciplina: "lingua-portuguesa", tipo: "resumo", pdfUrl: `${basePdf}/ef-port-resumo-1.pdf` },
  { id: "m4", titulo: "Lista de ortografia e acentuação", nivel: "ensino-fundamental", disciplina: "lingua-portuguesa", tipo: "lista", pdfUrl: `${basePdf}/ef-port-lista-1.pdf` },
  { id: "m5", titulo: "Movimento e leis de Newton", nivel: "ensino-medio", disciplina: "fisica", tipo: "resumo", pdfUrl: `${basePdf}/em-fis-resumo-1.pdf` },
  { id: "m6", titulo: "Exercícios de cinemática", nivel: "ensino-medio", disciplina: "fisica", tipo: "lista", pdfUrl: `${basePdf}/em-fis-lista-1.pdf` },
  { id: "m7", titulo: "Funções do 1º e 2º grau", nivel: "ensino-medio", disciplina: "matematica", tipo: "resumo", pdfUrl: `${basePdf}/em-mat-resumo-1.pdf` },
  { id: "m8", titulo: "Lista de funções e gráficos", nivel: "ensino-medio", disciplina: "matematica", tipo: "lista", pdfUrl: `${basePdf}/em-mat-lista-1.pdf` },
  { id: "m9", titulo: "Derivadas: conceitos e aplicações", nivel: "ensino-superior", disciplina: "calculo", tipo: "resumo", pdfUrl: `${basePdf}/es-cal-resumo-1.pdf` },
  { id: "m10", titulo: "Lista de derivadas", nivel: "ensino-superior", disciplina: "calculo", tipo: "lista", pdfUrl: `${basePdf}/es-cal-lista-1.pdf` },
  { id: "m11", titulo: "Matrizes e sistemas lineares", nivel: "ensino-superior", disciplina: "algebra-linear", tipo: "resumo", pdfUrl: `${basePdf}/es-al-resumo-1.pdf` },
  { id: "m12", titulo: "Lista de espaços vetoriais", nivel: "ensino-superior", disciplina: "algebra-linear", tipo: "lista", pdfUrl: `${basePdf}/es-al-lista-1.pdf` }
];

export const getMateriaisByFiltro = (
  nivel: NivelEnsinoSlug,
  disciplina: string,
  tipo?: MaterialTipo
) =>
  materiais.filter(
    (material) =>
      material.nivel === nivel &&
      material.disciplina === disciplina &&
      (!tipo || material.tipo === tipo)
  );

export const getMateriaisDestaque = (limite = 6) => materiais.slice(0, limite);
