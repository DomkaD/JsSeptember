//На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

//На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let date = JSON.parse(url.searchParams.get('date'));

function newBox(elements, box) {
    for (const elem in elements) {
        if (typeof elements[elem] !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${elem} ~ ${elements[elem]}`;
            box.appendChild(p);
        } else {

            newBox(elements[elem], box);
        }
    }
}

let postBox = document.getElementsByClassName('user')[0];
newBox(date, postBox)


let postButton = document.createElement("button");
postButton.innerText = 'Post of current user';
postButton.classList.add('postButton');
document.body.appendChild(postButton);


let postinf = document.createElement('div');
postinf.classList.add('posts');
document.body.appendChild(postinf);

postButton.addEventListener('click', () => {

    fetch(`https://jsonplaceholder.typicode.com/users/${date.id}/posts`)
        .then(value => value.json())
        .then(value => {
            let container=document.getElementsByClassName('posts')[0]

            for (const post of value) {
                let newpostOfuser = document.createElement('div');
                newpostOfuser.classList.add('post');

                let h4 = document.createElement('h4');
                h4.innerText = post.title;
                newpostOfuser.appendChild(h4);

                let postBtn = document.createElement('button');
                postBtn.innerText = 'Show me post';
                newpostOfuser.appendChild(postBtn);
                postBtn.addEventListener('click', (event) => {
                    event.preventDefault();
                    window.open(`../post/post-details.html?date=${JSON.stringify(post)}`, 'blank');
                })

                container.appendChild(newpostOfuser)
            }
        })
})