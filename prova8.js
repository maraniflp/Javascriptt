const aluno = {
  nome: "Felipe",
  notas: [9, 5, 7],
  calcularMedia: function () {
    const soma = this.notas.reduce((total, nota) => total + nota, 0);
    return soma / this.notas.length;
  },
};

const { nome } = aluno;
console.log(`Nome do aluno: ${nome}`);

const novaNota = 8;
aluno.notas = [...aluno.notas, novaNota];
console.log(`Notas atualizadas: ${aluno.notas}`);

console.log(`Média: ${aluno.calcularMedia().toFixed(2)}`);
