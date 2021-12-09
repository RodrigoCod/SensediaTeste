const request = require('supertest');
const { BASE_URL, KEY, TOKEN } = require('../env.json');
const { idBoard } = require('../support/cacheId');
const credentials = `/?key=${KEY}&token=${TOKEN}`

class ListService {
    constructor() {

    }
    createList(name, idBoard) {
        const result = request(BASE_URL)
            .post('/lists' + credentials + `&name=${name}&idBoard=${idBoard}`)
            .expect(200)
        return result
    };

    getAllLists() {
        request(BASE_URL)
            .get('/lists' + credentials)
            .expect(200)
    };
    getAllCards(id) {
        return request(BASE_URL)
            .get(`/lists/${id}/cards` + credentials)
    };

    getById(id) {
        return request(BASE_URL)
            .get(`/lists/${id}` + credentials)
    };

    getByIdList(id) {
        return request(BASE_URL)
            .get(`/lists/${id}` + credentials)
    };

    updateList() {
        request(BASE_URL)
            .get('/lists' + credentials)
            .expect(200)
    };

    deleteList(id) {
        const result = request(BASE_URL)
            .delete(`/lists/${id}` + credentials)
            .expect(200)

        return result
    };
}

module.exports = new ListService()