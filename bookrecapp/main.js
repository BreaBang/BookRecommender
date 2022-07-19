document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const bookName = document.querySelector('input').value
    try{
        const response = await fetch(`https://breanna-bookrec-api.herokuapp.com/api/${bookName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.bookTitle
    }catch(error){
        console.log(error)
    }
}