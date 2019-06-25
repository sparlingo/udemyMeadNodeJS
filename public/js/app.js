console.log('Client side javascript filed is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#one')
const messageTwo = document.querySelector('#two')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    
    messageOne.textContent = 'loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageTwo.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })

})