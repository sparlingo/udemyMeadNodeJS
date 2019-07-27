const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'me@ksparling.online',
        subject: 'Thanks for joining our stupid thing',
        text: `Welcome to the app, ${name}. Let me know how this works`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'me@ksparling.online',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}. Too bad we did a half-assed job`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}