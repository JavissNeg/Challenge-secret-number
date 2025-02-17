// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// The principal objective of this challenge is to strengthen your programming logic skills. Here you will have to develop the logic to solve the problem.

let friends = [];

const inputFriend = document.getElementById('amigo');
const listFriends = document.getElementById('listaAmigos');
const resultSecretFriend = document.getElementById('resultado');

const formatName = (name) => {
    name = name.trim();

    if (!name) return '';
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
};

const agregarAmigo = () => {
    if (resultSecretFriend.innerHTML)
        resultSecretFriend.innerHTML = '';
    
    const friendName = formatName(inputFriend.value);
    
    if (!friendName) {
        alert('Debes ingresar un nombre');
        return;
    } else {
        listFriends.innerHTML += `<li>${friendName}</li>`;
        friends.push(friendName);
        inputFriend.value = '';
    }

};

const sortearAmigo = () => {
    if (friends.length === 0) {
        alert('Debes agregar al menos un amigo');
        return;
    }

    const randomFriend = friends[Math.floor(Math.random() * friends.length)];
    resultSecretFriend.innerHTML = `<li>El amigo secreto fue ${randomFriend}</li>`;
    listFriends.innerHTML = '';
    friends.length = 0;
}

inputFriend.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') agregarAmigo();
});