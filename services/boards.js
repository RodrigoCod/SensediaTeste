const request = require('supertest');
const { BASE_URL, KEY, TOKEN } = require('../env.json');
const credentials = `/?key=${KEY}&token=${TOKEN}`

class BoardService {
    constructor() {

    }
    createBoard(name) {
        const result = request(BASE_URL)
            .post('/boards' + credentials + `&name=${name}`)
            .expect(200)
        return result
    };

    getAllBoards() {
        request(BASE_URL)
            .get('/boards' + credentials)
            .expect(200)
    };

    getByIdBoard(id) {
        request(BASE_URL)
            .get(`/boards/${id}` + credentials)
            .expect(200)
    };

    updateBoard() {
        request(BASE_URL)
            .get('/boards' + credentials)
            .expect(200)
    };

    deleteBoard(id) {
        const result = request(BASE_URL)
            .delete(`/boards/${id}` + credentials)
            .expect(200)

        return result
    };
}

module.exports = new BoardService()