import { Professor } from "@/lib/types";

export const professores: Professor[] = [
  {
    id: "p1",
    nome: "Prof. Alex",
    area: "Matemática",
    imagem: "/professores/alex.jpg",
    descricao:
      "Estudou na Universidade de São Paulo (USP) e na Universidade Estadual de Campinas (UNICAMP), possui mais de 20 anos de experiência no ensino de Matemática em cursos pré-vestibulares. Atua com aulas para ensino médio, preparação para vestibulares e também para ensino superior, incluindo disciplinas como Cálculo, Álgebra Linear, Estatística, Matemática Financeira, ..."
  },
  {
    id: "p2",
    nome: "Prof. Nicolas",
    area: "Física",
    imagem: "/professores/nicolas.jpg",
    descricao:
      "Doutorando em Física pela Universidade Estadual Paulista (UNESP), possui mais de 5 anos de experiência em aulas particulares. Atua com aulas para ensino fundamental, ensino médio, preparação para vestibulares e também para o ensino superior."
  },
  {
    id: "p3",
    nome: "Profa. Aline",
    area: "Física", // ajuste se quiser
    imagem: "/professores/aline.jpg",
    descricao: "Graduanda em física pela Universidade de São paulo (USP), possui vários anos de experiência no ensino de Matemática e Física. Atua com aulas para ensino fundamental e médio, incluindo prepação para vestibulares."
  },
  {
    id: "p4",
    nome: "Profa. Isa",
    area: "Redação", // ajuste se quiser
    imagem: "/professores/isa.jpg",
    descricao: "Atua no ensino de Química com abordagem estruturada, auxiliando alunos na organização dos estudos e compreensão dos conteúdos."
  }
];
