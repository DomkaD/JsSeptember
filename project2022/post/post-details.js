// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let anotherPost = JSON.parse(url.searchParams.get('date'));

console.log(anotherPost);

function newBox(item, box) {
    for (const object in item) {
        if (typeof item[object] !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${object} ~~ ${item[object]}`;
            box.appendChild(p);
        } else {

            newBox(item[object], box);
        }
    }
}

let postBox = document.getElementsByClassName('post')[0];
newBox(anotherPost, postBox)

fetch(`https://jsonplaceholder.typicode.com/posts/${anotherPost.id}/comments`)
    .then(value => value.json())
    .then(value => {
        let commentsBox = document.getElementsByClassName('comments')[0];
        for (const posts of value) {
            let latestComments = document.createElement('div');
            latestComments.classList.add('comment');
            newBox(posts, latestComments);
            commentsBox.appendChild(latestComments);
        }
    })