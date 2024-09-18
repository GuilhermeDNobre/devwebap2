import axios from "axios";

const url = "http://localhost:3002/alunos/"


class AlunoServices {
  static getAlunosAxiosThenCatch = (callback) => {
    axios
      .get(url+"listar")
      .then((response) => {
        console.log(response.data)
        callback(response.data);
      })
      .catch((error) => console.log(error));
  };

  static postAlunoAxiosThenCatch = (aluno, callback) => {
    axios
      .post(url+"criar", aluno)
      .then((response) => {
        callback(response);
      })
      .catch((error) => console.log(error));
  };

  static updateAluno = (id, professorEditado, callback) => {
    
    axios
      .put(`http://localhost:3002/alunos/atualizar/${id}`, professorEditado)
      .then((response) => {
        callback(response)
      })
      .catch((error) => console.log(error));
  };

  static deleteAluno = (id, callback) => {
    axios
      .delete(`http://localhost:3002/alunos/apagar/${id}`)
      .then(response => {
        alert("Aluno apagado!")
        console.log(response)
        callback("ok!")
      })
      .catch( error => console.log(error))
  }
}

export default AlunoServices;