interface Aluno {
    nome: string;
    notas: number[];
    matricula: string;
}

function calcularMedia(aluno: Aluno): number {
    const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
    return soma / aluno.notas.length;
}