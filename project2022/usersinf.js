// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід
// на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

let usersContainer = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
        let UserBlock = document.createElement('div');
        UserBlock.classList.add('user');
        let acnhor = document.createElement('a');
            acnhor.innerText = `${user.id} - ${user.name}`;
            acnhor.href = `user/user-details.html?date=${JSON.stringify(user)}`
            UserBlock.appendChild(acnhor)
            usersContainer.appendChild(UserBlock)
        }

    })
document.body.onmousemove = function (e) {
    document.body.style.background = `rgb(${e.pageX},${e.pageY},${e.pageY})`;
};