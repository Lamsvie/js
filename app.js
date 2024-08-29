
//recuperer la valeur input
const textarea = document.querySelector("#texarea")

// afficher dans la div main
const main = document.querySelector("#main")




const btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    const li = document.createElement("li")
    //creer un paragraph
    const p = document.createElement("p")
    p.innerText = textarea.value

    //creer un button
    const btnsupp = document.createElement("button")
    btnsupp.innerText = "Supprimer"

    btnsupp.addEventListener("click", function(){
        li.remove()
    })

    // afficher texarea dans main
    li.append(p)
    li.append(btnsupp)
    main.append(li)
    textarea.value= ""
})



