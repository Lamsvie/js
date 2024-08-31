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
    //row.setAttribute("id", `row_${i}`)
    row.innerHTML = `<td>${prenom}</td><td>${nom}</td><td>${phone}</td><td>${mail}</td><td><button class="btnupdate_${i}">Modifier</button><button class="btnsupp_${i}">Supprimer</button></td>`
    tableau.appendChild(row)
    i++
    myform.reset()
    
    
})


tableau.addEventListener("click", function(event){
    const className = event.target.className
    if (className.search("btnupdate") == 0) {
        const btnupdate = document.querySelector(`.${className}`) //class du button update

        const prenom = document.querySelector("#prenom")
        const nom = document.querySelector("#nom")
        const phone = document.querySelector("#phone")
        const mail = document.querySelector("#mail")

        // attribution des valeurs de la ligne dans le form
        prenom.value = btnupdate.parentElement.parentElement.childNodes[0].innerText
        nom.value = btnupdate.parentElement.parentElement.childNodes[1].innerText
        phone.value = btnupdate.parentElement.parentElement.childNodes[2].innerText
        mail.value = btnupdate.parentElement.parentElement.childNodes[3].innerText
        
        // suppression de la ligne
        btnupdate.parentElement.parentElement.remove()

        
    }else{
        const btnsupp = document.querySelector(`.${className}`)
        btnsupp.parentElement.parentElement.remove()
    }
        
    
})
