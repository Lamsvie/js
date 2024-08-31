function like() {
    const btnlike = document.querySelector(".like")
    btnlike.addEventListener("click", function(){
        btnlike.style.color= "red"
    })
}

var qnt = document.querySelector(".qnt")
var i = 1
function plus(index, quantite) {
    const btnplus = document.querySelector(".plus")
    btnplus.addEventListener("click", function(){
        if (index == 5) {
            quantite.innerText = index;
            const newParaph = document.createElement("p")
            newParaph.innerText = "La quantité max est: 5"
            newParaph.style.color = "red"
            const error = document.querySelector(".error")
            error.appendChild(newParaph)
        }else{
            index++
            quantite.innerText = index;
            const prix_unitaire = document.querySelector(".prix_unitaire")
            const totalprice = prix_unitaire.innerText * quantite.innerText
        
            document.querySelector(".mtn_Total").innerText = totalprice
        }
    })
}

function minus(quantite) {
    const btnmoins = document.querySelector(".minus")
    var index
    btnmoins.addEventListener("click", function(){
        index = quantite.innerText
        if (index == 1) {
            quantite.innerText = index;
            const newParaph = document.createElement("p")
            newParaph.innerText = "La quantité minimal est: 1"
            newParaph.style.color = "red"
            const error = document.querySelector(".error")
            error.appendChild(newParaph)
        }else{
            index --
            quantite.innerText = index;
            const prix_unitaire = document.querySelector(".prix_unitaire")
            const totalprice = prix_unitaire.innerText * quantite.innerText
        
            document.querySelector(".mtn_Total").innerText = totalprice
        }
    })
}

function supprimer() {
    const article = document.querySelector(".article")
    const btnsupp = document.querySelector(".supprimer")
    btnsupp.addEventListener("click", function(){
        article.remove()
    })
}


like()
plus(i,qnt)
minus(qnt)
supprimer()
