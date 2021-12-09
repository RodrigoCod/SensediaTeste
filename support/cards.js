const cards = require('../services/cards')
const cardsServices = require('../services/cards')
const listServices = require('../services/lists')

async function deletAllCards(idList) {
    let allCards = await listServices.getAllCards(idList)
    for (let i = 0; i < allCards.body.length; i++) {
        await cardsServices.deleteCard(allCards.body[i].id)
    }
}


module.exports = { deletAllCards }