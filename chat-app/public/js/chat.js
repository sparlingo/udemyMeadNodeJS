const socket = io()

socket.on('message', (message) => {
    console.log(message)
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