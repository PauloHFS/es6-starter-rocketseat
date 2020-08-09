class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(nome, senha) {
        super(nome, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true