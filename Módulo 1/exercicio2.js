const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

const idades = usuarios.map(usuario => usuario.idade);

console.log(idades);

const usuariosDaRocketseat = usuarios.filter(usuario => {
    if (usuario.empresa == 'Rocketseat' && usuario.idade >= 18) {
        return usuario;
    }
});

console.log(usuariosDaRocketseat);

const userGoogle = usuarios.find(usuario => usuario.empresa == 'Google');

console.log(userGoogle);

const usersOld = usuarios.map(user => {
    user.idade *= 2;
    return user;
});

const usersMax50 = usersOld.filter(user => {
    if (user.idade <= 50) {
        return user;
    }
});

console.log(usersMax50);