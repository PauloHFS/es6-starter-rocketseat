"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(idades);
var usuariosDaRocketseat = usuarios.filter(function (usuario) {
  if (usuario.empresa == 'Rocketseat' && usuario.idade >= 18) {
    return usuario;
  }
});
console.log(usuariosDaRocketseat);
var userGoogle = usuarios.find(function (usuario) {
  return usuario.empresa == 'Google';
});
console.log(userGoogle);
var usersOld = usuarios.map(function (user) {
  user.idade *= 2;
  return user;
});
var usersMax50 = usersOld.filter(function (user) {
  if (user.idade <= 50) {
    return user;
  }
});
console.log(usersMax50);
