function loadUser (){
     fetch ("users.json")
     .then(response => response.json())
     .then((users) => {
console.log(users)
        const userContainer = document.getElementById("userContainer");

        users.forEach((user) => {
            console.log(user)
            const userCard = document.createElement("div");
            userCard.classList.add("user-card");
            userCard.innerHTML = `
            <div class="imageb"><img src = "${user.image}"></div> <h1>${user.name} </h1> <p>${user.age}</p> <p>${user.Profession}</p><p>${user.email}</p>
            `;

            userContainer.appendChild(userCard);
        });

     });       
}
loadUser();