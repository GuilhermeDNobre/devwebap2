const AlunoModel = require("../models/AlunoModel")
const alunos = require("../data/data")

let id = 3

class AlunoService {
    
    
    static listar(){
        return alunos
    }

    static criar(data){
        let newAluno = new AlunoModel(
            ++id,
            nome,
            curso,
            ira
        )
        alunos.push(newAluno)
        return newAluno

    }

    static recuperar(id) {
        for(let i=0; i<alunos.length; i++) {
            if(alunos[i].id == id) return alunos[i]
        }
        return null
    }

    static atualizar(id, aluno){
        for(let i=0; i<alunos.length; i++) {
            if(alunos[i].id == id){
                alunos[i].nome = aluno.nome
                alunos[i].curso = aluno.curso
                alunos[i].titulacao = aluno.titulacao
                alunos[i].universidade = aluno.universidade
                alunos[i].ai = aluno.ai
                return alunos[i]
             }
             return null
        }
    }

        static apagar(id) {
            for(let i=0; i<professores.length; i++) {
                if(professores[i].id == id){
                    professores.splice(i,1)
                    return true
                }
            }
        }
    }


module.exports = AlunoService