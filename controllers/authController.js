const login = (req, res) => {
    const { usuario, senha } = req.body;
  
    if (usuario === "admin" && senha === "1234") {
      req.session.usuario = usuario;
      res.cookie("ultimoAcesso", new Date().toLocaleString());
      return res.redirect("/menu");
    }
  
    res.render("login", { error: "Usuário ou senha inválidos!" });
  };
  
  const logout = (req, res) => {
    req.session.destroy();
    res.redirect("/login");
  };
  
  module.exports = { login, logout };
  