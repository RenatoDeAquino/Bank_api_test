const mongoose = require('mongoose')
const Infos = mongoose.model('card-info')


exports.getPersonEmail = (person_email) => {
    return Infos
        .findOne({
            person_email: person_email
        }, 'person_email')
}

