function getQuotes(){
    fetch("https://programming-quotes-api.herokuapp.com/quotes")
    .then((bigData)=> bigData.json())
    .then((data)=>{
        let newdt = cutOff(data.reverse())
        console.log(newdt)
        newdt.forEach((dta)=>singleQuote(dta))
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
                <button  class='btn'>Edit </button>
                <button onClick="deleteQuote(${quote})" id="delete" class='btn' >Delete </button>
            </div>
        </div>
    `
 
    document.querySelector("#singlq").appendChild(card)

}

const deleteQuote = () =>{

    console.log('qt')
    // fetch(`https://programming-quotes-api.herokuapp.com/quotes/${quote.id}`,{
    //     method:"DELETE"
    // })
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
    // .then((data))
}

document.querySelector("#quoteForm").addEventListener('submit',submitData)

function submitData(e){
        e.preventDefault()
        let newQuote = {
            author:e.target.author.value,
            en:e.target.quote.value
        }
        console.log(newQuote)
        singleQuote(newQuote )
        postQuote(newQuote)
}

function ignite(){
    getQuotes()
}

ignite()