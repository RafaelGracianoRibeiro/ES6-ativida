    const alunos = [
        {nome: 'Aluno 1', nota: 4},
        {nome: 'Aluno 2', nota: 7},
        {nome: 'Aluno 3', nota: 5},
        {nome: 'Aluno 4', nota: 8}
    ]

const alunosAprovados = alunos.filter(function(aluno) {
    return aluno.nota >= 6
})

console.log(alunosAprovados)


