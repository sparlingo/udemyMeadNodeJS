const socket = io()

const $messageForm = document.querySelector('#messageForm')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML


socket.on('message', (message) => {
    console.log(message)
    const html = Mustache.render(messageTemplate, {
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

socket.on('locationMessage', (url) => {
    console.log(url)
    const html = Mustache.render(locationMessageTemplate, {
        url
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

// socket.on('countUpdated', (count) => {
//     console.log('the count has been updated', count)
// })

document.querySelector('#messageForm').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submitted')

    const message = e.target.elements.message.value
    socket.emit('sendMessage', message)
})

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('geolocation is not supported')
    } 

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    })
})