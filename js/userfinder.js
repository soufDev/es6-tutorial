import * as service from "./user-service-mock"

let url = "https://jsonplaceholder.typicode.com/users"

service.findAll()
    .then(users => {
        let html = '';
        users.forEach(user => html += `
            <tr>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
            </tr>`)
        document.getElementById("users").innerHTML = html
    })
    .catch(e => console.log(e))
