const express = require("express");
const router = express.Router();
const { listarUsuarios, adicionarUsuario } = require("../controllers/usuarioController");


router.get("/cadastro", listarUsuarios);


router.post("/cadastro", adicionarUsuario);

module.exports = router;
