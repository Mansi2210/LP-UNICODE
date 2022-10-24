const users = {};
async function UsersPost() {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts");
    const users = await response.json();
    //console.log(users);
    users.forEach(user => {
        //const div = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.innerHTML = user.title;
        document.getElementById("cardtitle").appendChild(h3);
        const p = document.createElement('p');
        p.innerHTML = user.body;
        document.getElementById("cardtitle").appendChild(p);
        console.log(user.title)
    });

}
UsersPost();



function add() {
    let Title = document.getElementById("title").value;
    let bodypost = document.getElementById("bodypost").value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: Title,
            body: bodypost,
            userID: 11,
        }),
        headers: {
            'Accept': 'application/json,text/plain',
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then((res) => res.json())
        .then((data) => console.log(data))

    console.log(users);

    const h3 = document.createElement('h3');
    h3.innerHTML = Title;
    document.getElementById("cardtitle").appendChild(h3);
    const p = document.createElement('p');
    p.innerHTML = bodypost;
    document.getElementById("cardtitle").appendChild(p);
    //console.log(user.title)
    //console.log(user.title)
}
