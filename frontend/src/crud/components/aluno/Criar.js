// Página de criação de um objeto que será salvo no db.json, utilize o formulário, atente-se aos handleInputs e ao handleSubmit de cada campo, utilize useState para cada variável
// type, name, id, onchange, value

import AlunoServices from "../../services/AlunoServices"
import "../../css/crud.css"




import { useState, useContext } from "react"

const Criar = () => {
    
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState()
    
    const handleInputNome = (event) => {
        setNome(event.target.value)
    }

    const handleInputCurso = (event) => {
        setCurso(event.target.value)
    }

    const handleInputIra = (event) => {
        setIra(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Nome: " + nome + "\nCurso: " + curso + " \nIra: " + ira)
        const newAluno = {nome,curso,ira}
        AlunoServices.postAlunoAxiosThenCatch(
            newAluno,
            (data) => {
                console.log(data)
            }
        )
       

    }
    
    return (
        <div className="page-content">
            <h1>Criar Professor</h1>
            <form className="form-content" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputNome">Nome</label>
                    <input
                        className="form-control"
                        type="text"
                        name="nome" 
                        id="inputNome"
                        onChange={handleInputNome}
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputCurso">Curso</label>
                    <input
                        className="form-control"
                        type="text"
                        name="curso"
                        id="inputCurso"
                        onChange={handleInputCurso} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputIra">Ira</label>
                    <input
                        className="form-control"
                        type="text"
                        name="ira"
                        id="inputIra"
                        onChange={handleInputIra} 
                    />
                </div>

                

                <div className="div-button-submit">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{marginLeft:0}}
                    >
                        Submeter
                    </button>
                </div>

            </form>
        </div>
        
    )
}

export default Criar 