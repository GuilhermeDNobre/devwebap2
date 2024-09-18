var express = require('express');
var router = express.Router();

const AlunoService = require("../services/AlunoService")

router.get('/listar', (req, res, next) => {
    res.json(AlunoService.listar());
  });

  router.get('/recuperar/:id', (req, res, next) => {
    const id = req.params.id
    const aluno = AlunoService.recuperar(id)
    res.json(aluno)
  });

  router.post('criar', (req, res, next) => {
    const newAluno = AlunoService.criar(req.body)
    res.json(newAluno)
    
  })

  router.put('atualizar/:id', (req, res, next) => {
    const alunoAtualizado = AlunoService.atualizar(req.params.id, req.body)
    res.json(alunoAtualizado)
  })

  router.delete('apagar/:id', (req, res, next) => {
    const response = AlunoService.apagar(req.params.id)
    response.json({response:response})
  })

  module.exports = router;