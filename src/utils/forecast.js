const request = require('request')


const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/96b86baabe82909912c4fa434e4c0574/' + lat + ',' + long
    
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('It does not GD work')
        } else if(body.error) {
            callback('They cannot find that location')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees')
        }
    })
}

module.exports = forecast 