let acesso = true;

function verificarAcesso(u) {
    if (acesso && u.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

let u = { nome: "João", admin: true };
verificarAcesso(u);
