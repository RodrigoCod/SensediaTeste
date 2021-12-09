const request = require('supertest');
const { BASE_URL, KEY, TOKEN } = require('../env.json');
const { idBoard } = require('../support/cacheId');
const credentials = `/?key=${KEY}&token=${TOKEN}`
class CardService {

    createCards(idList, name) {
        const result = request(BASE_URL)
            .post('/cards' + credentials + `&idList=${idList}&name=${name}`)
        return result
    };

    getAllCards() {
        return request(BASE_URL)
            .get(`/cards/${id}/` + credentials + `&idList=${idList}`)
    };

    getByIdCards(id) {
        return request(BASE_URL)
            .get(`/cards/${id}` + credentials)
    };

    updateCards() {
        request(BASE_URL)
            .get('/cards' + credentials)
            .expect(200)
    };

    updateDescriptions(id, desc) {
        return request(BASE_URL)
            .put(`/cards/${id}` + credentials + `&desc=${desc}`)
            .expect(200)
    };


    deleteCard(id) {
        const result = request(BASE_URL)
            .delete(`/cards/${id}` + credentials)
            .expect(200)
        return result
    };
}
module.exports = new CardService()


