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
                <button onClick="deleteQuote('${quote.id}')" id="delete" class='btn' >Delete </button>
            </div>
        </div>
    `
 
    document.querySelector("#singlq").appendChild(card)

}

function deleteQuote(qt){

    fetch(`https://programming-quotes-api.herokuapp.com/quotes/${qt}`,{
        method:"DELETE"
    }).then(res=>res.text()).then(resdt=>{
        alert('Deleted Quote')
        location.reload()
    })
}

function postQuote(data){
    console.log(data)
    // fetch("https://programming-quotes-api.herokuapp.com/quotes",{
    //     method:"POST",
    //     body: JSON.stringify({
    //        author: data.author,
    //        en: data.en
    //     }),
    //     headers:{
    //         "content-type":"application/json"
    //     }
    // })
    // .then((res)=>res.json())
    // .then((data))
}

document.querySelector("#quoteForm").addEventListener('submit', function(e){
    e.preventDefault()
    let author = document.getElementById('author').value;
    let quote = document.getElementById('quote').value;

    console.log(author)
    console.log(quote)

    let body = {
        author: author,
        quote: quote
    }
    console.log(body)

    const url = 'https://programming-quotes-api.herokuapp.com/quotes'

    fetch(url, {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        author: author,
        en: quote
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json))
.catch(err => console.log(err));

})

function submitData(e){
        e.preventDefault()
        let newQuote = {
            author:e.target.author.value,
            en:e.target.quote.value
        }

        fetch('https://programming-quotes-api.herokuapp.com/quotes',
            {
                method:'POST',
                body: JSON.stringify({
                    author: newQuote.author,
                    en: newQuote.en
                }),
                headers: {"Content-Type":"application/json"}
            }
        ).then(res=>res.json())
        .then(resu=>{
            console.log('Posted Quote')
        })
        .catch(error=>console.log(error))
}

function ignite(){
    getQuotes()
}

ignite()