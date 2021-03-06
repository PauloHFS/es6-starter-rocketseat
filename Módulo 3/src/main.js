/* const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
umPorSegundo() */

//resolvido
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}
umPorSegundo()

//----

/* import axios from 'axios';

function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`).then(response => {
        console.log(response.data);
    }).catch(err => {
        console.log('Usuário não existe');
    })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123'); */

//resolvido
import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (error) {
        console.log(error.response.data, 'Usuário não existe');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

//----

/* import axios from 'axios';

class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log('Repositório não existe');
        })
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv'); */

//resolvido
import axios from 'axios';

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (error) {
            console.log(error.response, 'Repositório não existe');
        }
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

//----

/* const buscaUsuario = user => {
    axios.get(`https://api.github.com/users/${user}`).then(response => {
        console.log(response.data);
    }).catch(err => {
        console.log('Usuário não existe');
    });
}
buscaUsuario('diego3g'); */

//resolvido
import axios from 'axios';

const buscaUsuario = async user => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (error) {
        console.log(error, 'Usuário não existe');
    }
}
buscaUsuario('PauloHFS');