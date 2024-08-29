//recuperer les info du form
const myform = document.querySelector("#forms")
const tableau = document.querySelector("#tableau")
let i =0
//ajout ecouter sur l'ev submit
myform.addEventListener("submit", function(event){
    event.preventDefault();
    const prenom = document.querySelector("#prenom").value
    const nom = document.querySelector("#nom").value
    const phone = document.querySelector("#phone").value
    const mail = document.querySelector("#mail").value

    //creation nouvelle entree de table
    const row = document.createElement("tr")
    row.setAttribute("id", `row_${i}`)
    row.innerHTML = `
    <td>${prenom}</td>
    <td>${nom}</td>
    <td>${phone}</td>
    <td>${mail}</td>
    <td>
        <button class="btnupdate">Modifier</button>
        <button class="btnsupp">Supprimer</button>
    </td>
    `
    tableau.appendChild(row)
    i++
    myform.reset()
    // const btnupdate = document.querySelector(".btnupdate")
    // btnupdate.addEventListener("click", function(event){
    //     event.preventDefault()
    //     console.log(btnupdate.parentElement.getAttribute("id"))
    // })
    
})

tableau.addEventListener("click", function(event){
    console.log(event)
})






// ajouter dans le tab en creant de nouvelle ligne