const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
const boardSevice = require('../../services/boards');
const cacheId = require('../../support/cacheId');
const listService = require('../../services/lists');
const { setIdList } = require('../../support/cacheId');
const { getByIdBoard } = require('../../services/boards');

BeforeAll(async function () {
    const requestBoard = await boardSevice.createBoard("Board Sensedia")
    cacheId.setIdBoard(requestBoard.body.id)
    const requestList = await listService.createList("List Sensedia", cacheId.getIdBoard())
    cacheId.setIdList(requestList.body.id)
})

AfterAll(async function () {
    await boardSevice.deleteBoard(cacheId.getIdBoard())
})