import "../../css/crud.css"
import AlunoServices from "../../services/AlunoServices";


import { useEffect, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Listar = () => {

  const [alunos, setAlunos] = useState([])
  

  useEffect(
    () => {
      AlunoServices.getAlunosAxiosThenCatch(data => setAlunos(data))
    }
    ,
    []
  )

  const handleDelete = (id) => {
    AlunoServices.deleteAluno(
        id,
      (response) =>{
        alert(response)
        const result = alunos.filter((aluno) => aluno._id!==id)
        //console.log(result)
        setAlunos(result)
        //navigate(0)
      })

    }

    const renderizarAlunos = () => {
    const vetorResultado = alunos.map(
        (aluno) => {
            return (
                <tr>
                    <th scope="row">{aluno.id}</th>
                    <td>{aluno.nome}</td>
                    <td>{aluno.curso}</td>
                    <td>{aluno.ira}</td>
                    <td>
                        <div className="button-content">
                            <Link 
                              to={`/aluno/editar/${aluno.id}`}
                              className="btn btn-primary"
                            >
                              Editar
                            </Link>
                            <button 
                              type="button" 
                              className="btn btn-danger"
                              onClick={() => handleDelete(aluno.id)}
                            >
                              Apagar
                            </button>
                        </div>
                    </td>
                </tr>
            )
        }
    )
    return vetorResultado;
  };

  return(
    <div className="page-content">
      <h1>Listar Aluno {process.env.REACT_APP_LINK_API}</h1>
      <div className="table-content">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Ira</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {renderizarAlunos()}
          </tbody>
        </table>
      </div>
    </div>
  );
;
  }

  


export default Listar;