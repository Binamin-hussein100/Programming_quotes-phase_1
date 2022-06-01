function getQuotes(){
    fetch("https://programming-quotes-api.herokuapp.com/quotes")
    .then((bigData)=> bigData.json())
    .then((data)=>{
        cutOff(data)
        console.log(data)
        data.forEach((dta)=>singleQuote(dta))
    })

}
getQuotes()

function cutOff(x){
    return x.slice(1,10)
}

function singleQuote(quote){
    let card =  document.createElement("li")
    card.className = "card"
    card.innerHTML = `
        <div class='quoty'>
            <h3>${quote.en}</h3>
            <br>
            <p>${quote.author}</p>
            <div>
                <button class="btn btn-outline-primary">Upvote <span>1</span></button>
                <button class="btn btn-outline-primary">DownVote <span>1</span></button>
            </div>
        </div>
    `
    console.log(card)
    document.querySelector("#singlq").appendChild(card)
}

singleQuote()