function getQuotes(){
    fetch("https://programming-quotes-api.herokuapp.com/quotes")
    .then((bigData)=> bigData.json())
    .then((data)=>{
        data.slice(1,101)
        data.forEach((dta)=>singleQuote(dta))
    })

}


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
                <button class='btn'>Upvote <span>1</span></button>
                <button class='btn' >DownVote <span>1</span></button>
            </div>
        </div>
    `
 
    document.querySelector("#singlq").appendChild(card)
}
function postQuote(data){
    fetch("https://programming-quotes-api.herokuapp.com/quotes",{
        method:"POST",
        body: JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    })
    .then((res)=>res.json())
    console.log((q)=>console.log(q))
}

document.querySelector("#quoteForm").addEventListener('submit',submitData)

function submitData(e){
        e.preventDefault()
        let newQuote = {
            author:e.target.author.value(),
            en:e.target.en.value()
        }
        console.log(newQuote)
        singleQuote(newQuote )
        postQuote(newQuote)
}

function ignite(){
    getQuotes()
}

ignite()