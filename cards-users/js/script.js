fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    const container = document.querySelector("#container")
    const cards = users.map(user =>{
        return `
        <div class="card">
            
            <img src="https://placehold.co/600x400" alt=${user.username}>
            <h2>${user.name}</h2>
            <p><span>Username:</span> ${user.username}</p>
            <p><span>Email:</span> ${user.email}</p>
            <p><span>Telefone:</span> ${user.phone}</p>
            <p><span>Website:</span> ${user.website}</p>
            <p><span>Empresa:</span> ${user.company.name}</p>
            <p><span>Endereço:</span> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>

        </div>
        `
    })

    container.innerHTML = cards.join("")
})