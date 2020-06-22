let endpoint = `https://api.github.com/users/geraldos`;
let options = {
    method: 'GET',
    headers: {
        'Content-type': 'applications/json',
    }
};

let p = document.querySelector('p');
let p1 = document.querySelector('.text1');
let p2 = document.querySelector('.text2');
let p3 = document.querySelector('.text3');

async function getDataUser() {
    try {
        let response = await fetch(endpoint, options);
        let result = await response.json();

        document.querySelector('.h1').innerHTML = result.login;
        const text = document.createTextNode(`User ID: ${result.id}`);
        const text2 = document.createTextNode(`User Name: ${result.name}`)
        const text1 = document.createTextNode(`URL: ${result.url}`)
        const text3 = document.createTextNode(`Repository: ${result.public_repos}`)

        p.appendChild(text)
        p2.appendChild(text2)
        p1.appendChild(text1)
        p3.appendChild(text3)

        document.querySelector('.user-data').appendChild(p)
        document.querySelector('.user-data').appendChild(p2)
        document.querySelector('.user-data').appendChild(p1)
        document.querySelector('.user-data').appendChild(p3)
    } catch (error) {
        console.log(error);
    }
}

getDataUser();