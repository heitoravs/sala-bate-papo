const usuarios = require("../data/usuarios.json");


const listarUsuarios = (req, res) => {
  
  res.render("cadastroUsuario", { usuarios, erro: null });
};


const adicionarUsuario = (req, res) => {
  const { nome, nickname } = req.body;

  
  if (!nome || !nickname) {
    return res.render("cadastroUsuario", {
      usuarios,
      erro: "Todos os campos são obrigatórios!",
    });
  }

  
  usuarios.push({ nome, nickname });


  
  res.redirect("/usuarios/cadastro");
};

module.exports = { listarUsuarios, adicionarUsuario };

